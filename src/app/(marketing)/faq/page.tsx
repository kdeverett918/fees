import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHeader } from "@/components/ui/page-header";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { faqItems } from "@/data/faq";
import { FAQSection } from "@/components/marketing/faq-section";
import { HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about mobile FEES in Las Vegas, including what to expect, pricing, insurance, and referral workflow.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  const generalFaqs = faqItems.filter(
    (item) => item.audience === "all" || !item.audience
  );
  const patientFaqs = faqItems.filter((item) => item.audience === "patient");
  const facilityFaqs = faqItems.filter((item) => item.audience === "facility");
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <div className="container mx-auto max-w-3xl px-4 py-12 space-y-16">
      {/* Header */}
        <PageHeader
          title="Frequently Asked Questions"
          description="Find answers to common questions about mobile FEES in Las Vegas, preparation, pricing, insurance, and referrals."
        >
          <div className="flex items-center gap-2 pt-2">
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Can&apos;t find what you&apos;re looking for?{" "}
              <Link href="/contact" className="text-primary hover:underline font-medium">
                Request the next step
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
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/contact?path=patient&intent=appointment" className={buttonVariants({ size: "lg" })}>
            Request Appointment
          </Link>
          <Link href="/las-vegas-mobile-fees" className={buttonVariants({ variant: "outline", size: "lg" })}>
            View Las Vegas FEES Page
          </Link>
          <Link href="/at-home-swallow-evaluation-las-vegas" className={buttonVariants({ variant: "outline", size: "lg" })}>
            View At-Home Page
          </Link>
        </div>
      </section>
      </div>
    </>
  );
}
