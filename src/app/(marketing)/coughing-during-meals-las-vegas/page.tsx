import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Home,
  MapPinned,
  ShieldCheck,
  Soup,
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
  title: "Coughing During Meals Las Vegas",
  description:
    "If meals bring coughing, choking, or throat clearing, this Las Vegas page explains when a swallow evaluation may be useful and how Mobile FEES LV routes you to the next step.",
  keywords: [
    "coughing during meals Las Vegas",
    "choking during meals Las Vegas",
    "swallow evaluation for coughing Las Vegas",
    "mobile FEES Las Vegas",
  ],
  alternates: {
    canonical: "/coughing-during-meals-las-vegas",
  },
};

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Coughing During Meals Las Vegas",
    url: absoluteUrl("/coughing-during-meals-las-vegas"),
    description:
      "Educational landing page for Las Vegas families concerned about coughing during meals and whether a swallow evaluation may be needed.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Swallow evaluation for coughing during meals",
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

const whatItMayMean = [
  {
    title: "It does not automatically mean aspiration",
    description:
      "Coughing during meals can happen for several reasons, including timing problems, residue, reflux, sensory responses, or airway-protection issues. The symptom matters, but it is not a diagnosis by itself.",
    icon: AlertTriangle,
  },
  {
    title: "The pattern matters",
    description:
      "Clinicians want to know whether the coughing happens with liquids, solids, mixed textures, pills, larger bites, or fatigue later in the meal.",
    icon: Soup,
  },
  {
    title: "Repeated symptoms deserve a closer look",
    description:
      "When the same problem keeps showing up across meals, it is usually worth moving beyond guesswork and asking whether a swallow evaluation is appropriate.",
    icon: ShieldCheck,
  },
];

const evaluationTriggers = [
  "Coughing, choking, or throat clearing shows up repeatedly during meals or right after swallowing.",
  "The voice sounds wet or gurgly after eating or drinking.",
  "Meals are taking much longer, becoming stressful, or causing the patient to avoid certain foods.",
  "There is unexplained weight loss, dehydration concern, chest congestion, or pneumonia history.",
];

const nextStepCards = [
  {
    title: "Bedside pathway",
    description:
      "Use this if the patient is medically fragile, bedbound, or difficult to transport.",
    href: "/bedside-swallow-study-las-vegas",
    icon: Stethoscope,
  },
  {
    title: "At-home pathway",
    description:
      "Use this if the patient is in a private residence and the family wants the shortest route to an appointment or estimate.",
    href: "/at-home-swallow-evaluation-las-vegas",
    icon: Home,
  },
];

export default function CoughingDuringMealsLasVegasPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <div className="container mx-auto max-w-5xl px-4 py-12 space-y-16">
        <SeoBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "What Is FEES?", href: "/what-is-fees" },
            {
              label: "Coughing During Meals",
              href: "/coughing-during-meals-las-vegas",
              current: true,
            },
          ]}
        />
        <PageHeader
          title="Coughing During Meals in Las Vegas"
          description="A practical page for families and referral teams trying to decide whether repeated mealtime coughing deserves a swallow evaluation."
        >
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge>Meal-time symptom</Badge>
            <Badge variant="secondary">Patient-first next step</Badge>
            <Badge variant="outline">Mobile FEES LV</Badge>
          </div>
        </PageHeader>

        <section className="grid gap-8 rounded-[calc(var(--radius)*2)] border border-primary/15 bg-card p-8 shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-foreground">
              Repeated coughing during meals can be one of the clearest signs
              that a swallow evaluation may help.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              If meals bring repeated coughing, choking, throat clearing, or a wet
              voice afterward, the right next step may be a clinical swallow
              evaluation. Mobile FEES LV helps Las Vegas families move from
              uncertainty to a clearer plan.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?path=patient&intent=appointment"
                className={buttonVariants({ size: "lg" })}
              >
                Request Swallow Evaluation
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
                location and schedule fit.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                This page is educational and does not replace urgent medical care.
                Sudden breathing distress or rapid medical decline needs immediate
                emergency evaluation.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            What coughing during meals may signal
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {whatItMayMean.map((item) => (
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
                  Signs it is worth requesting a swallow evaluation
                </h2>
              </div>
              <ul className="space-y-3">
                {evaluationTriggers.map((item) => (
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
                Choose the cleanest next route
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Once the concern is clear, the highest-converting next step is not
                more education. It is the right path for the setting and patient
                situation.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {nextStepCards.map((item) => (
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
