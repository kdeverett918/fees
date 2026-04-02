import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { faqItems } from "@/data/faq";
import { FAQSection } from "@/components/marketing/faq-section";
import { HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about FEES evaluations, including what to expect, insurance coverage, referral process, and more.",
};

export default function FAQPage() {
  const generalFaqs = faqItems.filter(
    (item) => item.audience === "all" || !item.audience
  );
  const patientFaqs = faqItems.filter((item) => item.audience === "patient");
  const facilityFaqs = faqItems.filter((item) => item.audience === "facility");

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12 space-y-16">
      {/* Header */}
      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about FEES evaluations, preparation, insurance, and referrals."
      >
        <div className="flex items-center gap-2 pt-2">
          <HelpCircle className="h-4 w-4 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            Can&apos;t find what you&apos;re looking for?{" "}
            <Link href="/contact" className="text-primary hover:underline font-medium">
              Contact us
            </Link>
          </p>
        </div>
      </PageHeader>

      {/* General */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="default">General</Badge>
          <h2 className="text-lg font-semibold text-foreground">
            About FEES
          </h2>
        </div>
        <FAQSection items={generalFaqs} />
      </section>

      {/* Patients & Families */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="accent">Patients</Badge>
          <h2 className="text-lg font-semibold text-foreground">
            For Patients & Families
          </h2>
        </div>
        <FAQSection items={patientFaqs} />
      </section>

      {/* Facilities & Professionals */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Facilities</Badge>
          <h2 className="text-lg font-semibold text-foreground">
            For Healthcare Facilities
          </h2>
        </div>
        <FAQSection items={facilityFaqs} />
      </section>

      {/* CTA */}
      <section className="rounded-[var(--radius)] border border-primary-light bg-primary-light/30 p-8 text-center space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          Still Have Questions?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We are happy to answer any additional questions about FEES
          evaluations, our services, or the referral process.
        </p>
        <Link href="/contact" className={buttonVariants({ size: "lg" })}>
          Contact Us
        </Link>
      </section>
    </div>
  );
}
