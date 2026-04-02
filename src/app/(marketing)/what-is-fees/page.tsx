import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { VoiceNarration } from "@/components/media/voice-narration";
import {
  Eye,
  Utensils,
  FileText,
  MessageSquare,
  ShieldCheck,
  Clock,
  Camera,
  Repeat,
  Users,
  Brain,
  HeartPulse,
  Stethoscope,
} from "lucide-react";

export const metadata: Metadata = {
  title: "What is FEES?",
  description:
    "Learn about Fiberoptic Endoscopic Evaluation of Swallowing (FEES) — a portable, radiation-free procedure that lets clinicians see how you swallow in real time.",
};

const steps = [
  {
    number: 1,
    title: "Preparation & History Review",
    description:
      "Your clinician reviews your medical history, current diet, and swallowing concerns. No special preparation or fasting is required.",
    icon: MessageSquare,
  },
  {
    number: 2,
    title: "Scope Placement",
    description:
      "The Optim ENTity XL — a thin 3.6mm flexible nasopharyngoscope — is gently passed through one nostril. This takes just a few seconds and most patients tolerate it well.",
    icon: Eye,
  },
  {
    number: 3,
    title: "Baseline Observation",
    description:
      "Before you eat or drink, the clinician observes the anatomy and function of your throat, including how you manage your own saliva.",
    icon: Camera,
  },
  {
    number: 4,
    title: "Swallowing Trials",
    description:
      "You are given various foods and liquids of different textures and thicknesses while the clinician watches on the screen. This shows exactly what happens when you swallow.",
    icon: Utensils,
  },
  {
    number: 5,
    title: "Strategy Testing",
    description:
      "If any swallowing problems are observed, the clinician may test strategies such as head positioning, diet modifications, or swallowing techniques to see what helps.",
    icon: Repeat,
  },
  {
    number: 6,
    title: "Results & Recommendations",
    description:
      "Findings are reviewed with you and your care team immediately. A detailed written report with diet and treatment recommendations follows.",
    icon: FileText,
  },
];

const benefits = [
  {
    title: "No Radiation",
    description:
      "Unlike modified barium swallow studies (MBSS/VFSS), FEES uses a camera — not X-rays. It can be repeated as often as needed without radiation exposure.",
    icon: ShieldCheck,
  },
  {
    title: "Portable & On-Site",
    description:
      "Our Optim ENTity XL and ESC Medicams portable camera system goes wherever the patient is — no hospital or radiology suite required.",
    icon: Stethoscope,
  },
  {
    title: "Real Food & Liquids",
    description:
      "Patients eat their own food during FEES rather than barium-coated substances, giving a more realistic picture of everyday swallowing.",
    icon: Utensils,
  },
  {
    title: "Immediate Results",
    description:
      "Results are available right away. Diet recommendations and swallowing strategies can be implemented the same day.",
    icon: Clock,
  },
];

const candidateGroups = [
  {
    title: "Neurological Conditions",
    description:
      "Stroke, Parkinson's disease, ALS, traumatic brain injury, dementia, and other conditions affecting swallowing.",
    icon: Brain,
  },
  {
    title: "Head & Neck Cancer",
    description:
      "Patients who have had surgery, radiation, or chemotherapy affecting the throat and swallowing structures.",
    icon: HeartPulse,
  },
  {
    title: "Aging & Decline",
    description:
      "Elderly patients with unexplained weight loss, recurrent pneumonia, coughing during meals, or difficulty swallowing medications.",
    icon: Users,
  },
  {
    title: "Respiratory Concerns",
    description:
      "Patients with tracheostomies, ventilator dependence, or chronic aspiration who need close monitoring of airway protection.",
    icon: ShieldCheck,
  },
];

export default function WhatIsFeesPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-4">
        <PageHeader
          title="What is FEES?"
          description="Fiberoptic Endoscopic Evaluation of Swallowing is a safe, portable procedure that lets clinicians see exactly how you swallow — in real time."
        />
        <VoiceNarration
          src="/audio/what-is-fees.mp3"
          label="Listen to this explanation"
        />
      </div>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
        <p className="text-muted-foreground leading-relaxed">
          FEES stands for <strong>Fiberoptic Endoscopic Evaluation of
          Swallowing</strong>. It is an instrumental assessment of swallowing
          function performed by a speech-language pathologist. During the
          procedure, a thin, flexible nasopharyngoscope (we use the Optim
          ENTity XL, just 3.6mm wide) is passed through the nose to provide a
          clear view of the throat as the patient eats and drinks.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          FEES is considered the gold standard for evaluating swallowing
          disorders (dysphagia). It allows clinicians to directly observe
          whether food or liquid is entering the airway (aspiration), whether
          food is sticking in the throat (residue), and how well the swallowing
          muscles are working. Because the equipment is fully portable, FEES
          can be performed at the bedside, in a nursing facility, or even in a
          patient&apos;s home.
        </p>
        <img
          src="/images/fees/procedure-diagram.jpg"
          alt="Diagram illustrating the FEES procedure"
          className="w-full h-auto rounded-[var(--radius)] shadow-sm"
        />
      </section>

      {/* How It Works */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">
          How It Works
        </h2>
        <img
          src="/images/fees/equipment-setup.jpg"
          alt="Optim ENTity XL with ESC Medicams portable camera system"
          className="w-full h-auto rounded-[var(--radius)] shadow-sm"
        />
        <div className="space-y-4">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                  {step.number}
                </div>
                {step.number < steps.length && (
                  <div className="w-px flex-1 bg-border mt-2" />
                )}
              </div>
              <div className="pb-8">
                <div className="flex items-center gap-2 mb-1">
                  <step.icon className="h-4 w-4 text-primary" />
                  <h3 className="font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">
          Benefits Over Other Tests
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          While modified barium swallow studies (also called videofluoroscopic
          swallow studies) are another common way to evaluate swallowing, FEES
          offers several distinct advantages:
        </p>
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

      {/* Who Needs FEES */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">
          Who Needs FEES?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          FEES may be recommended for anyone who is having difficulty
          swallowing, coughing or choking during meals, experiencing
          unexplained weight loss, or has been diagnosed with a condition known
          to affect swallowing. Common groups include:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {candidateGroups.map((group) => (
            <Card key={group.title}>
              <CardContent className="pt-6 space-y-2">
                <div className="flex items-center gap-2">
                  <group.icon className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">
                    {group.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {group.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-[var(--radius)] border border-primary-light bg-primary-light/30 p-8 space-y-3 text-center">
        <Badge variant="default">Have Questions?</Badge>
        <h2 className="text-xl font-semibold text-foreground">
          Not sure if FEES is right for you?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We are happy to answer any questions about the procedure and help
          determine if a FEES evaluation is appropriate.{" "}
          <a href="/contact" className="text-primary hover:underline font-medium">
            Contact us
          </a>{" "}
          to learn more.
        </p>
      </section>
    </div>
  );
}
