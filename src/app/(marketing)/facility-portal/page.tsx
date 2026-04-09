import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  Building2,
  ClipboardList,
  FileText,
  Hospital,
  MapPinned,
  Stethoscope,
  ShieldCheck,
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
  title: "Facility Portal",
  description:
    "The Mobile FEES LV facility portal for SNFs, rehab programs, ALFs, physician offices, and referral teams seeking onboarding, pricing review, and workflow support.",
  keywords: [
    "facility FEES portal Las Vegas",
    "mobile FEES facility consult Las Vegas",
    "SNF FEES onboarding Las Vegas",
    "facility dysphagia workflow Las Vegas",
  ],
  alternates: {
    canonical: "/facility-portal",
  },
};

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Facility Portal",
    url: absoluteUrl("/facility-portal"),
    description:
      "Facility-facing portal for onboarding calls, referral workflow, pricing review, and documents for Mobile FEES LV in Las Vegas.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Facility mobile FEES portal",
    serviceType: "Mobile FEES facility consult and onboarding",
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

const portalActions = [
  {
    title: "Request onboarding consult",
    description:
      "Start the facility intake path for rollout, workflow, and service-fit planning.",
    href: "/contact?path=facility&intent=consult",
    icon: Building2,
  },
  {
    title: "Open onboarding packet",
    description:
      "Review contracts, referral forms, privacy readiness, and launch documents before the first consult.",
    href: "/facility-onboarding-packet",
    icon: FileText,
  },
  {
    title: "Review pricing path",
    description:
      "Use the pricing page to review likely billing lanes, volume discussions, and patient-versus-facility payment paths.",
    href: "/pricing",
    icon: BadgeDollarSign,
  },
  {
    title: "Review facility workflow",
    description:
      "See how bedside FEES fits intake, scheduling, reporting, and payer guardrails.",
    href: "/for-facilities",
    icon: ClipboardList,
  },
];

const facilitySegments = [
  {
    title: "Skilled nursing and rehab",
    description:
      "For SNFs and post-acute teams balancing consolidated billing, bedside access, and dysphagia workflow.",
    href: "/skilled-nursing-facility-fees-las-vegas",
    icon: Hospital,
  },
  {
    title: "Assisted living and memory care",
    description:
      "For ALFs and memory-care settings coordinating resident referrals and family communication.",
    href: "/assisted-living-fees-las-vegas",
    icon: Warehouse,
  },
  {
    title: "Physician referral teams",
    description:
      "For physician offices and referral coordinators who need a cleaner bedside FEES referral path.",
    href: "/physician-referral-fees-las-vegas",
    icon: Stethoscope,
  },
];

const facilityFit = [
  "Skilled nursing facilities and post-acute rehab teams",
  "Assisted living and memory-care programs coordinating referrals",
  "Physician offices or referral teams building a cleaner next-step pathway",
  "Organizations that need onboarding, contracts, or workflow guidance before go-live",
];

const portalSteps = [
  {
    title: "Choose the facility goal",
    description:
      "Consult request, packet review, pricing path, or workflow education.",
    icon: Stethoscope,
  },
  {
    title: "Share the operational details",
    description:
      "Building type, expected volume, timing, and current billing expectations.",
    icon: ShieldCheck,
  },
  {
    title: "Get the rollout next step",
    description:
      "We respond with the best consult, packet, or launch-planning next action.",
    icon: Users,
  },
];

export default function FacilityPortalPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <div className="container mx-auto max-w-6xl px-4 py-12 space-y-16">
        <SeoBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            {
              label: "Facility Portal",
              href: "/facility-portal",
              current: true,
            },
          ]}
        />
        <PageHeader
          title="Facility Portal"
          description="A facility-facing front door for onboarding calls, referral workflow, pricing review, and launch planning."
        >
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge>Facility-facing portal</Badge>
            <Badge variant="secondary">SNF, rehab, ALF, and referral teams</Badge>
            <Badge variant="outline">Onboarding and workflow path</Badge>
          </div>
        </PageHeader>

        <section className="grid gap-8 rounded-[calc(var(--radius)*2)] border border-primary/15 bg-card p-8 shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-foreground">
              This portal is built for facilities and referral teams, not concierge patient intake.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              If the goal is to launch mobile FEES, review pricing, sort billing
              expectations, or build a cleaner referral process, this is the right
              front door. It keeps facility questions separate from patient signup
              so the onboarding path feels operational instead of generic.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?path=facility&intent=consult"
                className={buttonVariants({ size: "lg" })}
              >
                Start Facility Request
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/resources"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Open Resources
              </Link>
            </div>
          </div>

          <Card className="border-border bg-background/70">
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center gap-2">
                <MapPinned className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  Service area
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Mobile FEES LV serves Las Vegas-area SNFs, rehab programs,
                assisted living communities, physician offices, and selected
                home-based referral situations when the fit is appropriate.
              </p>
              <Link
                href="/concierge-patient-portal"
                className="text-sm font-medium text-primary hover:underline"
              >
                Looking for the patient side? Open the Concierge Patient Portal.
              </Link>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            What you can do inside the facility portal
          </h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {portalActions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[var(--radius)] border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <item.icon className="h-5 w-5 text-primary" />
                <p className="mt-3 font-semibold text-foreground">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Choose the facility path that fits your setting
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {facilitySegments.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[var(--radius)] border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <item.icon className="h-5 w-5 text-primary" />
                <p className="mt-3 font-semibold text-foreground">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="border-primary/15">
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">
                  This portal is built for
                </h2>
              </div>
              <ul className="space-y-3">
                {facilityFit.map((item) => (
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
                How the facility signup works
              </h2>
              <div className="grid gap-3">
                {portalSteps.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[var(--radius)] border border-border bg-card p-4"
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="h-4 w-4 text-primary" />
                      <p className="font-medium text-foreground">{item.title}</p>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
}
