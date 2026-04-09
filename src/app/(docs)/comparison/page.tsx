import type { Metadata } from "next";
import { CheckCircle, Clock3, Hospital, MonitorPlay } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "FEES vs Outpatient MBSS",
  description:
    "Print-friendly comparison sheet for mobile FEES versus outpatient modified barium swallow studies.",
};

const comparisonRows = [
  {
    label: "Where it happens",
    fees: "Bedside in the SNF, rehab unit, assisted living, or home.",
    mbss: "Radiology or outpatient imaging department.",
  },
  {
    label: "Transport requirements",
    fees: "Minimal. The clinician travels to the resident.",
    mbss: "Requires transport coordination and a receiving radiology slot.",
  },
  {
    label: "Radiation exposure",
    fees: "None.",
    mbss: "Yes, fluoroscopy is required.",
  },
  {
    label: "Strongest information",
    fees: "Secretion management, airway protection, residue, vocal fold visibility, and strategy testing in the real bedside environment.",
    mbss: "Bolus flow under fluoroscopy, oral phase visibility, and broader view of swallow timing during the study.",
  },
  {
    label: "Key limitation",
    fees: "Does not visualize the oral phase or the full esophageal phase.",
    mbss: "Requires off-site access and is less convenient for medically fragile or transport-limited residents.",
  },
  {
    label: "Often preferred when",
    fees: "The resident is fragile, transport is difficult, secretion status matters, or the team needs repeat bedside follow-up.",
    mbss: "You need fluoroscopic visualization of oral phase mechanics or broader bolus flow through the swallow sequence.",
  },
];

const feesPros = [
  "Portable and fast to operationalize",
  "No radiation",
  "Strong bedside relevance for fragile residents",
  "Useful for repeat reassessment and strategy retesting",
];

const mbssPros = [
  "Visualizes the oral phase and fluoroscopic swallow sequence",
  "Helpful when broader structural flow questions remain",
  "Often part of established hospital radiology workflows",
];

export default function ComparisonPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <PageHeader
        title="Mobile FEES vs Outpatient MBSS"
        description="Use this comparison sheet to explain why bedside FEES may be the better first step for some residents, while MBSS remains important for other questions."
      >
        <Badge>There is no universal wait-time benchmark. Operational delay depends on local transport and radiology capacity.</Badge>
      </PageHeader>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Side-by-side comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-semibold text-foreground">Topic</th>
                  <th className="py-3 pr-4 font-semibold text-foreground">Mobile FEES</th>
                  <th className="py-3 font-semibold text-foreground">Outpatient MBSS / VFSS</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-border/60 align-top">
                    <td className="py-3 pr-4 font-medium text-foreground">{row.label}</td>
                    <td className="py-3 pr-4 text-muted-foreground">{row.fees}</td>
                    <td className="py-3 text-muted-foreground">{row.mbss}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-4 md:hidden">
            {comparisonRows.map((row) => (
              <div
                key={row.label}
                className="rounded-[var(--radius)] border border-border p-4"
              >
                <h3 className="text-sm font-semibold text-foreground">{row.label}</h3>
                <div className="mt-3 space-y-3 text-sm text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground">Mobile FEES</p>
                    <p>{row.fees}</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Outpatient MBSS / VFSS</p>
                    <p>{row.mbss}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MonitorPlay className="h-5 w-5 text-primary" />
              FEES strengths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {feesPros.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Hospital className="h-5 w-5 text-primary" />
              MBSS strengths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {mbssPros.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock3 className="h-5 w-5 text-primary" />
            How to explain the timing issue
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>
            The strongest operational case for bedside FEES is not that every
            outpatient MBSS is delayed. It is that FEES avoids the off-site
            scheduling sequence entirely. If the resident is fragile, transport
            limited, or the team needs an answer now, that difference matters.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
