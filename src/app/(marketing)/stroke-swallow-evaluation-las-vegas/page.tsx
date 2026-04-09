import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Clock3,
  MapPinned,
  ShieldCheck,
  Stethoscope,
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
  title: "Stroke Swallow Evaluation Las Vegas",
  description:
    "Need a swallow evaluation after stroke in Las Vegas? This page explains when swallowing changes after stroke may justify a next-step evaluation and how Mobile FEES LV routes patients into care.",
  keywords: [
    "stroke swallow evaluation Las Vegas",
    "stroke dysphagia Las Vegas",
    "mobile FEES stroke Las Vegas",
    "swallow study after stroke Las Vegas",
  ],
  alternates: {
    canonical: "/stroke-swallow-evaluation-las-vegas",
  },
};

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Stroke Swallow Evaluation Las Vegas",
    url: absoluteUrl("/stroke-swallow-evaluation-las-vegas"),
    description:
      "Educational landing page for Las Vegas stroke-related swallowing concerns and next-step evaluation.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Swallow evaluation after stroke",
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

const strokePatterns = [
  {
    title: "The swallowing change may be new",
    description:
      "After stroke, swallowing status can shift quickly. A patient who previously ate and drank normally may suddenly show coughing, prolonged chewing, pocketing, wet voice, or reduced efficiency at meals.",
    icon: Brain,
  },
  {
    title: "The care team needs practical answers",
    description:
      "The real question is usually what can be taken safely now, what textures are realistic, and whether the patient needs strategies, supervision, or another step in workup.",
    icon: ShieldCheck,
  },
  {
    title: "Timing matters",
    description:
      "For many stroke patients, the fastest useful next step is the one that keeps the evaluation close to where recovery and daily meals are already happening.",
    icon: Clock3,
  },
];

const strokeConcerns = [
  "Coughing, choking, or wet voice with meals after stroke",
  "Difficulty with pills, liquids, or mixed textures",
  "Meal fatigue, prolonged eating time, or poor intake",
  "Need for clearer bedside swallowing recommendations",
];

const routeOptions = [
  {
    title: "Bedside swallow study",
    description:
      "Use this route when transport is difficult or the patient is medically fragile.",
    href: "/bedside-swallow-study-las-vegas",
  },
  {
    title: "Patient and family guide",
    description:
      "Use this route when the family first needs a plain-language explanation of FEES and the visit flow.",
    href: "/for-patients",
  },
];

export default function StrokeSwallowEvaluationLasVegasPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <div className="container mx-auto max-w-5xl px-4 py-12 space-y-16">
        <SeoBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "What Is FEES?", href: "/what-is-fees" },
            {
              label: "Stroke Swallow Evaluation",
              href: "/stroke-swallow-evaluation-las-vegas",
              current: true,
            },
          ]}
        />
        <PageHeader
          title="Stroke Swallow Evaluation in Las Vegas"
          description="For patients, families, and referral teams trying to decide what the next swallowing step should be after stroke."
        >
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge>Condition-based search page</Badge>
            <Badge variant="secondary">Post-stroke swallowing concern</Badge>
            <Badge variant="outline">Routes into patient funnel</Badge>
          </div>
        </PageHeader>

        <section className="grid gap-8 rounded-[calc(var(--radius)*2)] border border-primary/15 bg-card p-8 shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-foreground">
              After stroke, swallowing questions often move from vague concern to
              immediate logistics very quickly.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Families want to know what is safe now, clinicians want better
              bedside clarity, and patients need a next step that does not add
              unnecessary friction. Mobile FEES LV is positioned for that Las
              Vegas search intent: not just “what is dysphagia,” but “what do we
              do next after stroke?”
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?path=patient&intent=appointment"
                className={buttonVariants({ size: "lg" })}
              >
                Request Evaluation
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
                  Local service area
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Mobile FEES LV focuses on Las Vegas, Henderson, North Las Vegas,
                Summerlin, Spring Valley, Paradise, and nearby requests when the
                route and schedule work.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                This page is educational and not a substitute for acute stroke or
                emergency medical care.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Why this page is useful for stroke-related searches
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {strokePatterns.map((item) => (
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
                  Common post-stroke swallowing concerns
                </h2>
              </div>
              <ul className="space-y-3">
                {strokeConcerns.map((item) => (
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
                  Best next route for stroke cases
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {routeOptions.map((item) => (
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
