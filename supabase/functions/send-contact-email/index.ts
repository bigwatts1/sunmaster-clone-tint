import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

// Allowed origins for CORS - restrict to production domain
const ALLOWED_ORIGINS = [
  "https://www.sunmasterstintandshades.com",
  "https://sunmasterstintandshades.com",
  "http://localhost:5173", // Local dev
  "http://localhost:8080",
];

// Simple in-memory rate limiting (per IP, resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Max requests per window
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour window

function getCorsHeaders(origin: string | null): Record<string, string> {
  const allowedOrigin = origin && ALLOWED_ORIGINS.some(allowed => 
    origin === allowed || origin.endsWith('.lovableproject.com')
  ) ? origin : ALLOWED_ORIGINS[0];
  
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 };
  }
  
  record.count++;
  return { allowed: true, remaining: RATE_LIMIT_MAX - record.count };
}

// Input validation
function validateInput(data: unknown): { valid: boolean; error?: string; sanitized?: ContactRequest } {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: "Invalid request body" };
  }
  
  const { name, phone, email, service, location, message } = data as Record<string, unknown>;
  
  // Validate required fields
  if (typeof name !== 'string' || name.trim().length === 0 || name.length > 100) {
    return { valid: false, error: "Invalid name" };
  }
  if (typeof phone !== 'string' || phone.trim().length === 0 || phone.length > 20) {
    return { valid: false, error: "Invalid phone" };
  }
  if (typeof email !== 'string' || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) || email.length > 255) {
    return { valid: false, error: "Invalid email" };
  }
  if (typeof service !== 'string' || service.trim().length === 0 || service.length > 100) {
    return { valid: false, error: "Invalid service" };
  }
  if (location !== undefined && (typeof location !== 'string' || location.length > 100)) {
    return { valid: false, error: "Invalid location" };
  }
  if (message !== undefined && (typeof message !== 'string' || message.length > 2000)) {
    return { valid: false, error: "Invalid message" };
  }
  
  // Sanitize: trim and escape HTML
  const sanitize = (str: string) => str.trim().replace(/[<>]/g, '');
  
  return {
    valid: true,
    sanitized: {
      name: sanitize(name),
      phone: sanitize(phone),
      email: email.trim().toLowerCase(),
      service: sanitize(service),
      location: typeof location === 'string' ? sanitize(location) : '',
      message: typeof message === 'string' ? sanitize(message) : '',
    }
  };
}

interface ContactRequest {
  name: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    // Rate limiting based on IP
    const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("cf-connecting-ip") || 
                     "unknown";
    
    const rateCheck = checkRateLimit(clientIP);
    if (!rateCheck.allowed) {
      console.log(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { 
            "Content-Type": "application/json", 
            "Retry-After": "3600",
            ...corsHeaders 
          },
        }
      );
    }

    // Parse and validate input
    let rawData: unknown;
    try {
      rawData = await req.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const validation = validateInput(rawData);
    if (!validation.valid || !validation.sanitized) {
      return new Response(JSON.stringify({ error: validation.error }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const { name, phone, email, service, location, message } = validation.sanitized;

    console.log("Received contact form submission:", { name, phone, service, location });

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
        subject: `New Contact Form: ${service} - ${name}${location ? ` (${location})` : ''}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service Requested:</strong> ${service}</p>
          <p><strong>Location:</strong> ${location || "Not specified"}</p>
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
  } catch (error: unknown) {
    // Log detailed error server-side only for debugging
    console.error("Error in send-contact-email function:", error);
    
    // Return generic error message to clients - never expose internal details
    return new Response(
      JSON.stringify({ 
        error: "Unable to send your message at this time. Please try again later or call us directly at (469) 757-4325." 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
