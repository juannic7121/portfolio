import type { ContactInfo, NavLink, SocialLink, Stat } from "@/types";

/** Edit this file first — most of the site reads from here. */
export const site = {
  name: "Gael Alves",
  brand: "Gael Alves",
  firstName: "Gael",
  accentName: "Alves",
  lastName: "",
  title: "Senior Web · AI · Mobile Engineer",
  typedRoles: [
    "Senior Web Engineer",
    "AI Product Engineer",
    "Mobile App Developer",
    "Full-Stack Architect",
  ],
  headline: "Eight years shipping web, AI, and mobile products that teams trust in production.",
  summary:
    "Senior engineer with 8+ years building web platforms, AI-powered products, and mobile apps — from architecture through launch.",
  aboutIntro:
    "I'm Gael Alves — a senior engineer who designs systems that stay understandable after the launch week excitement fades. For eight years I've led delivery across web platforms, AI features, and mobile products for founders and product teams who need ownership, not ticket churn.",
  aboutBody: [
    "My work spans production web apps, AI-assisted workflows, and native-quality mobile experiences. I care about architecture that scales, interfaces that feel intentional, and releases that ops teams can sleep through. Discovery, design collaboration, implementation, and handoff are all part of the same job.",
    "I partner best with teams that value clarity: honest scope, visible milestones, and code future engineers can extend. Whether greenfield or a mature codebase, I start by understanding users and constraints — then cut through noise until the path to production is obvious.",
    "Outside the IDE, I refine how teams ship: short feedback loops, written decisions, and quality bars that protect the product without slowing it down.",
  ],
  availability: "Open to select engagements",
  badge: "8+ years · Web · AI · Mobile",
  rating: "Trusted by product teams worldwide",
  location: "Remote · Worldwide",
  url: "https://gaelalves.dev",
  github: "gaelalvesbusiness-ops",
  githubUrl: "https://github.com/gaelalvesbusiness-ops",
  portrait: "/images/gael-portrait.jpg",
};

export const floatingChips = [
  { label: "Gael Alves", detail: "Senior engineer" },
  { label: "Web · AI · Mobile", detail: "8+ years shipping" },
  { label: "Available", detail: "Select projects" },
];

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const heroStats: Stat[] = [
  { value: "8+", label: "Years Shipping" },
  { value: "120+", label: "Products Delivered" },
  { value: "40+", label: "AI & Mobile Builds" },
  { value: "25+", label: "Countries Served" },
];

export const aboutStats: Stat[] = [
  { value: "8+", label: "Years Experience" },
  { value: "120+", label: "Projects" },
  { value: "50+", label: "Web Platforms" },
  { value: "30+", label: "Mobile Apps" },
  { value: "25+", label: "AI Integrations" },
  { value: "24h", label: "Typical Reply" },
];

export const focusItems = [
  "Production web platforms with clear architecture and measurable performance",
  "AI features wired into real workflows — not demos that die in staging",
  "Mobile apps with polished UX, solid APIs, and reliable release pipelines",
];

export const credentials = [
  { title: "Web platforms", detail: "Next.js · React · Node · TypeScript · cloud delivery" },
  { title: "AI engineering", detail: "LLM integrations, automation, applied ML in products" },
  { title: "Mobile products", detail: "React Native · Flutter · API design · store releases" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/gaelalvesbusiness-ops" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Email", href: "mailto:gaelalves.business@gmail.com" },
];

export const contact: ContactInfo = {
  email: "gaelalves.business@gmail.com",
  inboxEmail: "gaelalves.business@gmail.com",
  phone: "1102533570",
  responseTime: "Replies within 24 hours",
};

export const projectTypes = [
  "Web Platform",
  "AI Product Feature",
  "Mobile Application",
  "Product Website",
  "API & Architecture",
  "Technical Consulting",
];

export const marqueeItems = [
  "Next.js",
  "TypeScript",
  "React",
  "React Native",
  "Flutter",
  "Node.js",
  "Python",
  "OpenAI",
  "PostgreSQL",
  "AWS",
  "Mobile CI/CD",
  "System Design",
];
