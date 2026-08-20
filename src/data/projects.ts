import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "AI Support Copilot",
    summary:
      "LLM-assisted triage embedded in an existing helpdesk — reduced first-response time without replacing human judgment.",
    category: "AI Product",
    tags: ["Python", "OpenAI", "FastAPI", "Next.js"],
  },
  {
    id: "proj-2",
    title: "Operations Web Platform",
    summary:
      "Multi-tenant web platform for ops teams: live boards, role-based access, exportable reporting, and audit trails.",
    category: "Web Platform",
    tags: ["Next.js", "PostgreSQL", "TypeScript", "AWS"],
  },
  {
    id: "proj-3",
    title: "Consumer Mobile App",
    summary:
      "Cross-platform mobile product with offline-friendly sync, push notifications, and a polished design system.",
    category: "Mobile",
    tags: ["React Native", "Firebase", "CI/CD", "App Store"],
  },
  {
    id: "proj-4",
    title: "Product Launch Site",
    summary:
      "High-converting marketing site with cinematic storytelling, analytics instrumentation, and SEO foundations.",
    category: "Website",
    tags: ["Next.js", "Motion", "SEO", "Analytics"],
  },
];
