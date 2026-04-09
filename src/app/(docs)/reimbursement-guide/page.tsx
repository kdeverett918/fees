import type { Metadata } from "next";
import { BadgeDollarSign, CheckCircle, FileText, Landmark, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "SNF Reimbursement Guide",
  description:
    "A printable guide to Medicare Part A, Part B, and Medicaid payment pathways for mobile FEES in skilled nursing settings.",
};

const payerLanes = [
  {
    title: "1. Medicare Part A covered SNF stay",
    points: [
      "Confirm the resident is in a covered Part A stay on the date of service.",
      "Treat the mobile FEES service as a facility expense governed by the vendor agreement, because the service is usually bundled into the SNF PPS/consolidated billing framework.",
      "Use the FEES findings to support care planning, risk communication, therapy planning, and clinically appropriate charting.",
    ],
  },
  {
    title: "2. Medicare Part B resident in the SNF",
    points: [
      "Confirm the resident is no longer in the Part A covered stay and that the service is appropriate for Part B billing.",
      "The SNF generally owns the billing workflow when services are furnished under arrangement; the vendor supplies the report and supporting documentation.",
      "The contract should state that the facility is responsible for claim submission, denials, refunds, and payer compliance.",
    ],
  },
  {
    title: "3. Medicaid or managed care",
    points: [
      "Verify whether the specific plan or fee schedule recognizes FEES-related codes before scheduling.",
      "Check authorization rules, treating-provider rules, and whether the resident is dual eligible.",
      "If FEES is not payable, decide in advance whether the facility or patient will use a direct-pay arrangement.",
    ],
  },
];

const documentationPoints = [
  "Order or referral identifying the reason for instrumental assessment",
  "Payer lane confirmed before the visit",
  "Current diet, respiratory history, relevant diagnosis, and therapy notes sent with the referral",
  "Written FEES report available for the chart and interdisciplinary team",
  "Clear internal owner for billing, denials, and compliance follow-up",
];

const cautionPoints = [
  "Do not assume a FEES diagnosis automatically changes PDPM or payer reimbursement.",
  "Do not assume Nevada Medicaid or a managed care plan covers FEES just because bedside swallowing treatment is covered.",
  "Do not make the outside vendor responsible for a facility claim unless the contract explicitly supports that model and counsel approves it.",
];

export default function ReimbursementGuidePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <PageHeader
        title="SNF Medicare / Medicaid Reimbursement Guide"
        description="Use this print-friendly guide to sort each referral into the correct payment lane before scheduling mobile FEES."
      >
        <Badge>Operational guide only. Review with billing and compliance.</Badge>
      </PageHeader>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BadgeDollarSign className="h-5 w-5 text-primary" />
            The first question to answer
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>
            Before the facility books the exam, confirm whether the resident is
            in a covered Medicare Part A SNF stay, a Part B-only stay, Medicaid,
            managed care, or private pay. The correct answer determines who pays
            the vendor and who, if anyone, submits a claim.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {payerLanes.map((lane) => (
          <Card key={lane.title}>
            <CardHeader>
              <CardTitle className="text-lg">{lane.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {lane.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Documentation checklist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {documentationPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Compliance cautions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {cautionPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Landmark className="h-5 w-5 text-primary" />
            Why facilities still value FEES financially
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>
            Even when there is no separate outside-provider claim, mobile FEES
            can still produce operational value by reducing transfer friction,
            speeding swallowing decisions, improving documentation quality, and
            helping the team make better care-plan and diet decisions at the
            bedside.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
