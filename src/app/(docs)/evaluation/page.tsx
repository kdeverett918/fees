"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageHeader } from "@/components/ui/page-header";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Trash2,
  Printer,
  RotateCcw,
} from "lucide-react";
import type { FEESEvaluation, FEESTrial } from "@/types";

const STORAGE_KEY = "fees-evaluation";

const STEPS = [
  "Patient Info",
  "Clinical History",
  "FEES Findings",
  "Impressions",
  "Review & Print",
];

const CONSISTENCIES = [
  "Thin Liquid",
  "Nectar Thick",
  "Honey Thick",
  "Pudding",
  "Puree",
  "Soft Solid",
  "Regular",
];

const PA_OPTIONS = [
  "None",
  "Penetration",
  "Aspiration",
  "Silent Aspiration",
];

const RESIDUE_OPTIONS = ["None", "Mild", "Moderate", "Severe"];

function defaultEvaluation(): FEESEvaluation {
  return {
    patientName: "",
    dob: "",
    mrn: "",
    facility: "",
    referringPhysician: "",
    evaluationDate: "",
    evaluatorName: "Kristine Everett, M.S., CCC-SLP",
    diagnosis: "",
    medicalHistory: "",
    currentDietSolids: "",
    currentDietLiquids: "",
    swallowingComplaints: "",
    previousStudies: "",
    anatomyObservations: "",
    secretionManagement: "",
    trials: [],
    sensationTesting: "",
    severityRating: "",
    riskAssessment: "",
    recommendedDietSolids: "",
    recommendedDietLiquids: "",
    strategies: "",
    recommendations: "",
    followUp: "",
  };
}

function defaultTrial(): FEESTrial {
  return {
    consistency: "Thin Liquid",
    bolus: "",
    penetrationAspiration: "None",
    residue: "None",
    notes: "",
  };
}

