import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  HeartHandshake,
  House,
  MapPin,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { StartMenu } from "@/components/landing/start-menu";
import { JsonLd } from "@/components/seo/json-ld";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mobile FEES Las Vegas",
  description:
    "Looking for mobile FEES in Las Vegas? Mobile FEES LV provides bedside swallow evaluations, concierge dysphagia support, and a simple appointment request funnel for patients and families.",
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
};

const localUseCases = [
  {
    title: "Concierge patient portal",
    description:
      "Built for Las Vegas patients, families, home-based cases, and self-pay signups that need a simpler front door.",
    icon: House,
  },
  {
    title: "Dual-portal routing",
    description:
      "The site now separates concierge patient intake from facility onboarding so each audience sees the right next step first.",
    icon: HeartHandshake,
  },
  {
    title: "Facility portal",
    description:
      "SNFs, rehab teams, ALFs, and physician offices can self-educate through onboarding, pricing, workflow, and packet pages before a sales call.",
    icon: Building2,
  },
];

const searchTopics = [
  "mobile FEES Las Vegas",
  "bedside swallow study Las Vegas",
  "at-home dysphagia evaluation Las Vegas",
  "at-home swallow evaluation Las Vegas",
  "coughing during meals Las Vegas",
  "aspiration concern Las Vegas",
  "stroke swallow evaluation Las Vegas",
  "Parkinson's swallowing evaluation Las Vegas",
  "recurrent pneumonia swallow evaluation Las Vegas",
  "difficulty swallowing pills Las Vegas",
  "homebound swallow evaluation Las Vegas",
  "wet voice after swallowing Las Vegas",
  "dementia swallowing evaluation Las Vegas",
  "FEES vs MBSS after stroke Las Vegas",
  "concierge FEES Las Vegas",
  "portable swallow study for homebound patients",
  "FEES vs outpatient MBSS",
];

const trustSignals = [
  "Stanford FEES-trained SLP",
  "Portable bedside equipment",
  "Radiation-free instrumental assessment",
  "Las Vegas patient and facility pathways",
];

