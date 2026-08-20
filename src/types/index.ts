export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  group: "core" | "specialized";
};

export type Skill = {
  name: string;
  level: number;
  category: SkillCategory;
  /** Brand accent hex used for icon, bar glow, and % label */
  color: string;
  /** react-icons/si key, e.g. "SiPython" */
  icon: string;
};

export type SkillCategory =
  | "Programming"
  | "Frameworks"
  | "Databases"
  | "Cloud"
  | "Tools"
  | "AI/ML"
  | "Design"
  | "Soft Skills";

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  employmentType: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  category: string;
  tags: string[];
  href?: string;
  image?: string;
};

export type CaseStudy = {
  id: string;
  number: string;
  industry: string;
  title: string;
  subtitle: string;
  duration: string;
  team: string;
  audience: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: Stat[];
  tags: string[];
};

export type WebsiteShowcase = {
  id: string;
  name: string;
  url?: string;
  category: string;
  tagline: string;
  description: string;
  heroImage: string;
  tags: string[];
  highlights: string[];
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  location: string;
  meta: string[];
};

export type Opportunity = {
  id: string;
  title: string;
  description: string;
  skills: string[];
  experience: string;
  availability: string;
  note: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type ContactInfo = {
  email: string;
  /** Inbox that receives messages from the site contact form */
  inboxEmail: string;
  phone: string;
  responseTime: string;
};
