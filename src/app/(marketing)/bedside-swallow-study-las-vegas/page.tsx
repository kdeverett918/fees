import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BedDouble,
  Building2,
  Clock3,
  MapPinned,
  ShieldCheck,
  Stethoscope,
  Truck,
} from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { SeoBreadcrumbs } from "@/components/seo/seo-breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bedside Swallow Study Las Vegas",
  description:
    "Need a bedside swallow study in Las Vegas? Mobile FEES LV provides bedside FEES visits for medically fragile, bedbound, or transport-sensitive patients.",
  keywords: [
    "bedside swallow study Las Vegas",
    "bedside swallow evaluation Las Vegas",
    "mobile FEES bedside Las Vegas",
    "portable swallow study Las Vegas",
  ],
  alternates: {
    canonical: "/bedside-swallow-study-las-vegas",
  },
};

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Bedside Swallow Study Las Vegas",
    url: absoluteUrl("/bedside-swallow-study-las-vegas"),
    description:
      "Information for patients, families, and facilities looking for a bedside swallow study in Las Vegas.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bedside swallow study in Las Vegas",
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

const bedsideReasons = [
  {
    title: "Avoid transport friction",
    description:
      "When the patient is frail, exhausted, on isolation precautions, or simply not a good transport candidate, bedside FEES keeps the evaluation where care is already happening.",
    icon: Truck,
  },
  {
    title: "Get a faster pharyngeal answer",
    description:
      "FEES is often useful when the urgent question is airway protection, secretion management, residue, and meal-time safety rather than radiology scheduling logistics.",
    icon: Clock3,
  },
  {
    title: "Work across care settings",
    description:
      "The bedside pathway can support private homes, SNFs, assisted living, rehab, and physician-directed cases throughout the Las Vegas valley.",
    icon: Building2,
  },
];

const fitSignals = [
  "The patient is bedbound or becomes medically unstable with transport.",
  "Meals trigger coughing, throat clearing, wet voice, or recurrent airway concern.",
  "A facility or family needs a practical next step now instead of waiting on radiology.",
  "The care team expects bedside recommendations to affect diet, strategies, or follow-up planning.",
];

const includedItems = [
  "Portable scope, HD camera, monitor, and bedside-ready setup",
  "Review of current history, symptoms, diet, and referral context",
  "Real-time discussion of findings and practical next steps",
  "Written report delivery after the visit",
];

export default function BedsideSwallowStudyLasVegasPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <div className="container mx-auto max-w-5xl px-4 py-12 space-y-16">
        <SeoBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Mobile FEES Las Vegas", href: "/las-vegas-mobile-fees" },
            {
              label: "Bedside Swallow Study",
              href: "/bedside-swallow-study-las-vegas",
              current: true,
            },
          ]}
        />
        <PageHeader
          title="Bedside Swallow Study in Las Vegas"
          description="For patients, families, and care teams who need a bedside swallowing option without turning the patient into a transport project."
        >
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge>Bedside option</Badge>
            <Badge variant="secondary">Transport-sensitive patients</Badge>
            <Badge variant="outline">Request appointment</Badge>
          </div>
        </PageHeader>

        <section className="grid gap-8 rounded-[calc(var(--radius)*2)] border border-primary/15 bg-card p-8 shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-foreground">
              Bedside care is often the most practical option when leaving the
              room is difficult.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              That usually means the patient cannot easily leave the room, the
              family wants clarity fast, or the referral team needs a bedside
              instrumental answer without a long scheduling chain.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?path=patient&intent=appointment"
                className={buttonVariants({ size: "lg" })}
              >
                Request Bedside Appointment
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
                <MapPinned className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  Las Vegas bedside service area
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Mobile FEES LV focuses on Las Vegas, Henderson, North Las Vegas,
                Summerlin, Spring Valley, Paradise, and nearby requests when the
                schedule and location make sense.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Why bedside FEES can be the right fit
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {bedsideReasons.map((item) => (
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
                <BedDouble className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">
                  Strong bedside fit indicators
                </h2>
              </div>
              <ul className="space-y-3">
                {fitSignals.map((signal) => (
                  <li key={signal} className="flex items-start gap-2">
                    <Stethoscope className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {signal}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/15 bg-primary-light/25">
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">
                  What the visit is designed to include
                </h2>
              </div>
              <ul className="space-y-3">
                {includedItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Stethoscope className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link
                  href="/what-is-fees"
                  className="rounded-[var(--radius)] border border-border bg-card p-4 transition-colors hover:border-primary/40"
                >
                  <p className="font-medium text-foreground">Learn how FEES works</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Plain-language education for families and caregivers.
                  </p>
                </Link>
                <Link
                  href="/for-patients"
                  className="rounded-[var(--radius)] border border-border bg-card p-4 transition-colors hover:border-primary/40"
                >
                  <p className="font-medium text-foreground">Read what to expect</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Preparation, visit flow, and result discussion.
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
