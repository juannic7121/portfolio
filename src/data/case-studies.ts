import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-1",
    number: "01",
    industry: "SaaS · AI",
    title: "Support Copilot Platform",
    subtitle: "AI triage that operators actually trust",
    duration: "3 months",
    team: "2–3 engineers",
    audience: "Customer Support Orgs",
    challenge:
      "A growing SaaS team was drowning in tickets. Generic chatbots felt unsafe; agents needed assistive intelligence with clear escalation paths.",
    solution:
      "Designed and shipped an LLM copilot with retrieval over internal docs, confidence thresholds, and human-in-the-loop controls inside their existing dashboard.",
    outcome:
      "Cut median first-response time substantially while keeping escalation quality high — agents stayed in control.",
    metrics: [
      { value: "−35%", label: "First Response" },
      { value: "92%", label: "Agent Adoption" },
      { value: "5/5", label: "Client Rating" },
    ],
    tags: ["Next.js", "Python", "OpenAI", "PostgreSQL"],
  },
  {
    id: "cs-2",
    number: "02",
    industry: "Mobile · Consumer",
    title: "Cross-Platform Lifestyle App",
    subtitle: "From prototype to store release",
    duration: "4 months",
    team: "2 engineers + design",
    audience: "Consumer Mobile Users",
    challenge:
      "A startup needed iOS and Android parity fast — without sacrificing polish or burning the runway on two native teams.",
    solution:
      "Built a React Native app with a shared design system, offline-friendly sync, push notifications, and automated store pipelines.",
    outcome:
      "Shipped both stores on schedule with stable crash-free sessions and a clear path for feature iteration.",
    metrics: [
      { value: "2", label: "Stores Launched" },
      { value: "99.5%", label: "Crash-Free" },
      { value: "5/5", label: "Client Rating" },
    ],
    tags: ["React Native", "Firebase", "CI/CD", "UX"],
  },
  {
    id: "cs-3",
    number: "03",
    industry: "Web · B2B Platform",
    title: "Multi-Tenant Operations Suite",
    subtitle: "Web platform rebuilt for scale",
    duration: "5 months",
    team: "3–4 engineers",
    audience: "Operations Teams",
    challenge:
      "Legacy tooling could not support new tenants. Performance, permissions, and reporting were blocking growth.",
    solution:
      "Re-architected a Next.js + PostgreSQL platform with role-based access, background jobs, and real-time operational boards.",
    outcome:
      "Onboarded new tenants without downtime and gave leadership reporting they could trust weekly.",
    metrics: [
      { value: "10×", label: "Tenant Capacity" },
      { value: "−50%", label: "Page Load" },
      { value: "5/5", label: "Client Rating" },
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
  },
];
