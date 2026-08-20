import type { Service, Stat } from "@/types";

export const serviceStats: Stat[] = [
  { value: "8+", label: "Years Experience" },
  { value: "120+", label: "Projects Delivered" },
  { value: "3", label: "Core Disciplines" },
  { value: "5/5", label: "Client Satisfaction" },
];

export const services: Service[] = [
  {
    id: "web",
    title: "Web Platforms",
    description:
      "Production web apps and product sites on modern stacks — architecture, UI, APIs, and deployment as one delivery.",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    group: "core",
  },
  {
    id: "ai",
    title: "AI Engineering",
    description:
      "Practical LLM integrations, automation, and applied ML features that sit inside real product workflows.",
    tags: ["OpenAI", "Python", "RAG", "FastAPI", "Eval loops"],
    group: "core",
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    description:
      "Cross-platform mobile products with solid UX, reliable backends, and store-ready release pipelines.",
    tags: ["React Native", "Flutter", "Firebase", "CI/CD"],
    group: "core",
  },
  {
    id: "architecture",
    title: "Architecture & APIs",
    description:
      "System design, REST/GraphQL APIs, and integrations that stay maintainable as the product grows.",
    tags: ["System Design", "GraphQL", "Microservices", "Auth"],
    group: "specialized",
  },
  {
    id: "performance",
    title: "Performance & Quality",
    description:
      "Core Web Vitals, profiling, testing strategy, and observability so launches stay calm.",
    tags: ["CWV", "Testing", "Monitoring", "SEO"],
    group: "specialized",
  },
  {
    id: "cloud",
    title: "Cloud & Delivery",
    description:
      "AWS, containers, and CI/CD so shipping is routine — not a ceremony.",
    tags: ["AWS", "Docker", "GitHub Actions", "Terraform"],
    group: "specialized",
  },
];