const symptomPages = [
  {
    title: "Coughing or choking during meals",
    description:
      "For families wondering whether repeated mealtime coughing means it is time for a swallow evaluation.",
    href: "/coughing-during-meals-las-vegas",
  },
  {
    title: "Aspiration concern",
    description:
      "For wet voice, pneumonia history, or concern that food or liquid may be getting into the airway.",
    href: "/aspiration-concern-las-vegas",
  },
  {
    title: "Stroke-related swallowing changes",
    description:
      "For patients and families looking for a next step after stroke when meals, pills, or liquids no longer feel safe.",
    href: "/stroke-swallow-evaluation-las-vegas",
  },
  {
    title: "Parkinson's swallowing concerns",
    description:
      "For searchers trying to understand whether Parkinson's-related swallowing changes need a formal evaluation.",
    href: "/parkinsons-swallowing-evaluation-las-vegas",
  },
  {
    title: "Recurrent pneumonia concern",
    description:
      "For families and teams trying to understand whether repeated pneumonia should trigger a swallow evaluation.",
    href: "/recurrent-pneumonia-swallow-evaluation-las-vegas",
  },
  {
    title: "Difficulty swallowing pills",
    description:
      "For medication-related swallowing trouble, pill sticking, coughing with pills, or fear around medication intake.",
    href: "/difficulty-swallowing-pills-las-vegas",
  },
  {
    title: "Homebound swallow evaluation",
    description:
      "For patients who realistically cannot leave home and need a more practical evaluation route.",
    href: "/homebound-swallow-evaluation-las-vegas",
  },
  {
    title: "Wet voice after swallowing",
    description:
      "For wet or gurgly voice after meals when the family is trying to understand whether airway protection is part of the picture.",
    href: "/wet-voice-after-swallowing-las-vegas",
  },
  {
    title: "Dementia swallowing evaluation",
    description:
      "For progressive meal-time changes, cueing dependence, or intake decline in dementia-related care.",
    href: "/dementia-swallowing-evaluation-las-vegas",
  },
  {
    title: "FEES vs MBSS after stroke",
    description:
      "For families and teams deciding which instrumental test may answer the most important post-stroke question first.",
    href: "/fees-vs-mbss-after-stroke-las-vegas",
  },
  {
    title: "Bedside swallow study",
    description:
      "For medically fragile or transport-sensitive patients who need a bedside next step.",
    href: "/bedside-swallow-study-las-vegas",
  },
  {
    title: "At-home swallow evaluation",
    description:
      "For private-home and concierge cases that need a simpler route to an appointment.",
    href: "/at-home-swallow-evaluation-las-vegas",
  },
];

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: "Mobile FEES Las Vegas",
    url: siteConfig.url,
    areaServed: siteConfig.serviceAreas.map((name) => ({
      "@type": "City",
      name,
    })),
    description: siteConfig.description,
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mobile FEES evaluation",
    serviceType: "Fiberoptic Endoscopic Evaluation of Swallowing",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: siteConfig.serviceAreas,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl("/contact?path=patient&intent=appointment"),
    },
    description:
      "Mobile FEES LV provides bedside FEES evaluations and dysphagia support for Las Vegas patients, families, facilities, and referral teams.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeSchema} />
      <div className="space-y-20 pb-16">
        <StartMenu />

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-[calc(var(--radius)*2)] border border-primary/15 bg-card p-8 shadow-sm lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-5">
              <div className="flex flex-wrap gap-2">
                <Badge>Organic patient growth</Badge>
                <Badge variant="secondary">Las Vegas search intent</Badge>
                <Badge variant="outline">Self-serve signup path</Badge>
              </div>
              <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
                Built for people searching Google for a swallow evaluation in Las Vegas
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                The strongest organic win is to meet patients exactly where they
                search: mobile FEES, bedside swallow study, at-home dysphagia
                evaluation, and concierge swallow support in Las Vegas. This site
                now routes those visitors into a concierge patient portal while
                giving facilities their own portal for onboarding and workflow.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/concierge-patient-portal"
                  className={buttonVariants({ size: "lg" })}
                >
                  Open Concierge Portal
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/facility-portal"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  Open Facility Portal
                </Link>
                <Link
                  href="/at-home-swallow-evaluation-las-vegas"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  Explore At-Home Swallow Visits
                </Link>
              </div>
            </div>

            <Card className="border-border bg-background/80">
              <CardContent className="space-y-4 pt-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">
                    Search topics this site now supports
                  </h3>
                </div>
                <ul className="space-y-3">
                  {searchTopics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">
                Why this can generate more patient demand without so much outbound sales
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Instead of asking every lead to understand FEES, reimbursement, and
                referral workflow from scratch, the site now answers those questions
                up front and points each visitor to the correct next step.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {localUseCases.map((item) => (
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
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">
                Search by concern, not just by service name
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Many patient leads do not search for FEES first. They search for
                the problem they are seeing at meals. These pages meet that
                search behavior and still route visitors into the same short
                request flow.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {symptomPages.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[var(--radius)] border border-border bg-card p-5 transition-colors hover:border-primary/40"
                >
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Card className="border-primary/15">
              <CardContent className="space-y-4 pt-6">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-semibold text-foreground">
                    Trust signals patients actually look for
                  </h2>
                </div>
                <ul className="space-y-3">
                  {trustSignals.map((signal) => (
                    <li key={signal} className="flex items-start gap-2">
                      <Stethoscope className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {signal}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/15 bg-primary-light/25">
              <CardContent className="space-y-4 pt-6">
                <h2 className="text-2xl font-semibold text-foreground">
                  Internal paths that now support signups
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/for-patients"
                    className="rounded-[var(--radius)] border border-border bg-card p-4 transition-colors hover:border-primary/40"
                  >
                    <p className="font-medium text-foreground">Patient guide</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Plain-language prep, expectations, and results.
                    </p>
                  </Link>
                  <Link
                    href="/concierge-patient-portal"
                    className="rounded-[var(--radius)] border border-border bg-card p-4 transition-colors hover:border-primary/40"
                  >
                    <p className="font-medium text-foreground">Concierge portal</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Patient-facing front door for appointments and estimates.
                    </p>
                  </Link>
                  <Link
                    href="/facility-portal"
                    className="rounded-[var(--radius)] border border-border bg-card p-4 transition-colors hover:border-primary/40"
                  >
                    <p className="font-medium text-foreground">Facility portal</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Facility-facing front door for onboarding and packet review.
                    </p>
                  </Link>
                  <Link
                    href="/pricing"
                    className="rounded-[var(--radius)] border border-border bg-card p-4 transition-colors hover:border-primary/40"
                  >
                    <p className="font-medium text-foreground">Pricing path</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Self-pay and facility pricing with guardrails.
                    </p>
                  </Link>
                  <Link
                    href="/what-is-fees"
                    className="rounded-[var(--radius)] border border-border bg-card p-4 transition-colors hover:border-primary/40"
                  >
                    <p className="font-medium text-foreground">What is FEES?</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Educational page for early-stage search traffic.
                    </p>
                  </Link>
                  <Link
                    href="/faq"
                    className="rounded-[var(--radius)] border border-border bg-card p-4 transition-colors hover:border-primary/40"
                  >
                    <p className="font-medium text-foreground">FAQ hub</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Captures objections before users abandon the funnel.
                    </p>
                  </Link>
                  <Link
                    href="/bedside-swallow-study-las-vegas"
                    className="rounded-[var(--radius)] border border-border bg-card p-4 transition-colors hover:border-primary/40"
                  >
                    <p className="font-medium text-foreground">
                      Bedside swallow study page
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Local-intent page for transport-sensitive patients.
                    </p>
                  </Link>
                  <Link
                    href="/at-home-swallow-evaluation-las-vegas"
                    className="rounded-[var(--radius)] border border-border bg-card p-4 transition-colors hover:border-primary/40"
                  >
                    <p className="font-medium text-foreground">
                      At-home swallow evaluation page
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Built for family and concierge search behavior.
                    </p>
                  </Link>
                  <Link
                    href="/fees-vs-mbss-after-stroke-las-vegas"
                    className="rounded-[var(--radius)] border border-border bg-card p-4 transition-colors hover:border-primary/40"
                  >
                    <p className="font-medium text-foreground">
                      FEES vs MBSS after stroke
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Decision page for test-choice traffic.
                    </p>
                  </Link>
                  <Link
                    href="/dementia-swallowing-evaluation-las-vegas"
                    className="rounded-[var(--radius)] border border-border bg-card p-4 transition-colors hover:border-primary/40"
                  >
                    <p className="font-medium text-foreground">
                      Dementia swallowing evaluation
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Condition-based page for family-caregiver search traffic.
                    </p>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
