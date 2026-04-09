import type { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    id: "mobile-fees",
    title: "Mobile FEES LV Evaluations",
    description:
      "Portable Fiberoptic Endoscopic Evaluation of Swallowing performed on-site in SNFs, rehab settings, assisted living, or the patient's home.",
    details: [
      "Portable scope, HD camera, and bedside setup brought to the point of care",
      "Real-time visualization of secretion management, airway protection, residue, and response to strategies",
      "Same-day verbal summary with written report and recommendations to follow",
      "Useful when transport is difficult, timing is urgent, or bedside decision-making matters",
      "Available for both facility referrals and concierge home visits",
    ],
    icon: "Stethoscope",
    href: "/services#mobile-fees",
  },
  {
    id: "consultation",
    title: "Concierge Patient Visits",
    description:
      "Direct-pay bedside swallowing visits for patients and families who need faster access or prefer an in-home or private-room pathway.",
    details: [
      "Concierge FEES visits for clinically appropriate patients with a referral or order in place",
      "Bedside swallow consultations when a scope is not yet indicated",
      "Medication-swallow review, caregiver coaching, and family education",
      "Follow-up report review or care conference after the evaluation",
      "Useful for home visits, assisted living, or private-room coordination",
    ],
    icon: "ClipboardList",
    href: "/services#consultation",
  },
  {
    id: "training",
    title: "Facility Training & Workflow Support",
    description:
      "Education for nursing, therapy teams, and administrators building a cleaner dysphagia referral and bedside assessment workflow.",
    details: [
      "Dysphagia awareness training for nursing and rehab staff",
      "IDDSI texture and liquid consistency education",
      "Case-based discussion of aspiration risk, diet decisions, and escalation pathways",
      "Referral, documentation, and communication habits that reduce delays",
      "Care conference support for complex residents when needed",
      "Customized to the workflows and population of the facility",
    ],
    icon: "GraduationCap",
    href: "/services#training",
  },
];
