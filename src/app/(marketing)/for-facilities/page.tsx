import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Building2,
  Clock,
  ShieldCheck,
  Ambulance,
  FileText,
  Phone,
  CalendarCheck,
  ClipboardCheck,
  DollarSign,
  Award,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "For Healthcare Facilities",
  description:
    "Partner with us for on-site mobile FEES evaluations at your skilled nursing facility, hospital, rehabilitation center, or physician office. Reduce transfers and get faster diagnoses.",
};

const benefits = [
  {
    title: "No Hospital Transfers Required",
    description:
      "Stop sending patients to the hospital and waiting weeks for a modified barium swallow to be scheduled and completed. FEES is performed right at your facility — same week, not weeks later.",
    icon: Ambulance,
  },
  {
    title: "Same-Day Results, Not Weeks of Waiting",
    description:
      "With MBS, you wait for scheduling, transport, the study, and the report. With mobile FEES, results and diet recommendations are delivered the same day. Your patients start eating safely sooner.",
    icon: Clock,
  },
  {
    title: "Convenience for Your Team",
    description:
      "We arrive with our Optim ENTity XL scope and portable HD camera system — fully self-contained. Your staff can observe and participate without disrupting their daily schedule.",
    icon: Building2,
  },
  {
    title: "Comprehensive Documentation",
    description:
      "Detailed written reports with findings, severity ratings, diet recommendations, and follow-up plans are provided within 24-48 hours.",
    icon: FileText,
  },
];

const processSteps = [
  {
    number: 1,
    title: "Contact Us",
    description:
      "Call or submit a referral through our contact form. Provide patient demographics, diagnosis, current diet, and reason for referral.",
    icon: Phone,
  },
  {
    number: 2,
    title: "Schedule",
    description:
      "We will coordinate a convenient date and time with your facility. Most evaluations are scheduled within 48-72 hours of referral.",
    icon: CalendarCheck,
  },
  {
    number: 3,
    title: "Evaluation",
    description:
      "We arrive with the Optim ENTity XL and portable HD camera, perform the evaluation, review findings with your team, and provide same-day recommendations.",
    icon: ClipboardCheck,
  },
];

const credentialItems = [
  "ASHA-certified speech-language pathologist (CCC-SLP)",
  "9 years of clinical experience",
  "FEES certification from Stanford — all competency passes completed",
  "State licensed and fully insured",
  "HIPAA compliant documentation and communication",
  "Professional liability coverage",
];

export default function ForFacilitiesPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 space-y-16">
      {/* Hero Banner */}
      <img
        src="/images/start/facility.jpg"
        alt="Healthcare facility hallway"
        className="w-full h-auto rounded-[var(--radius)] shadow-sm"
      />

      {/* Header */}
      <PageHeader
        title="For Healthcare Facilities"
        description="On-site mobile FEES evaluations for skilled nursing facilities, hospitals, rehabilitation centers, physician offices, and assisted living communities."
      />

      {/* Value Proposition */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Bring Instrumental Swallowing Assessments to Your Patients
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Tired of sending patients to the hospital and waiting weeks to get
          an MBS completed? Our mobile FEES service eliminates that entire
          process. No hospital transfers, no scheduling delays, no waiting for
          radiology reports. We bring the evaluation to your facility and
          deliver results the same day — so your patients start eating safely
          sooner, not weeks later.
        </p>
      </section>

      {/* Benefits */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">
          Why Partner With Us
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <Card key={benefit.title}>
              <CardContent className="pt-6 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius)] bg-primary-light">
                    <benefit.icon className="h-4.5 w-4.5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Referral Process */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">
          How to Refer a Patient
        </h2>
        <p className="text-muted-foreground">
          Getting started is simple. Our three-step process ensures a smooth
          experience for your facility and your patients.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {processSteps.map((step) => (
            <Card key={step.number} className="text-center">
              <CardContent className="pt-6 space-y-3">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <Badge variant="secondary">Step {step.number}</Badge>
                  <h3 className="font-semibold text-foreground text-lg">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Insurance & Billing */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <DollarSign className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold text-foreground">
            Insurance & Billing
          </h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          FEES is covered by most major insurance plans, including Medicare and
          Medicaid, when ordered by a physician and deemed medically necessary.
          We handle all billing and insurance verification directly. Your
          facility is not burdened with additional billing work.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          A physician order is required for FEES evaluations. We can assist with
          the order process and provide the necessary documentation to support
          medical necessity.
        </p>
      </section>

      {/* Credentials */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Award className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold text-foreground">
            Our Credentials
          </h2>
        </div>
        <ShieldCheck className="hidden" />
        <ul className="space-y-2">
          {credentialItems.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="rounded-[var(--radius)] border border-primary-light bg-primary-light/30 p-8 text-center space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Ready to Get Started?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Contact us to discuss how mobile FEES can benefit your patients and
          your facility. We will answer any questions and help you set up your
          first referral.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/contact" className={buttonVariants({ size: "lg" })}>
            Submit a Referral
          </Link>
          <Link href="/services" className={buttonVariants({ variant: "outline", size: "lg" })}>
            View All Services
          </Link>
        </div>
      </section>
    </div>
  );
}
