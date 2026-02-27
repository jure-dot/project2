/*
  # Create survey responses table

  1. New Tables
    - `survey_responses`
      - `id` (uuid, primary key) - Unique identifier for each response
      - `property_address` (text) - Address of the property to be rebuilt
      - `property_status` (text) - Current status of the property (e.g., "Damaged", "Destroyed", "Planning New Build")
      - `project_timeline` (text) - Desired timeline for the project
      - `budget_range` (text) - Budget range for the project
      - `services_needed` (text[]) - Array of services needed (design, permits, construction, etc.)
      - `current_living_situation` (text) - Where the client is currently living
      - `full_name` (text) - Client's full name
      - `email` (text) - Client's email address
      - `phone` (text) - Client's phone number
      - `additional_notes` (text) - Any additional information
      - `created_at` (timestamptz) - Timestamp when response was submitted
  
  2. Security
    - Enable RLS on `survey_responses` table
    - Add policy for inserting survey responses (public can submit)
    - Add policy for reading responses (authenticated users only)
*/

CREATE TABLE IF NOT EXISTS survey_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  property_address text NOT NULL,
  property_status text NOT NULL,
  project_timeline text NOT NULL,
  budget_range text NOT NULL,
  services_needed text[] DEFAULT '{}',
  current_living_situation text,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  additional_notes text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE survey_responses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit survey responses"
  ON survey_responses
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read survey responses"
  ON survey_responses
  FOR SELECT
  TO authenticated
  USING (true);