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
import { buttonVariants } from "@/components/ui/button";
import { services } from "@/data/services";
import {
  Stethoscope,
  ClipboardList,
  GraduationCap,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mobile FEES LV evaluations, swallowing consultations, and staff training for Las Vegas facilities and patients.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Stethoscope,
  ClipboardList,
  GraduationCap,
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 space-y-16">
      {/* Hero Banner */}
      <img
        src="/images/services/mobile-arrival.jpg"
        alt="Speech-language pathologist arriving at a healthcare facility with portable FEES equipment"
        className="w-full h-auto rounded-[var(--radius)] shadow-sm"
      />

      {/* Header */}
      <PageHeader
        title="Our Services"
        description="Comprehensive dysphagia evaluation and education services for Las Vegas patients, families, and referral teams."
      />

      {/* Service Cards */}
      <div className="space-y-8">
        {services.map((service) => {
          const Icon = iconMap[service.icon];
          return (
            <Card key={service.id} id={service.id}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  {Icon && (
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius)] bg-primary-light">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  )}
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="mt-1">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              {service.id === "training" && (
                <div className="px-6 pb-2">
                  <img
                    src="/images/services/staff-training.jpg"
                    alt="Staff training presentation on dysphagia management"
                    className="w-full h-auto rounded-[var(--radius)] shadow-sm"
                  />
                </div>
              )}
              <CardContent>
                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        <Card className="border-primary/15">
          <CardContent className="space-y-3 pt-6">
            <h2 className="text-xl font-semibold text-foreground">
              Bedside swallow study page
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Helps when transport, timing, or patient fragility makes
              outpatient radiology a poor fit.
            </p>
            <Link
              href="/bedside-swallow-study-las-vegas"
              className={buttonVariants({ variant: "outline" })}
            >
              View Bedside Page
            </Link>
          </CardContent>
        </Card>
        <Card className="border-primary/15">
          <CardContent className="space-y-3 pt-6">
            <h2 className="text-xl font-semibold text-foreground">
              At-home swallow evaluation page
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Helps families and concierge cases explore private-home FEES
              visits, pricing review, and practical next steps.
            </p>
            <Link
              href="/at-home-swallow-evaluation-las-vegas"
              className={buttonVariants({ variant: "outline" })}
            >
              View At-Home Page
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="rounded-[var(--radius)] border border-primary-light bg-primary-light/30 p-8 text-center space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Ready to Request the Right Next Step?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Use the request form to ask for a patient appointment, facility
          consult, pricing review, or service conversation without starting from
          a blank message box.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contact?path=patient&intent=appointment"
            className={buttonVariants({ size: "lg" })}
          >
            Request Appointment
          </Link>
          <Link
            href="/las-vegas-mobile-fees"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Las Vegas FEES Page
          </Link>
          <Link
            href="/contact?path=facility&intent=consult"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Request Facility Consult
          </Link>
        </div>
      </section>
    </div>
  );
}
