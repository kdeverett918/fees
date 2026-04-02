"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Building2, Heart, ArrowRight, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { VoiceNarration } from "@/components/media/voice-narration";
import { useAudience } from "@/components/audience/audience-provider";
import { startMenuItems } from "@/data/start-menu";
import type { VisitorRole, StartMenuItem } from "@/types";

const roles = [
  {
    id: "facility" as VisitorRole,
    label: "I'm a Healthcare Facility",
    description: "Nursing homes, hospitals, rehab centers, home health agencies",
    icon: Building2,
  },
  {
    id: "patient" as VisitorRole,
    label: "I'm a Patient or Family Member",
    description: "Learn about FEES and prepare for your evaluation",
    icon: Heart,
  },
];

function PreviewCard({ item }: { item: StartMenuItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden">
        <div className="aspect-video bg-muted relative overflow-hidden">
          <img
            src={item.image}
            alt={item.label}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-semibold text-foreground">{item.label}</h3>
          <p className="text-muted-foreground">{item.description}</p>
          {item.narrationSrc && (
            <VoiceNarration src={item.narrationSrc} label="Listen to overview" />
          )}
          <Link href={item.href}>
            <Button className="w-full mt-2">
              Learn More
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

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Mobile FEES 702 Evaluations
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional swallowing evaluations brought directly to you.
            Expert care, wherever you are.
          </p>
        </div>

        {/* Role selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          {roles.map((role) => {
            const Icon = role.icon;
            const isActive = audience === role.id;
            return (
              <button
                key={role.id}
                onClick={() => {
                  setAudience(role.id);
                  setSelectedItem(null);
                }}
                className={`p-6 rounded-[var(--radius)] border-2 text-left transition-all cursor-pointer ${
                  isActive
                    ? "border-primary bg-primary-light shadow-md"
                    : "border-border bg-card hover:border-primary/40 hover:shadow-sm"
                }`}
              >
                <Icon
                  className={`h-8 w-8 mb-3 ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                />
                <h3 className="font-semibold text-foreground">{role.label}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {role.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Content area */}
        <AnimatePresence mode="wait">
          {audience && (
            <motion.div
              key={audience}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* Intent selector */}
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  How can we help you?
                </h2>
                {filteredItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className={`w-full p-4 rounded-[var(--radius)] border text-left transition-all cursor-pointer ${
                      selectedItem?.id === item.id
                        ? "border-primary bg-primary-light/50"
                        : "border-border bg-card hover:border-primary/40"
                    }`}
                  >
                    <h3 className="font-medium text-foreground">{item.label}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </button>
                ))}
              </div>

              {/* Dynamic preview */}
              <div>
                <AnimatePresence mode="wait">
                  {selectedItem ? (
                    <PreviewCard key={selectedItem.id} item={selectedItem} />
                  ) : (
                    <motion.div
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center justify-center h-full min-h-[300px] rounded-[var(--radius)] border border-dashed border-border"
                    >
                      <p className="text-muted-foreground text-center px-8">
                        Select an option to preview details
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
