import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card no-print">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <span className="text-sm font-bold text-primary-foreground">F</span>
              </div>
              <span className="font-semibold text-foreground">Mobile FEES LV</span>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              Mobile FEES for Las Vegas patients, families, and facilities.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Portals</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/concierge-patient-portal"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Patient Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/facility-portal"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Facility Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Learn More</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/what-is-fees"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  What is FEES?
                </Link>
              </li>
              <li>
                <Link
                  href="/for-patients"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  For Patients
                </Link>
              </li>
              <li>
                <Link
                  href="/for-facilities"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  For Facilities
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+19374899209"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0" />
                  (937) 489-9209
                </a>
              </li>
              <li>
                <a
                  href="mailto:kristine@thetechslp.com"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0" />
                  kristine@thetechslp.com
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Contact Page
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} Mobile FEES LV</span>
          <Link href="/privacy" className="transition-colors hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-primary">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
