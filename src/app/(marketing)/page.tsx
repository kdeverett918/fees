import type { Metadata } from "next";
import Link from "next/link";
import { CircleHelp, FileText } from "lucide-react";
import { StartMenu } from "@/components/landing/start-menu";
import { JsonLd } from "@/components/seo/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mobile FEES Las Vegas",
  description:
    "Mobile FEES LV brings bedside swallowing evaluations to Las Vegas homes and facilities. Choose your path to get started.",
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
};

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: "Mobile FEES Las Vegas",
    url: siteConfig.url,
    areaServed: siteConfig.serviceAreas.map((name) => ({
      "@type": "City",
      name,
    })),
    description: siteConfig.description,
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mobile FEES evaluation",
    serviceType: "Fiberoptic Endoscopic Evaluation of Swallowing",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: siteConfig.serviceAreas,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl("/contact?path=patient&intent=appointment"),
    },
    description:
      "Mobile FEES LV provides bedside FEES evaluations and dysphagia support for Las Vegas patients, families, facilities, and referral teams.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeSchema} />
      <div className="space-y-10 pb-16">
        <StartMenu />

        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Card className="border-primary/15 bg-primary-light/25">
            <CardContent className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground">
                  Need answers before you start?
                </h2>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  Open the FAQ or resources if you want pricing details, packet
                  documents, or a quick overview first.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/faq"
                  className={buttonVariants({ variant: "outline" })}
                >
                  <CircleHelp className="h-4 w-4" />
                  Read FAQ
                </Link>
                <Link
                  href="/resources"
                  className={buttonVariants({ variant: "outline" })}
                >
                  <FileText className="h-4 w-4" />
                  Open Resources
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
}
