import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, email, service, message }: ContactRequest = await req.json();

    console.log("Received contact form submission:", { name, phone, email, service });

    // Send notification to business owner
    const ownerEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Sunmasters Website <onboarding@resend.dev>",
        to: ["aaron@sunmastersdfw.com"],
        subject: `New Contact Form: ${service} - ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service Requested:</strong> ${service}</p>
          <p><strong>Message:</strong></p>
          <p>${message || "No message provided"}</p>
        `,
      }),
    });

    if (!ownerEmailRes.ok) {
      const errorData = await ownerEmailRes.text();
      console.error("Failed to send owner email:", errorData);
      throw new Error(`Failed to send email: ${errorData}`);
    }

    console.log("Owner email sent successfully");

    // Send confirmation to customer
    const customerEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Sunmasters Window Tinting and Shades <onboarding@resend.dev>",
        to: [email],
        subject: "Thank you for contacting Sunmasters!",
        html: `
          <h2>Thank you for contacting Sunmasters Window Tinting and Shades!</h2>
          <p>Hi ${name},</p>
          <p>We've received your inquiry about <strong>${service}</strong> and will get back to you within 24 hours.</p>
          <p>In the meantime, feel free to call us at <a href="tel:469-757-4325">(469) 757-4325</a>.</p>
          <p>Best regards,<br>The Sunmasters Team</p>
        `,
      }),
    });

    if (!customerEmailRes.ok) {
      console.error("Failed to send customer confirmation email");
    } else {
      console.log("Customer confirmation email sent");
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
