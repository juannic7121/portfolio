import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Operations Command Center",
    summary:
      "Internal tooling for a logistics team — live job boards, SLA timers, and exportable weekly reports.",
    category: "Web Platform",
    tags: ["Next.js", "PostgreSQL", "Tailwind", "REST"],
  },
  {
    id: "proj-2",
    title: "Storefront Rebuild",
    summary:
      "Shopify theme and checkout refactor that improved mobile conversion and cut page weight.",
    category: "E-commerce",
    tags: ["Shopify", "Liquid", "Stripe", "Performance"],
  },
  {
    id: "proj-3",
    title: "Product Launch Website",
    summary:
      "Marketing site with a cinematic hero, scroll storytelling, and conversion-focused CTA paths.",
    category: "Website",
    tags: ["Next.js", "SEO", "Motion", "Analytics"],
  },
  {
    id: "proj-4",
    title: "Support Copilot",
    summary:
      "OpenAI-assisted triage assistant embedded in an existing helpdesk product.",
    category: "AI Integration",
    tags: ["Python", "OpenAI", "FastAPI", "Postgres"],
  },
];
