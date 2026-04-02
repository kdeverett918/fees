"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/ui/page-header";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Printer, RotateCcw } from "lucide-react";
import type { ConsentFormData } from "@/types";

const STORAGE_KEY = "fees-consent";

const STEPS = [
  "Patient Info",
  "Procedure Info",
  "Acknowledgments",
  "Signatures & Review",
];

function defaultConsent(): ConsentFormData {
  return {
    patientName: "",
    dob: "",
    facility: "",
    procedureDate: "",
    procedureExplained: false,
    risksExplained: false,
    benefitsExplained: false,
    alternativesExplained: false,
    questionsAnswered: false,
    patientConsents: false,
    patientSignature: "",
    witnessSignature: "",
    clinicianSignature: "",
    signatureDate: "",
  };
}

export default function ConsentPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<ConsentFormData>(defaultConsent);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setFormData(JSON.parse(stored) as ConsentFormData);
      }
    } catch {
      // ignore
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
  }, [formData, mounted]);

  const updateField = useCallback(
    <K extends keyof ConsentFormData>(
      field: K,
      value: ConsentFormData[K]
    ) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const resetForm = useCallback(() => {
    if (window.confirm("Reset all consent form data? This cannot be undone.")) {
      setFormData(defaultConsent());
      setCurrentStep(0);
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  if (!mounted) return null;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="no-print">
        <PageHeader
          title="FEES Consent Form"
          description="Informed consent for Fiberoptic Endoscopic Evaluation of Swallowing."
        />
      </div>

      {/* Step indicator */}
      <div className="no-print flex items-center gap-1 overflow-x-auto pb-2">
        {STEPS.map((step, i) => (
          <button
            key={step}
            onClick={() => setCurrentStep(i)}
            className={cn(
              "flex items-center gap-2 whitespace-nowrap rounded-[var(--radius)] px-3 py-2 text-xs font-medium transition-colors",
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
          <StepPatientInfo formData={formData} updateField={updateField} />
        )}
        {currentStep === 1 && <StepProcedureInfo />}
        {currentStep === 2 && (
          <StepAcknowledgments formData={formData} updateField={updateField} />
        )}
        {currentStep === 3 && (
          <StepSignatures formData={formData} updateField={updateField} />
        )}
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

/* ─── Step Components ─── */

interface StepProps {
  formData: ConsentFormData;
  updateField: <K extends keyof ConsentFormData>(
    field: K,
    value: ConsentFormData[K]
  ) => void;
}

function StepPatientInfo({ formData, updateField }: StepProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Patient Information</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-2">
        <Input
          label="Patient Name"
          id="patientName"
          value={formData.patientName}
          onChange={(e) => updateField("patientName", e.target.value)}
        />
        <Input
          label="Date of Birth"
          id="dob"
          type="date"
          value={formData.dob}
          onChange={(e) => updateField("dob", e.target.value)}
        />
        <Input
          label="Facility"
          id="facility"
          value={formData.facility}
          onChange={(e) => updateField("facility", e.target.value)}
        />
        <Input
          label="Procedure Date"
          id="procedureDate"
          type="date"
          value={formData.procedureDate}
          onChange={(e) => updateField("procedureDate", e.target.value)}
        />
      </CardContent>
    </Card>
  );
}

function StepProcedureInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About the FEES Procedure</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 text-sm leading-relaxed text-foreground">
        <div>
          <h4 className="font-semibold mb-1">Procedure Description</h4>
          <p>
            Fiberoptic Endoscopic Evaluation of Swallowing (FEES) is a
            procedure in which a small, flexible endoscope (camera) is passed
            through the nose to the back of the throat. The endoscope allows
            the clinician to view the structures involved in swallowing and to
            observe the swallowing process with various food and liquid
            consistencies.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Risks</h4>
          <ul className="list-disc ml-5 space-y-1">
            <li>Mild discomfort during scope passage</li>
            <li>Temporary gagging or sneezing</li>
            <li>Rare: minor nosebleed (epistaxis)</li>
            <li>
              Very rare: vasovagal response (fainting), laryngospasm
            </li>
          </ul>
          <p className="mt-2">
            The procedure is generally well-tolerated and considered safe. The
            clinician performing the evaluation is trained to recognize and
            manage any adverse reactions should they occur.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Benefits</h4>
          <ul className="list-disc ml-5 space-y-1">
            <li>
              Direct visualization of swallowing anatomy and function
            </li>
            <li>
              Assessment performed in the patient&apos;s natural environment
            </li>
            <li>
              No radiation exposure (unlike modified barium swallow)
            </li>
            <li>Immediate results and recommendations</li>
            <li>Can be repeated as needed to monitor progress</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Alternatives</h4>
          <ul className="list-disc ml-5 space-y-1">
            <li>
              <span className="font-medium">
                Modified Barium Swallow Study (MBSS/videofluoroscopy)
              </span>{" "}
              &mdash; requires a radiology suite and involves radiation
              exposure
            </li>
            <li>
              <span className="font-medium">
                Clinical/bedside swallowing evaluation
              </span>{" "}
              &mdash; less detailed, does not provide direct visualization of
              the swallowing mechanism
            </li>
            <li>
              <span className="font-medium">No evaluation</span> &mdash;
              carries the risk of undiagnosed aspiration and related
              complications
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

function StepAcknowledgments({ formData, updateField }: StepProps) {
  const checkboxes: {
    field: keyof ConsentFormData;
    label: string;
  }[] = [
    {
      field: "procedureExplained",
      label:
        "The FEES procedure has been explained to me, including what will happen during the evaluation.",
    },
    {
      field: "risksExplained",
      label:
        "The potential risks and discomforts of the procedure have been explained to me.",
    },
    {
      field: "benefitsExplained",
      label:
        "The potential benefits of the procedure have been explained to me.",
    },
    {
      field: "alternativesExplained",
      label:
        "Alternatives to the FEES procedure have been discussed with me.",
    },
    {
      field: "questionsAnswered",
      label:
        "I have had the opportunity to ask questions, and my questions have been answered to my satisfaction.",
    },
    {
      field: "patientConsents",
      label:
        "I voluntarily consent to undergo the FEES procedure as described.",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Acknowledgments</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Please confirm each of the following by checking the box.
        </p>
        {checkboxes.map(({ field, label }) => (
          <label
            key={field}
            className="flex items-start gap-3 cursor-pointer group"
          >
            <input
              type="checkbox"
              checked={formData[field] as boolean}
              onChange={(e) =>
                updateField(
                  field,
                  e.target.checked as ConsentFormData[typeof field]
                )
              }
              className="mt-0.5 h-4 w-4 rounded border-border text-primary accent-primary cursor-pointer"
            />
            <span className="text-sm text-foreground leading-snug group-hover:text-primary transition-colors">
              {label}
            </span>
          </label>
        ))}
      </CardContent>
    </Card>
  );
}

function StepSignatures({ formData, updateField }: StepProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Signatures</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Input
            label="Patient Signature (typed name)"
            id="patientSignature"
            value={formData.patientSignature}
            onChange={(e) => updateField("patientSignature", e.target.value)}
            placeholder="Type full legal name"
          />
          <Input
            label="Witness Signature (typed name)"
            id="witnessSignature"
            value={formData.witnessSignature}
            onChange={(e) => updateField("witnessSignature", e.target.value)}
            placeholder="Type full legal name"
          />
          <Input
            label="Clinician Signature (typed name)"
            id="clinicianSignature"
            value={formData.clinicianSignature}
            onChange={(e) =>
              updateField("clinicianSignature", e.target.value)
            }
            placeholder="Type full legal name"
          />
          <Input
            label="Signature Date"
            id="signatureDate"
            type="date"
            value={formData.signatureDate}
            onChange={(e) => updateField("signatureDate", e.target.value)}
          />
        </CardContent>
      </Card>

      {/* Review summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Consent Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <SummaryRow label="Patient" value={formData.patientName} />
          <SummaryRow label="Date of Birth" value={formData.dob} />
          <SummaryRow label="Facility" value={formData.facility} />
          <SummaryRow label="Procedure Date" value={formData.procedureDate} />
          <div className="border-t border-border/30 my-2" />
          <SummaryRow
            label="Procedure Explained"
            value={formData.procedureExplained ? "Yes" : "No"}
          />
          <SummaryRow
            label="Risks Explained"
            value={formData.risksExplained ? "Yes" : "No"}
          />
          <SummaryRow
            label="Benefits Explained"
            value={formData.benefitsExplained ? "Yes" : "No"}
          />
          <SummaryRow
            label="Alternatives Explained"
            value={formData.alternativesExplained ? "Yes" : "No"}
          />
          <SummaryRow
            label="Questions Answered"
            value={formData.questionsAnswered ? "Yes" : "No"}
          />
          <SummaryRow
            label="Patient Consents"
            value={formData.patientConsents ? "Yes" : "No"}
          />
          <div className="border-t border-border/30 my-2" />
          <SummaryRow
            label="Patient Signature"
            value={formData.patientSignature}
          />
          <SummaryRow
            label="Witness Signature"
            value={formData.witnessSignature}
          />
          <SummaryRow
            label="Clinician Signature"
            value={formData.clinicianSignature}
          />
          <SummaryRow label="Signature Date" value={formData.signatureDate} />
        </CardContent>
      </Card>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-4 py-1.5 border-b border-border/30 last:border-0">
      <span className="text-sm font-medium text-muted-foreground w-44 shrink-0">
        {label}
      </span>
      <span className="text-sm text-foreground">{value || "--"}</span>
    </div>
  );
}
