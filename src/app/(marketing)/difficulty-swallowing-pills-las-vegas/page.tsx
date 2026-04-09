import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  FileSearch,
  MapPinned,
  Pill,
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
  title: "Difficulty Swallowing Pills Las Vegas",
  description:
    "Having trouble swallowing pills in Las Vegas? This page explains when pill-swallowing difficulty may justify a swallowing evaluation and how Mobile FEES LV routes patients into the next step.",
  keywords: [
    "difficulty swallowing pills Las Vegas",
    "pill swallowing problem Las Vegas",
    "coughing with pills Las Vegas",
    "mobile FEES pills Las Vegas",
  ],
  alternates: {
    canonical: "/difficulty-swallowing-pills-las-vegas",
  },
};

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Difficulty Swallowing Pills Las Vegas",
    url: absoluteUrl("/difficulty-swallowing-pills-las-vegas"),
    description:
      "Educational landing page for pill-swallowing difficulty and next-step swallowing evaluation in Las Vegas.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Swallow evaluation for pill-swallowing difficulty",
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

const pillPatterns = [
  {
    title: "Pills can expose a real swallowing problem",
    description:
      "Medication intake is often harder than food or liquids because pills move differently, trigger anxiety, and can feel like they stick even when other meals seem mostly manageable.",
    icon: Pill,
  },
  {
    title: "The pattern matters",
    description:
      "Clinicians want to know whether the problem is coughing, sticking, fear, multiple swallows, throat clearing, or needing unusual workarounds to get medication down.",
    icon: FileSearch,
  },
  {
    title: "The goal is safer, simpler intake",
    description:
      "The practical question is whether the pill problem is isolated or part of a broader swallowing issue that needs clearer recommendations.",
    icon: ShieldCheck,
  },
];

const concernSignals = [
  "Coughing or choking when taking medications",
  "Feeling that pills stick in the throat or chest",
  "Repeated avoidance of important medications because swallowing feels unsafe",
  "Need to crush, split, or hide pills without a clear plan",
];

const routeChoices = [
  {
    title: "Coughing during meals page",
    description:
      "Use this if pill difficulty is part of a larger meal-time coughing pattern.",
    href: "/coughing-during-meals-las-vegas",
  },
  {
    title: "At-home swallow evaluation",
    description:
      "Use this if the patient is at home and the family wants the shortest route to an evaluation or estimate.",
    href: "/at-home-swallow-evaluation-las-vegas",
  },
];

export default function DifficultySwallowingPillsLasVegasPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <div className="container mx-auto max-w-5xl px-4 py-12 space-y-16">
        <SeoBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "What Is FEES?", href: "/what-is-fees" },
            {
              label: "Difficulty Swallowing Pills",
              href: "/difficulty-swallowing-pills-las-vegas",
              current: true,
            },
          ]}
        />
        <PageHeader
          title="Difficulty Swallowing Pills in Las Vegas"
          description="For patients and families trying to decide whether pill-swallowing difficulty is its own issue or part of a larger swallowing problem."
        >
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge>Symptom-based search page</Badge>
            <Badge variant="secondary">Medication swallowing concerns</Badge>
            <Badge variant="outline">Routes into patient funnel</Badge>
          </div>
        </PageHeader>

        <section className="grid gap-8 rounded-[calc(var(--radius)*2)] border border-primary/15 bg-card p-8 shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-foreground">
              Pill-swallowing problems are one of the clearest signs that
              families start looking for a more specific swallowing answer.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Searchers here are often not asking for broad dysphagia education.
              They want to know why pills are suddenly harder, whether the
              patient is safe taking medication by mouth, and what next step
              makes sense in Las Vegas.
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
                  Local coverage
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Mobile FEES LV focuses on Las Vegas, Henderson, North Las Vegas,
                Summerlin, Spring Valley, Paradise, and nearby requests when the
                route and timing fit.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                This page is educational only. Medication changes should be
                coordinated with the prescribing clinician and pharmacy team.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Why pill difficulty deserves its own page
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {pillPatterns.map((item) => (
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
                <AlertCircle className="h-5 w-5 text-primary" />
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
