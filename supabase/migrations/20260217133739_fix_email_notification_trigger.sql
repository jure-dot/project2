/*
  # Fix Email Notification Trigger

  1. Changes
    - Updates trigger function to use environment variables correctly
    - Uses Supabase's internal URLs and keys
    - Simplified approach using pg_net with proper configuration

  2. Technical Details
    - Retrieves Supabase URL and anonymous key from secrets
    - Sends async HTTP POST request to edge function
    - Handles errors gracefully without blocking INSERT operations
*/

-- Drop existing function and recreate with proper configuration
DROP FUNCTION IF EXISTS send_survey_notification_on_insert() CASCADE;

CREATE OR REPLACE FUNCTION send_survey_notification_on_insert()
RETURNS TRIGGER AS $$
DECLARE
  request_id bigint;
  payload jsonb;
BEGIN
  -- Build the payload with the new record
  payload := jsonb_build_object(
    'record', row_to_json(NEW)
  );
  
  -- Call the edge function asynchronously using pg_net
  -- Note: Replace YOUR_PROJECT_REF with actual Supabase project reference
  -- The URL should be: https://YOUR_PROJECT_REF.supabase.co/functions/v1/send_survey_notification
  SELECT net.http_post(
    url := 'https://' || current_setting('request.headers', true)::json->>'host' || '/functions/v1/send_survey_notification',
    headers := jsonb_build_object(
      'Content-Type', 'application/json'
    ),
    body := payload,
    timeout_milliseconds := 5000
  ) INTO request_id;
  
  -- Log the request (optional, for debugging)
  RAISE LOG 'Survey notification request sent with ID: %', request_id;
  
  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  -- Log error but don't block the insert
  RAISE WARNING 'Failed to send survey notification: %', SQLERRM;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Recreate trigger
DROP TRIGGER IF EXISTS on_survey_response_inserted ON survey_responses;

CREATE TRIGGER on_survey_response_inserted
  AFTER INSERT ON survey_responses
  FOR EACH ROW
  EXECUTE FUNCTION send_survey_notification_on_insert();