export type VisitorRole = "facility" | "patient";

export interface StartMenuItem {
  id: string;
  role: VisitorRole;
  label: string;
  description: string;
  image: string;
  href: string;
  narrationSrc?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  audience?: VisitorRole | "all";
}

export interface FEESTrial {
  consistency: string;
  bolus: string;
  penetrationAspiration: string;
  residue: string;
  notes: string;
}

export interface FEESEvaluation {
  patientName: string;
  dob: string;
  mrn: string;
  facility: string;
  referringPhysician: string;
  evaluationDate: string;
  evaluatorName: string;
  diagnosis: string;
  medicalHistory: string;
  currentDietSolids: string;
  currentDietLiquids: string;
  swallowingComplaints: string;
  previousStudies: string;
  anatomyObservations: string;
  secretionManagement: string;
  trials: FEESTrial[];
  sensationTesting: string;
  severityRating: string;
  riskAssessment: string;
  recommendedDietSolids: string;
  recommendedDietLiquids: string;
  strategies: string;
  recommendations: string;
  followUp: string;
}

export interface ConsentFormData {
  patientName: string;
  dob: string;
  facility: string;
  procedureDate: string;
  procedureExplained: boolean;
  risksExplained: boolean;
  benefitsExplained: boolean;
  alternativesExplained: boolean;
  questionsAnswered: boolean;
  patientConsents: boolean;
  patientSignature: string;
  witnessSignature: string;
  clinicianSignature: string;
  signatureDate: string;
}

export interface IntakeFormData {
  referringFacility: string;
  referringPhysician: string;
  referringPhone: string;
  referringFax: string;
  patientName: string;
  dob: string;
  mrn: string;
  insurancePrimary: string;
  insuranceId: string;
  reasonForReferral: string;
  currentDiet: string;
  swallowingStatus: string;
  urgency: "routine" | "urgent" | "stat";
  preferredDate: string;
  notes: string;
}
