import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BedDouble,
  FileSearch,
  MapPinned,
  ShieldAlert,
  Stethoscope,
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
  title: "Aspiration Concern Las Vegas",
  description:
    "Concerned about aspiration in Las Vegas? This page explains what a swallow evaluation may help clarify, what FEES can show, and how Mobile FEES LV routes patients to the next step.",
  keywords: [
    "aspiration concern Las Vegas",
    "aspiration swallow evaluation Las Vegas",
    "wet voice after swallowing Las Vegas",
    "mobile FEES Las Vegas",
  ],
  alternates: {
    canonical: "/aspiration-concern-las-vegas",
  },
};

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Aspiration Concern Las Vegas",
    url: absoluteUrl("/aspiration-concern-las-vegas"),
    description:
      "Educational landing page for Las Vegas patients and caregivers concerned about aspiration and next-step swallow evaluation.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Swallow evaluation for aspiration concern",
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

const aspirationNotes = [
  {
    title: "Concern is not confirmation",
    description:
      "No page can diagnose aspiration. The concern usually comes from symptoms, pneumonia history, coughing, wet voice, or a known neurologic condition.",
    icon: AlertTriangle,
  },
  {
    title: "FEES can answer key pharyngeal questions",
    description:
      "FEES is often useful when the team needs to look at secretion management, airway protection, penetration, aspiration risk, and residue during real intake.",
    icon: FileSearch,
  },
  {
    title: "Sometimes another workup is still needed",
    description:
      "Some patients still need medical evaluation, radiology, or additional dysphagia workup depending on the referral question and the broader clinical picture.",
    icon: ShieldAlert,
  },
];

const concernSignals = [
  "Wet or gurgly voice after swallowing",
  "Coughing with liquids, solids, or medications",
  "Recurrent pneumonia or chest congestion",
  "Known neurologic disease with reduced swallow safety",
];

const routeChoices = [
  {
    title: "Bedside route",
    description:
      "For medically fragile residents, rehab patients, and others who need a bedside instrumental answer.",
    href: "/bedside-swallow-study-las-vegas",
    icon: BedDouble,
  },
  {
    title: "Patient guide",
    description:
      "For families who need a plain-language explanation of what FEES is and what the visit looks like.",
    href: "/for-patients",
    icon: Stethoscope,
  },
];

export default function AspirationConcernLasVegasPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <div className="container mx-auto max-w-5xl px-4 py-12 space-y-16">
        <SeoBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "What Is FEES?", href: "/what-is-fees" },
            {
              label: "Aspiration Concern",
              href: "/aspiration-concern-las-vegas",
              current: true,
            },
          ]}
        />
        <PageHeader
          title="Aspiration Concern in Las Vegas"
          description="A focused page for families and referral teams who are worried something may be getting into the airway and need a clearer next step."
        >
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge>Concern-based search page</Badge>
            <Badge variant="secondary">Educational, not diagnostic</Badge>
            <Badge variant="outline">Routes into appointment funnel</Badge>
          </div>
        </PageHeader>

        <section className="grid gap-8 rounded-[calc(var(--radius)*2)] border border-primary/15 bg-card p-8 shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-foreground">
              Aspiration concern is one of the clearest reasons families and care
              teams start searching for a swallow evaluation.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              In practical terms, the question is usually not academic. People are
              worried about airway safety, pneumonia risk, meal tolerance, or
              whether the patient needs a different care plan. Mobile FEES LV is
              designed to help Las Vegas patients move from concern to a qualified
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
                  Local coverage
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Mobile FEES LV focuses on Las Vegas, Henderson, North Las Vegas,
                Summerlin, Spring Valley, Paradise, and nearby requests when the
                route and schedule allow.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                This page is for education only. If the patient has sudden
                breathing distress, chest pain, or acute medical decline, urgent
                medical evaluation comes first.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            What this concern usually means in real life
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {aspirationNotes.map((item) => (
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
                  Common signs behind aspiration concern
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
              <h2 className="text-2xl font-semibold text-foreground">
                Follow the route that matches the situation
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The highest-converting next step is a route that matches the
                patient setting and how much education the family still needs.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {routeChoices.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-[var(--radius)] border border-border bg-card p-4 transition-colors hover:border-primary/40"
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="h-4 w-4 text-primary" />
                      <p className="font-medium text-foreground">{item.title}</p>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Reviewed by{" "}
                <Link href="/about" className="text-primary hover:underline">
                  Kristine Everett, MA, CCC-SLP
                </Link>
                .
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
}
