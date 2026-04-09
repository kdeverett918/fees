import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { VoiceNarration } from "@/components/media/voice-narration";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  ClipboardCheck,
  Eye,
  Utensils,
  MessageSquare,
  FileText,
  CheckSquare,
  Heart,
  HelpCircle,
  Phone,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "For Patients & Families",
  description:
    "Learn what to expect during a mobile FEES evaluation in Las Vegas, how to prepare, and how to understand the results in plain language.",
  alternates: {
    canonical: "/for-patients",
  },
};

const expectSteps = [
  {
    title: "We come to you",
    description:
      "Your clinician arrives at your facility or home with all the equipment needed for a complete evaluation. There is nothing you need to set up.",
    icon: Heart,
  },
  {
    title: "We review your history",
    description:
      "The clinician asks about your medical history, current diet, medications, and any swallowing problems you have been experiencing.",
    icon: ClipboardCheck,
  },
  {
    title: "A small camera is placed",
    description:
      "A thin, flexible camera (about the width of a piece of spaghetti) is gently passed through your nose. It takes a few seconds and may feel slightly uncomfortable but is not painful.",
    icon: Eye,
  },
  {
    title: "You eat and drink",
    description:
      "While the camera is in place, you eat and drink different foods and liquids. The clinician watches on a screen to see how your swallowing works.",
    icon: Utensils,
  },
  {
    title: "We review your results",
    description:
      "The camera is removed and the clinician explains what they found, with specific recommendations about what foods and drinks are safest for you.",
    icon: MessageSquare,
  },
  {
    title: "A written report is sent",
    description:
      "A detailed report of findings and recommendations is sent to your doctor within 24-48 hours.",
    icon: FileText,
  },
];

const prepChecklist = [
  "You do not need to fast or skip meals before the exam",
  "Take your regular medications as usual",
  "Bring a list of your current medications if possible",
  "Bring any previous swallowing test results you may have",
  "A family member or caregiver is welcome to be present",
  "Wear comfortable clothing — no special attire needed",
  "If you wear dentures, keep them in for the evaluation",
  "Let your clinician know about any nasal surgery or breathing difficulties",
];

const patientFaqs = [
  {
    question: "Does FEES hurt?",
    answer:
      "Most patients say it is mildly uncomfortable but not painful. The camera is very thin and flexible. You may feel slight pressure in your nose for a few seconds as it is placed, but this goes away quickly. The camera portion takes about 15-20 minutes.",
  },
  {
    question: "How long does the appointment take?",
    answer:
      "About 45 minutes to one hour total, including history review, the exam, and going over your results. The camera portion itself is about 15-20 minutes.",
  },
  {
    question: "Will I get my results the same day?",
    answer:
      "Yes. Your clinician explains the findings and gives you recommendations right after the exam. A written report is also sent to your doctor.",
  },
  {
    question: "How much does it cost?",
    answer:
      "A FEES evaluation is $250 cash pay. We also offer a virtual swallowing wellness consult for $75. Coverage through a facility agreement may differ — we can provide a superbill for out-of-network insurance submission when appropriate.",
  },
  {
    question: "Can a family member be present during the exam?",
    answer:
      "Absolutely. We encourage a family member or caregiver to be present. It helps them understand your swallowing needs and how to support you at mealtimes.",
  },
  {
    question: "What if I have a sensitive gag reflex?",
    answer:
      "The scope is only 3.6mm wide — thinner than a piece of spaghetti. It is placed gently and most patients tolerate it well, even those with a sensitive gag reflex. Your clinician is experienced in making the process as comfortable as possible.",
  },
];

export default function ForPatientsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 space-y-16">
      <div className="space-y-4">
        <PageHeader
          title="For Patients & Families"
          description="What happens during a FEES visit, how to prepare, and what your results mean."
        />
        <VoiceNarration
          src="/audio/what-to-expect.mp3"
          label="Listen to what to expect"
        />
      </div>

      {/* What to Expect */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">
          What to Expect
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          A FEES evaluation is a safe procedure that lets your clinician see how
          you swallow. Here is what happens, step by step:
        </p>
        <div className="space-y-4">
          {expectSteps.map((step, index) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                  {index + 1}
                </div>
                {index < expectSteps.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-2" />
                )}
              </div>
              <div className="pb-6">
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

      {/* How to Prepare */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">
          How to Prepare
        </h2>
        <img
          src="/images/start/prepare.jpg"
          alt="Patient being prepared for a FEES evaluation"
          className="w-full h-auto rounded-[var(--radius)] shadow-sm"
        />
        <p className="text-muted-foreground">
          Very little preparation is needed. Here is a quick checklist:
        </p>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardCheck className="h-5 w-5 text-primary" />
              Preparation Checklist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {prepChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckSquare className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Understanding Your Results */}
      <section id="results" className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">
          Understanding Your Results
        </h2>
        <img
          src="/images/fees/results-discussion.jpg"
          alt="Speech-language pathologist discussing FEES results with patient and family"
          className="w-full h-auto rounded-[var(--radius)] shadow-sm"
        />
        <p className="text-muted-foreground leading-relaxed">
          After your evaluation, your clinician explains the findings and what
          they mean for you. Here are some terms you might hear:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardContent className="pt-6 space-y-2">
              <Badge variant="accent">Aspiration</Badge>
              <p className="text-sm text-muted-foreground">
                When food or liquid enters the airway below the vocal cords.
                This can increase the risk of pneumonia. Your clinician will
                explain if this is happening and what can be done.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 space-y-2">
              <Badge variant="accent">Penetration</Badge>
              <p className="text-sm text-muted-foreground">
                When food or liquid enters the airway above the vocal cords but
                does not pass below them. Less severe than aspiration but still
                needs attention.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 space-y-2">
              <Badge variant="accent">Residue</Badge>
              <p className="text-sm text-muted-foreground">
                When food or liquid remains in the throat after you swallow.
                Small amounts can be normal, but larger amounts may need diet
                changes or swallowing exercises.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 space-y-2">
              <Badge variant="accent">Diet Recommendations</Badge>
              <p className="text-sm text-muted-foreground">
                Based on findings, your clinician may recommend changes to food
                textures or liquid thickness to help you swallow more safely.
              </p>
            </CardContent>
          </Card>
        </div>
        <p className="text-sm text-muted-foreground italic">
          Your clinician will explain your specific results in detail and answer
          all of your questions. You do not need to know these terms beforehand.
        </p>
      </section>

      {/* Patient FAQs */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {patientFaqs.map((faq, index) => (
            <AccordionItem key={index} value={`patient-faq-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Bottom CTA */}
      <section className="rounded-[var(--radius)] border border-primary-light bg-primary-light/30 p-8 text-center space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          Ready to schedule?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Request an appointment online, or reach out directly.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contact?path=patient&intent=appointment"
            className={buttonVariants({ size: "lg" })}
          >
            Request Appointment
          </Link>
          <Link
            href="/contact?path=patient&intent=estimate"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Request Estimate
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-4 pt-2 text-sm text-muted-foreground">
          <a
            href="tel:+19374899209"
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            (937) 489-9209
          </a>
          <a
            href="mailto:kristine@thetechslp.com"
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            kristine@thetechslp.com
          </a>
        </div>
      </section>
    </div>
  );
}
