import { MarketingHeader } from "@/components/layout/marketing-header";
import { Footer } from "@/components/layout/footer";
import { AudienceProvider } from "@/components/audience/audience-provider";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AudienceProvider>
      <MarketingHeader />
      <main className="flex-1">{children}</main>
      <Footer />
    </AudienceProvider>
  );
}
