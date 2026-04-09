import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

const indexedRoutes = [
  "/",
  "/concierge-patient-portal",
  "/facility-portal",
  "/facility-onboarding-packet",
  "/skilled-nursing-facility-fees-las-vegas",
  "/assisted-living-fees-las-vegas",
  "/physician-referral-fees-las-vegas",
  "/las-vegas-mobile-fees",
  "/bedside-swallow-study-las-vegas",
  "/at-home-swallow-evaluation-las-vegas",
  "/coughing-during-meals-las-vegas",
  "/aspiration-concern-las-vegas",
  "/stroke-swallow-evaluation-las-vegas",
  "/parkinsons-swallowing-evaluation-las-vegas",
  "/recurrent-pneumonia-swallow-evaluation-las-vegas",
  "/difficulty-swallowing-pills-las-vegas",
  "/homebound-swallow-evaluation-las-vegas",
  "/wet-voice-after-swallowing-las-vegas",
  "/dementia-swallowing-evaluation-las-vegas",
  "/fees-vs-mbss-after-stroke-las-vegas",
  "/about",
  "/what-is-fees",
  "/services",
  "/for-patients",
  "/for-facilities",
  "/pricing",
  "/faq",
  "/contact",
  "/resources",
  "/comparison",
  "/reimbursement-guide",
  "/privacy",
  "/terms",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return indexedRoutes.map((route, index) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority:
      route === "/"
        ? 1
        : route === "/las-vegas-mobile-fees" ||
            route === "/concierge-patient-portal" ||
            route === "/facility-portal" ||
            route === "/facility-onboarding-packet" ||
            route === "/skilled-nursing-facility-fees-las-vegas" ||
            route === "/assisted-living-fees-las-vegas" ||
            route === "/physician-referral-fees-las-vegas" ||
            route === "/bedside-swallow-study-las-vegas" ||
            route === "/at-home-swallow-evaluation-las-vegas" ||
            route === "/coughing-during-meals-las-vegas" ||
            route === "/aspiration-concern-las-vegas" ||
            route === "/stroke-swallow-evaluation-las-vegas" ||
            route === "/parkinsons-swallowing-evaluation-las-vegas" ||
            route === "/recurrent-pneumonia-swallow-evaluation-las-vegas" ||
            route === "/difficulty-swallowing-pills-las-vegas" ||
            route === "/homebound-swallow-evaluation-las-vegas" ||
            route === "/wet-voice-after-swallowing-las-vegas" ||
            route === "/dementia-swallowing-evaluation-las-vegas" ||
            route === "/fees-vs-mbss-after-stroke-las-vegas"
          ? 0.9
          : 0.7,
  }));
}
