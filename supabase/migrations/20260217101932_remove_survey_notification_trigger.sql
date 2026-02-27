/*
  # Remove survey notification trigger

  1. Changes
    - Drop trigger and function for automatic email notifications
    - Email notifications will be sent directly from the application
  
  2. Description
    - Simplifies the notification flow
    - Gives better error handling and user feedback
*/

DROP TRIGGER IF EXISTS on_survey_response_created ON survey_responses;
DROP FUNCTION IF EXISTS public.notify_survey_submission();
