"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Building2,
  CalendarCheck2,
  CircleHelp,
  ClipboardCheck,
  Heart,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { VoiceNarration } from "@/components/media/voice-narration";
import { useAudience } from "@/components/audience/audience-provider";
import { startMenuItems } from "@/data/start-menu";
import type { StartMenuItem, VisitorRole } from "@/types";

const roles = [
  {
    id: "patient" as VisitorRole,
    label: "Concierge Patient Portal",
    description: "Appointments, pricing review, and at-home or bedside FEES support",
    icon: Heart,
  },
  {
    id: "facility" as VisitorRole,
    label: "Facility Portal",
    description: "Consults, onboarding, referral workflow, and service planning",
    icon: Building2,
  },
];

const steps = [
  {
    title: "Open the right portal",
    description:
      "Start in the concierge patient portal or the facility portal.",
    icon: CircleHelp,
  },
  {
    title: "Answer a few questions",
    description:
      "The click-through request flow collects only the details needed to route the next step.",
    icon: ClipboardCheck,
  },
  {
    title: "Get the right next step",
    description:
      "We review fit, confirm timing, and move the request into scheduling or onboarding quickly.",
    icon: CalendarCheck2,
  },
];

function PreviewCard({ item }: { item: StartMenuItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.22 }}
    >
      <Card className="overflow-hidden border-primary/15 shadow-sm">
        <div className="aspect-[16/10] bg-muted">
          <img
            src={item.image}
            alt={item.label}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-4 p-6">
          <div className="space-y-2">
            <Badge variant="secondary">Best next click</Badge>
            <h3 className="text-2xl font-semibold text-foreground">{item.label}</h3>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
          {item.narrationSrc && (
            <VoiceNarration src={item.narrationSrc} label="Listen to overview" />
          )}
          <div className="rounded-[var(--radius)] border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
            This path is built to keep the next step simple: click through,
            submit, and wait for confirmation instead of chasing the right form.
          </div>
          <Link href={item.href}>
            <Button size="lg" className="w-full">
              {item.ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}

export function StartMenu() {
  const { audience, setAudience } = useAudience();
  const [selectedItem, setSelectedItem] = useState<StartMenuItem | null>(null);

  const filteredItems = audience
    ? startMenuItems.filter((item) => item.role === audience)
    : [];

  const handleSelectRole = (role: VisitorRole) => {
    setAudience(role);
    const firstMatch = startMenuItems.find((item) => item.role === role) ?? null;
    setSelectedItem(firstMatch);
  };

  return (
    <section className="py-10 md:py-18">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Badge>Mobile FEES LV</Badge>
              <Badge variant="secondary">
                <MapPin className="mr-1 h-3.5 w-3.5" />
                Las Vegas patients and facilities
              </Badge>
              <Badge variant="outline">Click-through consult funnel</Badge>
            </div>
            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Two clear portals: one for concierge patients, one for facilities
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Mobile FEES LV now routes signups through two front doors. The
                concierge patient portal is built for Las Vegas families and
                self-pay cases. The facility portal is built for onboarding,
                referrals, workflow, and launch planning.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/concierge-patient-portal">
                <Button size="lg">
                  Open Concierge Portal
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/facility-portal">
                <Button variant="outline" size="lg">
                  Open Facility Portal
                </Button>
              </Link>
            </div>
          </div>

          <Card className="border-primary/15 bg-card/80 p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
              {steps.map((step, index) => (
                <div key={step.title} className="rounded-[var(--radius)] border border-border bg-background/70 p-4">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                      {index + 1}
                    </div>
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-base font-semibold text-foreground">{step.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-foreground">
              Start with the path that fits you best
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              The first click determines which portal, resources, and request
              options appear next. That keeps the flow short and relevant for
              the person signing up.
            </p>
          </div>

          <div className="grid max-w-3xl gap-4 sm:grid-cols-2">
            {roles.map((role) => {
              const Icon = role.icon;
              const isActive = audience === role.id;
              return (
                <button
                  key={role.id}
                  onClick={() => handleSelectRole(role.id)}
                  className={`rounded-[var(--radius)] border-2 p-6 text-left transition-all ${
                    isActive
                      ? "border-primary bg-primary-light shadow-md"
                      : "border-border bg-card hover:border-primary/40 hover:shadow-sm"
                  }`}
                >
                  <Icon
                    className={`mb-3 h-8 w-8 ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                  <h3 className="font-semibold text-foreground">{role.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{role.description}</p>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {audience ? (
              <motion.div
                key={audience}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.24 }}
                className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    Choose the next click
                  </h3>
                  {filteredItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedItem(item)}
                      className={`w-full rounded-[var(--radius)] border p-4 text-left transition-all ${
                        selectedItem?.id === item.id
                          ? "border-primary bg-primary-light/50"
                          : "border-border bg-card hover:border-primary/40"
                      }`}
                    >
                      <h4 className="font-medium text-foreground">{item.label}</h4>
                      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </button>
                  ))}
                </div>

                <div>
                  <AnimatePresence mode="wait">
                    {selectedItem ? (
                      <PreviewCard key={selectedItem.id} item={selectedItem} />
                    ) : (
                      <motion.div
                        key="placeholder"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex min-h-[280px] items-center justify-center rounded-[var(--radius)] border border-dashed border-border px-8"
                      >
                        <p className="text-center text-muted-foreground">
                          Choose an option to continue into the most relevant request
                          flow.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
