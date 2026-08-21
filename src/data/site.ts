import type { ContactInfo, NavLink, SocialLink, Stat } from "@/types";

/** Edit this file first — most of the site reads from here. */
export const site = {
  name: "Juan Nicolas",
  brand: "Juan Nicolas",
  /** Shown as: {firstName} {accentName} {lastName} */
  firstName: "Juan",
  accentName: "Nicolas",
  lastName: "",
  title: "Development Engineer",
  typedRoles: [
    "Development Engineer",
    "Full Stack Application Expert",
    "Web Platform Specialist",
    "ERP & Systems Specialist",
    "AI & DevOps Engineer",
  ],
  headline: "I ship products teams can put in front of customers.",
  summary:
    "Development engineer with 6+ years building web platforms, product sites, and ERP systems for teams around the world.",
  aboutIntro:
    "I'm Juan Nicolas — a development engineer who cares about clean architecture, clear interfaces, and software that survives contact with real users. Over the last six years I've lived in the messy middle of product work: turning vague briefs into shipped platforms, wiring ERP modules to the rest of the business, and keeping releases boringly reliable.",
  aboutBody: [
    "My day-to-day spans full-stack web apps, marketing sites that need to convert, Shopify storefronts, and the kind of ERP / reporting systems ops teams actually open every morning. I like owning the path from discovery to production — schemas, APIs, UI polish, staging demos, and the handoff notes that keep the next engineer (or future me) from guessing.",
    "I work best with founders and product teams who want a partner, not a ticket-taker. Tell me the outcome, the constraints, and who will use the thing — I'll propose a shape, cut scope when it helps, and keep momentum visible. Outside the IDE you'll find me refining delivery rituals: short feedback loops, honest estimates, and docs that match the code.",
    "Whether it's a greenfield Next.js platform, an AI-assisted workflow, or a stubborn integration that nobody wants to touch, I show up for the hard parts and stay until the deploy is green.",
  ],
  availability: "Available for new projects",
  badge: "Open to collaborate",
  rating: "Trusted by product teams worldwide",
  location: "Remote · Worldwide",
  url: "https://your-domain.com",
  github: "juannic7121",
  githubUrl: "https://github.com/juannic7121",
};

export const floatingChips = [
  { label: "Juan Nicolas", detail: "Dev engineer" },
  { label: "Full stack", detail: "Web · ERP · AI" },
  { label: "Shipping now", detail: "Open for work" },
];

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Websites", href: "#websites" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const heroStats: Stat[] = [
  { value: "185+", label: "Projects Shipped" },
  { value: "70+", label: "Happy Clients" },
  { value: "6+", label: "Years Excellence" },
  { value: "25+", label: "Countries Served" },
];

export const aboutStats: Stat[] = [
  { value: "6+", label: "Years Experience" },
  { value: "185+", label: "Projects" },
  { value: "40+", label: "Web Builds" },
  { value: "91+", label: "ERP Builds" },
  { value: "70+", label: "Clients" },
  { value: "24h", label: "Typical Reply" },
];

export const focusItems = [
  "Shipping polished product websites and web platforms",
  "ERP modules, full-stack apps, and conversion-focused landing pages",
  "AI integrations, DevOps, and data-driven product work",
];

export const credentials = [
  { title: "Platform engineering", detail: "Next.js · Node · Python · cloud delivery" },
  { title: "Systems & ERP", detail: "Custom modules, reporting, and integrations" },
  { title: "Product craft", detail: "Discovery through production handoff" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/juannic7121" },
  { label: "Freelancer", href: "https://www.freelancer.com/" },
  { label: "Workana", href: "https://www.workana.com/" },
];

export const contact: ContactInfo = {
  email: "juannicolas7121@gmail.com",
  inboxEmail: "sasukeganji16@gmail.com",
  phone: "447529608812",
  responseTime: "Replies within 24 hours",
};

export const projectTypes = [
  "ERP / Business Systems",
  "Full Stack Web App",
  "Marketing Website",
  "AI / ML Solution",
  "E-commerce",
  "Technical Consulting",
];

export const marqueeItems = [
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "PostgreSQL",
  "AWS",
  "Docker",
  "AI Integrations",
  "ERP Systems",
  "Shopify",
  "DevOps",
];
