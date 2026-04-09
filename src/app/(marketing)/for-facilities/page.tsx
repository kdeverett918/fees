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
  ShieldCheck,
  Stethoscope,
  Warehouse,
} from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { reimbursementSteps } from "@/data/pricing";
import { resourceDocuments } from "@/data/resources";

export const metadata: Metadata = {
  title: "For Healthcare Facilities",
  description:
    "Mobile FEES for skilled nursing, rehab, assisted living, and post-acute teams that need faster dysphagia decisions without sending residents out to radiology.",
};

const benefits = [
  {
    title: "Faster bedside decisions",
    description:
      "When a resident cannot wait for transport, radiology scheduling, and report turnaround, mobile FEES keeps the decision-making window much tighter.",
    icon: Clock,
  },
  {
    title: "Fewer send-outs",
    description:
      "Avoid the coordination burden of transport, family updates, missed meals, and post-appointment follow-up whenever FEES is the right instrumental study.",
    icon: Ambulance,
  },
  {
    title: "Stronger dysphagia documentation",
    description:
      "A FEES report can support clearer diagnosis, safer diet decisions, and better documentation of swallowing status when dysphagia or related conditions are clinically present.",
    icon: FileText,
  },
  {
    title: "Education for your team",
    description:
      "Facility partners can pair the study with nurse/therapy education, referral workflow coaching, and case-based follow-up for complex residents.",
    icon: GraduationCap,
  },
];

const contractPoints = [
  "The facility identifies the resident's payer status before the visit and remains responsible for the contracted vendor fee unless another billing path is approved in writing.",
  "During a Medicare Part A SNF stay, FEES should generally be treated as part of the facility's consolidated billing workflow rather than as a direct vendor-to-Medicare claim.",
  "For Part B, Medicare Advantage, Medicaid, and Medicaid managed-care residents, the facility verifies plan rules before scheduling and decides whether it will submit the claim, bill the resident, or absorb the service cost.",
  "The agreement should state that Mobile FEES LV provides clinical documentation and a superbill or coding support when requested, but never guarantees reimbursement.",
  "Cancellation, after-hours, travel, infection-control, and report-turnaround expectations should be explicit so the workflow is predictable on both sides.",
];

const facilityResources = resourceDocuments.filter(
  (document) => document.audience === "facility" || document.audience === "all"
);

const settingPages = [
  {
    title: "Skilled nursing and rehab",
    description:
      "For SNF and post-acute teams balancing bedside speed, consolidated billing, and dysphagia workflow.",
    href: "/skilled-nursing-facility-fees-las-vegas",
    icon: Hospital,
  },
  {
    title: "Assisted living and memory care",
    description:
      "For ALFs and memory-care settings coordinating resident referrals and family communication.",
    href: "/assisted-living-fees-las-vegas",
    icon: Warehouse,
  },
  {
    title: "Physician referral teams",
    description:
      "For physician offices and referral coordinators building a cleaner FEES referral path.",
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
        title="Mobile FEES for Skilled Nursing & Post-Acute Teams"
        description="For facilities that need faster swallowing decisions, fewer transport delays, and documentation that supports the care plan without overpromising reimbursement."
      >
        <div className="flex flex-wrap gap-2 pt-2">
          <Badge>No hospital transfer when FEES is appropriate</Badge>
          <Badge variant="secondary">Facility-paid contract model</Badge>
          <Badge variant="outline">PDPM-aware but reimbursement-safe messaging</Badge>
        </div>
      </PageHeader>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Where Mobile FEES Helps Most
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Mobile FEES is especially useful when a resident is clinically fragile, hard to
            transport, on isolation, cognitively overwhelmed by outside appointments, or when
            the team needs a pharyngeal dysphagia answer sooner than an outpatient MBSS can be
            arranged. It does not replace every MBSS. It gives your team a faster bedside option
            when bedside reality matters more than radiology access.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            The facility value is usually a combination of timelier care, reduced transport
            complexity, stronger dysphagia documentation, and cleaner coordination between
            nursing, therapy, providers, and families.
          </p>
        </div>
        <Card>
          <CardContent className="space-y-3 pt-6">
            <div className="flex items-center gap-2">
              <BadgeDollarSign className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                Important billing reality
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              FEES can improve diagnostic clarity and support accurate swallow-related
              documentation. It does not create PDPM reimbursement by itself. The safest sales
              position is that your facility gains faster, clinically supported decisions and a
              cleaner chart when dysphagia or related comorbidities are actually present.
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
                <h3 className="font-semibold text-foreground">{benefit.title}</h3>
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
          Bottom line: the facility should know the resident&apos;s stay status before the visit,
          and the contract should assume facility payment first. Medicaid and managed-care
          recovery should be verified plan by plan, not marketed as automatic.
        </p>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold text-foreground">
            What the Facility Agreement Should Say
          </h2>
        </div>
        <Card>
          <CardContent className="space-y-3 pt-6">
            {contractPoints.map((point) => (
              <div key={point} className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-muted-foreground">{point}</p>
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

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <ClipboardCheck className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold text-foreground">
            Download the Facility Toolkit
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {facilityResources.map((document) => (
            <Card key={document.href}>
              <CardContent className="space-y-3 pt-6">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-foreground">{document.title}</h3>
                  <Badge variant="outline">{document.format}</Badge>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {document.description}
                </p>
                <a
                  href={document.href}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: "outline", className: "w-full sm:w-auto" })}
                >
                  Open document
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="rounded-[var(--radius)] border border-primary-light bg-primary-light/30 p-8 space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-foreground">
          Ready to Start a Facility Consult?
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Use the Mobile FEES LV funnel to route your team into the right
          consult path, clarify the contract model, and start onboarding with a
          methodical click-through process.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contact?path=facility&intent=consult"
            className={buttonVariants({ size: "lg" })}
          >
            Request Facility Consult
          </Link>
          <Link
            href="/resources"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Review Facility Packet
          </Link>
        </div>
      </section>
    </div>
  );
}
