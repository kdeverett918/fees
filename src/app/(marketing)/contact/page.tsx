import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { ContactForm } from "@/components/marketing/contact-form";
import { Clock, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch to schedule a mobile FEES evaluation, ask a question, or refer a patient. We typically respond within one business day.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 space-y-16">
      {/* Header */}
      <PageHeader
        title="Contact Us"
        description="Have a question, need to schedule an evaluation, or want to refer a patient? We are here to help."
      />

      {/* Form + Info */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        {/* Side Info */}
        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Response Time</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                We respond to all inquiries within one business day. For urgent
                referrals, please call us directly and we will do our best to
                accommodate same-day or next-day scheduling.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Service Area</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                We provide mobile FEES evaluations to skilled nursing
                facilities, hospitals, rehabilitation centers, physician
                offices, assisted living communities, and patient homes
                throughout the Las Vegas area. Contact us
                to confirm coverage in your area.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">
                  Scheduling & Referrals
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Most evaluations are scheduled within 48-72 hours of receiving
                a referral. A physician order is required for FEES evaluations.
                We can assist with the order process.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
