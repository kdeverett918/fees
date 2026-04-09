import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  ClipboardList,
  FileSearch,
  MapPinned,
  Scale,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { SeoBreadcrumbs } from "@/components/seo/seo-breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "FEES vs MBSS After Stroke Las Vegas",
  description:
    "Comparing FEES vs MBSS after stroke in Las Vegas? This page explains how families and teams can think about the question, what each test tends to answer, and how Mobile FEES LV routes patients into the next step.",
  keywords: [
    "FEES vs MBSS after stroke Las Vegas",
    "stroke FEES vs barium swallow Las Vegas",
    "post stroke swallow study Las Vegas",
    "mobile FEES stroke Las Vegas",
  ],
  alternates: {
    canonical: "/fees-vs-mbss-after-stroke-las-vegas",
  },
};

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FEES vs MBSS After Stroke Las Vegas",
    url: absoluteUrl("/fees-vs-mbss-after-stroke-las-vegas"),
    description:
      "Educational comparison page for FEES vs MBSS after stroke in Las Vegas.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Post-stroke instrumental swallow evaluation guidance",
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

const decisionFrames = [
  {
    title: "The question should drive the test",
    description:
      "After stroke, the choice is usually not about which test is universally better. It is about which one answers the most important question first.",
    icon: FileSearch,
  },
  {
    title: "FEES often helps when bedside practicality matters",
    description:
      "FEES can be useful when secretion status, airway protection, residue, fatigue, bedside reality, or transport barriers are central to the decision.",
    icon: ShieldCheck,
  },
  {
    title: "MBSS still matters for some questions",
    description:
      "MBSS remains important when the care team needs oral-phase information, broader bolus-flow imaging, or a radiology-based view of the swallowing sequence.",
    icon: Scale,
  },
];

const comparisonPoints = [
  "If the patient is transport-sensitive, FEES often fits the bedside question better.",
  "If the team needs a radiology study of broader bolus flow, MBSS may be the better first test.",
  "If secretion management, airway protection, and residue are central, FEES may answer the immediate clinical question faster.",
  "Sometimes the right answer is sequencing the studies instead of treating them as either-or forever.",
];

const routeChoices = [
  {
    title: "Stroke swallowing evaluation",
    description:
      "Use this route if the family or team first needs a post-stroke swallowing page rather than a test-choice page.",
    href: "/stroke-swallow-evaluation-las-vegas",
  },
  {
    title: "Printable comparison sheet",
    description:
      "Use this route for a cleaner print-friendly FEES vs MBSS comparison.",
    href: "/comparison",
  },
];

export default function FeesVsMbssAfterStrokeLasVegasPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <div className="container mx-auto max-w-5xl px-4 py-12 space-y-16">
        <SeoBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "What Is FEES?", href: "/what-is-fees" },
            {
              label: "FEES vs MBSS After Stroke",
              href: "/fees-vs-mbss-after-stroke-las-vegas",
              current: true,
            },
          ]}
        />
        <PageHeader
          title="FEES vs MBSS After Stroke in Las Vegas"
          description="For families and referral teams trying to decide which instrumental swallow study may answer the post-stroke question that matters most right now."
        >
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge>Decision-page search intent</Badge>
            <Badge variant="secondary">Post-stroke test choice</Badge>
            <Badge variant="outline">Routes into patient funnel</Badge>
          </div>
        </PageHeader>

        <section className="grid gap-8 rounded-[calc(var(--radius)*2)] border border-primary/15 bg-card p-8 shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-foreground">
              “FEES or MBSS after stroke?” is a decision-stage search, which is why
              it deserves a full page and not a stray FAQ line.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Searchers here usually already know an instrumental swallow study is
              on the table. What they need is a practical framework for deciding
              which test answers the most useful question first in a Las Vegas
              care setting.
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
                href="/comparison"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                View Comparison Sheet
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
                Mobile FEES LV focuses on Las Vegas, Henderson, North Las Vegas,
                Summerlin, Spring Valley, Paradise, and nearby requests when the
                route and schedule fit.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                This page is educational and does not replace physician, SLP, or
                radiology decision-making for an individual case.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            A more useful way to frame the FEES vs MBSS decision
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {decisionFrames.map((item) => (
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
                  Practical post-stroke comparison points
                </h2>
              </div>
              <ul className="space-y-3">
                {comparisonPoints.map((item) => (
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
                <ClipboardList className="h-5 w-5 text-primary" />
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
