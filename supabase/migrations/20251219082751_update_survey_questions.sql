/*
  # Update survey responses table with new questions

  1. Changes
    - Drop old columns that are no longer needed
    - Add new columns for updated survey questions:
      - `estimated_budget` (text) - Single selection for budget range
      - `project_type` (text[]) - Multiple selections for project types
      - `planned_start_timeline` (text) - Single selection for start timeline
      - `has_architectural_plans` (text) - Single selection for architectural plans status
      - `project_address` (text) - Property address or location
      - `project_details` (text) - Optional project description
    - Rename and restructure to match new survey format
  
  2. Security
    - RLS policies remain unchanged
*/

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'property_status'
  ) THEN
    ALTER TABLE survey_responses DROP COLUMN property_status;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'property_address'
  ) THEN
    ALTER TABLE survey_responses DROP COLUMN property_address;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'project_timeline'
  ) THEN
    ALTER TABLE survey_responses DROP COLUMN project_timeline;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'budget_range'
  ) THEN
    ALTER TABLE survey_responses DROP COLUMN budget_range;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'services_needed'
  ) THEN
    ALTER TABLE survey_responses DROP COLUMN services_needed;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'current_living_situation'
  ) THEN
    ALTER TABLE survey_responses DROP COLUMN current_living_situation;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'additional_notes'
  ) THEN
    ALTER TABLE survey_responses DROP COLUMN additional_notes;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'estimated_budget'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN estimated_budget text NOT NULL DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'project_type'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN project_type text[] DEFAULT '{}';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'planned_start_timeline'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN planned_start_timeline text NOT NULL DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'has_architectural_plans'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN has_architectural_plans text NOT NULL DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'project_address'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN project_address text NOT NULL DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'survey_responses' AND column_name = 'project_details'
  ) THEN
    ALTER TABLE survey_responses ADD COLUMN project_details text;
  END IF;
END $$;