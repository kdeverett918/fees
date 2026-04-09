import Link from "next/link";
import { ArrowRight, Building2, Home } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function StartMenu() {
  return (
    <section className="flex min-h-[calc(100dvh-5rem)] items-center py-16 md:py-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Mobile FEES in Las Vegas
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground">
            Bedside swallowing evaluations brought to you. Choose your path
            below.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="overflow-hidden border-primary/20 bg-card shadow-md transition-shadow hover:shadow-lg">
            <CardContent className="flex h-full flex-col items-center gap-6 p-10 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light">
                <Home className="h-7 w-7 text-primary" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground">
                  Home Patient Visit
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  For patients, families, and caregivers who need an in-home or
                  bedside swallow evaluation.
                </p>
              </div>
              <Link
                href="/concierge-patient-portal"
                className={buttonVariants({ size: "lg" })}
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-primary/20 bg-card shadow-md transition-shadow hover:shadow-lg">
            <CardContent className="flex h-full flex-col items-center gap-6 p-10 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light">
                <Building2 className="h-7 w-7 text-primary" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground">
                  Facility Partnership
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  For SNFs, rehab centers, assisted living, and physician offices
                  ready to partner.
                </p>
              </div>
              <Link
                href="/facility-portal"
                className={buttonVariants({ size: "lg" })}
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Requests are reviewed within one business day.
        </p>
      </div>
    </section>
  );
}
