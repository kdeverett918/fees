import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  Building2,
  ClipboardList,
  Clock3,
  Hospital,
  MapPinned,
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
  title: "Skilled Nursing Facility FEES Las Vegas",
  description:
    "A facility-facing page for Las Vegas SNFs and post-acute rehab teams evaluating mobile FEES workflow, bedside access, and contract-first billing structure.",
  keywords: [
    "skilled nursing facility FEES Las Vegas",
    "SNF mobile FEES Las Vegas",
    "post acute FEES Las Vegas",
    "bedside FEES SNF Las Vegas",
  ],
  alternates: {
    canonical: "/skilled-nursing-facility-fees-las-vegas",
  },
};

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Skilled Nursing Facility FEES Las Vegas",
    url: absoluteUrl("/skilled-nursing-facility-fees-las-vegas"),
    description:
      "Facility-facing page for skilled nursing and post-acute rehab mobile FEES workflow in Las Vegas.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mobile FEES for skilled nursing facilities",
    serviceType: "Mobile FEES facility consult and bedside workflow",
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

const snfBenefits = [
  {
    title: "Faster bedside access",
    description:
      "Useful when the resident is fragile, difficult to transport, or the team needs a pharyngeal dysphagia answer before an outside radiology slot is realistic.",
    icon: Clock3,
  },
  {
    title: "More operational control",
    description:
      "The SNF can build FEES into its own referral, scheduling, and charting workflow instead of depending on send-out logistics for every case.",
    icon: ClipboardList,
  },
  {
    title: "Cleaner billing expectations",
    description:
      "The strongest facility position remains contract-first, with payer recovery verified lane by lane instead of marketed as automatic reimbursement.",
    icon: BadgeDollarSign,
  },
];

const snfUseCases = [
  "Residents on Medicare Part A or in complex post-acute transitions",
  "Isolation, bedbound, or transport-sensitive residents",
  "Cases where nursing, therapy, and providers need a clearer bedside answer quickly",
  "Buildings that want a predictable referral-to-report workflow",
];

const routeChoices = [
  {
    title: "Open the Facility Portal",
    description:
      "Use the main portal if the building needs onboarding, packet review, and launch planning.",
    href: "/facility-portal",
  },
  {
    title: "Review pricing and billing path",
    description:
      "Use this if the immediate question is facility pricing, contract model, and billing expectations.",
    href: "/pricing",
  },
];

export default function SkilledNursingFacilityFeesLasVegasPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <div className="container mx-auto max-w-5xl px-4 py-12 space-y-16">
        <SeoBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Facility Portal", href: "/facility-portal" },
            {
              label: "Skilled Nursing and Rehab",
              href: "/skilled-nursing-facility-fees-las-vegas",
              current: true,
            },
          ]}
        />
        <PageHeader
          title="Skilled Nursing Facility FEES in Las Vegas"
          description="For SNFs and post-acute rehab teams building a bedside FEES pathway that is operationally cleaner than repeated send-outs."
        >
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge>SNF and rehab workflow</Badge>
            <Badge variant="secondary">Contract-first billing frame</Badge>
            <Badge variant="outline">Facility-facing onboarding page</Badge>
          </div>
        </PageHeader>

        <section className="grid gap-8 rounded-[calc(var(--radius)*2)] border border-primary/15 bg-card p-8 shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-foreground">
              Skilled nursing facilities need a clear bedside FEES process.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              The real decision is whether mobile FEES improves bedside access,
              reduces transport friction, supports documentation, and fits the
              building’s current billing and referral process. This page is built
              around that day-to-day SNF reality.
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
                  Las Vegas facility coverage
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Mobile FEES LV supports Las Vegas-area SNFs, rehab units, and
                post-acute settings when the clinical fit, travel radius, and
                workflow make sense.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Why SNFs look for a facility-specific FEES page
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {snfBenefits.map((item) => (
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
                <Hospital className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">
                  Strong fit scenarios
                </h2>
              </div>
              <ul className="space-y-3">
                {snfUseCases.map((item) => (
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
