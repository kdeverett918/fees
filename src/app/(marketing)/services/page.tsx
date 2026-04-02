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
    "Mobile FEES 702 evaluations, swallowing consultations, and staff training — expert dysphagia services brought directly to your facility or home.",
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
        description="Comprehensive dysphagia evaluation and education services, delivered wherever you need them."
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

      {/* CTA */}
      <section className="rounded-[var(--radius)] border border-primary-light bg-primary-light/30 p-8 text-center space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Ready to Schedule a Service?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Whether you need a FEES evaluation, a swallowing consultation, or
          staff training, we are here to help. Contact us to discuss your needs
          and schedule an appointment.
        </p>
        <Link href="/contact" className={buttonVariants({ size: "lg" })}>
          Contact Us
        </Link>
      </section>
    </div>
  );
}
