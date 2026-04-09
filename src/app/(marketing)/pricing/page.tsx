import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  HandCoins,
  Scale,
} from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  comparisonRows,
  facilityPlans,
  pricingNotes,
  reimbursementSteps,
} from "@/data/pricing";

export const metadata: Metadata = {
  title: "Facility Pricing & Reimbursement",
  description:
    "Mobile FEES LV facility pricing — $350 per FEES study with guidance on how to submit to Medicare and Medicaid for reimbursement.",
  alternates: {
    canonical: "/pricing",
  },
};

function PricingCard({
  name,
  description,
  price,
  priceNote,
  highlights,
  icon,
}: {
  name: string;
  description: string;
  price: string;
  priceNote: string;
  highlights: string[];
  icon: React.ComponentType<{ className?: string }>;
}) {
  const Icon = icon;

  return (
    <Card className="h-full">
      <CardHeader className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius)] bg-primary-light">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <div className="space-y-1">
            <CardTitle className="text-xl">{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
        <div>
          <span className="text-3xl font-bold text-foreground">{price}</span>
          <span className="ml-2 text-sm text-muted-foreground">{priceNote}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="text-sm leading-relaxed text-muted-foreground">
                {highlight}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default function PricingPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 space-y-16">
      <PageHeader
        title="Facility Pricing & Reimbursement"
        description="$350 per FEES study. Facilities submit to Medicare or Medicaid for reimbursement."
      >
        <div className="flex flex-wrap gap-2 pt-2">
          <Badge>Flat per-study rate</Badge>
          <Badge variant="secondary">Reimbursement guidance included</Badge>
        </div>
      </PageHeader>

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Building2 className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold text-foreground">
            Facility Pricing
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-1 lg:max-w-lg">
          {facilityPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              name={plan.name}
              description={plan.description}
              price={plan.price}
              priceNote={plan.priceNote}
              highlights={plan.highlights}
              icon={Building2}
            />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <HandCoins className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold text-foreground">
            How Facilities Submit for Reimbursement
          </h2>
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Facilities pay $350 per study and can submit claims to Medicare or
          Medicaid for reimbursement. Here is how the process typically works:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {reimbursementSteps.map((step) => (
            <Card key={step.title}>
              <CardContent className="space-y-2 pt-6">
                <h3 className="font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Scale className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold text-foreground">
            Mobile FEES vs Outpatient MBSS
          </h2>
        </div>
        <Card className="overflow-hidden">
          <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-border bg-muted/50 text-sm font-semibold text-foreground">
            <div className="p-4">Decision point</div>
            <div className="border-l border-border p-4">Mobile FEES</div>
            <div className="border-l border-border p-4">Outpatient MBSS</div>
          </div>
          {comparisonRows.map((row) => (
            <div
              key={row.topic}
              className="grid grid-cols-1 border-b border-border last:border-b-0 md:grid-cols-[1fr_1fr_1fr]"
            >
              <div className="p-4 text-sm font-medium text-foreground">{row.topic}</div>
              <div className="border-t border-border p-4 text-sm leading-relaxed text-muted-foreground md:border-l md:border-t-0">
                {row.mobileFees}
              </div>
              <div className="border-t border-border p-4 text-sm leading-relaxed text-muted-foreground md:border-l md:border-t-0">
                {row.outpatientMbss}
              </div>
            </div>
          ))}
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Good to Know
        </h2>
        <Card>
          <CardContent className="space-y-3 pt-6">
            {pricingNotes.map((note) => (
              <div key={note} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {note}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="rounded-[var(--radius)] border border-primary-light bg-primary-light/30 p-8 space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-foreground">
          Ready to get started?
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Request an appointment, estimate, or facility consult and we will
          follow up within one business day.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contact?path=facility&intent=consult"
            className={buttonVariants({ size: "lg" })}
          >
            Request Facility Consult
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/facility-onboarding-packet"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Open Onboarding Packet
          </Link>
        </div>
      </section>
    </div>
  );
}
