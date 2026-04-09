import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck2,
  Clock3,
  MapPinned,
  Phone,
  Mail,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Patient Portal",
  description:
    "Request a mobile FEES appointment or estimate in Las Vegas.",
  keywords: [
    "patient portal Las Vegas FEES",
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
    name: "Patient Portal",
    url: absoluteUrl("/concierge-patient-portal"),
    description:
      "Patient portal for FEES appointments, estimates, and at-home visits in Las Vegas.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mobile FEES patient portal",
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

const steps = [
  {
    title: "Request an appointment or estimate",
    icon: CalendarCheck2,
  },
  {
    title: "We confirm details and timing",
    icon: Clock3,
  },
  {
    title: "We come to you for the visit",
    icon: ShieldCheck,
  },
] as const;

export default function ConciergePatientPortalPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <div className="container mx-auto max-w-6xl px-4 py-12 space-y-12">
        <PageHeader
          title="Patient Portal"
          description="Request an appointment or estimate. We follow up within one business day."
        >
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge>Patients & families</Badge>
            <Badge variant="secondary">Las Vegas</Badge>
          </div>
        </PageHeader>

        {/* Hero section with CTAs */}
        <section className="grid gap-6 rounded-[calc(var(--radius)*2)] border border-primary/15 bg-card p-8 shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-foreground">
              Schedule care without the runaround.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              Request an appointment or estimate. We come to the home, facility,
              or bedside, so there is no clinic travel to coordinate.
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
                Request Estimate
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
                Las Vegas, Henderson, North Las Vegas, Summerlin, Spring Valley,
                Paradise, and nearby areas.
              </p>
              <Link
                href="/facility-portal"
                className="text-sm font-medium text-primary hover:underline"
              >
                Looking for the facility side?
              </Link>
            </CardContent>
          </Card>
        </section>

        {/* Pricing */}
        <section className="grid gap-4 md:grid-cols-2">
          <Card className="border-primary/15">
            <CardContent className="space-y-3 pt-6">
              <div className="flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  Mobile FEES Visit
                </h3>
              </div>
              <p className="text-3xl font-bold text-foreground">$250</p>
              <p className="text-sm text-muted-foreground">
                Cash pay. In-person swallowing evaluation at your location with
                real-time video. Results and recommendations same day.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/15">
            <CardContent className="space-y-3 pt-6">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  Virtual Consult
                </h3>
              </div>
              <p className="text-3xl font-bold text-foreground">$75</p>
              <p className="text-sm text-muted-foreground">
                Telehealth wellness consultation. Review your swallowing
                concerns, history, and next steps from home.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* How it works + Contact */}
        <section className="grid gap-6 lg:grid-cols-2">
          <Card className="border-primary/15 bg-primary-light/25">
            <CardContent className="space-y-4 pt-6">
              <h2 className="text-2xl font-semibold text-foreground">
                How it works
              </h2>
              <div className="grid gap-3">
                {steps.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-[var(--radius)] border border-border bg-card p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                        {index + 1}
                      </div>
                      <step.icon className="h-4 w-4 text-primary" />
                      <p className="font-medium text-foreground">{step.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/15">
            <CardContent className="space-y-4 pt-6">
              <h2 className="text-2xl font-semibold text-foreground">
                Contact us directly
              </h2>
              <div className="space-y-3">
                <a
                  href="tel:+19374899209"
                  className="flex items-center gap-3 rounded-[var(--radius)] border border-border p-4 transition-colors hover:border-primary/40"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">(937) 489-9209</p>
                    <p className="text-sm text-muted-foreground">Call or text</p>
                  </div>
                </a>
                <a
                  href="mailto:kristine@thetechslp.com"
                  className="flex items-center gap-3 rounded-[var(--radius)] border border-border p-4 transition-colors hover:border-primary/40"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">
                      kristine@thetechslp.com
                    </p>
                    <p className="text-sm text-muted-foreground">Email anytime</p>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Learn more links */}
        <section className="flex flex-wrap justify-center gap-4 text-sm">
          <Link
            href="/what-is-fees"
            className="font-medium text-primary hover:underline"
          >
            What is FEES?
          </Link>
          <span className="text-muted-foreground">|</span>
          <Link
            href="/for-patients"
            className="font-medium text-primary hover:underline"
          >
            What to expect during your visit
          </Link>
        </section>
      </div>
    </>
  );
}
