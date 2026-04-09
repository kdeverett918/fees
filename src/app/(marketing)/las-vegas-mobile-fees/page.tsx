import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  House,
  MapPin,
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
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mobile FEES Las Vegas",
  description:
    "Mobile FEES LV provides mobile FEES evaluations in Las Vegas for home, bedside, SNF, assisted living, rehab, and physician-office settings.",
  keywords: [
    "mobile FEES Las Vegas",
    "Las Vegas bedside swallow study",
    "at home swallow evaluation Las Vegas",
    "concierge FEES Las Vegas",
  ],
  alternates: {
    canonical: "/las-vegas-mobile-fees",
  },
};

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Mobile FEES Las Vegas",
    url: absoluteUrl("/las-vegas-mobile-fees"),
    description:
      "Patient-focused landing page for Mobile FEES LV in Las Vegas, Nevada.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mobile FEES Las Vegas",
    serviceType: "Bedside Fiberoptic Endoscopic Evaluation of Swallowing",
    areaServed: siteConfig.serviceAreas,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl("/contact?path=patient&intent=appointment"),
    },
  },
];

const benefits = [
  {
    title: "Bedside or at-home convenience",
    description:
      "Ideal when transport is hard, the patient is medically fragile, or a faster swallow answer matters.",
    icon: House,
  },
  {
    title: "Same-visit next steps",
    description:
      "Patients and families get findings and practical recommendations immediately after the study.",
    icon: Clock3,
  },
  {
    title: "Built for local referrals",
    description:
      "Works for Las Vegas families, SNFs, rehab teams, assisted living communities, and physician-office referrals.",
    icon: Users,
  },
];

const fitChecks = [
  "Coughing, choking, or wet voice during meals",
  "Pneumonia history or aspiration concern",
  "Need for a bedside dysphagia answer without transport",
  "Homebound or medically complex patients who need a practical next step",
];

export default function LasVegasMobileFeesPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <div className="container mx-auto max-w-5xl px-4 py-12 space-y-16">
        <SeoBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            {
              label: "Mobile FEES Las Vegas",
              href: "/las-vegas-mobile-fees",
              current: true,
            },
          ]}
        />
        <PageHeader
          title="Mobile FEES in Las Vegas"
          description="A patient-focused landing page for families, concierge cases, and referral sources looking for a bedside swallow evaluation in the Las Vegas area."
        >
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge>Las Vegas search landing page</Badge>
            <Badge variant="secondary">Patient-first signup path</Badge>
            <Badge variant="outline">Bedside and concierge support</Badge>
          </div>
        </PageHeader>

        <section className="grid gap-8 rounded-[calc(var(--radius)*2)] border border-primary/15 bg-card p-8 shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-foreground">
              Looking for a mobile swallow evaluation instead of an outbound sales conversation?
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              This page is designed for the patient side of the market: families,
              caregivers, concierge cases, and referring clinicians who already know
              there is a swallowing concern and want a practical Las Vegas next step.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?path=patient&intent=appointment"
                className={buttonVariants({ size: "lg" })}
              >
                Request Appointment
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact?path=patient&intent=estimate"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Request Pricing Review
              </Link>
            </div>
          </div>

          <Card className="border-border bg-background/70">
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  Service area focus
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Mobile FEES LV is focused on the Las Vegas valley, including
                Henderson, North Las Vegas, Summerlin, Spring Valley, Paradise,
                and nearby service-area requests when feasible.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            When this page should convert well
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {benefits.map((item) => (
              <Card key={item.title} className="h-full">
                <CardContent className="space-y-3 pt-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius)] bg-primary-light">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="border-primary/15">
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">
                  Good fit indicators
                </h2>
              </div>
              <ul className="space-y-3">
                {fitChecks.map((check) => (
                  <li key={check} className="flex items-start gap-2">
                    <Stethoscope className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {check}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/15 bg-primary-light/25">
            <CardContent className="space-y-4 pt-6">
              <h2 className="text-2xl font-semibold text-foreground">
                Keep the next click easy
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The strongest organic pages do not stop at education. They move
                visitors into a short next-step action with the minimum amount of
                friction needed to qualify the request.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link
                  href="/for-patients"
                  className="rounded-[var(--radius)] border border-border bg-card p-4 transition-colors hover:border-primary/40"
                >
                  <p className="font-medium text-foreground">Read what to expect</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Plain-language guide for families and caregivers.
                  </p>
                </Link>
                <Link
                  href="/pricing"
                  className="rounded-[var(--radius)] border border-border bg-card p-4 transition-colors hover:border-primary/40"
                >
                  <p className="font-medium text-foreground">Review pricing</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Concise pricing and payment-path overview.
                  </p>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
}
