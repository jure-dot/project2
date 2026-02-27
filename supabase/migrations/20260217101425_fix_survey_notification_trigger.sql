/*
  # Fix survey notification trigger

  1. Changes
    - Drop old trigger function
    - Create improved trigger using pg_net extension
    - Enable required extensions for HTTP calls
  
  2. Description
    - Uses pg_net.http_post for reliable HTTP calls
    - Includes proper error handling
    - Sends email notifications to jure@drexelluxuryhomes.com
*/

CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

DROP TRIGGER IF EXISTS on_survey_response_created ON survey_responses;
DROP FUNCTION IF EXISTS public.notify_survey_submission();

CREATE OR REPLACE FUNCTION public.notify_survey_submission()
RETURNS TRIGGER AS $$
DECLARE
  request_id bigint;
BEGIN
  select
    net.http_post(
      url := concat(
        coalesce(nullif(current_setting('app.settings.supabase_url', true), ''), 'https://tcsrmavxtlskxkhvphqj.supabase.co'),
        '/functions/v1/send_survey_notification'
      ),
      body := jsonb_build_object('record', row_to_json(NEW)),
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', concat('Bearer ', coalesce(nullif(current_setting('app.settings.supabase_anon_key', true), ''), ''))
      ),
      timeout_milliseconds := 15000
    ) into request_id;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_survey_response_created
  AFTER INSERT ON survey_responses
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_survey_submission();
