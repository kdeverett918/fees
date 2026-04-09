import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ClipboardList,
  FileText,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { SeoBreadcrumbs } from "@/components/seo/seo-breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { resourceDocuments } from "@/data/resources";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Facility Onboarding Packet",
  description:
    "Review the Mobile FEES LV facility onboarding packet for Las Vegas SNFs, ALFs, rehab programs, and referral teams before requesting a consult.",
  keywords: [
    "facility onboarding packet Las Vegas",
    "mobile FEES contract packet Las Vegas",
    "SNF FEES onboarding packet",
    "facility referral packet Las Vegas",
  ],
  alternates: {
    canonical: "/facility-onboarding-packet",
  },
};

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Facility Onboarding Packet",
    url: absoluteUrl("/facility-onboarding-packet"),
    description:
      "A facility-facing onboarding packet with contracts, referral forms, workflow documents, and launch steps for Mobile FEES LV in Las Vegas.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Facility onboarding packet",
    serviceType: "Mobile FEES onboarding support",
    areaServed: siteConfig.serviceAreas,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl("/contact?path=facility&intent=packet"),
    },
  },
];

const facilityPacketDocuments = resourceDocuments.filter(
  (document) => document.audience === "facility"
);

const launchSteps = [
  {
    title: "Review the packet",
    description:
      "Start with contracts, referral forms, privacy readiness, and reimbursement guardrails so the internal team sees the full workflow before the first call.",
    icon: FileText,
  },
  {
    title: "Choose the launch path",
    description:
      "Decide whether the immediate need is service rollout, packet review, physician referral support, or billing clarification.",
    icon: ClipboardList,
  },
  {
    title: "Submit the facility request",
    description:
      "Use the facility portal funnel so the consult or packet follow-up lands in the right queue instead of a generic contact inbox.",
    icon: Building2,
  },
];

const packetUseCases = [
  "SNFs and rehab teams preparing for bedside FEES access and consolidated-billing conversations",
  "Assisted living or memory-care communities building a cleaner resident referral process",
  "Physician offices that want a more methodical referral packet before sending bedside cases",
  "Operations leaders who want the documents first so the consult stays focused and efficient",
];

export default function FacilityOnboardingPacketPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <div className="container mx-auto max-w-6xl px-4 py-12 space-y-16">
        <SeoBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Facility Portal", href: "/facility-portal" },
            {
              label: "Facility Onboarding Packet",
              href: "/facility-onboarding-packet",
              current: true,
            },
          ]}
        />

        <PageHeader
          title="Facility Onboarding Packet"
          description="A self-serve packet for contracts, referral workflow, billing guardrails, and launch planning before the first facility consult."
        >
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge>Facility packet</Badge>
            <Badge variant="secondary">Contracts and workflow</Badge>
            <Badge variant="outline">Built for Las Vegas rollout planning</Badge>
          </div>
        </PageHeader>

        <section className="grid gap-8 rounded-[calc(var(--radius)*2)] border border-primary/15 bg-card p-8 shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-foreground">
              This page is designed to reduce the amount of one-off sales explanation.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Instead of asking every SNF, ALF, rehab team, or referral office to
              start from zero, this packet collects the main documents and the
              launch sequence in one place. Teams can review the workflow first,
              then submit a facility request when they are ready to move.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?path=facility&intent=packet"
                className={buttonVariants({ size: "lg" })}
              >
                Request Packet Follow-Up
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact?path=facility&intent=consult"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Request Facility Consult
              </Link>
            </div>
          </div>

          <Card className="border-border bg-background/80">
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  Best fit for
                </h3>
              </div>
              <ul className="space-y-3">
                {packetUseCases.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Stethoscope className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            What the facility packet includes
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {facilityPacketDocuments.map((document) => (
              <Card key={document.href} className="h-full">
                <CardContent className="space-y-4 pt-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-2">
                      <Badge variant="secondary">{document.category}</Badge>
                      <h3 className="text-lg font-semibold text-foreground">
                        {document.title}
                      </h3>
                    </div>
                    <FileText className="h-5 w-5 shrink-0 text-primary" />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {document.description}
                  </p>
                  <a
                    href={document.href}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({
                      variant: "outline",
                      className: "w-full sm:w-auto",
                    })}
                  >
                    Open Document
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="border-primary/15">
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center gap-2">
                <ClipboardList className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">
                  Recommended rollout sequence
                </h2>
              </div>
              <div className="grid gap-3">
                {launchSteps.map((step) => (
                  <div
                    key={step.title}
                    className="rounded-[var(--radius)] border border-border bg-card p-4"
                  >
                    <div className="flex items-center gap-2">
                      <step.icon className="h-4 w-4 text-primary" />
                      <p className="font-medium text-foreground">{step.title}</p>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/15 bg-primary-light/25">
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">
                  Why this page matters
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                A facility-facing funnel works better when teams can self-educate
                before the consult. This page gives administrators, rehab leads,
                and referral coordinators a practical packet so the first call
                can focus on fit, timing, and launch decisions instead of
                scattered document requests.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/facility-portal"
                  className={buttonVariants({
                    variant: "outline",
                    className: "w-full sm:w-auto",
                  })}
                >
                  Back to Facility Portal
                </Link>
                <Link
                  href="/resources"
                  className={buttonVariants({
                    variant: "outline",
                    className: "w-full sm:w-auto",
                  })}
                >
                  View Full Resource Library
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
}
