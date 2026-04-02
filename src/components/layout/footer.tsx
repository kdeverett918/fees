import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-auto no-print">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">F</span>
              </div>
              <span className="font-semibold text-foreground">Mobile FEES 702</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Professional mobile Fiberoptic Endoscopic Evaluation of Swallowing
              services. Bringing quality dysphagia care directly to you.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/for-facilities" className="text-muted-foreground hover:text-primary transition-colors">
                  For Facilities
                </Link>
              </li>
              <li>
                <Link href="/for-patients" className="text-muted-foreground hover:text-primary transition-colors">
                  For Patients & Families
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Kristine Everett, MA, CCC-SLP</li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Send a Message
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Mobile FEES 702. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
