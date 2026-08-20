import type { Opportunity } from "@/types";

export const opportunities: Opportunity[] = [
  {
    id: "opp-web",
    title: "Senior Web Engineer",
    description:
      "Own product surfaces on React/Next.js with strong TypeScript and cloud delivery habits.",
    skills: [
      "React, Next.js, TypeScript",
      "Node.js, PostgreSQL",
      "System design & APIs",
      "AWS, CI/CD",
    ],
    experience: "8+ years",
    availability: "Selective",
    note: "Comfortable leading features end to end",
  },
  {
    id: "opp-ai",
    title: "AI Product Engineer",
    description:
      "Ship LLM features into production products with evals, guardrails, and measurable outcomes.",
    skills: [
      "Python, OpenAI, RAG",
      "Product instrumentation",
      "FastAPI / Node services",
      "Human-in-the-loop UX",
    ],
    experience: "4+ years applied AI",
    availability: "Selective",
    note: "Focus on useful, safe integrations",
  },
  {
    id: "opp-mobile",
    title: "Mobile Engineer",
    description:
      "Cross-platform apps with polished UX and reliable release pipelines.",
    skills: [
      "React Native / Flutter",
      "API design",
      "Store submission",
      "Offline & push patterns",
    ],
    experience: "5+ years mobile",
    availability: "Selective",
    note: "Shipped to both major stores",
  },
];

export const whyHire = [
  {
    title: "Senior ownership",
    description: "Architecture through launch — not just tickets in a queue.",
  },
  {
    title: "Cross-discipline",
    description: "Web, AI, and mobile fluency in one partner.",
  },
  {
    title: "Calm delivery",
    description: "Written plans, weekly demos, predictable milestones.",
  },
  {
    title: "Production taste",
    description: "Interfaces and systems that hold up after day one.",
  },
];

export const careerGoals = [
  {
    number: "01",
    title: "Join ambitious product teams",
    description: "Prefer companies shipping to real users every week.",
  },
  {
    number: "02",
    title: "Lead technically",
    description: "Own architecture and raise the bar for the team.",
  },
  {
    number: "03",
    title: "Build lasting systems",
    description: "Products and platforms that survive contact with users.",
  },
  {
    number: "04",
    title: "Work globally",
    description: "Already collaborate across US, EU, and LATAM time zones.",
  },
];
