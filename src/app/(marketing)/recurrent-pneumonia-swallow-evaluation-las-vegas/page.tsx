import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  FileSearch,
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
  title: "Recurrent Pneumonia Swallow Evaluation Las Vegas",
  description:
    "If recurrent pneumonia is raising swallowing concerns in Las Vegas, this page explains when a swallow evaluation may be relevant and how Mobile FEES LV routes patients into the next step.",
  keywords: [
    "recurrent pneumonia swallow evaluation Las Vegas",
    "pneumonia aspiration concern Las Vegas",
    "mobile FEES pneumonia concern Las Vegas",
    "swallow study pneumonia Las Vegas",
  ],
  alternates: {
    canonical: "/recurrent-pneumonia-swallow-evaluation-las-vegas",
  },
};

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Recurrent Pneumonia Swallow Evaluation Las Vegas",
    url: absoluteUrl("/recurrent-pneumonia-swallow-evaluation-las-vegas"),
    description:
      "Educational landing page for recurrent pneumonia and next-step swallowing evaluation in Las Vegas.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Swallow evaluation for recurrent pneumonia concern",
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

const pneumoniaPatterns = [
  {
    title: "It is a pattern that raises a question",
    description:
      "Repeated pneumonia does not automatically prove aspiration, but it often pushes families and care teams to ask whether swallowing safety needs a closer look.",
    icon: AlertTriangle,
  },
  {
    title: "The goal is not guesswork",
    description:
      "The useful question is whether meal-time airway protection, secretion management, or residue are part of the broader picture and what next step is justified.",
    icon: FileSearch,
  },
  {
    title: "The answer needs to be practical",
    description:
      "When pneumonia keeps returning, families usually need a clearer plan fast, not another vague round of phone calls and generic referrals.",
    icon: ShieldCheck,
  },
];

const concernSignals = [
  "Repeated pneumonia or chest congestion in the setting of swallowing concern",
  "Wet voice, coughing with intake, or reduced tolerance at meals",
  "Known neurologic or medically complex history with airway-protection questions",
  "Need for a clearer bedside or home-based swallowing next step",
];

const routeChoices = [
  {
    title: "Aspiration concern page",
    description:
      "Use this if the core question is whether food, liquid, or secretions may be entering the airway.",
    href: "/aspiration-concern-las-vegas",
  },
  {
    title: "Bedside swallow study",
    description:
      "Use this if the patient is medically fragile, bedbound, or difficult to transport.",
    href: "/bedside-swallow-study-las-vegas",
  },
];

export default function RecurrentPneumoniaSwallowEvaluationLasVegasPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <div className="container mx-auto max-w-5xl px-4 py-12 space-y-16">
        <SeoBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "What Is FEES?", href: "/what-is-fees" },
            {
              label: "Recurrent Pneumonia Concern",
              href: "/recurrent-pneumonia-swallow-evaluation-las-vegas",
              current: true,
            },
          ]}
        />
        <PageHeader
          title="Recurrent Pneumonia Swallow Evaluation in Las Vegas"
          description="For patients, families, and referral teams trying to decide whether repeated pneumonia should trigger a more direct swallowing workup."
        >
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge>Concern-based search page</Badge>
            <Badge variant="secondary">Recurrent pneumonia concern</Badge>
            <Badge variant="outline">Routes into patient funnel</Badge>
          </div>
        </PageHeader>

        <section className="grid gap-8 rounded-[calc(var(--radius)*2)] border border-primary/15 bg-card p-8 shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-foreground">
              Recurrent pneumonia often changes the question from “should we keep
              watching this?” to “what swallowing step makes sense now?”
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Searchers here are usually not early-stage browsers. They are trying
              to connect repeated respiratory problems with swallowing safety,
              meal-time symptoms, or aspiration concern. Mobile FEES LV is built
              to capture that Las Vegas search intent and route it into a clearer
              next step.
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
                  Las Vegas service focus
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Mobile FEES LV serves Las Vegas, Henderson, North Las Vegas,
                Summerlin, Spring Valley, Paradise, and nearby requests when the
                route and timing fit.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                This page is educational and does not replace urgent medical or
                pulmonary evaluation when the patient is acutely ill.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Why this page fits a recurrent-pneumonia search
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {pneumoniaPatterns.map((item) => (
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
                  Common triggers for this search
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
                  Strongest next routes
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
