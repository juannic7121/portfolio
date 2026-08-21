import type { Service, Stat } from "@/types";

export const serviceStats: Stat[] = [
  { value: "70+", label: "Happy Clients" },
  { value: "185+", label: "Projects Delivered" },
  { value: "40+", label: "Web Builds" },
  { value: "5/5", label: "Client Satisfaction" },
];

export const services: Service[] = [
  {
    id: "erp",
    title: "ERP Systems",
    description:
      "Custom modules, reporting, enterprise rollouts, and integrations where the out-of-the-box flow is not enough.",
    tags: ["Python", "PostgreSQL", "XML-RPC", "Enterprise ERP"],
    group: "core",
  },
  {
    id: "fullstack",
    title: "Full Stack Development",
    description:
      "Web apps on Next.js, React, and TypeScript — the same stack used on client work every week.",
    tags: ["React", "Next.js", "Node.js", "TypeScript", "FastAPI"],
    group: "core",
  },
  {
    id: "websites",
    title: "Product Websites",
    description:
      "Marketing and product sites with strong hero composition, clear CTAs, and performance-minded Next.js builds.",
    tags: ["Next.js", "SEO", "Landing Pages", "Design Systems", "Analytics"],
    group: "core",
  },
  {
    id: "ecommerce",
    title: "Shopify & E-commerce",
    description:
      "Store builds, theme work, payments, and checkout flows tuned for conversion — not just demos.",
    tags: ["Shopify", "Stripe", "PayPal", "WooCommerce"],
    group: "specialized",
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    description:
      "Practical OpenAI integrations, automation, and predictive pieces wired into products that already exist.",
    tags: ["Python", "OpenAI", "TensorFlow", "PyTorch"],
    group: "specialized",
  },
  {
    id: "data",
    title: "Data Science & Analytics",
    description:
      "Reports and dashboards that answer the questions your ops team actually asks.",
    tags: ["Python", "SQL", "Pandas", "Power BI"],
    group: "specialized",
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    description:
      "AWS, Docker, Kubernetes, and CI/CD so deploys are boring — in a good way.",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
    group: "specialized",
  },
  {
    id: "design",
    title: "UI/UX Design & Development",
    description:
      "Figma to Tailwind builds with clear hierarchy and mobile-first layouts.",
    tags: ["Figma", "Tailwind CSS", "Design Systems", "Responsive"],
    group: "specialized",
  },
  {
    id: "api",
    title: "API Development & Integration",
    description:
      "REST, GraphQL, and third-party glue so your tools talk without fragile middleware.",
    tags: ["REST API", "GraphQL", "Microservices", "FastAPI"],
    group: "specialized",
  },
];
