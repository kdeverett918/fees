import type { Metadata } from "next";
import Link from "next/link";
import {
  Ambulance,
  BadgeDollarSign,
  Building2,
  CheckCircle,
  ClipboardCheck,
  Clock,
  FileText,
  GraduationCap,
  Hospital,
  Mail,
  Phone,
  ShieldCheck,
  Stethoscope,
  Warehouse,
} from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { reimbursementSteps } from "@/data/pricing";

export const metadata: Metadata = {
  title: "For Healthcare Facilities",
  description:
    "Mobile FEES for skilled nursing, rehab, assisted living, and post-acute teams that need faster dysphagia decisions without sending residents out to radiology.",
};

const benefits = [
  {
    title: "Faster bedside decisions",
    description:
      "No transport, no radiology scheduling. The swallowing answer stays at the bedside.",
    icon: Clock,
  },
  {
    title: "Fewer send-outs",
    description:
      "Skip the coordination burden of transport, family updates, and post-appointment follow-up.",
    icon: Ambulance,
  },
  {
    title: "Stronger documentation",
    description:
      "FEES reports support clearer diagnosis, safer diet decisions, and better swallowing documentation.",
    icon: FileText,
  },
  {
    title: "Team education",
    description:
      "Pair the study with nurse/therapy education, referral coaching, and case-based follow-up.",
    icon: GraduationCap,
  },
];

const contractPoints = [
  "The facility identifies the resident's payer status before the visit and is responsible for the contracted vendor fee.",
  "During a Medicare Part A SNF stay, FEES is treated as part of consolidated billing, not a direct vendor-to-Medicare claim.",
  "For Part B, Medicare Advantage, Medicaid, and managed-care residents, the facility verifies plan rules before scheduling.",
  "Mobile FEES LV provides clinical documentation and a superbill or coding support when requested, but does not guarantee reimbursement.",
  "Cancellation, after-hours, travel, infection-control, and report-turnaround expectations are explicit in the agreement.",
];

const settingPages = [
  {
    title: "Skilled nursing and rehab",
    description:
      "Bedside speed, consolidated billing, and dysphagia workflow for SNF teams.",
    href: "/skilled-nursing-facility-fees-las-vegas",
    icon: Hospital,
  },
  {
    title: "Assisted living and memory care",
    description:
      "Resident referrals and family communication for ALF and memory-care settings.",
    href: "/assisted-living-fees-las-vegas",
    icon: Warehouse,
  },
  {
    title: "Physician referral teams",
    description:
      "A cleaner FEES referral path for physician offices and coordinators.",
    href: "/physician-referral-fees-las-vegas",
    icon: Stethoscope,
  },
];

export default function ForFacilitiesPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 space-y-16">
      <img
        src="/images/start/facility.jpg"
        alt="Healthcare facility hallway"
        className="w-full rounded-[var(--radius)] shadow-sm"
      />

      <PageHeader
        title="Mobile FEES for Healthcare Facilities"
        description="Faster swallowing decisions at the bedside, fewer transport delays, and stronger documentation for your care team."
      >
        <div className="flex flex-wrap gap-2 pt-2">
          <Badge>Bedside evaluations</Badge>
          <Badge variant="secondary">Facility-paid contract</Badge>
        </div>
      </PageHeader>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Where Mobile FEES Helps Most
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Mobile FEES is most useful when a resident is clinically fragile,
            hard to transport, on isolation, or when the team needs a swallowing
            answer sooner than an outpatient MBSS can be arranged.
          </p>
        </div>
        <Card>
          <CardContent className="space-y-3 pt-6">
            <div className="flex items-center gap-2">
              <BadgeDollarSign className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                Billing reality
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              FEES supports accurate swallow documentation and faster clinical
              decisions. It does not create PDPM reimbursement by itself. Your
              facility gains a cleaner chart when dysphagia or related
              comorbidities are present.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">
          Why Facilities Partner With Us
        </h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <Card key={benefit.title}>
              <CardContent className="space-y-3 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius)] bg-primary-light">
                  <benefit.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Building2 className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold text-foreground">
            SNF Medicare / Medicaid Workflow
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {reimbursementSteps.map((step) => (
            <Card key={step.title}>
              <CardContent className="space-y-2 pt-6">
                <h3 className="font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          The facility should know the resident&apos;s stay status before the
          visit. The contract assumes facility payment first. Medicaid and
          managed-care recovery is verified plan by plan.
        </p>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold text-foreground">
            What the Facility Agreement Covers
          </h2>
        </div>
        <Card>
          <CardContent className="space-y-3 pt-6">
            {contractPoints.map((point) => (
              <div key={point} className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {point}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <ClipboardCheck className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold text-foreground">
            Choose Your Facility Path
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {settingPages.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[var(--radius)] border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <item.icon className="h-5 w-5 text-primary" />
              <p className="mt-3 font-semibold text-foreground">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-[var(--radius)] border border-primary-light bg-primary-light/30 p-8 space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-foreground">
          Ready to Start a Facility Consult?
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Request a consult, clarify the contract model, or reach out directly.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contact?path=facility&intent=consult"
            className={buttonVariants({ size: "lg" })}
          >
            Request Facility Consult
          </Link>
          <Link
            href="/facility-onboarding-packet"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Open Onboarding Packet
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-6 pt-2 text-sm text-muted-foreground">
          <a
            href="tel:+19374899209"
            className="flex items-center gap-2 font-medium text-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4 text-primary" />
            (937) 489-9209
          </a>
          <a
            href="mailto:kristine@thetechslp.com"
            className="flex items-center gap-2 font-medium text-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4 text-primary" />
            kristine@thetechslp.com
          </a>
        </div>
      </section>
    </div>
  );
}
