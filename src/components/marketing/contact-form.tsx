"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle,
  Heart,
  Loader2,
  PhoneCall,
  Send,
} from "lucide-react";
import { routeTrackerKeys } from "@/components/analytics/route-tracker";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ContactPath = "" | "patient" | "facility";
type ContactIntent =
  | ""
  | "appointment"
  | "estimate"
  | "consult"
  | "packet";

interface FunnelFormData {
  path: ContactPath;
  intent: ContactIntent;
  contactRole: string;
  service: string;
  city: string;
  facilityName: string;
  careSetting: string;
  timeframe: string;
  referralStatus: string;
  payerPath: string;
  monthlyVolume: string;
  bestContactTime: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  website: string;
  portalSource: string;
  sourcePage: string;
  firstTouchPage: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
}

const STEPS = ["Path", "Details", "Contact"];

const pathOptions = [
  {
    id: "patient" as const,
    label: "Concierge Patient Portal",
    description: "Request a mobile FEES appointment, pricing review, or patient-facing next step.",
    icon: Heart,
  },
  {
    id: "facility" as const,
    label: "Facility Portal",
    description: "Request a facility consult, onboarding call, or referral packet review.",
    icon: Building2,
  },
];

const patientIntentOptions = [
  {
    id: "appointment" as const,
    label: "Request appointment",
    description: "Best when you want a visit or consult scheduled soon.",
  },
  {
    id: "estimate" as const,
    label: "Pricing / GFE review",
    description: "Best when you need cost guidance before scheduling.",
  },
];

const facilityIntentOptions = [
  {
    id: "consult" as const,
    label: "Request consult",
    description: "Best for a first conversation about workflow, fit, and rollout.",
  },
  {
    id: "packet" as const,
    label: "Referral packet review",
    description: "Best when you want documents, onboarding details, or billing guardrails.",
  },
];

function getPortalSource(path: ContactPath) {
  if (path === "patient") {
    return "concierge-patient-portal";
  }

  if (path === "facility") {
    return "facility-portal";
  }

  return "";
}

