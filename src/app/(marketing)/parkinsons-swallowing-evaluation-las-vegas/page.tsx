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
  Utensils,
} from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { SeoBreadcrumbs } from "@/components/seo/seo-breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Parkinson's Swallowing Evaluation Las Vegas",
  description:
    "Looking for a swallowing evaluation related to Parkinson's disease in Las Vegas? This page explains common meal-time changes and what the next step may look like.",
  keywords: [
    "Parkinson's swallowing evaluation Las Vegas",
    "Parkinson's dysphagia Las Vegas",
    "mobile FEES Parkinson's Las Vegas",
    "swallow study Parkinson's Las Vegas",
  ],
  alternates: {
    canonical: "/parkinsons-swallowing-evaluation-las-vegas",
  },
};

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Parkinson's Swallowing Evaluation Las Vegas",
    url: absoluteUrl("/parkinsons-swallowing-evaluation-las-vegas"),
    description:
      "Information for families and clinicians concerned about Parkinson's-related swallowing change in Las Vegas.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Swallowing evaluation for Parkinson's disease",
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

const parkinsonsPatterns = [
  {
    title: "Changes can be gradual",
    description:
      "Families often describe the problem as subtle at first: slower meals, more throat clearing, trouble with pills, reduced appetite, or fatigue before the meal is finished.",
    icon: Clock3,
  },
  {
    title: "Small changes still matter",
    description:
      "Even when a patient is still eating by mouth, reduced efficiency or coordination can affect comfort, intake, hydration, and meal safety over time.",
    icon: Utensils,
  },
  {
    title: "The goal is practical guidance",
    description:
      "Most families are not looking for theory. They want to know what patterns deserve attention and what the next realistic step should be in Las Vegas.",
    icon: ShieldCheck,
  },
];

const parkinsonsConcerns = [
  "More coughing or throat clearing during meals",
  "Longer mealtimes or fatigue before the meal is done",
  "Difficulty swallowing pills or thin liquids",
  "Meal-time decline that seems to be progressing",
];

const routeOptions = [
  {
    title: "At-home swallow evaluation",
    description:
      "A strong fit when the patient is in a private residence and the family wants the shortest route to an evaluation.",
    href: "/at-home-swallow-evaluation-las-vegas",
  },
  {
    title: "Coughing during meals guide",
    description:
      "A symptom-first page if the family is still trying to interpret what they are seeing at meals.",
    href: "/coughing-during-meals-las-vegas",
  },
];

export default function ParkinsonsSwallowingEvaluationLasVegasPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <div className="container mx-auto max-w-5xl px-4 py-12 space-y-16">
        <SeoBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "What Is FEES?", href: "/what-is-fees" },
            {
              label: "Parkinson's Swallowing Evaluation",
              href: "/parkinsons-swallowing-evaluation-las-vegas",
              current: true,
            },
          ]}
        />
        <PageHeader
          title="Parkinson's Swallowing Evaluation in Las Vegas"
          description="For patients and families noticing progressive meal-time change and trying to decide whether it is time for a swallowing evaluation."
        >
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge>Parkinson&apos;s support</Badge>
            <Badge variant="secondary">Parkinson&apos;s meal-time decline</Badge>
            <Badge variant="outline">Request evaluation</Badge>
          </div>
        </PageHeader>

        <section className="grid gap-8 rounded-[calc(var(--radius)*2)] border border-primary/15 bg-card p-8 shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-foreground">
              Parkinson&apos;s-related swallowing change is often gradual enough that
              families wait too long before looking for a structured next step.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              The patient is often still eating, but meals are changing, pills
              are harder, coughing is more frequent, or intake is slipping.
              Mobile FEES LV helps make the next step clearer.
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
                  Local service focus
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Mobile FEES LV serves Las Vegas, Henderson, North Las Vegas,
                Summerlin, Spring Valley, Paradise, and nearby requests when the
                schedule allows.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                This page is educational and does not replace urgent medical
                evaluation when symptoms are acute or rapidly worsening.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Why this page focuses on Parkinson&apos;s-related meal changes
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {parkinsonsPatterns.map((item) => (
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
                <Brain className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">
                  Common Parkinson&apos;s-related swallowing concerns
                </h2>
              </div>
              <ul className="space-y-3">
                {parkinsonsConcerns.map((item) => (
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
                  Best next step for Parkinson&apos;s cases
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
