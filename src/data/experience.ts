import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Senior Full-Stack Engineer",
    company: "Product Studio · Remote",
    employmentType: "Full-time",
    period: "2023 — Present",
    location: "Remote · Worldwide",
    summary:
      "Lead engineer for web platforms and AI product features across multi-team deliveries — architecture, mentoring, and production ownership.",
    highlights: [
      "Owned system design for customer-facing platforms and internal tools",
      "Shipped AI-assisted workflows into production with measurable support gains",
      "Mentored engineers through reviews, RFCs, and release discipline",
    ],
    tags: ["Next.js", "TypeScript", "Python", "OpenAI", "AWS"],
  },
  {
    id: "exp-2",
    role: "Web & Mobile Engineer",
    company: "Independent / Client Work",
    employmentType: "Contract",
    period: "2019 — 2023",
    location: "Remote",
    summary:
      "Delivered web apps, marketing sites, and cross-platform mobile products for startups and mid-market teams.",
    highlights: [
      "Launched React Native and Flutter apps through store submission",
      "Rebuilt product sites with conversion-focused UX and strong Core Web Vitals",
      "Integrated payments, analytics, and third-party APIs under tight timelines",
    ],
    tags: ["React", "React Native", "Flutter", "Node.js", "PostgreSQL"],
  },
  {
    id: "exp-3",
    role: "Software Engineer",
    company: "Early Career · Agency & Product",
    employmentType: "Full-time",
    period: "2017 — 2019",
    location: "Hybrid / Remote",
    summary:
      "Built foundational full-stack skills across client websites, APIs, and early mobile prototypes.",
    highlights: [
      "Delivered production sites and APIs for diverse industries",
      "Learned delivery rituals: staging demos, written scope, clean handoffs",
      "Grew into owning features end-to-end",
    ],
    tags: ["JavaScript", "PHP", "MySQL", "REST", "UI Engineering"],
  },
];
