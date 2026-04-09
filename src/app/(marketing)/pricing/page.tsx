import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  HandCoins,
  House,
  Scale,
} from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  comparisonRows,
  conciergePlans,
  facilityPlans,
  pricingNotes,
  reimbursementSteps,
} from "@/data/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Starting rates for Mobile FEES LV facility partnerships and Las Vegas concierge patient visits, plus practical guidance on how payment usually flows in SNFs.",
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
        title="Pricing & Payment Paths"
        description="Transparent starting rates for facilities and concierge patients, with billing language designed to match how SNF payment actually works."
      >
        <div className="flex flex-wrap gap-2 pt-2">
          <Badge>Starting rates</Badge>
          <Badge variant="secondary">Facility-paid agreements</Badge>
          <Badge variant="outline">Good Faith Estimates available</Badge>
        </div>
      </PageHeader>

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Building2 className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold text-foreground">
            Facility Partnership Pricing
          </h2>
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
          These plans are structured around the most defensible SNF workflow:
          the facility contracts with Mobile FEES LV, the facility pays the vendor,
          and the facility determines whether it can recover through its own Part A,
          Part B, managed-care, or private-pay billing pathway.
        </p>
        <div className="grid gap-6 lg:grid-cols-3">
          {facilityPlans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              name={plan.name}
              description={plan.description}
              price={plan.price}
              priceNote={plan.priceNote}
              highlights={plan.highlights}
              icon={index === 2 ? HandCoins : Building2}
            />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <House className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold text-foreground">
            Concierge Patient Pricing
          </h2>
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Concierge visits are designed for patients who need faster access or who
          cannot easily complete an outpatient MBSS. These visits are typically self-pay
          first, with superbill support when out-of-network submission makes sense.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {conciergePlans.map((plan) => (
            <PricingCard
              key={plan.id}
              name={plan.name}
              description={plan.description}
              price={plan.price}
              priceNote={plan.priceNote}
              highlights={plan.highlights}
              icon={House}
            />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <HandCoins className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold text-foreground">
            How Payment Usually Flows
          </h2>
        </div>
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
        <p className="text-sm text-muted-foreground">
          Short version: FEES is often the faster bedside answer for pharyngeal dysphagia questions,
          while MBSS remains valuable when oral-phase or esophageal information is the main priority.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Billing Guardrails
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
        <Badge variant="default">Need a final quote?</Badge>
        <h2 className="text-2xl font-semibold text-foreground">
          Request a Facility Packet or Concierge Estimate
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground">
          We can tailor pricing around travel radius, monthly volume, and facility workflow.
          If you are comparing FEES with outpatient MBSS, the resource library also includes a
          printable comparison sheet and reimbursement quick guide.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contact?path=facility&intent=consult"
            className={buttonVariants({ size: "lg" })}
          >
            Request Facility Pricing Review
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact?path=patient&intent=estimate"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Request Patient Estimate
          </Link>
          <Link
            href="/resources"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            View Resource Library
          </Link>
        </div>
      </section>
    </div>
  );
}
