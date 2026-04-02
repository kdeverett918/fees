"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/what-is-fees", label: "What is FEES?" },
  { href: "/services", label: "Services" },
  { href: "/for-facilities", label: "For Facilities" },
  { href: "/for-patients", label: "For Patients" },
  { href: "/faq", label: "FAQ" },
  { href: "/pricing", label: "Pricing" },
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
              Mobile FEES 702
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
            <Link href="/contact">
              <Button size="sm" className="hidden sm:inline-flex">
                <Phone className="h-4 w-4" />
                Contact Us
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
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              <Button size="sm" className="w-full mt-2">
                <Phone className="h-4 w-4" />
                Contact Us
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
