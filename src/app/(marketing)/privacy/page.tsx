import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Mobile FEES LV evaluation services.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12 space-y-8">
      <PageHeader
        title="Privacy Policy"
        description="Last updated: April 2, 2026"
      />

      <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            Information We Collect
          </h2>
          <p>
            When you use our contact form or request services, we may collect
            your name, email address, phone number, and the content of your
            message. For clinical documentation purposes, patient health
            information is collected as part of the FEES evaluation process.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Respond to your inquiries and schedule evaluations</li>
            <li>Provide clinical FEES evaluation services</li>
            <li>Generate evaluation reports for referring physicians</li>
            <li>Communicate with you about your care</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            Protected Health Information (PHI)
          </h2>
          <p>
            All patient health information collected during FEES evaluations is
            protected under the Health Insurance Portability and Accountability
            Act (HIPAA). We maintain appropriate administrative, physical, and
            technical safeguards to protect your health information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            Data Storage
          </h2>
          <p>
            Clinical documentation created through the documentation tools on
            this site is saved locally in browser storage on the device in use
            until reset or cleared. Contact form inquiries are retained on our
            server for follow-up and scheduling. Completed clinical reports and other protected health
            information should be handled and transmitted through your
            organization&apos;s approved secure channels.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            Contact Information
          </h2>
          <p>
            If you have questions about this privacy policy or how your
            information is handled, please contact us through our{" "}
            <a href="/contact" className="text-primary hover:underline">
              contact page
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
