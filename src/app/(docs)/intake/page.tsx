"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageHeader } from "@/components/ui/page-header";
import { cn } from "@/lib/utils";
import { Printer, RotateCcw } from "lucide-react";
import { usePersistedForm } from "@/hooks/use-persisted-form";
import type { IntakeFormData } from "@/types";

const STORAGE_KEY = "mobile-fees-lv-intake";

function defaultIntake(): IntakeFormData {
  return {
    referringFacility: "",
    referringPhysician: "",
    referralContactName: "",
    referralContactEmail: "",
    referringPhone: "",
    referringFax: "",
    patientName: "",
    dob: "",
    mrn: "",
    insurancePrimary: "",
    insuranceId: "",
    payerLane: "",
    requestedService: "",
    orderStatus: "",
    reasonForReferral: "",
    diagnosis: "",
    aspirationConcerns: "",
    respiratorySupport: "",
    isolationPrecautions: "",
    currentDiet: "",
    swallowingStatus: "",
    decisionMakerName: "",
    decisionMakerPhone: "",
    urgency: "routine",
    preferredDate: "",
    bestVisitWindow: "",
    notes: "",
  };
}

export default function IntakePage() {
  const {
    hydrated,
    value: formData,
    setValue: setFormData,
    reset,
  } = usePersistedForm<IntakeFormData>(STORAGE_KEY, defaultIntake());

  const updateField = <K extends keyof IntakeFormData>(
    field: K,
    value: IntakeFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    if (window.confirm("Reset all intake form data? This cannot be undone.")) {
      reset(defaultIntake());
    }
  };

  if (!hydrated) {
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="no-print">
        <PageHeader
          title="FEES Intake / Referral Form"
          description="Complete this referral packet to prepare a Mobile FEES LV visit. Draft data saves locally on this device."
        />
      </div>

      {/* Referring Provider */}
      <Card>
        <CardHeader>
          <CardTitle>Referring Provider Information</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <Input
            label="Referring Facility"
            id="referringFacility"
            value={formData.referringFacility}
            onChange={(e) => updateField("referringFacility", e.target.value)}
          />
        <Input
          label="Referring Physician"
          id="referringPhysician"
          value={formData.referringPhysician}
          onChange={(e) =>
            updateField("referringPhysician", e.target.value)
          }
        />
        <Input
          label="Referral Contact Name"
          id="referralContactName"
          value={formData.referralContactName}
          onChange={(e) => updateField("referralContactName", e.target.value)}
        />
        <Input
          label="Referral Contact Email"
          id="referralContactEmail"
          type="email"
          value={formData.referralContactEmail}
          onChange={(e) => updateField("referralContactEmail", e.target.value)}
        />
        <Input
          label="Phone"
          id="referringPhone"
            type="tel"
            value={formData.referringPhone}
            onChange={(e) => updateField("referringPhone", e.target.value)}
          />
          <Input
            label="Fax"
            id="referringFax"
            type="tel"
            value={formData.referringFax}
            onChange={(e) => updateField("referringFax", e.target.value)}
          />
        </CardContent>
      </Card>

      {/* Patient Demographics */}
      <Card>
        <CardHeader>
          <CardTitle>Patient Demographics</CardTitle>
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
        </CardContent>
      </Card>

      {/* Insurance */}
      <Card>
        <CardHeader>
          <CardTitle>Insurance Information</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <Input
            label="Primary Insurance"
            id="insurancePrimary"
            value={formData.insurancePrimary}
            onChange={(e) => updateField("insurancePrimary", e.target.value)}
          />
          <Input
            label="Insurance ID"
            id="insuranceId"
            value={formData.insuranceId}
            onChange={(e) => updateField("insuranceId", e.target.value)}
          />
          <div className="sm:col-span-2 space-y-1.5">
            <label className="text-sm font-medium text-foreground" htmlFor="payerLane">
              Payer Lane
            </label>
            <select
              id="payerLane"
              value={formData.payerLane}
              onChange={(e) => updateField("payerLane", e.target.value)}
              className="flex h-10 w-full rounded-[var(--radius)] border border-border bg-card px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="">Select payer lane</option>
              <option value="medicare-part-a">Medicare Part A SNF stay</option>
              <option value="medicare-part-b">Medicare Part B</option>
              <option value="medicare-advantage">Medicare Advantage</option>
              <option value="medicaid">Medicaid / Medicaid managed care</option>
              <option value="commercial">Commercial / private insurance</option>
              <option value="self-pay">Self-pay / concierge</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Clinical Info */}
      <Card>
        <CardHeader>
          <CardTitle>Clinical Information</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              label="Requested Service"
              id="requestedService"
              value={formData.requestedService}
              onChange={(e) => updateField("requestedService", e.target.value)}
              placeholder="FEES, bedside swallow consult, repeat FEES..."
            />
            <Input
              label="Order Status"
              id="orderStatus"
              value={formData.orderStatus}
              onChange={(e) => updateField("orderStatus", e.target.value)}
              placeholder="Order received, pending signature, verbal order..."
            />
          </div>
          <Textarea
            label="Reason for Referral"
            id="reasonForReferral"
            rows={3}
            value={formData.reasonForReferral}
            onChange={(e) => updateField("reasonForReferral", e.target.value)}
            placeholder="Clinical indication for FEES evaluation..."
          />
          <Textarea
            label="Relevant Diagnosis / History"
            id="diagnosis"
            rows={2}
            value={formData.diagnosis}
            onChange={(e) => updateField("diagnosis", e.target.value)}
            placeholder="Stroke, pneumonia, COPD, neuro diagnosis, weight loss..."
          />
          <Textarea
            label="Aspiration / Swallow Concerns"
            id="aspirationConcerns"
            rows={2}
            value={formData.aspirationConcerns}
            onChange={(e) => updateField("aspirationConcerns", e.target.value)}
            placeholder="Coughing, wet voice, recurrent pneumonia, meal fatigue..."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              label="Current Diet"
              id="currentDiet"
              value={formData.currentDiet}
              onChange={(e) => updateField("currentDiet", e.target.value)}
              placeholder="e.g. Regular solids, thin liquids"
            />
            <Input
              label="Swallowing Status"
              id="swallowingStatus"
              value={formData.swallowingStatus}
              onChange={(e) =>
                updateField("swallowingStatus", e.target.value)
              }
              placeholder="e.g. NPO, modified diet"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              label="Respiratory Support"
              id="respiratorySupport"
              value={formData.respiratorySupport}
              onChange={(e) => updateField("respiratorySupport", e.target.value)}
              placeholder="Room air, O2, trach, vent..."
            />
            <Input
              label="Isolation / PPE Precautions"
              id="isolationPrecautions"
              value={formData.isolationPrecautions}
              onChange={(e) =>
                updateField("isolationPrecautions", e.target.value)
              }
              placeholder="Droplet, contact, none..."
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Decision Maker / Scheduling Contact</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <Input
            label="Decision Maker Name"
            id="decisionMakerName"
            value={formData.decisionMakerName}
            onChange={(e) => updateField("decisionMakerName", e.target.value)}
          />
          <Input
            label="Decision Maker Phone"
            id="decisionMakerPhone"
            type="tel"
            value={formData.decisionMakerPhone}
            onChange={(e) => updateField("decisionMakerPhone", e.target.value)}
          />
        </CardContent>
      </Card>

      {/* Scheduling */}
      <Card>
        <CardHeader>
          <CardTitle>Scheduling</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-3 block">
              Urgency
            </label>
            <div className="flex gap-4">
              {(["routine", "urgent", "stat"] as const).map((level) => (
                <label
                  key={level}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="urgency"
                    value={level}
                    checked={formData.urgency === level}
                    onChange={() => updateField("urgency", level)}
                    className="h-4 w-4 accent-primary cursor-pointer"
                  />
                  <span
                    className={cn(
                      "text-sm font-medium capitalize",
                      formData.urgency === level
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {level}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <Input
            label="Preferred Date"
            id="preferredDate"
            type="date"
            value={formData.preferredDate}
            onChange={(e) => updateField("preferredDate", e.target.value)}
          />
          <Input
            label="Best Visit Window"
            id="bestVisitWindow"
            value={formData.bestVisitWindow}
            onChange={(e) => updateField("bestVisitWindow", e.target.value)}
            placeholder="AM rounds, after breakfast, afternoons..."
          />
          <Textarea
            label="Additional Notes"
            id="notes"
            rows={3}
            value={formData.notes}
            onChange={(e) => updateField("notes", e.target.value)}
            placeholder="Any additional information relevant to scheduling or the evaluation..."
          />
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="no-print flex items-center justify-end gap-2 pt-4 border-t border-border">
        <Button variant="ghost" onClick={resetForm}>
          <RotateCcw className="h-4 w-4 mr-1" />
          Reset
        </Button>
        <Button variant="default" onClick={() => window.print()}>
          <Printer className="h-4 w-4 mr-1" />
          Print
        </Button>
      </div>
    </div>
  );
}
