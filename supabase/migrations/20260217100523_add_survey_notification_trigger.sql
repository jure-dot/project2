/*
  # Add survey notification trigger

  1. Changes
    - Create trigger function to call edge function on new survey responses
    - Create trigger to execute function when new records are inserted
  
  2. Description
    - Automatically sends email notification to jure@drexelluxuryhomes.com
    - Includes all form fields in the notification
    - Triggered on every new survey_responses record creation
*/

CREATE OR REPLACE FUNCTION public.notify_survey_submission()
RETURNS TRIGGER AS $$
DECLARE
  payload JSONB;
BEGIN
  payload := jsonb_build_object(
    'record', row_to_json(NEW)
  );

  PERFORM
    net.http_post(
      url := concat(
        current_setting('app.settings.supabase_url'),
        '/functions/v1/send_survey_notification'
      ),
      body := payload,
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', concat('Bearer ', current_setting('app.settings.supabase_anon_key'))
      ),
      timeout_milliseconds := 10000
    );

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS on_survey_response_created ON survey_responses;

CREATE TRIGGER on_survey_response_created
  AFTER INSERT ON survey_responses
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_survey_submission();
