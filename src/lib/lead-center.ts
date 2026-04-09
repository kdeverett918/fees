import { promises as fs } from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

export interface LeadRecord {
  receivedAt: string;
  requestPath: "patient" | "facility";
  portalLabel: string;
  intent: "appointment" | "estimate" | "consult" | "packet";
  leadLane: "concierge" | "facility";
  pipelineStage: string;
  followUpTrack: string;
  priority: string;
  service: string;
  timeframe: string;
  contactRole: string;
  name: string;
  email: string;
  phone: string;
  bestContactTime: string;
  city: string;
  facilityName: string;
  careSetting: string;
  referralStatus: string;
  payerPath: string;
  monthlyVolume: string;
  portalSource: string;
  sourcePage: string;
  firstTouchPage: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  message: string;
}

export const leadCenterCookieName = "mf-lead-center";

interface CookieReader {
  get(name: string): { value: string } | undefined;
}

const leadCenterPassword = process.env.LEAD_CENTER_PASSWORD ?? "";

function hashLeadCenterPassword(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

export function hasLeadCenterPassword() {
  return Boolean(leadCenterPassword);
}

export function isLeadCenterLocalMode() {
  return process.env.NODE_ENV !== "production" && !hasLeadCenterPassword();
}

export function getLeadCenterCookieValue() {
  if (!hasLeadCenterPassword()) {
    return "";
  }

  return hashLeadCenterPassword(leadCenterPassword);
}

export function verifyLeadCenterPassword(value: string) {
  if (!hasLeadCenterPassword()) {
    return false;
  }

  return hashLeadCenterPassword(value) === getLeadCenterCookieValue();
}

export function isLeadCenterAuthorized(cookieStore: CookieReader) {
  if (isLeadCenterLocalMode()) {
    return true;
  }

  if (!hasLeadCenterPassword()) {
    return false;
  }

  return cookieStore.get(leadCenterCookieName)?.value === getLeadCenterCookieValue();
}

export async function readLeadRecords() {
  const filePath = path.join(
    process.cwd(),
    "data",
    "submissions",
    "contact-leads.jsonl"
  );

  try {
    const content = await fs.readFile(filePath, "utf8");
    return content
      .split("\n")
      .filter(Boolean)
      .map((line) => JSON.parse(line) as LeadRecord)
      .sort(
        (a, b) =>
          new Date(b.receivedAt).getTime() - new Date(a.receivedAt).getTime()
      );
  } catch {
    return [];
  }
}

export function formatLeadStage(stage: string) {
  return stage
    .split("-")
    .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
    .join(" ");
}

export function getLeadNextAction(lead: LeadRecord) {
  if (lead.leadLane === "facility" && lead.intent === "packet") {
    return "Send packet follow-up with contracts, referral checklist, and launch call options.";
  }

  if (lead.leadLane === "facility") {
    return "Route to onboarding consult and confirm setting, timing, and billing lane.";
  }

  if (lead.intent === "estimate") {
    return "Review self-pay pathway and respond with pricing or Good Faith Estimate guidance.";
  }

  return "Route to concierge scheduling callback and confirm location, referral lane, and timing.";
}
