import type { StartMenuItem } from "@/types";

export const startMenuItems: StartMenuItem[] = [
  // Facility items
  {
    id: "schedule",
    role: "facility",
    label: "Schedule FEES Evaluations",
    description:
      "Bring mobile FEES directly to your facility. No patient transfers needed — we come to you with full portable equipment.",
    image: "/images/services/mobile-arrival.jpg",
    href: "/contact",
  },
  {
    id: "learn-mobile",
    role: "facility",
    label: "Learn About Mobile FEES",
    description:
      "Discover how on-site FEES evaluations reduce hospital transfers, speed up diagnosis, and improve patient outcomes.",
    image: "/images/fees/equipment-setup.jpg",
    href: "/services",
  },
  {
    id: "referral",
    role: "facility",
    label: "Referral Information",
    description:
      "Simple 3-step referral process. Download forms, view insurance information, and learn about our coverage area.",
    image: "/images/start/referral.jpg",
    href: "/for-facilities",
  },
  {
    id: "credentials",
    role: "facility",
    label: "View Credentials",
    description:
      "9 years of clinical experience. FEES certified through Stanford with all competency passes completed. ASHA-certified CCC-SLP.",
    image: "/images/about/headshot.jpg",
    href: "/about",
  },
  // Patient items
  {
    id: "what-is-fees",
    role: "patient",
    label: "What is a FEES Exam?",
    description:
      "A simple, safe procedure that helps your doctor understand how you swallow. Learn what happens step by step.",
    image: "/images/fees/procedure-diagram.jpg",
    href: "/what-is-fees",
    narrationSrc: "/audio/what-is-fees.mp3",
  },
  {
    id: "prepare",
    role: "patient",
    label: "How to Prepare",
    description:
      "Everything you need to know before your FEES evaluation — what to eat, what to bring, and what to expect.",
    image: "/images/start/prepare.jpg",
    href: "/for-patients",
    narrationSrc: "/audio/how-to-prepare.mp3",
  },
  {
    id: "results",
    role: "patient",
    label: "Understanding Your Results",
    description:
      "Your FEES results explained in plain language. Learn what the findings mean and what happens next.",
    image: "/images/fees/results-discussion.jpg",
    href: "/for-patients#results",
    narrationSrc: "/audio/understanding-results.mp3",
  },
  {
    id: "contact-patient",
    role: "patient",
    label: "Questions? Contact Us",
    description:
      "Have questions about your upcoming evaluation? We're here to help you feel comfortable and informed.",
    image: "/images/start/facility.jpg",
    href: "/contact",
  },
];
