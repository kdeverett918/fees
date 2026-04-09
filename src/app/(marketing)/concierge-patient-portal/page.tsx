import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  CalendarCheck2,
  Clock3,
  Heart,
  Home,
  MapPinned,
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
  title: "Concierge Patient Portal",
  description:
    "The Mobile FEES LV concierge patient portal for Las Vegas families, self-pay cases, Good Faith Estimate requests, and at-home or bedside appointment signups.",
  keywords: [
    "concierge patient portal Las Vegas",
    "Mobile FEES LV patient portal",
    "Las Vegas swallow evaluation request",
    "Good Faith Estimate FEES Las Vegas",
  ],
  alternates: {
    canonical: "/concierge-patient-portal",
  },
};

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Concierge Patient Portal",
    url: absoluteUrl("/concierge-patient-portal"),
    description:
      "Patient-facing portal for concierge FEES requests, Good Faith Estimates, and at-home or bedside appointment pathways in Las Vegas.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Concierge mobile FEES portal",
    serviceType: "Mobile FEES evaluation",
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

const portalActions = [
  {
    title: "Request appointment",
    description:
      "Start the shortest route to a concierge patient visit, swallow consult, or bedside FEES request.",
    href: "/contact?path=patient&intent=appointment",
    icon: CalendarCheck2,
  },
  {
    title: "Request estimate",
    description:
      "Use the patient funnel to request pricing guidance or a Good Faith Estimate review before scheduling.",
    href: "/contact?path=patient&intent=estimate",
    icon: BadgeDollarSign,
  },
  {
    title: "Review at-home options",
    description:
      "Open the home-visit pathway if the patient is in a private residence or needs a more practical in-home route.",
    href: "/at-home-swallow-evaluation-las-vegas",
    icon: Home,
  },
  {
    title: "Read what to expect",
    description:
      "Open the patient guide if the family needs a plain-language explanation of FEES before submitting.",
    href: "/for-patients",
    icon: Heart,
  },
];

const patientFit = [
  "Las Vegas families coordinating care for a home-based or bedside swallowing concern",
  "Concierge self-pay cases that need a direct scheduling route",
  "Patients who need Good Faith Estimate guidance before deciding",
  "Homebound or transport-sensitive cases that still need a clear next step",
];

const portalSteps = [
  {
    title: "Choose the patient goal",
    description:
      "Appointment request, estimate review, or a patient-facing information path.",
    icon: Stethoscope,
  },
  {
    title: "Share the minimum details",
    description:
      "Location, service goal, referral status, and preferred timing.",
    icon: Clock3,
  },
  {
    title: "Get the callback plan",
    description:
      "We review fit, confirm the likely next step, and respond within one business day.",
    icon: ShieldCheck,
  },
];

export default function ConciergePatientPortalPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <div className="container mx-auto max-w-6xl px-4 py-12 space-y-16">
        <SeoBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            {
              label: "Concierge Patient Portal",
              href: "/concierge-patient-portal",
              current: true,
            },
          ]}
        />
        <PageHeader
          title="Concierge Patient Portal"
          description="A patient-facing front door for Las Vegas appointment requests, Good Faith Estimate review, and at-home or bedside FEES signups."
        >
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge>Patient-facing portal</Badge>
            <Badge variant="secondary">Concierge and self-pay pathway</Badge>
            <Badge variant="outline">Las Vegas patient signup</Badge>
          </div>
        </PageHeader>

        <section className="grid gap-8 rounded-[calc(var(--radius)*2)] border border-primary/15 bg-card p-8 shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-foreground">
              This portal is built for patients and families, not facility workflow.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              If the goal is to request a concierge appointment, understand cost,
              or figure out whether an at-home or bedside visit makes sense, this
              is the right front door. It keeps patient intake separate from
              facility onboarding so the signup path stays methodical and short.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?path=patient&intent=appointment"
                className={buttonVariants({ size: "lg" })}
              >
                Start Patient Request
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact?path=patient&intent=estimate"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Request Estimate
              </Link>
            </div>
          </div>

          <Card className="border-border bg-background/70">
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center gap-2">
                <MapPinned className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  Service area
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Mobile FEES LV focuses on Las Vegas, Henderson, North Las Vegas,
                Summerlin, Spring Valley, Paradise, and nearby requests when the
                route and schedule fit.
              </p>
              <Link
                href="/facility-portal"
                className="text-sm font-medium text-primary hover:underline"
              >
                Looking for the facility side? Open the Facility Portal.
              </Link>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            What you can do inside the patient portal
          </h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {portalActions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[var(--radius)] border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <item.icon className="h-5 w-5 text-primary" />
                <p className="mt-3 font-semibold text-foreground">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="border-primary/15">
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">
                  This portal is built for
                </h2>
              </div>
              <ul className="space-y-3">
                {patientFit.map((item) => (
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

          <Card className="border-primary/15 bg-primary-light/25">
            <CardContent className="space-y-4 pt-6">
              <h2 className="text-2xl font-semibold text-foreground">
                How the concierge signup works
              </h2>
              <div className="grid gap-3">
                {portalSteps.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[var(--radius)] border border-border bg-card p-4"
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="h-4 w-4 text-primary" />
                      <p className="font-medium text-foreground">{item.title}</p>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
}
