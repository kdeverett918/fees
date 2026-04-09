export const siteConfig = {
  name: "Mobile FEES LV",
  legalName: "Mobile FEES LV",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://127.0.0.1:3000",
  description:
    "Mobile FEES LV provides Las Vegas mobile FEES evaluations, bedside swallow consultations, and concierge dysphagia support for patients, families, facilities, and referral teams.",
  location: "Las Vegas, Nevada",
  serviceAreas: [
    "Las Vegas",
    "Henderson",
    "North Las Vegas",
    "Summerlin",
    "Spring Valley",
    "Paradise",
    "Boulder City",
  ],
  keywords: [
    "mobile FEES Las Vegas",
    "FEES evaluation Las Vegas",
    "bedside swallow study Las Vegas",
    "bedside swallow evaluation Las Vegas",
    "dysphagia evaluation Las Vegas",
    "at home swallow evaluation Las Vegas",
    "at-home swallow evaluation Las Vegas",
    "coughing during meals Las Vegas",
    "aspiration concern Las Vegas",
    "stroke swallow evaluation Las Vegas",
    "Parkinson's swallowing evaluation Las Vegas",
    "recurrent pneumonia swallow evaluation Las Vegas",
    "difficulty swallowing pills Las Vegas",
    "homebound swallow evaluation Las Vegas",
    "wet voice after swallowing Las Vegas",
    "dementia swallowing evaluation Las Vegas",
    "FEES vs MBSS after stroke Las Vegas",
    "concierge patient portal Las Vegas",
    "facility FEES portal Las Vegas",
    "facility onboarding packet Las Vegas",
    "skilled nursing facility FEES Las Vegas",
    "assisted living FEES Las Vegas",
    "physician referral FEES Las Vegas",
    "concierge FEES Las Vegas",
    "mobile swallow study Las Vegas",
    "Fiberoptic Endoscopic Evaluation of Swallowing Las Vegas",
  ],
} as const;

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, siteConfig.url).toString();
}
