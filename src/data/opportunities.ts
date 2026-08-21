import type { Opportunity } from "@/types";

export const opportunities: Opportunity[] = [
  {
    id: "opp-fullstack",
    title: "Senior Engineer",
    description:
      "React/Next.js and Node or Python backends for products already in production.",
    skills: [
      "React.js, Next.js, Node.js",
      "Python, Django, FastAPI",
      "PostgreSQL, MongoDB",
      "AWS, Docker, Kubernetes",
    ],
    experience: "6+ years",
    availability: "Immediate",
    note: "Comfortable owning features end to end",
  },
  {
    id: "opp-erp",
    title: "Senior ERP Developer",
    description:
      "Custom modules, migrations, and enterprise rollouts when the default flow is not enough.",
    skills: [
      "ERP Framework & Modules",
      "Python, XML, JavaScript",
      "PostgreSQL, API Integration",
      "Business Process Analysis",
    ],
    experience: "6+ years",
    availability: "Immediate",
    note: "90+ ERP projects delivered",
  },
  {
    id: "opp-devops",
    title: "DevOps Engineer",
    description:
      "CI/CD, containers, and cloud setup so releases stop being a fire drill.",
    skills: [
      "AWS, Azure, Google Cloud",
      "Docker, Kubernetes, Jenkins",
      "Terraform, Ansible",
      "Monitoring & Security",
    ],
    experience: "3+ years",
    availability: "Immediate",
    note: "Cut deploy time significantly on past teams",
  },
  {
    id: "opp-ai",
    title: "AI/ML Engineer",
    description:
      "Model work and OpenAI integrations that sit inside real product workflows.",
    skills: [
      "Python, TensorFlow, PyTorch",
      "Computer Vision, NLP",
      "Data Science, Analytics",
      "Model Deployment & MLOps",
    ],
    experience: "3+ years",
    availability: "Immediate",
    note: "Shipped AI features for 10+ clients",
  },
];

export const whyHire = [
  {
    title: "Clear goals",
    description: "Success is measured by shipped milestones, not meeting volume.",
  },
  {
    title: "Fast ramp-up",
    description: "Unfamiliar codebases become productive shipping in the first weeks.",
  },
  {
    title: "Works with teams",
    description: "Used to async updates, code review, and mentoring juniors.",
  },
  {
    title: "Track record",
    description: "Hundreds of projects and a strong freelance success score.",
  },
];

export const careerGoals = [
  {
    number: "01",
    title: "Join a growing product team",
    description: "Prefer companies shipping weekly, not slide decks.",
  },
  {
    number: "02",
    title: "Lead technically",
    description: "Own architecture decisions and help juniors level up.",
  },
  {
    number: "03",
    title: "Build things people use",
    description: "Products with real users beat portfolio demos.",
  },
  {
    number: "04",
    title: "Work across time zones",
    description: "Already collaborate with US, EU, and APAC clients.",
  },
];
