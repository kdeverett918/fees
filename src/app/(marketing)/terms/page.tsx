import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Mobile FEES LV evaluation services.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12 space-y-8">
      <PageHeader
        title="Terms of Service"
        description="Last updated: April 2, 2026"
      />

      <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            Services
          </h2>
          <p>
            Mobile FEES LV provides mobile Fiberoptic Endoscopic Evaluation of
            Swallowing (FEES) services, swallowing consultations, and staff
            training. All clinical services are performed by Kristine Everett,
            MA, CCC-SLP, a licensed and FEES-certified speech-language
            pathologist.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            Medical Disclaimer
          </h2>
          <p>
            The information provided on this website is for educational and
            informational purposes only and is not intended as a substitute for
            professional medical advice, diagnosis, or treatment. Always seek
            the advice of your physician or qualified health provider with any
            questions you may have regarding a medical condition.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            Clinical Documentation Tools
          </h2>
          <p>
            The documentation tools provided on this site (evaluation reports,
            consent forms, intake forms) are intended for use by the clinician
            only. Data entered into these tools is saved locally in browser
            storage on the device in use until reset. Users should print or
            otherwise secure the
            documentation before closing the page and remain responsible for the
            accuracy, retention, and HIPAA-compliant handling of any protected
            health information entered.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            Scheduling & Cancellations
          </h2>
          <p>
            Evaluation appointments are scheduled based on availability.
            We request at least 24 hours notice for cancellations. Emergency
            cancellations are handled on a case-by-case basis.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            Contact
          </h2>
          <p>
            For questions about these terms, please visit our{" "}
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
