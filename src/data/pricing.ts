export interface PricingPlan {
  id: string;
  name: string;
  audience: "facility" | "concierge";
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
    id: "facility-day",
    name: "Single-Facility Study",
    audience: "facility",
    description:
      "Best for facilities testing the service or scheduling intermittent instrumental swallow studies without a monthly volume commitment.",
    price: "$495",
    priceNote: "starting per FEES study",
    highlights: [
      "Bedside FEES with same-day verbal recommendations",
      "Written report targeted for delivery within 24 business hours",
      "One nurse/SLP care-team review included at time of study",
      "Urgent scheduling and travel outside the core Las Vegas service area quoted separately",
    ],
  },
  {
    id: "facility-partner",
    name: "Partner Facility Program",
    audience: "facility",
    description:
      "For SNFs, rehab centers, and ALFs that expect recurring referrals and want a defined billing workflow.",
    price: "$465",
    priceNote: "per FEES study with 5-9 studies per month",
    highlights: [
      "Priority scheduling within 2-3 business days",
      "Clustered same-day visits to reduce staff disruption",
      "Quarterly staff in-service included",
      "Clinical swallow evaluation add-on from $185 when instrumentation is not indicated",
    ],
  },
  {
    id: "facility-high-volume",
    name: "High-Volume Facility Program",
    audience: "facility",
    description:
      "For facilities that consistently run 10 or more FEES studies per month and want the lowest per-study rate.",
    price: "$435",
    priceNote: "per FEES study with 10+ studies per month",
    highlights: [
      "Reserved scheduling blocks based on monthly volume planning",
      "Best fit for high-census SNFs and multi-building referral streams",
      "Monthly utilization review and workflow check-in",
      "Training and referral-packet refinement included for partner teams",
    ],
  },
];

export const conciergePlans: PricingPlan[] = [
  {
    id: "concierge-fees",
    name: "Concierge FEES Home Visit",
    audience: "concierge",
    description:
      "For homebound or medically fragile patients who need instrumental swallowing assessment without an outpatient transport burden.",
    price: "$650",
    priceNote: "starting per visit in the core service area",
    highlights: [
      "In-home FEES and bedside swallowing assessment when clinically appropriate",
      "Caregiver education and same-day results discussion",
      "Written report sent to the referring medical team",
      "Good Faith Estimate available before scheduling",
    ],
  },
  {
    id: "concierge-plus",
    name: "Concierge FEES Plus",
    audience: "concierge",
    description:
      "For families who want a fuller caregiver conference, video review packet, and coordinated follow-up after the study.",
    price: "$750",
    priceNote: "starting per visit",
    highlights: [
      "Everything in the Concierge FEES Home Visit",
      "Extended caregiver conference and questions review",
      "Video review packet or enhanced education summary when clinically appropriate",
      "Best fit when multiple family members or caregivers need the plan explained clearly",
    ],
  },
  {
    id: "concierge-consult",
    name: "Concierge Swallow Consult",
    audience: "concierge",
    description:
      "For patients who need clinical triage, diet guidance, or follow-up support without repeat endoscopy.",
    price: "$275",
    priceNote: "starting per home visit",
    highlights: [
      "Clinical swallow evaluation and chart review",
      "Home mealtime observation when appropriate",
      "Recommendation summary for the patient and physician",
      "Optional virtual results conference from $125",
    ],
  },
];

export const pricingNotes = [
  "All rates are starting points for Las Vegas-area service and may change based on distance, same-day clustering, isolation/PPE requirements, and after-hours urgency.",
  "Facility agreements should state that reimbursement is never guaranteed and that the facility remains responsible for contracted vendor payment unless a different pathway is explicitly approved in writing.",
  "Part A SNF residents are typically handled under consolidated billing. For Part B, Medicare Advantage, Medicaid managed care, and private plans, billing workflow must be verified before the visit.",
  "Concierge patients receive a Good Faith Estimate on request. Superbills can be supplied for out-of-network submission, but plan reimbursement is not guaranteed.",
];

export const reimbursementSteps: ReimbursementStep[] = [
  {
    title: "1. Confirm the resident's payer status",
    description:
      "Determine whether the resident is in a Medicare Part A SNF stay, a Part B/outpatient episode, a Medicare Advantage plan, Medicaid, Medicaid managed care, or private pay. This drives the billing pathway before the visit is scheduled.",
  },
  {
    title: "2. Obtain the clinical order and referral packet",
    description:
      "Secure the physician or qualified practitioner order required by your facility or payer, plus demographics, current diet, diagnoses, medication list, recent pneumonia history, and the reason instrumental assessment is needed now.",
  },
  {
    title: "3. Complete the study and document the swallow status",
    description:
      "The FEES report should describe airway protection, secretion management, residue, diet recommendations, compensatory strategies, and any dysphagia-related diagnoses or comorbidities that are clinically present and supportable.",
  },
  {
    title: "4. Bill through the correct pathway",
    description:
      "For Part A residents, facilities usually pay the FEES vendor under the facility agreement because therapy-related services fall under consolidated billing. For Part B and some managed-care residents, the facility usually submits the claim and pays the vendor per contract after confirming plan rules.",
  },
];

export const comparisonRows: ComparisonRow[] = [
  {
    topic: "Where the study happens",
    mobileFees:
      "At bedside, in the SNF, ALF, physician office, or home when clinically appropriate.",
    outpatientMbss:
      "In an outpatient radiology suite or hospital setting.",
  },
  {
    topic: "Turnaround and logistics",
    mobileFees:
      "Avoids transport and can usually be coordinated around facility workflow.",
    outpatientMbss:
      "Requires scheduling, transport, radiology coordination, and a return trip or report follow-up.",
  },
  {
    topic: "Radiation exposure",
    mobileFees: "No radiation exposure.",
    outpatientMbss: "Uses fluoroscopy and therefore involves radiation.",
  },
  {
    topic: "What FEES/MBSS visualizes best",
    mobileFees:
      "Excellent for secretion management, pharyngeal residue, laryngeal function, and repeated reassessment.",
    outpatientMbss:
      "Better for oral phase timing, upper esophageal screening, and full bolus flow through the swallow.",
  },
  {
    topic: "Patient tolerance in fragile populations",
    mobileFees:
      "Useful when a patient is bedbound, on isolation, cognitively fragile, or cannot leave the unit easily.",
    outpatientMbss:
      "Better when transport is safe and oral/esophageal visualization is needed.",
  },
  {
    topic: "Ability to repeat",
    mobileFees:
      "Can be repeated without radiation when clinical status changes or therapy strategies need retesting.",
    outpatientMbss:
      "Repeat studies are possible, but radiation and radiology access limit how often they are used.",
  },
  {
    topic: "Main limitation",
    mobileFees:
      "Does not visualize the oral phase or esophageal phase, and white-out occurs during the swallow.",
    outpatientMbss:
      "May not reflect a patient's usual mealtime environment and often takes longer to arrange.",
  },
];
