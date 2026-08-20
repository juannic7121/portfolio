import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Clarify outcomes, constraints, and users. I listen before proposing architecture or stack.",
    deliverables: ["Written brief", "Success criteria", "Risk notes"],
  },
  {
    number: "02",
    title: "Architect",
    description:
      "Shape the system: boundaries, data, delivery plan. You approve before build accelerates.",
    deliverables: ["Architecture outline", "Milestone map", "Stack decision"],
  },
  {
    number: "03",
    title: "Build",
    description:
      "Weekly demos on staging. Visible progress, tight feedback, no big-bang surprises.",
    deliverables: ["Staging URL", "Weekly notes", "Incremental releases"],
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Production deploy, handoff docs, and a short support window so launch week stays calm.",
    deliverables: ["Production release", "Handoff docs", "Post-launch support"],
  },
];

export const processPromises = [
  "Written decisions",
  "Weekly demos",
  "Honest estimates",
  "Production discipline",
];
