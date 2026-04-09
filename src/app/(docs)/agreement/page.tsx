"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { usePersistedForm } from "@/hooks/use-persisted-form";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Printer,
  RotateCcw,
} from "lucide-react";

const STEPS = [
  "Facility Info",
  "Service Selection",
  "Terms & Conditions",
  "Signatures",
  "Review & Print",
];

const STORAGE_KEY = "mobile-fees-lv-agreement";

type ServiceTier = "standard" | "facility" | "concierge";

interface AgreementFormData {
  // Step 1 - Facility Information
  facilityName: string;
  facilityAddress: string;
  facilityPhone: string;
  facilityFax: string;
  administratorName: string;
  administratorEmail: string;
  npiNumber: string;
  taxId: string;
  // Step 2 - Service Selection
  selectedTier: ServiceTier;
  estimatedMonthlyVolume: string;
  preferredSchedulingDays: string;
  billingContactName: string;
  billingContactEmail: string;
  billingAddress: string;
  // Step 4 - Signatures
  representativeSignature: string;
  representativeTitle: string;
  signatureDate: string;
  agreedToTerms: boolean;
}

function defaultAgreement(): AgreementFormData {
  return {
    facilityName: "",
    facilityAddress: "",
    facilityPhone: "",
    facilityFax: "",
    administratorName: "",
    administratorEmail: "",
    npiNumber: "",
    taxId: "",
    selectedTier: "facility",
    estimatedMonthlyVolume: "",
    preferredSchedulingDays: "",
    billingContactName: "",
    billingContactEmail: "",
    billingAddress: "",
    representativeSignature: "",
    representativeTitle: "",
    signatureDate: "",
    agreedToTerms: false,
  };
}

const TIER_LABELS: Record<ServiceTier, string> = {
  standard: "Single Study",
  facility: "Partner Facility",
  concierge: "High-Volume Facility",
};

const TIER_DESCRIPTIONS: Record<ServiceTier, string> = {
  standard:
    "Starting at $495 per FEES study for intermittent facility referrals without a monthly volume commitment.",
  facility:
    "Starting at $465 per FEES study for facilities scheduling 5-9 studies per month, with Net 30 invoicing.",
  concierge:
    "Starting at $435 per FEES study for facilities consistently scheduling 10+ studies per month.",
};

export default function AgreementPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const {
    hydrated,
    value: formData,
    setValue: setFormData,
    reset,
  } = usePersistedForm<AgreementFormData>(STORAGE_KEY, defaultAgreement());

  const updateField = <K extends keyof AgreementFormData>(
    field: K,
    value: AgreementFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    if (
      window.confirm("Reset all agreement form data? This cannot be undone.")
    ) {
      reset(defaultAgreement());
      setCurrentStep(0);
    }
  };

  if (!hydrated) {
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="no-print">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Facility Services Agreement
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mt-2">
          Mobile FEES LV &mdash; Professional services agreement for skilled
          nursing and healthcare facilities. Template only; review with counsel
          and compliance before production use.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          This draft saves locally on this device until you print or reset it.
        </p>
      </div>

      {/* Step indicator */}
      <div className="no-print flex items-center gap-1 overflow-x-auto pb-2">
        {STEPS.map((step, i) => (
          <button
            key={step}
            onClick={() => setCurrentStep(i)}
            className={cn(
              "flex items-center gap-2 whitespace-nowrap rounded-[var(--radius)] px-3 py-2 text-xs font-medium transition-colors cursor-pointer",
              i === currentStep
                ? "bg-primary text-primary-foreground"
                : i < currentStep
                  ? "bg-primary/10 text-primary"
                  : "bg-muted text-muted-foreground"
            )}
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[10px] font-bold">
              {i + 1}
            </span>
            <span className="hidden sm:inline">{step}</span>
          </button>
        ))}
      </div>

      {/* Step content */}
      <div>
        {currentStep === 0 && (
          <StepFacilityInfo formData={formData} updateField={updateField} />
        )}
        {currentStep === 1 && (
          <StepServiceSelection formData={formData} updateField={updateField} />
        )}
        {currentStep === 2 && (
          <StepTerms selectedTier={formData.selectedTier} />
        )}
        {currentStep === 3 && (
          <StepSignatures formData={formData} updateField={updateField} />
        )}
        {currentStep === 4 && <StepReview formData={formData} />}
      </div>

      {/* Navigation */}
      <div className="no-print flex items-center justify-between pt-4 border-t border-border">
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setCurrentStep((s) => s - 1)}
            disabled={currentStep === 0}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>
          <Button
            onClick={() => setCurrentStep((s) => s + 1)}
            disabled={currentStep === STEPS.length - 1}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        <div className="flex gap-2">
          {currentStep === STEPS.length - 1 && (
            <Button variant="default" onClick={() => window.print()}>
              <Printer className="h-4 w-4 mr-1" />
              Print
            </Button>
          )}
          <Button variant="ghost" onClick={resetForm}>
            <RotateCcw className="h-4 w-4 mr-1" />
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step Components                                                    */
/* ------------------------------------------------------------------ */

