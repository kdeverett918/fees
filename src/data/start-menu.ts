import type { StartMenuItem } from "@/types";

export const startMenuItems: StartMenuItem[] = [
  // Facility items
  {
    id: "schedule-consult",
    role: "facility",
    label: "Start the Facility Portal",
    description:
      "Open the facility-facing portal for onboarding, consult requests, workflow planning, and launch questions.",
    image: "/images/services/mobile-arrival.jpg",
    href: "/facility-portal",
    ctaLabel: "Open Facility Portal",
  },
  {
    id: "facility-workflow",
    role: "facility",
    label: "Review the Facility Workflow",
    description:
      "See how bedside FEES fits referral intake, payer verification, scheduling, and report delivery without overpromising reimbursement.",
    image: "/images/fees/equipment-setup.jpg",
    href: "/for-facilities",
    ctaLabel: "See Facility Workflow",
  },
  {
    id: "referral",
    role: "facility",
    label: "Open the Contract & Referral Packet",
    description:
      "Open the referral checklist, agreement template, reimbursement guide, and onboarding documents in one place.",
    image: "/images/start/referral.jpg",
    href: "/facility-onboarding-packet",
    ctaLabel: "Open Onboarding Packet",
  },
  {
    id: "credentials",
    role: "facility",
    label: "View Credentials",
    description:
      "9 years of clinical experience. FEES certified through Stanford with all competency passes completed. ASHA-certified CCC-SLP.",
    image: "/images/about/headshot.jpg",
    href: "/about",
    ctaLabel: "Meet Kristine",
  },
  // Patient items
  {
    id: "appointment",
    role: "patient",
    label: "Open the Concierge Patient Portal",
    description:
      "Open the patient-facing portal for concierge appointment requests, Good Faith Estimate review, and at-home visit guidance.",
    image: "/images/services/mobile-arrival.jpg",
    href: "/concierge-patient-portal",
    ctaLabel: "Open Patient Portal",
  },
  {
    id: "what-is-fees",
    role: "patient",
    label: "See What to Expect",
    description:
      "Learn how FEES works, how to prepare, and what your family should expect during a bedside visit.",
    image: "/images/fees/procedure-diagram.jpg",
    href: "/for-patients",
    ctaLabel: "Read the Patient Guide",
    narrationSrc: "/audio/what-is-fees.mp3",
  },
  {
    id: "estimate",
    role: "patient",
    label: "Request Pricing or a Good Faith Estimate",
    description:
      "Tell us your location, referral status, and visit goal so we can guide the right next step for a Las Vegas concierge visit.",
    image: "/images/fees/results-discussion.jpg",
    href: "/contact?path=patient&intent=estimate",
    ctaLabel: "Request Pricing Review",
  },
  {
    id: "contact-patient",
    role: "patient",
    label: "Browse Las Vegas Patient Services",
    description:
      "Review FEES visits, consult pathways, and support services before you submit your request.",
    image: "/images/start/facility.jpg",
    href: "/services",
    ctaLabel: "Explore Services",
  },
];
