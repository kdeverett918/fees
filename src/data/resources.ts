export interface ResourceDocument {
  title: string;
  href: string;
  audience: "facility" | "patient" | "all";
  description: string;
  format: string;
  category: string;
}

export interface FillableFormResource {
  title: string;
  href: string;
  audience: "facility" | "patient" | "all";
  description: string;
  category: string;
}

export interface ResearchSource {
  title: string;
  href: string;
  publisher: string;
  description: string;
}

export const resourceDocuments: ResourceDocument[] = [
  {
    title: "SNF Medicare / Medicaid Reimbursement Quick Guide",
    href: "/documents/snf-reimbursement-quick-guide.html",
    audience: "facility",
    description:
      "Plain-language handout explaining Part A consolidated billing, Part B workflow, managed-care cautions, and what FEES can realistically support under PDPM.",
    format: "Printable HTML",
    category: "Billing",
  },
  {
    title: "Facility Services Agreement Template",
    href: "/documents/facility-services-agreement-template.html",
    audience: "facility",
    description:
      "Editable contract template covering payment terms, scheduling, documentation, cancellation, and reimbursement disclaimers for facility-paid FEES services.",
    format: "Printable HTML",
    category: "Contract",
  },
  {
    title: "Facility Referral Checklist",
    href: "/documents/facility-referral-checklist.html",
    audience: "facility",
    description:
      "Checklist for orders, payer status, clinical documents, and day-of-service preparation before a mobile FEES visit.",
    format: "Printable HTML",
    category: "Referral",
  },
  {
    title: "FEES vs Outpatient MBSS Comparison Sheet",
    href: "/documents/fees-vs-outpatient-mbss-comparison.html",
    audience: "all",
    description:
      "Side-by-side comparison of turnaround, logistics, visualization, radiation, and best-fit use cases.",
    format: "Printable HTML",
    category: "Education",
  },
  {
    title: "Facility Onboarding & Contracting Checklist",
    href: "/documents/facility-onboarding-contract-checklist.html",
    audience: "facility",
    description:
      "Operational checklist for contracting, credentialing, BAA decisions, scheduling workflow, invoice setup, and first-day launch.",
    format: "Printable HTML",
    category: "Onboarding",
  },
  {
    title: "Business Associate Agreement Readiness Checklist",
    href: "/documents/business-associate-readiness-checklist.html",
    audience: "facility",
    description:
      "Non-legal worksheet to confirm whether a BAA is needed, what PHI flows through the relationship, and which operational items should be settled before service starts.",
    format: "Printable HTML",
    category: "Privacy",
  },
  {
    title: "Physician Order & Medical Necessity Request",
    href: "/documents/physician-order-medical-necessity-request.html",
    audience: "facility",
    description:
      "One-page request form for obtaining the order, clinical indication, payer lane, and current swallow concerns before the visit is scheduled.",
    format: "Printable HTML",
    category: "Referral",
  },
  {
    title: "Concierge Patient Service Agreement",
    href: "/documents/concierge-patient-service-agreement.html",
    audience: "patient",
    description:
      "Self-pay agreement for concierge home visits, including payment timing, cancellation policy, superbill language, and Good Faith Estimate reminders.",
    format: "Printable HTML",
    category: "Patient Packet",
  },
  {
    title: "Patient Consent & Financial Policy",
    href: "/documents/patient-consent-and-financial-policy.html",
    audience: "patient",
    description:
      "Combined FEES information, informed consent checklist, and self-pay / out-of-network financial policy for concierge patients.",
    format: "Printable HTML",
    category: "Patient Packet",
  },
  {
    title: "Good Faith Estimate Request Worksheet",
    href: "/documents/good-faith-estimate-request-worksheet.html",
    audience: "patient",
    description:
      "Worksheet for collecting the uninsured or self-pay information needed before issuing a concierge Good Faith Estimate.",
    format: "Printable HTML",
    category: "Patient Packet",
  },
  {
    title: "HIPAA Authorization for FEES Report & Images",
    href: "/documents/hipaa-authorization-fees-report-images.html",
    audience: "patient",
    description:
      "Authorization template for sending FEES reports or clips to a family member, caregiver, outside provider, or attorney when treatment/payment/operations does not already cover the disclosure.",
    format: "Printable HTML",
    category: "Privacy",
  },
];

export const fillableForms: FillableFormResource[] = [
  {
    title: "Referral Intake Builder",
    href: "/intake",
    audience: "facility",
    description:
      "Fill out the referral packet in the browser, print it for the chart, and keep it saved locally on the device until you reset it.",
    category: "Workflow",
  },
  {
    title: "Patient Consent Builder",
    href: "/consent",
    audience: "patient",
    description:
      "Step-by-step FEES consent form with procedure acknowledgments, report-release options, and signature review.",
    category: "Patient Packet",
  },
  {
    title: "Facility Agreement Builder",
    href: "/agreement",
    audience: "facility",
    description:
      "Editable facility agreement workflow covering service tier, billing contact, scheduling, privacy, and signature language.",
    category: "Contract",
  },
  {
    title: "FEES Evaluation Report Builder",
    href: "/evaluation",
    audience: "all",
    description:
      "Browser-based evaluation template with trial tracking, review output, and local autosave for ongoing charting drafts.",
    category: "Clinical",
  },
];

export const researchSources: ResearchSource[] = [
  {
    title: "CMS SNF Consolidated Billing Overview",
    href: "https://www.cms.gov/medicare/coding-billing/skilled-nursing-facility-snf-consolidated-billing",
    publisher: "Centers for Medicare & Medicaid Services",
    description:
      "Primary source for consolidated billing structure and annual HCPCS files used to determine whether services are bundled through the SNF.",
  },
  {
    title: "CMS SNF Supplier Best Practices",
    href: "https://www.cms.gov/medicare/medicare-fee-for-service-payment/snfpps/bestpractices",
    publisher: "Centers for Medicare & Medicaid Services",
    description:
      "CMS supplier-agreement guidance supporting facility-vendor workflows for services furnished under arrangement.",
  },
  {
    title: "CMS PDPM Classification Walkthrough",
    href: "https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/SNFPPS/Downloads/SNF_PDPM_Classification_Walkthrough_v2.pdf",
    publisher: "Centers for Medicare & Medicaid Services",
    description:
      "Explains how the SLP component is affected by acute neurologic status, SLP comorbidities, cognition, swallowing disorder, and mechanically altered diet.",
  },
  {
    title: "ASHA FEES Practice Portal",
    href: "https://www.asha.org/practice-portal/resources/flexible-endoscopic-evaluation-of-swallowing/",
    publisher: "American Speech-Language-Hearing Association",
    description:
      "Professional practice summary describing where FEES is indicated, its portability, bedside utility, and its limitations compared with VFSS/MBSS.",
  },
  {
    title: "Nevada Medicaid Speech Therapy Billing Guidelines",
    href: "https://www.medicaid.nv.gov/Downloads/provider/NV_BillingGuidelines_PT34_20221212.pdf",
    publisher: "Nevada Medicaid",
    description:
      "State billing reference used to confirm that Nevada Medicaid coverage should be verified carefully before advertising FEES reimbursement assumptions.",
  },
  {
    title: "2026 Medicare Fee Schedule for SLPs",
    href: "https://www.asha.org/siteassets/reimbursement/2026-medicare-fee-schedule-for-speech-language-pathologists.pdf",
    publisher: "American Speech-Language-Hearing Association",
    description:
      "Useful reference for SLP-relevant Medicare fee schedule codes while still recognizing that SNF billing pathways vary by resident status.",
  },
];
