import type { Metadata } from "next";
import Link from "next/link";
import { Download, ExternalLink, FileText, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { fillableForms, resourceDocuments, researchSources } from "@/data/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Download Mobile FEES LV contracts, patient packets, onboarding documents, and fillable forms for Las Vegas facilities and patients.",
};

const audienceLabel: Record<(typeof resourceDocuments)[number]["audience"], string> =
  {
    facility: "Facility",
    patient: "Patient",
    all: "All Audiences",
  };

export default function ResourcesPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 space-y-16">
      <PageHeader
        title="Resources & Downloadable Documents"
        description="Facility-ready templates, patient-facing handouts, and research-backed guides built to support contracting, scheduling, and education."
      >
        <div className="flex flex-wrap gap-2 pt-2">
          <Badge>Printable documents</Badge>
          <Badge variant="secondary">Fillable browser forms</Badge>
          <Badge variant="secondary">Research-backed copy</Badge>
          <Badge variant="outline">Built for Las Vegas facilities and concierge visits</Badge>
        </div>
      </PageHeader>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-foreground">
            Fillable Forms
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Use these in-browser builders when you want a methodical, click-through
            workflow instead of a blank printable document.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {fillableForms.map((form) => (
            <Card key={form.href} className="h-full">
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <Badge variant={form.audience === "all" ? "outline" : "secondary"}>
                    {audienceLabel[form.audience]}
                  </Badge>
                  <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {form.category}
                  </span>
                </div>
                <CardTitle className="text-xl">{form.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {form.description}
                </p>
                <Link
                  href={form.href}
                  className={buttonVariants({ className: "w-full sm:w-auto" })}
                >
                  Open Fillable Form
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card className="h-full border-primary/15">
          <CardHeader className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <Badge>Facility Portal Bundle</Badge>
              <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Fast Path
              </span>
            </div>
            <CardTitle className="text-xl">
              Start with the Facility Portal
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              If you are an SNF, rehab team, ALF, memory-care program, or
              physician office, use the portal first. It routes you into
              onboarding, pricing, packet review, and setting-specific pages.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/facility-portal"
                className={buttonVariants({ className: "w-full sm:w-auto" })}
              >
                Open Facility Portal
              </Link>
              <Link
                href="/facility-onboarding-packet"
                className={buttonVariants({
                  variant: "outline",
                  className: "w-full sm:w-auto",
                })}
              >
                View Onboarding Packet
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="h-full border-primary/15">
          <CardHeader className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <Badge variant="secondary">Patient Portal Bundle</Badge>
              <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Fast Path
              </span>
            </div>
            <CardTitle className="text-xl">
              Start with the Concierge Patient Portal
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              If you are a family, caregiver, or self-pay patient, use the
              patient portal first. It routes you into appointment requests,
              estimates, patient education, and at-home pathways.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/concierge-patient-portal"
                className={buttonVariants({ className: "w-full sm:w-auto" })}
              >
                Open Patient Portal
              </Link>
              <Link
                href="/for-patients"
                className={buttonVariants({
                  variant: "outline",
                  className: "w-full sm:w-auto",
                })}
              >
                View Patient Guide
              </Link>
            </div>
          </CardContent>
        </Card>

      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        {resourceDocuments.map((document) => (
          <Card key={document.href} className="h-full">
            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius)] bg-primary-light">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant={document.audience === "all" ? "outline" : "secondary"}>
                    {audienceLabel[document.audience]}
                  </Badge>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {document.format}
                  </p>
                  <p className="mt-1 text-xs font-medium text-primary">{document.category}</p>
                </div>
              </div>
              <CardTitle className="text-xl">{document.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {document.description}
              </p>
              <a
                href={document.href}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "outline", className: "w-full sm:w-auto" })}
              >
                <Download className="h-4 w-4" />
                Open Document
              </a>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 rounded-[var(--radius)] border border-primary-light bg-primary-light/30 p-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold text-foreground">
              Compliance Notes
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            These materials are practical business templates, not legal advice or payer
            guarantees. Final contract language, Medicare billing workflow, and Medicaid or
            managed-care coverage should be reviewed with the facility&apos;s billing lead,
            compliance team, and legal counsel before go-live.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            The reimbursement guide intentionally frames FEES as a clinical and workflow
            advantage, not as an automatic revenue event. That keeps the sales language aligned
            with current CMS and Nevada payer realities.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">
            Need a customized packet?
          </h3>
          <p className="text-sm text-muted-foreground">
            Ask for a facility-specific onboarding packet, a concierge patient bundle,
            or a Las Vegas appointment workflow tailored to your service area and final prices.
          </p>
          <Link href="/contact" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}>
            Request a Custom Packet
          </Link>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-foreground">
            Research Basis
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
            These pages and documents were updated against primary CMS materials, Nevada
            Medicaid guidance, and ASHA professional references reviewed on April 2, 2026.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {researchSources.map((source) => (
            <Card key={source.href}>
              <CardContent className="space-y-3 pt-6">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {source.publisher}
                  </p>
                  <h3 className="text-base font-semibold text-foreground">
                    {source.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {source.description}
                </p>
                <a
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  View source
                  <ExternalLink className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
