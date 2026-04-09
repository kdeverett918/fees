import type { Metadata } from "next";
import Link from "next/link";
import { Clock, FileText, Phone, Mail } from "lucide-react";
import { ContactForm } from "@/components/marketing/contact-form";
import { PageHeader } from "@/components/ui/page-header";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Request a Consult or Appointment",
  description:
    "Start a patient or facility request with the Mobile FEES LV portal form.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 space-y-10">
      <PageHeader
        title="Request a Consult or Appointment"
        description="Choose patient or facility, complete the short form, and we will follow up within one business day."
      />

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle>Start Request</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <Card className="h-fit">
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">What to expect</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Requests are reviewed within one business day. If you prefer, you
                can also call or email directly.
              </p>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <a
                href="tel:+19374899209"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 shrink-0" />
                (937) 489-9209
              </a>
              <a
                href="mailto:kristine@thetechslp.com"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0" />
                kristine@thetechslp.com
              </a>
            </div>

            <div className="space-y-3 border-t border-border pt-6">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Need documents first?</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Open resources if you want forms, packet documents, or guides first.
              </p>
              <Link
                href="/resources"
                className={buttonVariants({ variant: "outline", className: "w-full" })}
              >
                Open Resources
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
