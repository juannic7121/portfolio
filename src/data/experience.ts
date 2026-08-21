import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Senior Engineer",
    company: "Acme Systems",
    employmentType: "Full-time",
    period: "2024 — Present",
    location: "Remote · Europe",
    summary:
      "Senior engineer for enterprise product features, custom modules, and delivery workflows across a multi-team product org.",
    highlights: [
      "Owned architecture for core product modules",
      "Shipped weekly releases with staging demos",
      "Mentored junior engineers through code review",
    ],
    tags: ["Next.js", "Python", "PostgreSQL", "AWS"],
  },
  {
    id: "exp-2",
    role: "Product Engineer",
    company: "Northwind Studio",
    employmentType: "Contract",
    period: "2023 — 2024",
    location: "Remote",
    summary:
      "Built client-facing web platforms and reporting tools with a focus on reliability and clear handoff.",
    highlights: [
      "Delivered reporting dashboards used by ops daily",
      "Integrated third-party APIs and payment flows",
      "Kept delivery quality high across concurrent client builds",
    ],
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: "exp-3",
    role: "Mobile Engineer",
    company: "Independent / Studio",
    employmentType: "Freelance",
    period: "2022 — 2023",
    location: "Remote worldwide",
    summary:
      "Designed and shipped Flutter applications from discovery through store submission.",
    highlights: [
      "Launched production apps with offline-first storage",
      "Built design systems in Material 3",
      "Handled Play Console packaging and release notes",
    ],
    tags: ["Flutter", "Firebase", "Riverpod", "CI/CD"],
  },
];
