import type { FAQItem } from "@/types";

export const faqItems: FAQItem[] = [
  // General
  {
    question: "What is FEES?",
    answer:
      "FEES stands for Fiberoptic Endoscopic Evaluation of Swallowing. It is a procedure where a small, flexible camera (endoscope) is passed through the nose to view the throat while you eat and drink. It helps determine if food or liquid is going into the airway instead of the stomach.",
    audience: "all",
  },
  {
    question: "Is FEES painful?",
    answer:
      "Most patients describe FEES as mildly uncomfortable but not painful. The flexible endoscope is very thin and the procedure typically takes 15-20 minutes. You may feel a slight pressure in your nose as the scope is passed, but this resolves quickly.",
    audience: "all",
  },
  {
    question: "How long does a FEES evaluation take?",
    answer:
      "The actual endoscopic portion of the exam typically takes 15-20 minutes. The entire appointment, including history review, the exam, and discussion of results, usually takes about 45-60 minutes.",
    audience: "all",
  },
  // Patient-focused
  {
    question: "How do I prepare for my FEES exam?",
    answer:
      "There is no special preparation needed. You can eat and drink normally before the exam. Bring a list of your current medications and any previous swallowing test results if available. A family member or caregiver is welcome to attend.",
    audience: "patient",
  },
  {
    question: "Will I get my results right away?",
    answer:
      "Yes. After the exam, your clinician will review the findings with you immediately and discuss recommendations for diet, swallowing strategies, or further treatment. A detailed written report will also be sent to your referring physician.",
    audience: "patient",
  },
  {
    question: "Does insurance cover FEES?",
    answer:
      "Most insurance plans, including Medicare and Medicaid, cover FEES when medically necessary and ordered by a physician. We can help verify your insurance coverage before your appointment.",
    audience: "patient",
  },
  // Facility-focused
  {
    question: "What equipment do you bring?",
    answer:
      "We use the Optim ENTity XL flexible nasopharyngoscope (3.6mm) with an ESC Medicams portable HD camera system and monitor. All equipment is high-level disinfected between every patient using FDA-cleared OPA solution. We only need a standard electrical outlet and a table or bedside space.",
    audience: "facility",
  },
  {
    question: "How do we refer a patient?",
    answer:
      "Simply contact us by phone or through our online referral form. We need the patient's demographics, diagnosis, current diet, and reason for referral. We can typically schedule within 48-72 hours of receiving the referral.",
    audience: "facility",
  },
  {
    question: "What facilities do you serve?",
    answer:
      "We serve skilled nursing facilities, hospitals, rehabilitation centers, physician offices, assisted living communities, and provide home health evaluations. Contact us to confirm coverage in your area.",
    audience: "facility",
  },
  {
    question: "Do you provide written reports?",
    answer:
      "Yes. A comprehensive written report is provided within 24-48 hours of the evaluation. The report includes findings, penetration-aspiration severity, diet recommendations, compensatory strategies, and follow-up recommendations.",
    audience: "facility",
  },
];