export default function EvaluationPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FEESEvaluation>(defaultEvaluation);
  const [mounted, setMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as FEESEvaluation;
        setFormData(parsed);
      }
    } catch {
      // ignore parse errors
    }
    setMounted(true);
  }, []);

  // Save to localStorage on every change
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
  }, [formData, mounted]);

  const updateField = useCallback(
    (field: keyof FEESEvaluation, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const addTrial = useCallback(() => {
    setFormData((prev) => ({
      ...prev,
      trials: [...prev.trials, defaultTrial()],
    }));
  }, []);

  const removeTrial = useCallback((index: number) => {
    setFormData((prev) => ({
      ...prev,
      trials: prev.trials.filter((_, i) => i !== index),
    }));
  }, []);

  const updateTrial = useCallback(
    (index: number, field: keyof FEESTrial, value: string) => {
      setFormData((prev) => ({
        ...prev,
        trials: prev.trials.map((t, i) =>
          i === index ? { ...t, [field]: value } : t
        ),
      }));
    },
    []
  );

  const resetForm = useCallback(() => {
    if (window.confirm("Reset all evaluation data? This cannot be undone.")) {
      setFormData(defaultEvaluation());
      setCurrentStep(0);
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  if (!mounted) return null;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="no-print">
        <PageHeader
          title="FEES Evaluation Report"
          description="Complete the evaluation step by step. Data saves automatically."
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
        {currentStep === 1 && (
          <StepClinicalHistory formData={formData} updateField={updateField} />
        )}
        {currentStep === 2 && (
          <StepFindings
            formData={formData}
            updateField={updateField}
            addTrial={addTrial}
            removeTrial={removeTrial}
            updateTrial={updateTrial}
          />
        )}
        {currentStep === 3 && (
          <StepImpressions formData={formData} updateField={updateField} />
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

/* ─── Step Components ─── */

interface StepProps {
  formData: FEESEvaluation;
  updateField: (field: keyof FEESEvaluation, value: string) => void;
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
          label="MRN"
          id="mrn"
          value={formData.mrn}
          onChange={(e) => updateField("mrn", e.target.value)}
        />
        <Input
          label="Facility"
          id="facility"
          value={formData.facility}
          onChange={(e) => updateField("facility", e.target.value)}
        />
        <Input
          label="Referring Physician"
          id="referringPhysician"
          value={formData.referringPhysician}
          onChange={(e) => updateField("referringPhysician", e.target.value)}
        />
        <Input
          label="Evaluation Date"
          id="evaluationDate"
          type="date"
          value={formData.evaluationDate}
          onChange={(e) => updateField("evaluationDate", e.target.value)}
        />
        <Input
          label="Evaluator Name"
          id="evaluatorName"
          value={formData.evaluatorName}
          onChange={(e) => updateField("evaluatorName", e.target.value)}
          className="sm:col-span-2"
        />
        <Input
          label="Diagnosis"
          id="diagnosis"
          value={formData.diagnosis}
          onChange={(e) => updateField("diagnosis", e.target.value)}
          className="sm:col-span-2"
        />
      </CardContent>
    </Card>
  );
}

function StepClinicalHistory({ formData, updateField }: StepProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Clinical History</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Textarea
          label="Medical History"
          id="medicalHistory"
          rows={3}
          value={formData.medicalHistory}
          onChange={(e) => updateField("medicalHistory", e.target.value)}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            label="Current Diet - Solids"
            id="currentDietSolids"
            value={formData.currentDietSolids}
            onChange={(e) => updateField("currentDietSolids", e.target.value)}
          />
          <Input
            label="Current Diet - Liquids"
            id="currentDietLiquids"
            value={formData.currentDietLiquids}
            onChange={(e) => updateField("currentDietLiquids", e.target.value)}
          />
        </div>
        <Textarea
          label="Swallowing Complaints"
          id="swallowingComplaints"
          rows={3}
          value={formData.swallowingComplaints}
          onChange={(e) => updateField("swallowingComplaints", e.target.value)}
        />
        <Textarea
          label="Previous Instrumental Studies"
          id="previousStudies"
          rows={2}
          value={formData.previousStudies}
          onChange={(e) => updateField("previousStudies", e.target.value)}
        />
      </CardContent>
    </Card>
  );
}

interface StepFindingsProps extends StepProps {
  addTrial: () => void;
  removeTrial: (index: number) => void;
  updateTrial: (index: number, field: keyof FEESTrial, value: string) => void;
}

function StepFindings({
  formData,
  updateField,
  addTrial,
  removeTrial,
  updateTrial,
}: StepFindingsProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Structural & Functional Assessment</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Textarea
            label="Anatomy Observations"
            id="anatomyObservations"
            rows={3}
            value={formData.anatomyObservations}
            onChange={(e) =>
              updateField("anatomyObservations", e.target.value)
            }
            placeholder="Velopharyngeal closure, base of tongue, epiglottis, arytenoids, vocal folds..."
          />
          <Textarea
            label="Secretion Management"
            id="secretionManagement"
            rows={2}
            value={formData.secretionManagement}
            onChange={(e) =>
              updateField("secretionManagement", e.target.value)
            }
            placeholder="Describe pooling location, ability to clear, frequency of spontaneous swallows..."
          />
          <Textarea
            label="Sensation Testing"
            id="sensationTesting"
            rows={2}
            value={formData.sensationTesting}
            onChange={(e) => updateField("sensationTesting", e.target.value)}
            placeholder="Response to touch of epiglottis and aryepiglottic folds..."
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Swallow Trials</CardTitle>
            <Button variant="outline" size="sm" onClick={addTrial}>
              <Plus className="h-4 w-4 mr-1" />
              Add Trial
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {formData.trials.length === 0 ? (
            <p className="text-sm text-muted-foreground py-4 text-center">
              No trials added yet. Click &quot;Add Trial&quot; to begin.
            </p>
          ) : (
            <div className="space-y-6">
              {formData.trials.map((trial, i) => (
                <div
                  key={i}
                  className="relative rounded-[var(--radius)] border border-border p-4 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">
                      Trial {i + 1}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeTrial(i)}
                      aria-label={`Remove trial ${i + 1}`}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label
                        htmlFor={`consistency-${i}`}
                        className="text-sm font-medium text-foreground"
                      >
                        Consistency
                      </label>
                      <select
                        id={`consistency-${i}`}
                        value={trial.consistency}
                        onChange={(e) =>
                          updateTrial(i, "consistency", e.target.value)
                        }
                        className="flex h-10 w-full rounded-[var(--radius)] border border-border bg-card px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {CONSISTENCIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                    <Input
                      label="Bolus"
                      id={`bolus-${i}`}
                      value={trial.bolus}
                      onChange={(e) =>
                        updateTrial(i, "bolus", e.target.value)
                      }
                      placeholder="e.g. 5mL, sip, bite"
                    />
                    <div className="space-y-1.5">
                      <label
                        htmlFor={`pa-${i}`}
                        className="text-sm font-medium text-foreground"
                      >
                        Penetration / Aspiration
                      </label>
                      <select
                        id={`pa-${i}`}
                        value={trial.penetrationAspiration}
                        onChange={(e) =>
                          updateTrial(
                            i,
                            "penetrationAspiration",
                            e.target.value
                          )
                        }
                        className="flex h-10 w-full rounded-[var(--radius)] border border-border bg-card px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {PA_OPTIONS.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor={`residue-${i}`}
                        className="text-sm font-medium text-foreground"
                      >
                        Residue
                      </label>
                      <select
                        id={`residue-${i}`}
                        value={trial.residue}
                        onChange={(e) =>
                          updateTrial(i, "residue", e.target.value)
                        }
                        className="flex h-10 w-full rounded-[var(--radius)] border border-border bg-card px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {RESIDUE_OPTIONS.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <Textarea
                    label="Notes"
                    id={`trial-notes-${i}`}
                    rows={2}
                    value={trial.notes}
                    onChange={(e) =>
                      updateTrial(i, "notes", e.target.value)
                    }
                    placeholder="Observations for this trial..."
                  />
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function StepImpressions({ formData, updateField }: StepProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Impressions & Recommendations</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            label="Severity Rating"
            id="severityRating"
            value={formData.severityRating}
            onChange={(e) => updateField("severityRating", e.target.value)}
            placeholder="e.g. Moderate oropharyngeal dysphagia"
          />
          <Input
            label="Risk Assessment"
            id="riskAssessment"
            value={formData.riskAssessment}
            onChange={(e) => updateField("riskAssessment", e.target.value)}
            placeholder="e.g. Moderate risk for aspiration"
          />
          <Input
            label="Recommended Diet - Solids"
            id="recommendedDietSolids"
            value={formData.recommendedDietSolids}
            onChange={(e) =>
              updateField("recommendedDietSolids", e.target.value)
            }
            placeholder="IDDSI level / description"
          />
          <Input
            label="Recommended Diet - Liquids"
            id="recommendedDietLiquids"
            value={formData.recommendedDietLiquids}
            onChange={(e) =>
              updateField("recommendedDietLiquids", e.target.value)
            }
            placeholder="IDDSI level / description"
          />
        </div>
        <Textarea
          label="Compensatory Strategies"
          id="strategies"
          rows={3}
          value={formData.strategies}
          onChange={(e) => updateField("strategies", e.target.value)}
          placeholder="Chin tuck, effortful swallow, double swallow, etc."
        />
        <Textarea
          label="Additional Recommendations"
          id="recommendations"
          rows={3}
          value={formData.recommendations}
          onChange={(e) => updateField("recommendations", e.target.value)}
        />
        <Textarea
          label="Follow-Up Plan"
          id="followUp"
          rows={2}
          value={formData.followUp}
          onChange={(e) => updateField("followUp", e.target.value)}
          placeholder="Re-evaluation timeline, therapy recommendations..."
        />
      </CardContent>
    </Card>
  );
}

function StepReview({ formData }: { formData: FEESEvaluation }) {
  return (
    <div className="space-y-6">
      {/* Print header */}
      <div className="hidden print:block text-center mb-6">
        <h1 className="text-xl font-bold">
          Fiberoptic Endoscopic Evaluation of Swallowing (FEES) Report
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Confidential Clinical Document
        </p>
      </div>

      <ReviewSection title="Patient Information">
        <ReviewRow label="Patient Name" value={formData.patientName} />
        <ReviewRow label="Date of Birth" value={formData.dob} />
        <ReviewRow label="MRN" value={formData.mrn} />
        <ReviewRow label="Facility" value={formData.facility} />
        <ReviewRow
          label="Referring Physician"
          value={formData.referringPhysician}
        />
        <ReviewRow label="Evaluation Date" value={formData.evaluationDate} />
        <ReviewRow label="Evaluator" value={formData.evaluatorName} />
        <ReviewRow label="Diagnosis" value={formData.diagnosis} />
      </ReviewSection>

      <ReviewSection title="Clinical History">
        <ReviewRow label="Medical History" value={formData.medicalHistory} />
        <ReviewRow
          label="Current Diet (Solids)"
          value={formData.currentDietSolids}
        />
        <ReviewRow
          label="Current Diet (Liquids)"
          value={formData.currentDietLiquids}
        />
        <ReviewRow
          label="Swallowing Complaints"
          value={formData.swallowingComplaints}
        />
        <ReviewRow
          label="Previous Studies"
          value={formData.previousStudies}
        />
      </ReviewSection>

      <ReviewSection title="FEES Findings">
        <ReviewRow
          label="Anatomy Observations"
          value={formData.anatomyObservations}
        />
        <ReviewRow
          label="Secretion Management"
          value={formData.secretionManagement}
        />
        <ReviewRow
          label="Sensation Testing"
          value={formData.sensationTesting}
        />
      </ReviewSection>

      {formData.trials.length > 0 && (
        <ReviewSection title="Swallow Trials">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-3 font-medium">#</th>
                  <th className="text-left py-2 pr-3 font-medium">
                    Consistency
                  </th>
                  <th className="text-left py-2 pr-3 font-medium">Bolus</th>
                  <th className="text-left py-2 pr-3 font-medium">P/A</th>
                  <th className="text-left py-2 pr-3 font-medium">Residue</th>
                  <th className="text-left py-2 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody>
                {formData.trials.map((trial, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-2 pr-3">{i + 1}</td>
                    <td className="py-2 pr-3">{trial.consistency}</td>
                    <td className="py-2 pr-3">{trial.bolus || "--"}</td>
                    <td className="py-2 pr-3">
                      {trial.penetrationAspiration}
                    </td>
                    <td className="py-2 pr-3">{trial.residue}</td>
                    <td className="py-2">{trial.notes || "--"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ReviewSection>
      )}

      <ReviewSection title="Impressions & Recommendations">
        <ReviewRow label="Severity Rating" value={formData.severityRating} />
        <ReviewRow label="Risk Assessment" value={formData.riskAssessment} />
        <ReviewRow
          label="Recommended Diet (Solids)"
          value={formData.recommendedDietSolids}
        />
        <ReviewRow
          label="Recommended Diet (Liquids)"
          value={formData.recommendedDietLiquids}
        />
        <ReviewRow label="Strategies" value={formData.strategies} />
        <ReviewRow
          label="Recommendations"
          value={formData.recommendations}
        />
        <ReviewRow label="Follow-Up" value={formData.followUp} />
      </ReviewSection>

      <div className="hidden print:block mt-12 pt-8 border-t border-border">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="border-b border-foreground mb-1 h-8" />
            <p className="text-sm">Evaluator Signature / Date</p>
          </div>
          <div>
            <div className="border-b border-foreground mb-1 h-8" />
            <p className="text-sm">Referring Physician Signature / Date</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Review Helpers ─── */

function ReviewSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">{children}</CardContent>
    </Card>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-4 py-1.5 border-b border-border/30 last:border-0">
      <span className="text-sm font-medium text-muted-foreground w-48 shrink-0">
        {label}
      </span>
      <span className="text-sm text-foreground whitespace-pre-wrap">
        {value || "--"}
      </span>
    </div>
  );
}
