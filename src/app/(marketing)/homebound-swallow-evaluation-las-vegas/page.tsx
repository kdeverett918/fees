import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Home,
  MapPinned,
  ShieldCheck,
  Stethoscope,
  Truck,
  Users,
  Waves,
} from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { SeoBreadcrumbs } from "@/components/seo/seo-breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Homebound Swallow Evaluation Las Vegas",
  description:
    "Need a homebound swallow evaluation in Las Vegas? This page explains when a mobile swallowing visit may fit patients who realistically cannot leave home and how Mobile FEES LV routes them into care.",
  keywords: [
    "homebound swallow evaluation Las Vegas",
    "portable swallow study homebound Las Vegas",
    "mobile FEES homebound Las Vegas",
    "home swallow evaluation Las Vegas",
  ],
  alternates: {
    canonical: "/homebound-swallow-evaluation-las-vegas",
  },
};

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Homebound Swallow Evaluation Las Vegas",
    url: absoluteUrl("/homebound-swallow-evaluation-las-vegas"),
    description:
      "Educational landing page for homebound swallowing evaluation and mobile FEES routes in Las Vegas.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Homebound swallow evaluation",
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

const homeboundPatterns = [
  {
    title: "Homebound is not the same as convenience",
    description:
      "This search often comes from a very different situation than a standard concierge home visit. The patient may be functionally unable to leave home without major effort, risk, or medical disruption.",
    icon: Home,
  },
  {
    title: "Transport itself becomes the barrier",
    description:
      "When the patient cannot realistically tolerate outside appointments, a mobile route is often the only path that feels workable to the family.",
    icon: Truck,
  },
  {
    title: "The next step still needs structure",
    description:
      "Even in a homebound case, the strongest conversion path is still a short, methodical intake that clarifies the setting, timing, referral status, and likely payment route.",
    icon: ShieldCheck,
  },
];

const concernSignals = [
  "The patient cannot realistically leave home for an outpatient swallow test",
  "Transport causes medical instability, extreme fatigue, or major caregiver burden",
  "Meals are concerning but travel is not a practical option",
  "The family needs a direct route to a home-based evaluation request",
];

const routeChoices = [
  {
    title: "At-home swallow evaluation",
    description:
      "Use this if the case is home-based but not necessarily fully homebound and the family mainly wants the shortest route to scheduling.",
    href: "/at-home-swallow-evaluation-las-vegas",
  },
  {
    title: "Pricing and estimates",
    description:
      "Use this if the family first needs a better sense of self-pay or concierge pathways.",
    href: "/pricing",
  },
];

export default function HomeboundSwallowEvaluationLasVegasPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <div className="container mx-auto max-w-5xl px-4 py-12 space-y-16">
        <SeoBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Mobile FEES Las Vegas", href: "/las-vegas-mobile-fees" },
            {
              label: "Homebound Swallow Evaluation",
              href: "/homebound-swallow-evaluation-las-vegas",
              current: true,
            },
          ]}
        />
        <PageHeader
          title="Homebound Swallow Evaluation in Las Vegas"
          description="For patients and families who know the patient cannot realistically leave home and need a practical swallowing next step."
        >
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge>Setting-based search page</Badge>
            <Badge variant="secondary">Homebound patient pathway</Badge>
            <Badge variant="outline">Routes into patient funnel</Badge>
          </div>
        </PageHeader>

        <section className="grid gap-8 rounded-[calc(var(--radius)*2)] border border-primary/15 bg-card p-8 shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-foreground">
              Homebound swallowing cases need a different kind of page because the
              main obstacle is often logistics, not awareness.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Families searching this phrase usually already know the patient
              cannot handle a standard outpatient route. They need to know whether
              there is a realistic home-based next step in Las Vegas and how to
              start that process without a long back-and-forth.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?path=patient&intent=appointment"
                className={buttonVariants({ size: "lg" })}
              >
                Request Homebound Evaluation
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
                  Local home-visit focus
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Mobile FEES LV focuses on Las Vegas, Henderson, North Las Vegas,
                Summerlin, Spring Valley, Paradise, and nearby requests when the
                route and schedule fit.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Homebound status and payment pathways can vary, so the request
                funnel is designed to qualify those details up front.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Why this page is different from a general at-home page
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {homeboundPatterns.map((item) => (
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
                <Waves className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">
                  Common reasons families search this
                </h2>
              </div>
              <ul className="space-y-3">
                {concernSignals.map((item) => (
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
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">
                  Best next routes
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {routeChoices.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-[var(--radius)] border border-border bg-card p-4 transition-colors hover:border-primary/40"
                  >
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
}
