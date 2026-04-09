import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ClipboardList,
  Home,
  MapPinned,
  Stethoscope,
  Users,
  Warehouse,
} from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { SeoBreadcrumbs } from "@/components/seo/seo-breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Assisted Living FEES Las Vegas",
  description:
    "A facility-facing page for Las Vegas assisted living and memory-care settings coordinating mobile FEES referrals, family communication, and bedside swallowing workflow.",
  keywords: [
    "assisted living FEES Las Vegas",
    "memory care FEES Las Vegas",
    "mobile FEES assisted living Las Vegas",
    "bedside swallow evaluation assisted living Las Vegas",
  ],
  alternates: {
    canonical: "/assisted-living-fees-las-vegas",
  },
};

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Assisted Living FEES Las Vegas",
    url: absoluteUrl("/assisted-living-fees-las-vegas"),
    description:
      "Facility-facing page for assisted living and memory-care mobile FEES workflow in Las Vegas.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mobile FEES for assisted living",
    serviceType: "Mobile FEES facility consult and resident referral workflow",
    areaServed: siteConfig.serviceAreas,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl("/contact?path=facility&intent=consult"),
    },
  },
];

const alfBenefits = [
  {
    title: "A cleaner resident referral path",
    description:
      "ALFs and memory-care programs often need a clearer route from observed meal concern to a documented next step.",
    icon: ClipboardList,
  },
  {
    title: "Better family communication",
    description:
      "A structured bedside FEES pathway helps the care team explain what was seen, what is changing, and what recommendations make sense.",
    icon: Users,
  },
  {
    title: "Stronger fit for on-site care",
    description:
      "When transport is difficult or destabilizing, on-site assessment can be a better operational fit than repeated outside scheduling attempts.",
    icon: Home,
  },
];

const alfUseCases = [
  "Residents in assisted living with repeated coughing, weight loss, or meal-time decline",
  "Memory-care settings where outside appointments create distress or confusion",
  "Programs that need a clearer bridge between family concern and clinical next step",
  "Buildings that want a predictable resident-referral and communication workflow",
];

const routeChoices = [
  {
    title: "Open the Facility Portal",
    description:
      "Use the main portal for consult intake, documents, and launch planning.",
    href: "/facility-portal",
  },
  {
    title: "Dementia swallowing page",
    description:
      "Use this when the resident pattern is more specifically tied to progressive cognitive decline and meal-time change.",
    href: "/dementia-swallowing-evaluation-las-vegas",
  },
];

export default function AssistedLivingFeesLasVegasPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <div className="container mx-auto max-w-5xl px-4 py-12 space-y-16">
        <SeoBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Facility Portal", href: "/facility-portal" },
            {
              label: "Assisted Living and Memory Care",
              href: "/assisted-living-fees-las-vegas",
              current: true,
            },
          ]}
        />
        <PageHeader
          title="Assisted Living FEES in Las Vegas"
          description="For assisted living and memory-care programs that need a simpler on-site swallowing pathway and cleaner family communication."
        >
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge>ALF and memory-care workflow</Badge>
            <Badge variant="secondary">Resident and family coordination</Badge>
            <Badge variant="outline">Facility-facing onboarding page</Badge>
          </div>
        </PageHeader>

        <section className="grid gap-8 rounded-[calc(var(--radius)*2)] border border-primary/15 bg-card p-8 shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-foreground">
              Assisted living settings need a resident-and-family workflow, not just a vendor pitch.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              In ALF and memory-care environments, the question is often how to
              move from observed meal concern to an on-site clinical next step
              without adding confusion, distress, or transport complexity for the
              resident and family.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?path=facility&intent=consult"
                className={buttonVariants({ size: "lg" })}
              >
                Request Facility Consult
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/facility-portal"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Open Facility Portal
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
                Mobile FEES LV supports Las Vegas-area assisted living,
                memory-care, and related resident-care settings when the
                workflow and clinical fit are appropriate.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Why assisted living teams search for this
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {alfBenefits.map((item) => (
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
                <Warehouse className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">
                  Strong fit scenarios
                </h2>
              </div>
              <ul className="space-y-3">
                {alfUseCases.map((item) => (
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
                <Building2 className="h-5 w-5 text-primary" />
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
