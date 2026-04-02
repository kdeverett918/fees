import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for mobile FEES evaluations, facility contracts, and concierge swallowing services in the Las Vegas area.",
};

interface PricingFeature {
  text: string;
}

interface PricingTier {
  name: string;
  description: string;
  price: string;
  priceNote: string;
  popular?: boolean;
  features: PricingFeature[];
}

const tiers: PricingTier[] = [
  {
    name: "Standard",
    description: "Per-visit pricing for individual evaluations and services.",
    price: "$550",
    priceNote: "per FEES evaluation",
    features: [
      { text: "Single FEES Evaluation: $550" },
      { text: "Follow-up FEES Evaluation: $400" },
      { text: "Clinical Swallowing Evaluation (bedside, no scope): $200" },
      { text: "Staff Training / In-Service: $350/hour" },
      { text: "Travel fee included within 25 miles of Las Vegas" },
      { text: "Report delivered within 48 hours" },
      { text: "Scheduling within 3\u20135 business days" },
    ],
  },
  {
    name: "Facility Contract",
    description:
      "Volume-based pricing for facilities with ongoing evaluation needs.",
    price: "$475",
    priceNote: "per evaluation",
    popular: true,
    features: [
      { text: "Per-evaluation rate: $475" },
      { text: "5+ evaluations/month: $425 each" },
      { text: "10+ evaluations/month: $375 each" },
      { text: "Follow-up evaluations: $325" },
      { text: "Clinical swallowing evaluations: $175" },
      { text: "2 free staff in-services per year" },
      { text: "Report delivered within 24 hours" },
      { text: "Priority scheduling (48\u201372 hours)" },
      { text: "Net 30 payment terms" },
      { text: "Dedicated contact line" },
    ],
  },
  {
    name: "Concierge",
    description:
      "Premium retainer for facilities needing guaranteed availability and rapid response.",
    price: "$2,500",
    priceNote: "per month",
    features: [
      { text: "Includes up to 6 FEES evaluations" },
      { text: "Additional evaluations: $350 each" },
      { text: "Same-day / next-day scheduling guaranteed" },
      { text: "Unlimited phone consultations" },
      { text: "Monthly swallowing wellness rounds" },
      { text: "Premium reports with video clips" },
      { text: "Dedicated clinician availability" },
      { text: "Net 15 payment terms" },
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 space-y-16">
      <PageHeader
        title="Transparent Pricing"
        description="Flexible plans designed for individual referrals, skilled nursing facilities, and organizations that need dedicated swallowing care."
      />

      {/* Pricing cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={
              tier.popular
                ? "border-primary border-2 relative"
                : "relative"
            }
          >
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge>Most Popular</Badge>
              </div>
            )}
            <CardHeader className="text-center pt-8">
              <CardTitle className="text-xl">{tier.name}</CardTitle>
              <CardDescription className="mt-1">
                {tier.description}
              </CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold text-foreground">
                  {tier.price}
                </span>
                <span className="text-sm text-muted-foreground ml-1">
                  {tier.priceNote}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-2">
                    <Check className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={buttonVariants({
                  variant: tier.popular ? "default" : "outline",
                  size: "md",
                  className: "w-full mt-4",
                })}
              >
                Get Started
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Insurance & Medicare */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">
          Insurance &amp; Medicare
        </h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span className="text-sm text-foreground">
                  Medicare Part B covers FEES (CPT 92612, 92613)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span className="text-sm text-foreground">
                  Most major insurance accepted
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span className="text-sm text-foreground">
                  We handle billing and prior authorization
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span className="text-sm text-foreground">
                  Self-pay rates available upon request
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-foreground">
          Ready to partner with Mobile FEES 702?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Contact us to discuss which plan best fits your facility&apos;s needs, or to
          schedule a single evaluation.
        </p>
        <Link
          href="/contact"
          className={buttonVariants({ size: "lg" })}
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
