export interface PricingPlan {
  id: string;
  name: string;
  audience: "facility" | "patient";
  description: string;
  price: string;
  priceNote: string;
  highlights: string[];
}

export interface ReimbursementStep {
  title: string;
  description: string;
}

export interface ComparisonRow {
  topic: string;
  mobileFees: string;
  outpatientMbss: string;
}

export const facilityPlans: PricingPlan[] = [
  {
    id: "facility-fees",
    name: "FEES Study",
    audience: "facility",
    description:
      "Per-study rate for skilled nursing facilities, rehab programs, assisted living, and physician offices.",
    price: "$350",
    priceNote: "per FEES study",
    highlights: [
      "Bedside FEES with same-day verbal recommendations",
      "Written report delivered within 24 business hours",
      "Care-team review included at time of study",
      "Facility submits to Medicare or Medicaid for reimbursement",
    ],
  },
];

export const patientPlans: PricingPlan[] = [
  {
    id: "patient-virtual",
    name: "Virtual Swallowing Wellness Consult",
    audience: "patient",
    description:
      "A virtual consultation to review swallowing concerns, answer questions, and determine next steps.",
    price: "$75",
    priceNote: "per session",
    highlights: [
      "Video consultation from home",
      "Review of swallowing concerns and history",
      "Guidance on whether a FEES evaluation is recommended",
      "Written summary of recommendations",
    ],
  },
  {
    id: "patient-fees",
    name: "FEES Evaluation — Cash Pay",
    audience: "patient",
    description:
      "A complete in-home FEES evaluation for patients paying out of pocket.",
    price: "$250",
    priceNote: "per visit",
    highlights: [
      "In-home FEES evaluation with portable equipment",
      "Same-day results and diet recommendations",
      "Written report sent to your doctor",
      "Superbill available for out-of-network insurance submission",
    ],
  },
];

export const pricingNotes = [
  "All rates are for Las Vegas-area service. Travel outside the core service area may be quoted separately.",
  "Good Faith Estimates are available for patient visits on request.",
  "Superbills can be provided for out-of-network insurance submission, but reimbursement is not guaranteed.",
];

export const reimbursementSteps: ReimbursementStep[] = [
  {
    title: "1. Confirm the resident's payer status",
    description:
      "Determine whether the resident is in a Medicare Part A stay, Part B, Medicare Advantage, Medicaid, or private pay before scheduling.",
  },
  {
    title: "2. Obtain the clinical order",
    description:
      "Secure the physician order, demographics, current diet, diagnoses, and the reason instrumental assessment is needed.",
  },
  {
    title: "3. Complete the study",
    description:
      "Mobile FEES LV provides the bedside evaluation and delivers a written report with findings, diet recommendations, and diagnosis codes.",
  },
  {
    title: "4. Submit the claim",
    description:
      "The facility submits the claim to Medicare or Medicaid using the report and coding documentation provided. Part A residents are typically billed under consolidated billing. Part B and managed-care claims follow the plan's standard submission process.",
  },
];

export const comparisonRows: ComparisonRow[] = [
  {
    topic: "Where the study happens",
    mobileFees:
      "At bedside, in the SNF, ALF, physician office, or home.",
    outpatientMbss:
      "In an outpatient radiology suite or hospital.",
  },
  {
    topic: "Turnaround",
    mobileFees:
      "No transport needed. Coordinated around facility workflow.",
    outpatientMbss:
      "Requires scheduling, transport, and radiology coordination.",
  },
  {
    topic: "Radiation",
    mobileFees: "No radiation.",
    outpatientMbss: "Uses fluoroscopy (radiation).",
  },
  {
    topic: "What it shows best",
    mobileFees:
      "Secretion management, pharyngeal residue, laryngeal function, and repeated reassessment.",
    outpatientMbss:
      "Oral phase timing, upper esophageal screening, and full bolus flow.",
  },
  {
    topic: "Patient tolerance",
    mobileFees:
      "Useful when the patient is bedbound, on isolation, or cannot leave the unit.",
    outpatientMbss:
      "Better when transport is safe and oral/esophageal visualization is needed.",
  },
  {
    topic: "Main limitation",
    mobileFees:
      "Does not visualize the oral or esophageal phase.",
    outpatientMbss:
      "May not reflect the patient's usual mealtime environment.",
  },
];