interface StepProps {
  formData: AgreementFormData;
  updateField: <K extends keyof AgreementFormData>(
    field: K,
    value: AgreementFormData[K]
  ) => void;
}

/* Step 1 – Facility Information */

function StepFacilityInfo({ formData, updateField }: StepProps) {
  return (
    <Card>
      <CardContent className="pt-6 grid gap-4 sm:grid-cols-2">
        <Input
          label="Facility Name"
          id="facilityName"
          value={formData.facilityName}
          onChange={(e) => updateField("facilityName", e.target.value)}
        />
        <Input
          label="Phone"
          id="facilityPhone"
          type="tel"
          value={formData.facilityPhone}
          onChange={(e) => updateField("facilityPhone", e.target.value)}
        />
        <div className="sm:col-span-2">
          <Input
            label="Address"
            id="facilityAddress"
            value={formData.facilityAddress}
            onChange={(e) => updateField("facilityAddress", e.target.value)}
          />
        </div>
        <Input
          label="Fax"
          id="facilityFax"
          type="tel"
          value={formData.facilityFax}
          onChange={(e) => updateField("facilityFax", e.target.value)}
        />
        <Input
          label="Administrator Name"
          id="administratorName"
          value={formData.administratorName}
          onChange={(e) => updateField("administratorName", e.target.value)}
        />
        <Input
          label="Administrator Email"
          id="administratorEmail"
          type="email"
          value={formData.administratorEmail}
          onChange={(e) => updateField("administratorEmail", e.target.value)}
        />
        <Input
          label="NPI Number"
          id="npiNumber"
          value={formData.npiNumber}
          onChange={(e) => updateField("npiNumber", e.target.value)}
        />
        <Input
          label="Tax ID"
          id="taxId"
          value={formData.taxId}
          onChange={(e) => updateField("taxId", e.target.value)}
        />
      </CardContent>
    </Card>
  );
}

/* Step 2 – Service Selection */

