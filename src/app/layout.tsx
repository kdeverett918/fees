import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { RouteTracker } from "@/components/analytics/route-tracker";
import { absoluteUrl, siteConfig } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Mobile FEES LV | Las Vegas Mobile FEES Evaluations",
    template: "%s | Mobile FEES LV",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? {
        google: process.env.GOOGLE_SITE_VERIFICATION,
      }
    : undefined,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Mobile FEES LV | Las Vegas Mobile FEES Evaluations",
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl("/images/hero/fees-hero.jpg"),
        width: 1600,
        height: 900,
        alt: "Mobile FEES LV bedside swallowing evaluation in Las Vegas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile FEES LV | Las Vegas Mobile FEES Evaluations",
    description: siteConfig.description,
    images: [absoluteUrl("/images/hero/fees-hero.jpg")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <RouteTracker />
        {children}
      </body>
    </html>
  );
}
