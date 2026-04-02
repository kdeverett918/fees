import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  GraduationCap,
  Heart,
  Stethoscope,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Kristine Everett, M.S., CCC-SLP — a licensed speech-language pathologist specializing in mobile FEES evaluations and dysphagia management.",
};

const credentials = [
  {
    title: "Master of Science in Speech-Language Pathology",
    description: "Graduate degree in communication sciences and disorders",
    icon: GraduationCap,
  },
  {
    title: "Certificate of Clinical Competence (CCC-SLP)",
    description:
      "National certification from the American Speech-Language-Hearing Association",
    icon: Award,
  },
  {
    title: "State Licensed Speech-Language Pathologist",
    description: "Fully licensed and insured for clinical practice",
    icon: ShieldCheck,
  },
  {
    title: "FEES Certified",
    description:
      "Specialized training and competency in fiberoptic endoscopic evaluation of swallowing",
    icon: Stethoscope,
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 space-y-16">
      {/* Header */}
      <PageHeader
        title="About Kristine Everett, M.S., CCC-SLP"
        description="Dedicated to improving swallowing safety and quality of life through expert mobile FEES evaluations."
      />

      {/* Professional Photo + Bio */}
      <section className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <img
            src="/images/about/headshot.jpg"
            alt="Kristine Everett, M.S., CCC-SLP — speech-language pathologist"
            className="aspect-[3/4] w-full rounded-[var(--radius)] shadow-md object-cover"
          />
        </div>
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Professional Background
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Kristine Everett is a licensed speech-language pathologist with
            extensive experience in the evaluation and treatment of swallowing
            disorders (dysphagia). She holds a Master of Science degree in
            Speech-Language Pathology and the Certificate of Clinical Competence
            from the American Speech-Language-Hearing Association (ASHA).
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With years of clinical experience across hospitals, skilled nursing
            facilities, and rehabilitation centers, Kristine has performed
            hundreds of FEES evaluations. Her expertise spans the full spectrum
            of dysphagia care, from bedside assessments to instrumental
            evaluations and treatment planning.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Kristine is passionate about bringing advanced diagnostic tools
            directly to patients, eliminating barriers to care and ensuring
            timely, accurate swallowing evaluations wherever they are needed.
          </p>
        </div>
      </section>

      {/* Credentials */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">
          Credentials & Certifications
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {credentials.map((cred) => (
            <Card key={cred.title}>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius)] bg-primary-light">
                    <cred.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{cred.title}</CardTitle>
                    <CardDescription>{cred.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Mobile FEES */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">
          Why Mobile FEES?
        </h2>
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Traditional instrumental swallowing evaluations often require
            patients to travel to a hospital or outpatient clinic equipped with
            fluoroscopy suites. For many patients — especially those in skilled
            nursing facilities, assisted living communities, or receiving home
            health services — this travel is difficult, stressful, or simply not
            possible.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <Card>
              <CardContent className="pt-6 text-center space-y-2">
                <MapPin className="mx-auto h-8 w-8 text-primary" />
                <h3 className="font-semibold text-foreground">
                  On-Site Evaluations
                </h3>
                <p className="text-sm text-muted-foreground">
                  We come to you. No patient transport, no hospital visits, no
                  waiting lists.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center space-y-2">
                <Heart className="mx-auto h-8 w-8 text-primary" />
                <h3 className="font-semibold text-foreground">
                  Patient Comfort
                </h3>
                <p className="text-sm text-muted-foreground">
                  Patients are evaluated in their own environment, using their
                  own food and positioning.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center space-y-2">
                <Stethoscope className="mx-auto h-8 w-8 text-primary" />
                <h3 className="font-semibold text-foreground">
                  Same-Day Results
                </h3>
                <p className="text-sm text-muted-foreground">
                  Findings and diet recommendations are reviewed immediately
                  after the evaluation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="rounded-[var(--radius)] border border-primary-light bg-primary-light/30 p-8 space-y-4">
        <Badge variant="default">Our Mission</Badge>
        <h2 className="text-2xl font-semibold text-foreground">
          Safe Swallowing, Wherever You Are
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          Our mission is to make gold-standard swallowing evaluations accessible
          to every patient who needs them. By bringing FEES directly to skilled
          nursing facilities, hospitals, rehabilitation centers, and homes, we
          eliminate the barriers that delay diagnosis and treatment. Every
          patient deserves a clear understanding of their swallowing function and
          a personalized plan for safe, enjoyable nutrition.
        </p>
      </section>
    </div>
  );
}
