import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface SurveyResponse {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  project_address: string;
  estimated_budget: string;
  project_type: string[];
  planned_start_timeline: string;
  has_architectural_plans: string;
  project_details?: string;
  created_at: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const payload = await req.json();
    const record: SurveyResponse = payload.record;

    const projectTypes = Array.isArray(record.project_type)
      ? record.project_type.join(", ")
      : record.project_type || "Not specified";

    const emailContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    h2 { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; }
    h3 { color: #34495e; margin-top: 20px; }
    .field { margin: 10px 0; }
    .label { font-weight: bold; color: #2c3e50; }
    .value { color: #555; }
  </style>
</head>
<body>
  <div class="container">
    <h2>New Survey Response Received</h2>

    <div class="field">
      <span class="label">Submission ID:</span>
      <span class="value">${record.id}</span>
    </div>
    <div class="field">
      <span class="label">Date Submitted:</span>
      <span class="value">${new Date(record.created_at).toLocaleString()}</span>
    </div>

    <h3>Contact Information</h3>
    <div class="field">
      <span class="label">Name:</span>
      <span class="value">${record.full_name || "Not provided"}</span>
    </div>
    <div class="field">
      <span class="label">Email:</span>
      <span class="value">${record.email || "Not provided"}</span>
    </div>
    <div class="field">
      <span class="label">Phone:</span>
      <span class="value">${record.phone || "Not provided"}</span>
    </div>

    <h3>Project Details</h3>
    <div class="field">
      <span class="label">Project Address:</span>
      <span class="value">${record.project_address || "Not provided"}</span>
    </div>
    <div class="field">
      <span class="label">Project Type:</span>
      <span class="value">${projectTypes}</span>
    </div>
    <div class="field">
      <span class="label">Estimated Budget:</span>
      <span class="value">${record.estimated_budget || "Not specified"}</span>
    </div>
    <div class="field">
      <span class="label">Planned Start Timeline:</span>
      <span class="value">${record.planned_start_timeline || "Not specified"}</span>
    </div>
    <div class="field">
      <span class="label">Has Architectural Plans:</span>
      <span class="value">${record.has_architectural_plans || "Not specified"}</span>
    </div>
    ${record.project_details ? `
    <div class="field">
      <span class="label">Project Details:</span>
      <span class="value">${record.project_details}</span>
    </div>
    ` : ""}
  </div>
</body>
</html>`;

    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (!resendKey) {
      throw new Error("RESEND_API_KEY environment variable is not set");
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: "jure@drexelluxuryhomes.com",
        subject: `New Survey Response from ${record.full_name}`,
        html: emailContent,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error("Resend API error:", responseData);
      throw new Error(`Failed to send email: ${JSON.stringify(responseData)}`);
    }

    console.log("Email sent successfully:", responseData);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully", messageId: responseData.id }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
        status: 500,
      }
    );
  }
});
