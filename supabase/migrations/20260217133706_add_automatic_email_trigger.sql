/*
  # Add Automatic Email Notification Trigger

  1. Overview
    - Automatically sends email notifications when new survey responses are inserted into the database
    - Uses pg_net extension to call the edge function asynchronously
    - Trigger fires after every INSERT operation on survey_responses table

  2. Changes
    - Creates a trigger function `send_survey_notification_on_insert()` that calls the edge function
    - Creates a trigger `on_survey_response_inserted` that executes after INSERT
    - Uses Supabase's built-in pg_net extension for HTTP requests

  3. Security
    - Uses service role key for authentication with edge function
    - Runs asynchronously to avoid blocking the INSERT operation

  4. Important Notes
    - The edge function URL is constructed using current_setting for project reference
    - Requires RESEND_API_KEY to be configured in edge function secrets
    - Email will be sent to: jure@drexelluxuryhomes.com
*/

-- Create trigger function that calls the edge function
CREATE OR REPLACE FUNCTION send_survey_notification_on_insert()
RETURNS TRIGGER AS $$
DECLARE
  project_url text;
  service_role_key text;
  payload jsonb;
BEGIN
  -- Get the Supabase project URL
  project_url := current_setting('app.settings.api_url', true);
  
  -- Get service role key from vault (Supabase automatically provides this)
  service_role_key := current_setting('app.settings.service_role_key', true);
  
  -- Build the payload with the new record
  payload := jsonb_build_object(
    'record', row_to_json(NEW)
  );
  
  -- Call the edge function asynchronously using pg_net
  PERFORM net.http_post(
    url := project_url || '/functions/v1/send_survey_notification',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || service_role_key
    ),
    body := payload
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger on survey_responses table
DROP TRIGGER IF EXISTS on_survey_response_inserted ON survey_responses;

CREATE TRIGGER on_survey_response_inserted
  AFTER INSERT ON survey_responses
  FOR EACH ROW
  EXECUTE FUNCTION send_survey_notification_on_insert();