export type VisitorRole = "facility" | "patient";

export interface StartMenuItem {
  id: string;
  role: VisitorRole;
  label: string;
  description: string;
  image: string;
  href: string;
  ctaLabel: string;
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
  serviceLocation: string;
  referringPhysician: string;
  orderDate: string;
  evaluationDate: string;
  evaluatorName: string;
  diagnosis: string;
  medicalHistory: string;
  respiratoryStatus: string;
  cognitionCommunication: string;
  precautions: string;
  currentDietSolids: string;
  currentDietLiquids: string;
  swallowingComplaints: string;
  previousStudies: string;
  positioningAndAssist: string;
  anatomyObservations: string;
  oralMotorObservations: string;
  secretionManagement: string;
  trials: FEESTrial[];
  sensationTesting: string;
  responseToStrategies: string;
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
  responsiblePartyName: string;
  responsiblePartyRelationship: string;
  orderingProvider: string;
  locationOfService: string;
  procedureDate: string;
  procedureExplained: boolean;
  risksExplained: boolean;
  benefitsExplained: boolean;
  alternativesExplained: boolean;
  questionsAnswered: boolean;
  mayStopProcedure: boolean;
  releaseReportConsent: boolean;
  imageVideoConsent: boolean;
  financialPolicyAcknowledged: boolean;
  patientConsents: boolean;
  patientSignature: string;
  responsiblePartySignature: string;
  witnessSignature: string;
  clinicianSignature: string;
  signatureDate: string;
}

export interface IntakeFormData {
  referringFacility: string;
  referringPhysician: string;
  referralContactName: string;
  referralContactEmail: string;
  referringPhone: string;
  referringFax: string;
  patientName: string;
  dob: string;
  mrn: string;
  insurancePrimary: string;
  insuranceId: string;
  payerLane: string;
  requestedService: string;
  orderStatus: string;
  reasonForReferral: string;
  diagnosis: string;
  aspirationConcerns: string;
  respiratorySupport: string;
  isolationPrecautions: string;
  currentDiet: string;
  swallowingStatus: string;
  decisionMakerName: string;
  decisionMakerPhone: string;
  urgency: "routine" | "urgent" | "stat";
  preferredDate: string;
  bestVisitWindow: string;
  notes: string;
}
