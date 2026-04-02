import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, role, message } = body;

    if (!name || !email || !role || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const roleLabels: Record<string, string> = {
      "patient-family": "Patient / Family Member",
      "healthcare-facility": "Healthcare Facility",
      "healthcare-professional": "Healthcare Professional",
      other: "Other",
    };

    // Format the message for email
    const formattedMessage = [
      `New Contact Form Submission`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Role: ${roleLabels[role] || role}`,
      ``,
      `Message:`,
      message,
    ].join("\n");

    // Log the submission (visible in Render logs)
    console.log("=== CONTACT FORM SUBMISSION ===");
    console.log(formattedMessage);
    console.log("=== END SUBMISSION ===");

    // Send via mailto link approach: store submissions and email later
    // For now, we persist to a simple JSON endpoint that Kristine can check
    // In production, integrate with SendGrid, Resend, or Gmail API

    // If SMTP/email env vars are configured, send email
    if (process.env.CONTACT_EMAIL_TO) {
      // Future: integrate email service here
      // For now, submissions are logged to Render console
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
