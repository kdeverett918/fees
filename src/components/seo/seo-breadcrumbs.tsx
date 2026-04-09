import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { absoluteUrl } from "@/lib/site";
import { JsonLd } from "@/components/seo/json-ld";

export interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface SeoBreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function SeoBreadcrumbs({ items }: SeoBreadcrumbsProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };

  return (
    <div className="space-y-3">
      <JsonLd data={breadcrumbSchema} />
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        {items.map((item, index) => (
          <span key={item.href} className="flex items-center gap-2">
            {index > 0 ? <ChevronRight className="h-3.5 w-3.5" /> : null}
            {item.current ? (
              <span className="font-medium text-foreground">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </div>
  );
}