function getInitialForm(searchParams: URLSearchParams): FunnelFormData {
  const path = searchParams.get("path");
  const intent = searchParams.get("intent");

  const safePath: ContactPath =
    path === "patient" || path === "facility" ? path : "";
  const safeIntent: ContactIntent =
    intent === "appointment" ||
    intent === "estimate" ||
    intent === "consult" ||
    intent === "packet"
      ? intent
      : "";

  return {
    path: safePath,
    intent: safeIntent,
    contactRole: "",
    service: "",
    city: "",
    facilityName: "",
    careSetting: "",
    timeframe: "",
    referralStatus: "",
    payerPath: "",
    monthlyVolume: "",
    bestContactTime: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "",
    portalSource: getPortalSource(safePath),
    sourcePage: "",
    firstTouchPage: "",
    utmSource: searchParams.get("utm_source") ?? "",
    utmMedium: searchParams.get("utm_medium") ?? "",
    utmCampaign: searchParams.get("utm_campaign") ?? "",
  };
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const portalParam = searchParams.get("portal") ?? "";
  const utmSourceParam = searchParams.get("utm_source") ?? "";
  const utmMediumParam = searchParams.get("utm_medium") ?? "";
  const utmCampaignParam = searchParams.get("utm_campaign") ?? "";
  const [step, setStep] = useState(() => {
    const hasPath = searchParams.get("path");
    const hasIntent = searchParams.get("intent");
    return hasPath && hasIntent ? 1 : 0;
  });
  const [form, setForm] = useState<FunnelFormData>(() =>
    getInitialForm(searchParams)
  );
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const sourcePage =
      window.sessionStorage.getItem(routeTrackerKeys.previous) ?? "";
    const firstTouchPage =
      window.sessionStorage.getItem(routeTrackerKeys.firstTouch) ?? "";
    const portalSource = portalParam || getPortalSource(form.path);

    setForm((prev) => {
      const nextValues: Partial<FunnelFormData> = {};

      if (portalSource && prev.portalSource !== portalSource) {
        nextValues.portalSource = portalSource;
      }

      if (sourcePage && prev.sourcePage !== sourcePage) {
        nextValues.sourcePage = sourcePage;
      }

      if (firstTouchPage && prev.firstTouchPage !== firstTouchPage) {
        nextValues.firstTouchPage = firstTouchPage;
      }

      if (utmSourceParam && prev.utmSource !== utmSourceParam) {
        nextValues.utmSource = utmSourceParam;
      }

      if (utmMediumParam && prev.utmMedium !== utmMediumParam) {
        nextValues.utmMedium = utmMediumParam;
      }

      if (utmCampaignParam && prev.utmCampaign !== utmCampaignParam) {
        nextValues.utmCampaign = utmCampaignParam;
      }

      return Object.keys(nextValues).length ? { ...prev, ...nextValues } : prev;
    });
  }, [
    form.path,
    portalParam,
    utmCampaignParam,
    utmMediumParam,
    utmSourceParam,
  ]);

  const requestLabel = useMemo(() => {
    if (form.path === "facility") {
      return form.intent === "packet"
        ? "facility packet request"
        : "facility consult request";
    }

    if (form.intent === "estimate") {
      return "pricing or Good Faith Estimate request";
    }

    return "concierge patient request";
  }, [form.intent, form.path]);

  const activeGuide = useMemo(() => {
    if (!form.path) {
      return {
        icon: Send,
        portalLabel: "Request Funnel",
        heading: "Choose the portal that fits the request",
        description:
          "The funnel separates concierge patient scheduling from facility onboarding so each audience sees the right next step first.",
        checklist: [
          "Choose the patient or facility portal path.",
          "Answer only the questions needed to route the request.",
          "Get a callback within one business day with the next step.",
        ],
        submitDescription:
          "We use this final step to confirm the callback plan and respond quickly with the right next action.",
        afterSubmit:
          "We review the request, confirm the best pathway, and reply within one business day.",
      };
    }

    if (form.path === "facility") {
      return {
        icon: Building2,
        portalLabel: "Facility Portal",
        heading:
          form.intent === "packet"
            ? "Packet-first facility intake"
            : "Operational facility consult route",
        description:
          form.intent === "packet"
            ? "This route is built for teams that want the contract packet, referral checklist, billing guardrails, and onboarding documents before the consult."
            : "This route is built for SNFs, rehab teams, ALFs, physician offices, and referral coordinators who need workflow, timing, and launch-fit guidance.",
        checklist:
          form.intent === "packet"
            ? [
                "Collect the organization name, setting, and timing.",
                "Confirm the main service or document need.",
                "Route the request into packet follow-up within one business day.",
              ]
            : [
                "Collect the setting, expected volume, and billing expectations.",
                "Confirm the best operational contact for follow-up.",
                "Route the request into onboarding or consult planning within one business day.",
              ],
        submitDescription:
          "We use this final step to confirm the operational contact, review the setting and payer lane, and respond with the next onboarding action.",
        afterSubmit:
          "We review the request, confirm service fit, and reply within one business day with the best next consult, packet, or rollout step.",
      };
    }

    return {
      icon: Heart,
      portalLabel: "Concierge Patient Portal",
      heading:
        form.intent === "estimate"
          ? "Estimate-first patient intake"
          : "Appointment-first patient intake",
      description:
        form.intent === "estimate"
          ? "This route is built for families who need pricing guidance or a Good Faith Estimate before deciding on scheduling."
          : "This route is built for Las Vegas patients, caregivers, and self-pay families who want the shortest path into a bedside or at-home swallowing evaluation request.",
      checklist:
        form.intent === "estimate"
          ? [
              "Confirm the Las Vegas-area location and visit type.",
              "Review referral status and the likely payment path.",
              "Route the request into estimate follow-up within one business day.",
            ]
          : [
              "Confirm the patient location, service goal, and timing.",
              "Review whether an order or referral is already in place.",
              "Route the request into scheduling follow-up within one business day.",
            ],
      submitDescription:
        "We use this final step to confirm the callback plan, review the referral lane, and respond with the next scheduling or estimate action.",
      afterSubmit:
        "We review the request and respond within one business day with the next scheduling step, fit check, or pricing guidance for Las Vegas-area service.",
    };
  }, [form.intent, form.path]);

  const updateField = <K extends keyof FunnelFormData>(
    field: K,
    value: FunnelFormData[K]
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const handlePathSelect = (path: ContactPath) => {
    const nextIntent =
      path === "patient"
        ? form.intent === "appointment" || form.intent === "estimate"
          ? form.intent
          : "appointment"
        : form.intent === "consult" || form.intent === "packet"
          ? form.intent
          : "consult";

    setForm((prev) => ({
      ...prev,
      path,
      intent: nextIntent,
      contactRole: "",
      service: "",
      portalSource: getPortalSource(path),
      city: path === "patient" ? prev.city : "",
      facilityName: path === "facility" ? prev.facilityName : "",
      careSetting: path === "facility" ? prev.careSetting : "",
      monthlyVolume: path === "facility" ? prev.monthlyVolume : "",
    }));
  };

  const canContinue =
    step === 0
      ? Boolean(form.path && form.intent)
      : step === 1
        ? form.path === "patient"
          ? Boolean(form.city && form.service && form.timeframe)
          : Boolean(
              form.facilityName &&
                form.careSetting &&
                form.service &&
                form.timeframe
            )
        : Boolean(form.name && form.email && form.phone);

  const handleNext = () => {
    if (!canContinue) {
      setError("Please complete the required fields before continuing.");
      return;
    }

    setStep((current) => Math.min(current + 1, STEPS.length - 1));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!canContinue) {
      setError("Please complete the required contact fields before submitting.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request");
      }

      setSubmitted(true);
    } catch {
      setError(
        "Something went wrong. Please try again or call directly for urgent Las Vegas scheduling."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="space-y-4 rounded-[var(--radius)] border border-primary-light bg-primary-light/30 p-8 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-primary" />
        <h3 className="text-xl font-semibold text-foreground">
          Your {requestLabel} is in
        </h3>
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground">
          We will review the request and respond within one business day with the
          next scheduling step, fit check, or pricing guidance for Las Vegas-area
          service.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setSubmitted(false);
            setStep(0);
            setForm(getInitialForm(searchParams));
          }}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {STEPS.map((label, index) => (
          <div
            key={label}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium",
              index === step
                ? "border-primary bg-primary text-primary-foreground"
                : index < step
                  ? "border-primary/20 bg-primary-light text-primary"
                  : "border-border bg-background text-muted-foreground"
            )}
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[10px] font-semibold">
              {index + 1}
            </span>
            {label}
          </div>
        ))}
      </div>

      {form.path && (
        <div className="grid gap-4 rounded-[var(--radius)] border border-primary/15 bg-primary-light/30 p-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <activeGuide.icon className="h-4 w-4" />
              Routing through the {activeGuide.portalLabel}
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              {activeGuide.heading}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {activeGuide.description}
            </p>
          </div>
          <div className="rounded-[var(--radius)] border border-border bg-background/85 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              What this route does
            </p>
            <ul className="mt-3 space-y-2">
              {activeGuide.checklist.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {step === 0 && (
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground">
              Choose the portal path
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              This first step keeps the rest of the intake short and specific to
              either concierge patient signup or facility onboarding.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {pathOptions.map((option) => {
              const Icon = option.icon;
              const active = form.path === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handlePathSelect(option.id)}
                  className={cn(
                    "rounded-[var(--radius)] border p-5 text-left transition-all",
                    active
                      ? "border-primary bg-primary-light"
                      : "border-border hover:border-primary/40"
                  )}
                >
                  <Icon className={cn("mb-3 h-8 w-8", active ? "text-primary" : "text-muted-foreground")} />
                  <h4 className="font-semibold text-foreground">{option.label}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{option.description}</p>
                </button>
              );
            })}
          </div>

          {form.path && (
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Step 2 starts with the right goal
              </h4>
              <div className="grid gap-3 md:grid-cols-2">
                {(form.path === "patient"
                  ? patientIntentOptions
                  : facilityIntentOptions
                ).map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => updateField("intent", option.id)}
                    className={cn(
                      "rounded-[var(--radius)] border p-4 text-left transition-all",
                      form.intent === option.id
                        ? "border-primary bg-primary-light/60"
                        : "border-border hover:border-primary/40"
                    )}
                  >
                    <h5 className="font-medium text-foreground">{option.label}</h5>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {step === 1 && form.path === "patient" && (
        <div className="grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Input
              id="city"
              label="Patient city / neighborhood"
              placeholder="Las Vegas, Summerlin, Henderson..."
              value={form.city}
              onChange={(event) => updateField("city", event.target.value)}
              required
            />
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground" htmlFor="service">
                Requested service
              </label>
              <select
                id="service"
                value={form.service}
                onChange={(event) => updateField("service", event.target.value)}
                className="flex h-10 w-full rounded-[var(--radius)] border border-border bg-card px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Choose one</option>
                <option value="mobile-fees">Mobile FEES evaluation</option>
                <option value="swallow-consult">Swallow consult</option>
                <option value="repeat-visit">Repeat FEES / follow-up review</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground" htmlFor="referralStatus">
                Referral or order status
              </label>
              <select
                id="referralStatus"
                value={form.referralStatus}
                onChange={(event) => updateField("referralStatus", event.target.value)}
                className="flex h-10 w-full rounded-[var(--radius)] border border-border bg-card px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Choose one</option>
                <option value="have-order">We already have an order / referral</option>
                <option value="requesting-order">We are requesting the order now</option>
                <option value="need-guidance">We need help deciding the right next step</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground" htmlFor="contactRole">
                Who is completing this request?
              </label>
              <select
                id="contactRole"
                value={form.contactRole}
                onChange={(event) => updateField("contactRole", event.target.value)}
                className="flex h-10 w-full rounded-[var(--radius)] border border-border bg-card px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Choose one</option>
                <option value="patient">Patient</option>
                <option value="family-caregiver">Family member / caregiver</option>
                <option value="case-manager">Case manager / discharge planner</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground" htmlFor="timeframe">
                Desired timeframe
              </label>
              <select
                id="timeframe"
                value={form.timeframe}
                onChange={(event) => updateField("timeframe", event.target.value)}
                className="flex h-10 w-full rounded-[var(--radius)] border border-border bg-card px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Choose one</option>
                <option value="asap">As soon as possible</option>
                <option value="this-week">This week</option>
                <option value="next-2-weeks">Within 2 weeks</option>
                <option value="planning-ahead">Planning ahead</option>
              </select>
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-sm font-medium text-foreground" htmlFor="payerPath">
                Payment path
              </label>
              <select
                id="payerPath"
                value={form.payerPath}
                onChange={(event) => updateField("payerPath", event.target.value)}
                className="flex h-10 w-full rounded-[var(--radius)] border border-border bg-card px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Choose one</option>
                <option value="self-pay">Concierge self-pay</option>
                <option value="superbill">Self-pay with superbill request</option>
                <option value="facility-arranged">Facility-arranged visit</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {step === 1 && form.path === "facility" && (
        <div className="grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Input
              id="facilityName"
              label="Facility or practice name"
              placeholder="Building / organization name"
              value={form.facilityName}
              onChange={(event) => updateField("facilityName", event.target.value)}
              required
            />
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground" htmlFor="careSetting">
                Care setting
              </label>
              <select
                id="careSetting"
                value={form.careSetting}
                onChange={(event) => updateField("careSetting", event.target.value)}
                className="flex h-10 w-full rounded-[var(--radius)] border border-border bg-card px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Choose one</option>
                <option value="snf">Skilled nursing facility</option>
                <option value="rehab">Rehab / post-acute</option>
                <option value="alf">Assisted living</option>
                <option value="physician-office">Physician office</option>
                <option value="home-health">Home health / other</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground" htmlFor="service">
                Needed first
              </label>
              <select
                id="service"
                value={form.service}
                onChange={(event) => updateField("service", event.target.value)}
                className="flex h-10 w-full rounded-[var(--radius)] border border-border bg-card px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Choose one</option>
                <option value="fees-service">Mobile FEES service</option>
                <option value="workflow-consult">Workflow / contracting consult</option>
                <option value="staff-training">Staff training</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground" htmlFor="contactRole">
                Your role
              </label>
              <select
                id="contactRole"
                value={form.contactRole}
                onChange={(event) => updateField("contactRole", event.target.value)}
                className="flex h-10 w-full rounded-[var(--radius)] border border-border bg-card px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Choose one</option>
                <option value="rehab-slp">Rehab director / SLP lead</option>
                <option value="don-admin">DON / administrator</option>
                <option value="physician-referral">Physician office / referral coordinator</option>
                <option value="case-management">Case management / social services</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground" htmlFor="timeframe">
                Desired timeframe
              </label>
              <select
                id="timeframe"
                value={form.timeframe}
                onChange={(event) => updateField("timeframe", event.target.value)}
                className="flex h-10 w-full rounded-[var(--radius)] border border-border bg-card px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Choose one</option>
                <option value="asap">As soon as possible</option>
                <option value="this-week">This week</option>
                <option value="this-month">This month</option>
                <option value="planning-ahead">Planning ahead</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground" htmlFor="monthlyVolume">
                Expected volume
              </label>
              <select
                id="monthlyVolume"
                value={form.monthlyVolume}
                onChange={(event) => updateField("monthlyVolume", event.target.value)}
                className="flex h-10 w-full rounded-[var(--radius)] border border-border bg-card px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Choose one</option>
                <option value="1-2">1-2 studies per month</option>
                <option value="3-5">3-5 studies per month</option>
                <option value="5-9">5-9 studies per month</option>
                <option value="10-plus">10+ studies per month</option>
                <option value="unknown">Not sure yet</option>
              </select>
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-sm font-medium text-foreground" htmlFor="payerPath">
                Current billing expectation
              </label>
              <select
                id="payerPath"
                value={form.payerPath}
                onChange={(event) => updateField("payerPath", event.target.value)}
                className="flex h-10 w-full rounded-[var(--radius)] border border-border bg-card px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Choose one</option>
                <option value="facility-paid">Facility-paid under contract</option>
                <option value="part-b-review">Need help sorting Part B / managed care</option>
                <option value="mixed">Mixed payer environment</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <div className="rounded-[var(--radius)] border border-primary-light bg-primary-light/30 p-4 text-sm text-muted-foreground">
            {activeGuide.submitDescription}
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Input
              id="name"
              label="Best contact name"
              placeholder="Full name"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              required
            />
            <Input
              id="phone"
              label="Best phone number"
              type="tel"
              placeholder="(702) 555-1234"
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              required
            />
            <Input
              id="email"
              label="Email address"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              required
            />
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground" htmlFor="bestContactTime">
                Best time to reach you
              </label>
              <select
                id="bestContactTime"
                value={form.bestContactTime}
                onChange={(event) =>
                  updateField("bestContactTime", event.target.value)
                }
                className="flex h-10 w-full rounded-[var(--radius)] border border-border bg-card px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Choose one</option>
                <option value="morning">Morning</option>
                <option value="midday">Midday</option>
                <option value="afternoon">Afternoon</option>
                <option value="anytime">Anytime during business hours</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <Textarea
                id="message"
                label="Anything we should know before we call?"
                rows={4}
                placeholder={
                  form.path === "facility"
                    ? "Share the building workflow, referral blockers, payer concerns, preferred launch timing, or any detail that helps route the facility request."
                    : "Share the swallow concern, preferred day, referring provider, or any detail that will help us route the patient request."
                }
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
              />
            </div>
            <div className="hidden">
              <Input
                id="website"
                label="Website"
                value={form.website}
                onChange={(event) => updateField("website", event.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
        <div className="text-sm text-muted-foreground">
          {step === 0
            ? "This form is designed to route to the right next step quickly."
            : step === 1
              ? "Only the details needed to move scheduling forward."
              : "Final step: tell us how to reach you."}
        </div>
        <div className="flex flex-wrap gap-2">
          {step > 0 && (
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep((current) => Math.max(current - 1, 0))}
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          )}
          {step < STEPS.length - 1 ? (
            <Button type="button" onClick={handleNext}>
              Continue
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button type="submit" disabled={submitting}>
              {submitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              {submitting ? "Submitting..." : "Request Next Step"}
            </Button>
          )}
        </div>
      </div>

      <div className="rounded-[var(--radius)] border border-border bg-muted/30 p-4 text-sm text-muted-foreground">
        <div className="mb-2 flex items-center gap-2 font-medium text-foreground">
          <PhoneCall className="h-4 w-4 text-primary" />
          What happens after you submit
        </div>
        {activeGuide.afterSubmit}
      </div>
    </form>
  );
}
