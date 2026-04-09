import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ClipboardList,
  FileText,
  MapPinned,
  Stethoscope,
  UserRoundSearch,
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
  title: "Physician Referral FEES Las Vegas",
  description:
    "A referral-facing page for Las Vegas physician offices and medical teams coordinating mobile FEES orders, bedside referrals, and report workflow.",
  keywords: [
    "physician referral FEES Las Vegas",
    "mobile FEES physician office Las Vegas",
    "bedside FEES referral Las Vegas",
    "swallow evaluation referral Las Vegas",
  ],
  alternates: {
    canonical: "/physician-referral-fees-las-vegas",
  },
};

const pageSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Physician Referral FEES Las Vegas",
    url: absoluteUrl("/physician-referral-fees-las-vegas"),
    description:
      "Referral-facing page for physician offices and medical teams coordinating mobile FEES in Las Vegas.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Physician referral mobile FEES workflow",
    serviceType: "Mobile FEES referral and bedside workflow",
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

const referralBenefits = [
  {
    title: "Cleaner order-to-report workflow",
    description:
      "Physician offices often need a straightforward path for orders, scheduling, and report return instead of a diffuse back-and-forth.",
    icon: ClipboardList,
  },
  {
    title: "A bedside option when transport is unrealistic",
    description:
      "Mobile FEES can be a practical next step when a patient is homebound, fragile, or difficult to move through a radiology process.",
    icon: UserRoundSearch,
  },
  {
    title: "Documentation that supports the care plan",
    description:
      "The value is a clearer pharyngeal swallowing picture, better recommendations, and a more documented next step for the medical team.",
    icon: FileText,
  },
];

const referralUseCases = [
  "Physician offices needing a cleaner bedside dysphagia referral path",
  "Medical teams coordinating home-based, facility-based, or fragile patients",
  "Referrals where the ordering side wants a clear report-return workflow",
  "Practices trying to avoid repeated dead-end send-outs for transport-sensitive cases",
];

const routeChoices = [
  {
    title: "Open the Facility Portal",
    description:
      "Use the main facility portal for consult intake, workflow planning, and resources.",
    href: "/facility-portal",
  },
  {
    title: "Open the referral toolkit",
    description:
      "Use resources for referral checklists, order requests, and onboarding documents.",
    href: "/resources",
  },
];

export default function PhysicianReferralFeesLasVegasPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <div className="container mx-auto max-w-5xl px-4 py-12 space-y-16">
        <SeoBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Facility Portal", href: "/facility-portal" },
            {
              label: "Physician Referral Teams",
              href: "/physician-referral-fees-las-vegas",
              current: true,
            },
          ]}
        />
        <PageHeader
          title="Physician Referral FEES in Las Vegas"
          description="For physician offices and medical teams that need a cleaner order, bedside referral, and report-return pathway."
        >
          <div className="flex flex-wrap gap-2 pt-2">
            <Badge>Referral-team workflow</Badge>
            <Badge variant="secondary">Order to report pathway</Badge>
            <Badge variant="outline">Facility-facing onboarding page</Badge>
          </div>
        </PageHeader>

        <section className="grid gap-8 rounded-[calc(var(--radius)*2)] border border-primary/15 bg-card p-8 shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-foreground">
              Physician offices usually do not need more FEES education. They need a referral path that works.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              The real question is whether the office can move from order to
              bedside evaluation to report return without creating a fragmented
              process for staff, patients, or families. This page is built
              around that referral-team reality.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?path=facility&intent=consult"
                className={buttonVariants({ size: "lg" })}
              >
                Request Referral Consult
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
                  Las Vegas referral coverage
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Mobile FEES LV works with Las Vegas-area physician offices,
                specialists, referral coordinators, and medical teams when the
                patient setting and workflow fit a bedside FEES path.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Why referral teams search for this
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {referralBenefits.map((item) => (
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
                <Stethoscope className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">
                  Strong fit scenarios
                </h2>
              </div>
              <ul className="space-y-3">
                {referralUseCases.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Users className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
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
