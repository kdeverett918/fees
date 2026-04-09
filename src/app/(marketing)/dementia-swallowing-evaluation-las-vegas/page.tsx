import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Clock3,
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
  title: "Dementia Swallowing Evaluation Las Vegas",
  description:
    "Looking for a swallowing evaluation related to dementia in Las Vegas? This page explains common meal-time changes, cueing issues, and how Mobile FEES LV routes families into the next step.",
  keywords: [
    "dementia swallowing evaluation Las Vegas",
    "dementia dysphagia Las Vegas",
    "swallow study dementia Las Vegas",
    "mobile FEES dementia Las Vegas",
  ],
  alternates: {
    canonical: "/dementia-swallowing-evaluation-las-vegas",
  },
};

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Dementia Swallowing Evaluation Las Vegas",
    url: absoluteUrl("/dementia-swallowing-evaluation-las-vegas"),
    description:
      "Educational landing page for dementia-related swallowing change and next-step evaluation in Las Vegas.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Swallowing evaluation for dementia-related change",
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

const dementiaPatterns = [
  {
    title: "The issue is often gradual",
    description:
      "Families may notice slower intake, more cueing, reduced interest in eating, coughing during meals, or a general sense that swallowing is less coordinated than it used to be.",
    icon: Clock3,
  },
  {
    title: "Behavior and swallowing overlap",
    description:
      "In dementia-related care, the challenge is often not just mechanics. It can include attention, pacing, cueing, fatigue, acceptance, and overall meal participation.",
    icon: Brain,
  },
  {
    title: "The next step needs to fit the setting",
    description:
      "Families managing care at home, in memory care, or in a facility often need a practical next step, not a complicated hospital-style process.",
    icon: ShieldCheck,
  },
];

const concernSignals = [
  "More cueing or supervision needed to complete meals safely",
  "Coughing, prolonged chewing, or reduced intake in dementia-related care",
  "Medication swallowing is getting harder as meals become less efficient",
  "Family or staff want clearer guidance on the next swallowing step",
];

const routeChoices = [
  {
    title: "Homebound swallow evaluation",
    description:
      "Use this if the patient realistically cannot leave home and the family needs a practical home-based route.",
    href: "/homebound-swallow-evaluation-las-vegas",
  },
  {
    title: "At-home swallow evaluation",
    description:
      "Use this if the patient is in a private residence and the family wants the shortest route to an evaluation request.",
    href: "/at-home-swallow-evaluation-las-vegas",
  },
];

export default function DementiaSwallowingEvaluationLasVegasPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <div className="container mx-auto max-w-5xl px-4 py-12 space-y-16">
        <SeoBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "What Is FEES?", href: "/what-is-fees" },
            {
              label: "Dementia Swallowing Evaluation",
              href: "/dementia-swallowing-evaluation-las-vegas",
              current: true,
            },
          ]}
        />
        <PageHeader
          title="Dementia Swallowing Evaluation in Las Vegas"
          description="For families, caregivers, and teams trying to decide whether progressive meal-time change in dementia deserves a swallowing evaluation."
        >
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge>Dementia support</Badge>
            <Badge variant="secondary">Dementia-related meal changes</Badge>
            <Badge variant="outline">Request evaluation</Badge>
          </div>
        </PageHeader>

        <section className="grid gap-8 rounded-[calc(var(--radius)*2)] border border-primary/15 bg-card p-8 shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-foreground">
              Dementia-related swallowing concerns often become more visible when
              families can see the meal-time change but do not know the next step.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Families are often already dealing with daily care decisions, not
              abstract theory. They need a Las Vegas option that respects the care
              setting, the patient’s tolerance, and the practical reality of how
              meals are going.
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
                Mobile FEES LV focuses on Las Vegas, Henderson, North Las Vegas,
                Summerlin, Spring Valley, Paradise, and nearby requests when the
                route and timing fit.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                This page is educational and not a substitute for urgent medical
                evaluation if the patient has acute medical change.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Why this page focuses on dementia-related meal changes
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {dementiaPatterns.map((item) => (
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
                <Users className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">
                  Common reasons families ask about this
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
                <Home className="h-5 w-5 text-primary" />
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
