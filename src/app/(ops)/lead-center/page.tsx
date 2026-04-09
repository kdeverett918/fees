import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Building2,
  Clock3,
  Heart,
  Lock,
  LogOut,
  Mail,
  Phone,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import {
  formatLeadStage,
  getLeadNextAction,
  hasLeadCenterPassword,
  isLeadCenterAuthorized,
  isLeadCenterLocalMode,
  readLeadRecords,
  type LeadRecord,
} from "@/lib/lead-center";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Lead Center",
  description:
    "Internal lead center for Mobile FEES LV patient and facility requests.",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

function formatLeadTimestamp(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));
}

function getPriorityVariant(priority: string) {
  if (priority === "high") {
    return "default";
  }

  if (priority === "medium") {
    return "accent";
  }

  return "outline";
}

function summarizeCounts(values: string[]) {
  return Object.entries(
    values.reduce<Record<string, number>>((acc, value) => {
      const key = value || "Direct / Unknown";
      acc[key] = (acc[key] ?? 0) + 1;
      return acc;
    }, {})
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);
}

function LeadRow({ lead }: { lead: LeadRecord }) {
  return (
    <Card className="border-border bg-background/80">
      <CardContent className="space-y-4 pt-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant={lead.leadLane === "facility" ? "secondary" : "default"}>
                {lead.leadLane === "facility" ? (
                  <Building2 className="mr-1 h-3.5 w-3.5" />
                ) : (
                  <Heart className="mr-1 h-3.5 w-3.5" />
                )}
                {lead.leadLane === "facility" ? "Facility" : "Concierge"}
              </Badge>
              <Badge variant="outline">{formatLeadStage(lead.pipelineStage)}</Badge>
              <Badge variant={getPriorityVariant(lead.priority)}>
                {lead.priority} priority
              </Badge>
            </div>
            <h3 className="text-lg font-semibold text-foreground">{lead.name}</h3>
            <p className="text-sm text-muted-foreground">
              {lead.facilityName || lead.city || "Las Vegas request"}
              {lead.contactRole ? ` • ${lead.contactRole}` : ""}
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4" />
              {formatLeadTimestamp(lead.receivedAt)}
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[var(--radius)] border border-border bg-card p-3">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Intent
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">{lead.intent}</p>
          </div>
          <div className="rounded-[var(--radius)] border border-border bg-card p-3">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Service
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">
              {lead.service || "Not provided"}
            </p>
          </div>
          <div className="rounded-[var(--radius)] border border-border bg-card p-3">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Timeframe
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">
              {lead.timeframe || "Not provided"}
            </p>
          </div>
          <div className="rounded-[var(--radius)] border border-border bg-card p-3">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Source
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">
              {lead.sourcePage || lead.portalSource || "Direct / Unknown"}
            </p>
          </div>
        </div>

        <div className="space-y-2 rounded-[var(--radius)] border border-primary/15 bg-primary-light/25 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Recommended next action
          </p>
          <p className="text-sm leading-relaxed text-foreground">
            {getLeadNextAction(lead)}
          </p>
        </div>

        <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              <span className="font-medium text-foreground">Email:</span>{" "}
              {lead.email}
            </p>
            <p>
              <span className="font-medium text-foreground">Phone:</span>{" "}
              {lead.phone}
            </p>
            {lead.message ? (
              <p className="leading-relaxed">
                <span className="font-medium text-foreground">Notes:</span>{" "}
                {lead.message}
              </p>
            ) : null}
          </div>

          <div className="flex flex-wrap gap-2">
            <a
              href={`tel:${lead.phone}`}
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              <Phone className="h-4 w-4" />
              Call
            </a>
            <a
              href={`mailto:${lead.email}?subject=${encodeURIComponent(
                "Mobile FEES LV follow-up"
              )}`}
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
            {lead.sourcePage?.startsWith("/") ? (
              <Link
                href={lead.sourcePage}
                className={buttonVariants({ size: "sm" })}
              >
                Source Page
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : null}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default async function LeadCenterPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const [params, cookieStore] = await Promise.all([searchParams, cookies()]);
  const authorized = isLeadCenterAuthorized(cookieStore);
  const localMode = isLeadCenterLocalMode();
  const setupRequired = !authorized && !localMode && !hasLeadCenterPassword();
  const invalidPassword = params.error === "invalid";

  if (!authorized) {
    return (
      <div className="min-h-screen bg-muted/30">
        <div className="container mx-auto flex min-h-screen max-w-3xl items-center px-4 py-12">
          <Card className="w-full border-primary/15">
            <CardHeader className="space-y-4">
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                <Badge variant="outline">Internal Only</Badge>
              </div>
              <CardTitle className="text-3xl">Lead Center Access</CardTitle>
              <CardDescription>
                This route is for internal review of concierge and facility
                leads. It is intentionally excluded from crawl/index paths.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {setupRequired ? (
                <div className="space-y-3 rounded-[var(--radius)] border border-primary/15 bg-primary-light/25 p-4 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">
                    Set `LEAD_CENTER_PASSWORD` to enable protected access.
                  </p>
                  <p>
                    In production, the lead center stays closed until that
                    password is configured.
                  </p>
                </div>
              ) : (
                <form action="/lead-center/login" method="post" className="space-y-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-foreground"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="flex h-10 w-full rounded-[var(--radius)] border border-border bg-card px-3 py-2 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                  {invalidPassword ? (
                    <p className="text-sm text-destructive">
                      The password did not match. Try again.
                    </p>
                  ) : null}
                  <button className={cn(buttonVariants({ size: "lg" }), "w-full")}>
                    Unlock Lead Center
                  </button>
                </form>
              )}

              <Link
                href="/"
                className={buttonVariants({
                  variant: "outline",
                  className: "w-full sm:w-auto",
                })}
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Site
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const leads = await readLeadRecords();
  const conciergeLeads = leads.filter((lead) => lead.leadLane === "concierge");
  const facilityLeads = leads.filter((lead) => lead.leadLane === "facility");
  const highPriorityCount = leads.filter((lead) => lead.priority === "high").length;
  const todayKey = new Date().toISOString().slice(0, 10);
  const todayCount = leads.filter((lead) => lead.receivedAt.startsWith(todayKey)).length;
  const sourceCounts = summarizeCounts(
    leads.map((lead) => lead.sourcePage || lead.portalSource)
  );
  const stageCounts = summarizeCounts(leads.map((lead) => lead.pipelineStage));

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 py-12 space-y-12">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <PageHeader
            title="Lead Center"
            description="Operational review for concierge patient requests, facility onboarding leads, and source-path visibility."
          >
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge>{localMode ? "Local dev access" : "Protected access"}</Badge>
              <Badge variant="secondary">{leads.length} total leads</Badge>
              <Badge variant="outline">Noindex internal route</Badge>
            </div>
          </PageHeader>

          <div className="flex flex-wrap gap-2">
            <Link href="/" className={buttonVariants({ variant: "outline" })}>
              <ArrowLeft className="h-4 w-4" />
              Back to Site
            </Link>
            {!localMode ? (
              <form action="/lead-center/logout" method="post">
                <button className={buttonVariants({ variant: "outline" })}>
                  <LogOut className="h-4 w-4" />
                  Lock
                </button>
              </form>
            ) : null}
          </div>
        </div>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {[
            {
              label: "Total Leads",
              value: leads.length,
              detail: "All concierge and facility requests",
              icon: BarChart3,
            },
            {
              label: "Concierge",
              value: conciergeLeads.length,
              detail: "Patient appointments and estimate requests",
              icon: Heart,
            },
            {
              label: "Facility",
              value: facilityLeads.length,
              detail: "Consult and packet requests",
              icon: Building2,
            },
            {
              label: "High Priority",
              value: highPriorityCount,
              detail: "ASAP, this-week, or consult-priority leads",
              icon: TrendingUp,
            },
            {
              label: "Today",
              value: todayCount,
              detail: "Requests received today",
              icon: Clock3,
            },
          ].map((item) => (
            <Card key={item.label} className="border-primary/15">
              <CardContent className="space-y-3 pt-6">
                <item.icon className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 text-3xl font-semibold text-foreground">
                    {item.value}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="border-primary/15">
            <CardHeader>
              <CardTitle>Pipeline Snapshot</CardTitle>
              <CardDescription>
                The stages receiving the most traffic right now.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {stageCounts.length ? (
                stageCounts.map(([stage, count]) => (
                  <div
                    key={stage}
                    className="flex items-center justify-between rounded-[var(--radius)] border border-border bg-card p-3"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {formatLeadStage(stage)}
                    </span>
                    <Badge variant="secondary">{count}</Badge>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">
                  No lead activity has been captured yet.
                </p>
              )}
            </CardContent>
          </Card>

          <Card className="border-primary/15">
            <CardHeader>
              <CardTitle>Top Internal Sources</CardTitle>
              <CardDescription>
                Which portal or page most recently pushed users into the request funnel.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {sourceCounts.length ? (
                sourceCounts.map(([source, count]) => (
                  <div
                    key={source}
                    className="flex items-center justify-between rounded-[var(--radius)] border border-border bg-card p-3"
                  >
                    <span className="truncate pr-3 text-sm font-medium text-foreground">
                      {source}
                    </span>
                    <Badge variant="outline">{count}</Badge>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">
                  No source routing data has been captured yet.
                </p>
              )}
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold text-foreground">Recent Leads</h2>
          </div>

          {leads.length ? (
            <div className="grid gap-4">
              {leads.slice(0, 10).map((lead) => (
                <LeadRow key={`${lead.receivedAt}-${lead.email}`} lead={lead} />
              ))}
            </div>
          ) : (
            <Card className="border-dashed">
              <CardContent className="space-y-3 pt-6">
                <p className="text-lg font-semibold text-foreground">
                  No leads captured yet
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Submit a concierge patient request or facility consult to start
                  populating the lead center.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/concierge-patient-portal"
                    className={buttonVariants({ variant: "outline" })}
                  >
                    Open Patient Portal
                  </Link>
                  <Link href="/facility-portal" className={buttonVariants()}>
                    Open Facility Portal
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}
        </section>
      </div>
    </div>
  );
}
