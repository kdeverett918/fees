import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { ContactForm } from "@/components/marketing/contact-form";
import { Clock, MapPin, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Request a Consult or Appointment",
  description:
    "Use the Mobile FEES LV request funnel to book a Las Vegas patient appointment, request pricing guidance, or schedule a facility consult.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 space-y-16">
      <PageHeader
        title="Request a Consult or Appointment"
        description="Choose the concierge patient portal or the facility portal, answer a short set of questions, and let Mobile FEES LV route the next scheduling step."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-primary/15">
          <CardContent className="space-y-3 pt-6">
            <h3 className="font-semibold text-foreground">
              Concierge Patient Portal
            </h3>
            <p className="text-sm text-muted-foreground">
              Built for Las Vegas patients, families, self-pay cases, and Good
              Faith Estimate requests.
            </p>
            <Link
              href="/concierge-patient-portal"
              className={buttonVariants({ variant: "outline", className: "w-full" })}
            >
              Open Patient Portal
            </Link>
          </CardContent>
        </Card>

        <Card className="border-primary/15">
          <CardContent className="space-y-3 pt-6">
            <h3 className="font-semibold text-foreground">Facility Portal</h3>
            <p className="text-sm text-muted-foreground">
              Built for onboarding, contracts, workflow planning, and referral
              support for facilities and referral teams.
            </p>
            <Link
              href="/facility-portal"
              className={buttonVariants({ variant: "outline", className: "w-full" })}
            >
              Open Facility Portal
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Three-Step Portal Request Funnel</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6 space-y-3">
              <h3 className="font-semibold text-foreground">
                Need the resource packet first?
              </h3>
              <p className="text-sm text-muted-foreground">
                Review pricing, comparison sheets, agreement templates, and
                fillable forms before you submit your first resident or patient
                request.
              </p>
              <Link
                href="/resources"
                className={buttonVariants({ variant: "outline", className: "w-full" })}
              >
                Open Resources
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Response Time</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                We respond to all requests within one business day. Urgent Las
                Vegas referrals can be flagged in the funnel so we can confirm
                the fastest realistic next step.
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
                Mobile FEES LV serves Las Vegas-area patients, skilled nursing
                facilities, rehab programs, physician offices, assisted living
                communities, and select home-based concierge visits. Use the
                form to confirm your location and fit.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">
                  What to Have Ready
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Patients should know the city, desired service, and referral
                status. Facilities should know the building name, setting,
                billing expectation, and desired launch timing.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
