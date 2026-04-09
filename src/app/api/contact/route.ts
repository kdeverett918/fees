import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

type ContactPath = "patient" | "facility";
type ContactIntent = "appointment" | "estimate" | "consult" | "packet";

const pathLabels: Record<ContactPath, string> = {
  patient: "Las Vegas Patient / Family",
  facility: "Facility / Referring Team",
};

const portalLabels: Record<ContactPath, string> = {
  patient: "Concierge Patient Portal",
  facility: "Facility Portal",
};

const intentLabels: Record<ContactIntent, string> = {
  appointment: "Appointment Request",
  estimate: "Pricing / Good Faith Estimate Request",
  consult: "Facility Consult Request",
  packet: "Referral Packet / Onboarding Request",
};

const pipelineStageMap: Record<ContactIntent, string> = {
  appointment: "patient-scheduling",
  estimate: "patient-estimate-review",
  consult: "facility-onboarding",
  packet: "facility-packet-follow-up",
};

const followUpTrackMap: Record<ContactIntent, string> = {
  appointment: "scheduler-callback",
  estimate: "estimate-review",
  consult: "operations-consult",
  packet: "packet-response",
};

function isContactPath(value: string): value is ContactPath {
  return value === "patient" || value === "facility";
}

function isContactIntent(value: string): value is ContactIntent {
  return (
    value === "appointment" ||
    value === "estimate" ||
    value === "consult" ||
    value === "packet"
  );
}

function getPriority(
  requestPath: ContactPath,
  intent: ContactIntent,
  timeframe: string
) {
  if (timeframe === "asap" || timeframe === "this-week") {
    return "high";
  }

  if (requestPath === "facility" && intent === "consult") {
    return "high";
  }

  if (intent === "estimate" || intent === "packet") {
    return "medium";
  }

  return "standard";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      message,
      website,
      path: requestPath,
      intent,
      service,
      city,
      facilityName,
      careSetting,
      timeframe,
      referralStatus,
      payerPath,
      monthlyVolume,
      bestContactTime,
      contactRole,
      portalSource,
      sourcePage,
      firstTouchPage,
      utmSource,
      utmMedium,
      utmCampaign,
    } = body;

    if (website) {
      return NextResponse.json({ success: true });
    }

    if (
      !name ||
      !email ||
      !phone ||
      !requestPath ||
      !intent ||
      !isContactPath(requestPath) ||
      !isContactIntent(intent)
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const leadLane = requestPath === "facility" ? "facility" : "concierge";
    const pipelineStage = pipelineStageMap[intent];
    const followUpTrack = followUpTrackMap[intent];
    const priority = getPriority(requestPath, intent, timeframe || "");

    const formattedMessage = [
      `New Mobile FEES LV Request`,
      ``,
      `Portal: ${portalLabels[requestPath]}`,
      `Path: ${pathLabels[requestPath]}`,
      `Intent: ${intentLabels[intent]}`,
      `Lead Lane: ${leadLane}`,
      `Pipeline Stage: ${pipelineStage}`,
      `Follow-Up Track: ${followUpTrack}`,
      `Priority: ${priority}`,
      `Service: ${service || "Not provided"}`,
      `Timeframe: ${timeframe || "Not provided"}`,
      `Contact Role: ${contactRole || "Not provided"}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Best Contact Time: ${bestContactTime || "Not provided"}`,
      `City / Area: ${city || "Not provided"}`,
      `Facility Name: ${facilityName || "Not provided"}`,
      `Care Setting: ${careSetting || "Not provided"}`,
      `Referral Status: ${referralStatus || "Not provided"}`,
      `Payer Path: ${payerPath || "Not provided"}`,
      `Monthly Volume: ${monthlyVolume || "Not provided"}`,
      `Portal Source: ${portalSource || portalLabels[requestPath]}`,
      `Previous Internal Page: ${sourcePage || "Not captured"}`,
      `First Touch Page: ${firstTouchPage || "Not captured"}`,
      `UTM Source: ${utmSource || "Not provided"}`,
      `UTM Medium: ${utmMedium || "Not provided"}`,
      `UTM Campaign: ${utmCampaign || "Not provided"}`,
      ``,
      `Message:`,
      message || "No extra message provided.",
    ].join("\n");

    console.log("=== CONTACT FORM SUBMISSION ===");
    console.log(formattedMessage);
    console.log("=== END SUBMISSION ===");

    const leadRecord = {
      receivedAt: new Date().toISOString(),
      requestPath,
      portalLabel: portalLabels[requestPath],
      intent,
      leadLane,
      pipelineStage,
      followUpTrack,
      priority,
      service: service || "",
      timeframe: timeframe || "",
      contactRole: contactRole || "",
      name,
      email,
      phone,
      bestContactTime: bestContactTime || "",
      city: city || "",
      facilityName: facilityName || "",
      careSetting: careSetting || "",
      referralStatus: referralStatus || "",
      payerPath: payerPath || "",
      monthlyVolume: monthlyVolume || "",
      portalSource: portalSource || portalLabels[requestPath],
      sourcePage: sourcePage || "",
      firstTouchPage: firstTouchPage || "",
      utmSource: utmSource || "",
      utmMedium: utmMedium || "",
      utmCampaign: utmCampaign || "",
      message: message || "",
    };

    const submissionDir = path.join(process.cwd(), "data", "submissions");
    const submissionFile = path.join(submissionDir, "contact-leads.jsonl");
    const laneFile = path.join(
      submissionDir,
      `contact-leads-${leadLane}.jsonl`
    );

    await fs.mkdir(submissionDir, { recursive: true });
    await Promise.all([
      fs.appendFile(submissionFile, `${JSON.stringify(leadRecord)}\n`, "utf8"),
      fs.appendFile(laneFile, `${JSON.stringify(leadRecord)}\n`, "utf8"),
    ]);

    if (process.env.CONTACT_EMAIL_TO) {
      // Future: integrate email delivery here.
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
