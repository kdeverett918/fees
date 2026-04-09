import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Home,
  MapPinned,
  ShieldCheck,
  Stethoscope,
  Users,
  Wallet,
} from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { SeoBreadcrumbs } from "@/components/seo/seo-breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "At-Home Swallow Evaluation Las Vegas",
  description:
    "Looking for an at-home swallow evaluation in Las Vegas? Mobile FEES LV offers home-based FEES visits for families who want a simpler, faster next step.",
  keywords: [
    "at-home swallow evaluation Las Vegas",
    "at home swallow evaluation Las Vegas",
    "home swallow study Las Vegas",
    "concierge FEES Las Vegas",
  ],
  alternates: {
    canonical: "/at-home-swallow-evaluation-las-vegas",
  },
};

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "At-Home Swallow Evaluation Las Vegas",
    url: absoluteUrl("/at-home-swallow-evaluation-las-vegas"),
    description:
      "Landing page for families seeking an at-home swallow evaluation in Las Vegas.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "At-home swallow evaluation in Las Vegas",
    serviceType: "In-home Fiberoptic Endoscopic Evaluation of Swallowing",
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

const homeReasons = [
  {
    title: "Built for family decision-making",
    description:
      "The at-home pathway works well when a spouse, adult child, or caregiver is driving the next step and wants a clear plan without piecing together a referral maze.",
    icon: Users,
  },
  {
    title: "The shortest route to action",
    description:
      "This funnel is designed to move a private-home lead toward an appointment or estimate request instead of dropping them into a vague contact form.",
    icon: Clock3,
  },
  {
    title: "Pricing clarity matters",
    description:
      "Home-based cases often need a direct-pay conversation, so the page points families toward estimate requests early instead of hiding the payment question.",
    icon: Wallet,
  },
];

const homeFitSignals = [
  "The patient lives in a private residence and travel is difficult or unrealistic.",
  "Meals have become stressful because of coughing, choking, or repeated airway concern.",
  "The family wants a methodical next step instead of waiting for multiple callbacks.",
  "A concierge or self-pay pathway may be the most practical route.",
];

const homeVisitFlow = [
  "Short request funnel with contact, location, and timing details",
  "Review of referral or order status and likely payment path",
  "Home visit with portable FEES setup when clinically appropriate",
  "Clear explanation of findings and written report follow-up",
];

export default function AtHomeSwallowEvaluationLasVegasPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <div className="container mx-auto max-w-5xl px-4 py-12 space-y-16">
        <SeoBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Mobile FEES Las Vegas", href: "/las-vegas-mobile-fees" },
            {
              label: "At-Home Swallow Evaluation",
              href: "/at-home-swallow-evaluation-las-vegas",
              current: true,
            },
          ]}
        />
        <PageHeader
          title="At-Home Swallow Evaluation in Las Vegas"
          description="For families searching Google because something feels wrong at meals and they want a direct, orderly next step."
        >
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge>Home-visit search page</Badge>
            <Badge variant="secondary">Family and concierge intent</Badge>
            <Badge variant="outline">Fast path to request</Badge>
          </div>
        </PageHeader>

        <section className="grid gap-8 rounded-[calc(var(--radius)*2)] border border-primary/15 bg-card p-8 shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-foreground">
              Searching for an at-home swallow evaluation usually means the family
              is already past the awareness stage.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              They are not looking for broad dysphagia education. They want to
              know whether someone can come to the home, what the process looks
              like, and how to start without getting lost in a hospital-style
              scheduling chain. This page speaks to that exact search behavior.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?path=patient&intent=appointment"
                className={buttonVariants({ size: "lg" })}
              >
                Request At-Home Appointment
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
                  Home-visit area focus
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Mobile FEES LV focuses on Las Vegas home-visit requests in and
                around Henderson, North Las Vegas, Summerlin, Spring Valley,
                Paradise, and nearby neighborhoods when scheduling allows.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Why this page is different from a general service page
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {homeReasons.map((item) => (
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
                <Home className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">
                  Common signs this may be the right path
                </h2>
              </div>
              <ul className="space-y-3">
                {homeFitSignals.map((signal) => (
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
                  What families want to know first
                </h2>
              </div>
              <ul className="space-y-3">
                {homeVisitFlow.map((item) => (
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
                  href="/pricing"
                  className="rounded-[var(--radius)] border border-border bg-card p-4 transition-colors hover:border-primary/40"
                >
                  <p className="font-medium text-foreground">Review pricing</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Self-pay and payment-path framing before you request.
                  </p>
                </Link>
                <Link
                  href="/for-patients"
                  className="rounded-[var(--radius)] border border-border bg-card p-4 transition-colors hover:border-primary/40"
                >
                  <p className="font-medium text-foreground">Read what to expect</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Visit flow, comfort questions, and same-day discussion.
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
