import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Ear,
  FileSearch,
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
  title: "Wet Voice After Swallowing Las Vegas",
  description:
    "If the voice sounds wet or gurgly after swallowing in Las Vegas, this page explains why families notice it, what question it raises, and how Mobile FEES LV routes patients into the next step.",
  keywords: [
    "wet voice after swallowing Las Vegas",
    "gurgly voice after eating Las Vegas",
    "wet voice aspiration concern Las Vegas",
    "mobile FEES wet voice Las Vegas",
  ],
  alternates: {
    canonical: "/wet-voice-after-swallowing-las-vegas",
  },
};

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Wet Voice After Swallowing Las Vegas",
    url: absoluteUrl("/wet-voice-after-swallowing-las-vegas"),
    description:
      "Educational landing page for wet or gurgly voice after swallowing and next-step evaluation in Las Vegas.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Swallow evaluation for wet voice after swallowing",
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

const voicePatterns = [
  {
    title: "Families often notice the sound before they know the term",
    description:
      "The search usually starts with something practical: the voice sounds bubbly, gurgly, or wetter after a swallow, and the family wants to know whether that matters.",
    icon: Ear,
  },
  {
    title: "The sound is a clue, not a diagnosis",
    description:
      "A wet voice can show up for different reasons. The useful next question is whether it is part of a larger swallowing or airway-protection problem.",
    icon: AlertTriangle,
  },
  {
    title: "The pattern around meals matters",
    description:
      "Clinicians want to know when the voice changes, what textures seem linked to it, and whether it appears with coughing, throat clearing, or respiratory decline.",
    icon: FileSearch,
  },
];

const concernSignals = [
  "Voice sounds wetter or gurgly right after eating or drinking",
  "Wet voice appears along with coughing, throat clearing, or repeated swallows",
  "Families are worried about aspiration, residue, or airway protection",
  "The pattern keeps repeating and no one has given a clear next-step plan",
];

const routeChoices = [
  {
    title: "Aspiration concern page",
    description:
      "Use this if the main question is whether food, liquid, or secretions may be getting into the airway.",
    href: "/aspiration-concern-las-vegas",
  },
  {
    title: "Coughing during meals page",
    description:
      "Use this if the wet voice is part of a larger meal-time coughing or choking pattern.",
    href: "/coughing-during-meals-las-vegas",
  },
];

export default function WetVoiceAfterSwallowingLasVegasPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <div className="container mx-auto max-w-5xl px-4 py-12 space-y-16">
        <SeoBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "What Is FEES?", href: "/what-is-fees" },
            {
              label: "Wet Voice After Swallowing",
              href: "/wet-voice-after-swallowing-las-vegas",
              current: true,
            },
          ]}
        />
        <PageHeader
          title="Wet Voice After Swallowing in Las Vegas"
          description="For patients, families, and referral teams trying to decide whether a wet or gurgly voice after swallowing deserves a closer look."
        >
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge>Meal-time symptom</Badge>
            <Badge variant="secondary">Wet voice and airway concern</Badge>
            <Badge variant="outline">Request evaluation</Badge>
          </div>
        </PageHeader>

        <section className="grid gap-8 rounded-[calc(var(--radius)*2)] border border-primary/15 bg-card p-8 shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-foreground">
              A wet or gurgly voice after swallowing can be one of the clearest
              signs that a closer swallowing review may help.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Families are often hearing a repeated sound after meals and trying
              to decide whether it is meaningful enough to justify a swallow
              evaluation in Las Vegas.
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
                Mobile FEES LV focuses on Las Vegas, Henderson, North Las Vegas,
                Summerlin, Spring Valley, Paradise, and nearby requests when the
                route and timing work.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                This page is educational and not a substitute for urgent medical
                evaluation if the patient has acute breathing distress.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Why this symptom matters
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {voicePatterns.map((item) => (
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
                <ShieldCheck className="h-5 w-5 text-primary" />
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
