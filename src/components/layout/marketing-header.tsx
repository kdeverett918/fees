"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/concierge-patient-portal", label: "Patient Portal" },
  { href: "/facility-portal", label: "Facility Portal" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function MarketingHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/85 no-print">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <span className="text-sm font-bold text-primary-foreground">F</span>
            </div>
            <span className="hidden font-semibold text-foreground sm:block">
              Mobile FEES LV
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-[var(--radius)] px-3 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-primary-light text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/contact">
              <Button size="sm" className="hidden xl:inline-flex">
                <Phone className="h-4 w-4" />
                Start Request
              </Button>
            </Link>
            <button
              className="cursor-pointer p-2 text-muted-foreground hover:text-foreground lg:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-border bg-card lg:hidden">
          <nav className="flex flex-col p-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-[var(--radius)] px-3 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-primary-light text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
            >
              <Button size="sm" className="mt-2 w-full">
                <Phone className="h-4 w-4" />
                Start Request
              </Button>
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
