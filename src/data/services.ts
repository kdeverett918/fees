import type { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    id: "mobile-fees",
    title: "Mobile FEES 702 Evaluations",
    description:
      "Comprehensive Fiberoptic Endoscopic Evaluation of Swallowing performed on-site at your facility or home.",
    details: [
      "Optim ENTity XL nasopharyngoscope with ESC Medicams portable HD camera",
      "Real-time visualization of swallowing function",
      "Multiple food and liquid consistency trials",
      "Detailed written report with recommendations",
      "Diet and strategy recommendations provided same day",
    ],
    icon: "Stethoscope",
    href: "/services#mobile-fees",
  },
  {
    id: "consultation",
    title: "Swallowing Consultations",
    description:
      "Expert clinical swallowing evaluations and follow-up consultations for ongoing dysphagia management.",
    details: [
      "Bedside swallowing assessments",
      "Post-FEES follow-up evaluations",
      "Diet modification guidance",
      "Caregiver training and education",
      "Coordination with referring physicians",
    ],
    icon: "ClipboardList",
    href: "/services#consultation",
  },
  {
    id: "training",
    title: "Staff Training & In-Services",
    description:
      "Educational presentations for healthcare teams on dysphagia identification, FEES, and safe feeding practices.",
    details: [
      "Dysphagia awareness training for nursing staff",
      "IDDSI diet texture education",
      "Signs and symptoms of aspiration",
      "When to refer for instrumental assessment",
      "Customized to your facility's needs",
    ],
    icon: "GraduationCap",
    href: "/services#training",
  },
];
