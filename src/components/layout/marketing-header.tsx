"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/concierge-patient-portal", label: "Concierge Portal" },
  { href: "/facility-portal", label: "Facility Portal" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
];

export function MarketingHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 no-print">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">F</span>
            </div>
            <span className="font-semibold text-foreground hidden sm:block">
              Mobile FEES LV
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-[var(--radius)] transition-colors",
                  pathname === link.href
                    ? "text-primary bg-primary-light"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/concierge-patient-portal">
              <Button size="sm" className="hidden xl:inline-flex">
                <Phone className="h-4 w-4" />
                Patient Portal
              </Button>
            </Link>
            <Link href="/facility-portal">
              <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                Facility Portal
              </Button>
            </Link>
            <button
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <nav className="flex flex-col p-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-[var(--radius)] transition-colors",
                  pathname === link.href
                    ? "text-primary bg-primary-light"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/concierge-patient-portal" onClick={() => setMobileOpen(false)}>
              <Button size="sm" className="w-full mt-2">
                <Phone className="h-4 w-4" />
                Open Patient Portal
              </Button>
            </Link>
            <Link href="/facility-portal" onClick={() => setMobileOpen(false)}>
              <Button variant="outline" size="sm" className="w-full">
                Open Facility Portal
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
