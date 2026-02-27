/*
  # Fix Email Notification Trigger with Correct URL

  1. Overview
    - Updates trigger function to use the correct Supabase project URL
    - Automatically sends email to jure@drexelluxuryhomes.com when new survey response is inserted
    - Uses pg_net for asynchronous HTTP requests

  2. Changes
    - Fixes trigger function with hardcoded Supabase URL for reliability
    - Removes dependency on runtime configuration
    - Includes error handling to prevent blocking INSERT operations

  3. Technical Details
    - Edge function URL: https://vxhymwcmtwsezllzgbvp.supabase.co/functions/v1/send_survey_notification
    - Runs asynchronously - doesn't block database operations
    - Logs errors but doesn't fail the INSERT if email sending fails
*/

-- Drop and recreate the trigger function with correct URL
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
  SELECT net.http_post(
    url := 'https://vxhymwcmtwsezllzgbvp.supabase.co/functions/v1/send_survey_notification',
    headers := jsonb_build_object(
      'Content-Type', 'application/json'
    ),
    body := payload,
    timeout_milliseconds := 10000
  ) INTO request_id;
  
  -- Log success
  RAISE LOG 'Email notification queued with request ID: %', request_id;
  
  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  -- Log error but don't block the insert
  RAISE WARNING 'Failed to queue email notification: %', SQLERRM;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Recreate the trigger
DROP TRIGGER IF EXISTS on_survey_response_inserted ON survey_responses;

CREATE TRIGGER on_survey_response_inserted
  AFTER INSERT ON survey_responses
  FOR EACH ROW
  EXECUTE FUNCTION send_survey_notification_on_insert();