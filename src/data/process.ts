import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Brief",
    description:
      "A short call on goals, constraints, and what “done” looks like. I listen before proposing a stack.",
    deliverables: ["Requirements document", "Project scope", "Timeline estimate"],
  },
  {
    number: "02",
    title: "Architecture & Plan",
    description:
      "A written plan covering stack, risks, and milestones. You approve it before coding starts.",
    deliverables: ["Tech stack decision", "Architecture diagram", "Milestone roadmap"],
  },
  {
    number: "03",
    title: "Build & Iterate",
    description:
      "Weekly demos on a staging URL. You see progress every week — not a big reveal at the end.",
    deliverables: ["Weekly demos", "Staging environment", "Progress reports"],
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "Production deploy, handoff docs, and a short support window so launch week stays calm.",
    deliverables: ["Production deployment", "Documentation", "Post-launch support"],
  },
];

export const processPromises = [
  "Daily communication",
  "100% transparency",
  "On-time delivery",
  "Thorough QA",
];