function StepServiceSelection({ formData, updateField }: StepProps) {
  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">
            Select Service Tier
          </label>
          <div className="grid gap-3 sm:grid-cols-3">
            {(Object.keys(TIER_LABELS) as ServiceTier[]).map((tier) => (
              <button
                key={tier}
                type="button"
                onClick={() => updateField("selectedTier", tier)}
                className={cn(
                  "cursor-pointer rounded-[var(--radius)] border p-4 text-left transition-colors",
                  formData.selectedTier === tier
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                )}
              >
                <div className="flex items-center gap-2">
                  {formData.selectedTier === tier && (
                    <Check className="h-4 w-4 text-primary shrink-0" />
                  )}
                  <span className="text-sm font-semibold text-foreground">
                    {TIER_LABELS[tier]}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {TIER_DESCRIPTIONS[tier]}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            label="Estimated Monthly Volume"
            id="estimatedMonthlyVolume"
            placeholder="e.g. 8 evaluations"
            value={formData.estimatedMonthlyVolume}
            onChange={(e) =>
              updateField("estimatedMonthlyVolume", e.target.value)
            }
          />
          <Input
            label="Preferred Scheduling Days"
            id="preferredSchedulingDays"
            placeholder="e.g. Mondays and Wednesdays"
            value={formData.preferredSchedulingDays}
            onChange={(e) =>
              updateField("preferredSchedulingDays", e.target.value)
            }
          />
          <Input
            label="Billing Contact Name"
            id="billingContactName"
            value={formData.billingContactName}
            onChange={(e) =>
              updateField("billingContactName", e.target.value)
            }
          />
          <Input
            label="Billing Contact Email"
            id="billingContactEmail"
            type="email"
            value={formData.billingContactEmail}
            onChange={(e) =>
              updateField("billingContactEmail", e.target.value)
            }
          />
          <div className="sm:col-span-2">
            <Input
              label="Billing Address (if different from facility)"
              id="billingAddress"
              value={formData.billingAddress}
              onChange={(e) =>
                updateField("billingAddress", e.target.value)
              }
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

/* Step 3 – Terms & Conditions */

function StepTerms({ selectedTier }: { selectedTier: ServiceTier }) {
  const paymentTerms =
    selectedTier === "facility" || selectedTier === "concierge"
        ? "Net 30 days from date of invoice"
      : "Payment due at time of service or Net 15 days from date of invoice";

  return (
    <Card>
      <CardContent className="pt-6 space-y-6 text-sm leading-relaxed text-foreground">
        <h3 className="text-lg font-semibold">
          Mobile FEES LV &mdash; Facility Services Agreement
        </h3>

        <section>
          <h4 className="font-semibold mb-1">1. Services Provided</h4>
          <p>
            Mobile FEES LV (&quot;Provider&quot;) agrees to furnish Fiberoptic
            Endoscopic Evaluation of Swallowing (FEES) services, clinical
            swallowing evaluations, dysphagia consultations, and staff
            training/in-services at the contracting facility
            (&quot;Facility&quot;). All services are performed by a licensed
            speech-language pathologist with current ASHA certification
            (CCC-SLP) and Stanford FEES certification.
          </p>
        </section>

        <section>
          <h4 className="font-semibold mb-1">
            2. Pricing &mdash; {TIER_LABELS[selectedTier]} Tier
          </h4>
          {selectedTier === "standard" && (
            <ul className="list-disc ml-5 space-y-1">
              <li>Comprehensive mobile FEES visit: from $495</li>
              <li>Focused repeat FEES within 30 days: from $375</li>
              <li>Clinical swallowing evaluation without scope: from $195</li>
              <li>STAT / same-day add-on: $125-$175 when available</li>
              <li>Travel beyond the core service radius quoted before service</li>
            </ul>
          )}
          {selectedTier === "facility" && (
            <ul className="list-disc ml-5 space-y-1">
              <li>5-9 FEES per month: $465 each</li>
              <li>Clinical swallowing evaluation without scope: from $195</li>
              <li>Repeat FEES: from $325</li>
              <li>Quarterly education block may be included by addendum</li>
              <li>Priority scheduling within 2-3 business days when clinically appropriate</li>
            </ul>
          )}
          {selectedTier === "concierge" && (
            <ul className="list-disc ml-5 space-y-1">
              <li>10+ FEES per month: $435 each</li>
              <li>Repeat FEES: from $325</li>
              <li>Reserved scheduling blocks based on monthly planning</li>
              <li>Priority operational coordination with the facility contact</li>
              <li>Training and workflow refinement included by addendum</li>
              <li>Travel beyond the core service radius quoted before service</li>
            </ul>
          )}
        </section>

        <section>
          <h4 className="font-semibold mb-1">3. Payment Terms</h4>
          <p>
            {paymentTerms}. Late payments are subject to a 1.5% monthly finance
            charge. Facility agrees to designate an internal billing contact and
            remain financially responsible to Provider for services delivered
            under this Agreement, regardless of payer outcome unless a written
            amendment states otherwise.
          </p>
        </section>

        <section>
          <h4 className="font-semibold mb-1">4. Scheduling &amp; Cancellation</h4>
          <p>
            Scheduling is subject to Provider availability.{" "}
            {selectedTier === "concierge"
              ? "High-volume facilities receive the highest scheduling priority and reserved blocks when planned in advance."
              : selectedTier === "facility"
                ? "Partner facilities receive priority scheduling within 2-3 business days when clinically appropriate."
                : "Standard scheduling within 3\u20135 business days."}{" "}
            A minimum of 24 hours&apos; notice is required for cancellations. A $150
            late cancellation fee may apply when the resident is not available,
            the order is not ready, or the visit is canceled with less than 24
            hours&apos; notice after the Provider has reserved the slot.
          </p>
        </section>

        <section>
          <h4 className="font-semibold mb-1">5. Insurance &amp; Billing</h4>
          <p>
            For residents in a covered Medicare Part A SNF stay, Facility
            acknowledges that swallowing services arranged under this Agreement
            are typically handled within the Facility&apos;s consolidated
            billing/PPS payment structure rather than billed separately by
            Provider. For residents not in Part A, Facility may choose to bill
            covered Part B services under its own workflow when services are
            furnished under arrangement, subject to payer rules. Provider will
            supply the clinical report and reasonable supporting documentation,
            but Facility remains responsible for payer enrollment, claim
            submission, denials, refunds, audits, and Medicaid or managed-care
            verification. If coverage is unavailable or denied, Facility remains
            responsible for Provider&apos;s invoice unless a separate written
            patient-pay agreement has been executed in advance.
          </p>
        </section>

        <section>
          <h4 className="font-semibold mb-1">
            6. HIPAA Compliance &amp; Confidentiality
          </h4>
          <p>
            Both parties agree to comply with the Health Insurance Portability
            and Accountability Act (HIPAA) and all applicable federal and state
            regulations regarding protected health information (PHI). Provider
            will execute a Business Associate Agreement (BAA) if required by the
            parties&apos; workflow. All patient records, reports, and clinical
            documentation shall be maintained in accordance with HIPAA
            standards.
          </p>
        </section>

        <section>
          <h4 className="font-semibold mb-1">7. Term &amp; Termination</h4>
          <p>
            This Agreement shall remain in effect for a period of twelve (12)
            months from the date of execution and shall automatically renew for
            successive one-year terms unless either party provides written notice
            of termination at least thirty (30) days prior to the end of the
            current term. Either party may terminate this Agreement for cause
            with thirty (30) days&apos; written notice.
          </p>
        </section>

        <section>
          <h4 className="font-semibold mb-1">
            8. Liability &amp; Malpractice Insurance
          </h4>
          <p>
            Provider maintains current professional liability (malpractice)
            insurance with coverage limits meeting or exceeding industry
            standards. Provider shall furnish proof of insurance upon Facility
            request. Provider is an independent contractor and not an employee of
            Facility.
          </p>
        </section>

        <section>
          <h4 className="font-semibold mb-1">9. Governing Law</h4>
          <p>
            This Agreement shall be governed by and construed in accordance with
            the laws of the State of Nevada. Any disputes arising under this
            Agreement shall be resolved in the courts of Clark County, Nevada.
          </p>
        </section>
      </CardContent>
    </Card>
  );
}

/* Step 4 – Signatures */

function StepSignatures({ formData, updateField }: StepProps) {
  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-foreground">
            Facility Authorized Representative
          </h4>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              label="Signature (typed full legal name)"
              id="representativeSignature"
              value={formData.representativeSignature}
              onChange={(e) =>
                updateField("representativeSignature", e.target.value)
              }
              placeholder="Type full legal name"
            />
            <Input
              label="Title"
              id="representativeTitle"
              value={formData.representativeTitle}
              onChange={(e) =>
                updateField("representativeTitle", e.target.value)
              }
              placeholder="e.g. Administrator, Director of Nursing"
            />
            <Input
              label="Date"
              id="signatureDate"
              type="date"
              value={formData.signatureDate}
              onChange={(e) => updateField("signatureDate", e.target.value)}
            />
          </div>
        </div>

        <div className="border-t border-border pt-4 space-y-2">
          <h4 className="text-sm font-semibold text-foreground">Provider</h4>
          <p className="text-sm text-foreground">
            Kristine Everett, MA, CCC-SLP
          </p>
          <p className="text-sm text-muted-foreground">
            Mobile FEES LV &mdash; Owner / FEES Clinician
          </p>
        </div>

        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={formData.agreedToTerms}
            onChange={(e) => updateField("agreedToTerms", e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-border text-primary accent-primary cursor-pointer"
          />
          <span className="text-sm text-foreground leading-snug group-hover:text-primary transition-colors">
            I have read and agree to the terms and conditions outlined in this
            Facility Services Agreement. I am authorized to enter into this
            agreement on behalf of the Facility.
          </span>
        </label>
      </CardContent>
    </Card>
  );
}

/* Step 5 – Review & Print */

function StepReview({ formData }: { formData: AgreementFormData }) {
  return (
    <div className="space-y-6">
      {/* Agreement header for print */}
      <div className="text-center space-y-1">
        <h2 className="text-xl font-bold text-foreground">
          Mobile FEES LV &mdash; Facility Services Agreement
        </h2>
        <p className="text-sm text-muted-foreground">
          Professional Swallowing Evaluation Services
        </p>
      </div>

      <Card>
        <CardContent className="pt-6 space-y-4">
          <h3 className="text-base font-semibold text-foreground">
            Facility Information
          </h3>
          <div className="space-y-1">
            <SummaryRow label="Facility Name" value={formData.facilityName} />
            <SummaryRow label="Address" value={formData.facilityAddress} />
            <SummaryRow label="Phone" value={formData.facilityPhone} />
            <SummaryRow label="Fax" value={formData.facilityFax} />
            <SummaryRow
              label="Administrator"
              value={formData.administratorName}
            />
            <SummaryRow
              label="Admin Email"
              value={formData.administratorEmail}
            />
            <SummaryRow label="NPI" value={formData.npiNumber} />
            <SummaryRow label="Tax ID" value={formData.taxId} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6 space-y-4">
          <h3 className="text-base font-semibold text-foreground">
            Service Selection
          </h3>
          <div className="space-y-1">
            <SummaryRow
              label="Selected Tier"
              value={TIER_LABELS[formData.selectedTier]}
            />
            <SummaryRow
              label="Est. Monthly Volume"
              value={formData.estimatedMonthlyVolume}
            />
            <SummaryRow
              label="Preferred Days"
              value={formData.preferredSchedulingDays}
            />
            <SummaryRow
              label="Billing Contact"
              value={formData.billingContactName}
            />
            <SummaryRow
              label="Billing Email"
              value={formData.billingContactEmail}
            />
            <SummaryRow
              label="Billing Address"
              value={formData.billingAddress || "Same as facility"}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6 space-y-4">
          <h3 className="text-base font-semibold text-foreground">
            Signatures
          </h3>
          <div className="space-y-1">
            <SummaryRow
              label="Facility Representative"
              value={formData.representativeSignature}
            />
            <SummaryRow label="Title" value={formData.representativeTitle} />
            <SummaryRow label="Date" value={formData.signatureDate} />
            <div className="border-t border-border/30 my-2" />
            <SummaryRow
              label="Provider"
              value="Kristine Everett, MA, CCC-SLP"
            />
            <SummaryRow
              label="Terms Accepted"
              value={formData.agreedToTerms ? "Yes" : "No"}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Shared                                                             */
/* ------------------------------------------------------------------ */

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-4 py-1.5 border-b border-border/30 last:border-0">
      <span className="text-sm font-medium text-muted-foreground w-44 shrink-0">
        {label}
      </span>
      <span className="text-sm text-foreground">{value || "\u2014"}</span>
    </div>
  );
}
