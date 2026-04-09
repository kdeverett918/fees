import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  Building2,
  FileText,
  Mail,
  MapPinned,
  Phone,
} from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Facility Portal",
  description:
    "A simple facility portal for Las Vegas consults, onboarding, and referral setup.",
  keywords: [
    "facility FEES portal Las Vegas",
    "mobile FEES facility consult Las Vegas",
    "SNF FEES onboarding Las Vegas",
    "facility dysphagia workflow Las Vegas",
  ],
  alternates: {
    canonical: "/facility-portal",
  },
};

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Facility Portal",
    url: absoluteUrl("/facility-portal"),
    description:
      "Facility-facing portal for onboarding, packet review, and consult requests in Las Vegas.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Facility mobile FEES portal",
    serviceType: "Mobile FEES facility consult and onboarding",
    areaServed: siteConfig.serviceAreas,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl("/contact?path=facility&intent=consult"),
    },
  },
];

export default function FacilityPortalPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <div className="container mx-auto max-w-6xl px-4 py-12 space-y-12">
        <PageHeader
          title="Facility Portal"
          description="Request a consult, review pricing, or open the onboarding packet for your Las Vegas facility."
        >
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge>Facility portal</Badge>
            <Badge variant="secondary">Las Vegas</Badge>
          </div>
        </PageHeader>

        {/* Pricing + CTAs */}
        <section className="grid gap-6 rounded-[calc(var(--radius)*2)] border border-primary/15 bg-card p-8 shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <BadgeDollarSign className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-semibold text-foreground">
                $350 per FEES study
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Flat rate per evaluation. Facilities can submit claims to
              Medicare or Medicaid for reimbursement.{" "}
              <Link
                href="/pricing"
                className="font-medium text-primary hover:underline"
              >
                Full pricing and reimbursement details
              </Link>
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact?path=facility&intent=consult"
                className={buttonVariants({ size: "lg" })}
              >
                Request a Consult
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/facility-onboarding-packet"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Open Onboarding Packet
              </Link>
            </div>
          </div>

          <Card className="border-border bg-background/80">
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center gap-2">
                <MapPinned className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  Service area
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Las Vegas-area SNFs, rehab programs, assisted living, physician
                offices, and referral teams.
              </p>
              <Link
                href="/concierge-patient-portal"
                className="text-sm font-medium text-primary hover:underline"
              >
                Looking for the patient side?
              </Link>
            </CardContent>
          </Card>
        </section>

        {/* How it works */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            How it works
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { step: "1", label: "Request a consult or open the packet" },
              { step: "2", label: "We confirm details and timing" },
              { step: "3", label: "FEES is performed bedside at your facility" },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-center gap-3 rounded-[var(--radius)] border border-border bg-card p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                  {item.step}
                </div>
                <p className="text-sm font-medium text-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick links */}
        <section className="grid gap-4 md:grid-cols-3">
          <Link
            href="/contact?path=facility&intent=consult"
            className="rounded-[var(--radius)] border border-border bg-card p-5 transition-colors hover:border-primary/40"
          >
            <Building2 className="h-5 w-5 text-primary" />
            <p className="mt-3 text-lg font-semibold text-foreground">
              Request a consult
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Start a conversation about adding mobile FEES.
            </p>
          </Link>
          <Link
            href="/facility-onboarding-packet"
            className="rounded-[var(--radius)] border border-border bg-card p-5 transition-colors hover:border-primary/40"
          >
            <FileText className="h-5 w-5 text-primary" />
            <p className="mt-3 text-lg font-semibold text-foreground">
              Onboarding packet
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Contracts, setup documents, and workflow guides.
            </p>
          </Link>
          <Link
            href="/for-facilities"
            className="rounded-[var(--radius)] border border-border bg-card p-5 transition-colors hover:border-primary/40"
          >
            <BadgeDollarSign className="h-5 w-5 text-primary" />
            <p className="mt-3 text-lg font-semibold text-foreground">
              Partnership Details
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Benefits, billing workflow, and contract overview.
            </p>
          </Link>
        </section>

        {/* Contact info */}
        <section className="rounded-[var(--radius)] border border-primary-light bg-primary-light/30 p-8 space-y-4 text-center">
          <h2 className="text-2xl font-semibold text-foreground">
            Questions? Reach out directly.
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a
              href="tel:+19374899209"
              className="flex items-center gap-2 font-medium text-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4 text-primary" />
              (937) 489-9209
            </a>
            <a
              href="mailto:kristine@thetechslp.com"
              className="flex items-center gap-2 font-medium text-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4 text-primary" />
              kristine@thetechslp.com
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
