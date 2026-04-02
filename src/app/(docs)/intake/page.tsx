"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageHeader } from "@/components/ui/page-header";
import { cn } from "@/lib/utils";
import { Printer, RotateCcw } from "lucide-react";
import type { IntakeFormData } from "@/types";

const STORAGE_KEY = "fees-intake";

function defaultIntake(): IntakeFormData {
  return {
    referringFacility: "",
    referringPhysician: "",
    referringPhone: "",
    referringFax: "",
    patientName: "",
    dob: "",
    mrn: "",
    insurancePrimary: "",
    insuranceId: "",
    reasonForReferral: "",
    currentDiet: "",
    swallowingStatus: "",
    urgency: "routine",
    preferredDate: "",
    notes: "",
  };
}

export default function IntakePage() {
  const [formData, setFormData] = useState<IntakeFormData>(defaultIntake);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setFormData(JSON.parse(stored) as IntakeFormData);
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
    <K extends keyof IntakeFormData>(field: K, value: IntakeFormData[K]) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const resetForm = useCallback(() => {
    if (window.confirm("Reset all intake form data? This cannot be undone.")) {
      setFormData(defaultIntake());
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  if (!mounted) return null;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="no-print">
        <PageHeader
          title="FEES Intake / Referral Form"
          description="Complete this form to submit a referral for a FEES evaluation."
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
        </CardContent>
      </Card>

      {/* Clinical Info */}
      <Card>
        <CardHeader>
          <CardTitle>Clinical Information</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Textarea
            label="Reason for Referral"
            id="reasonForReferral"
            rows={3}
            value={formData.reasonForReferral}
            onChange={(e) => updateField("reasonForReferral", e.target.value)}
            placeholder="Clinical indication for FEES evaluation..."
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
