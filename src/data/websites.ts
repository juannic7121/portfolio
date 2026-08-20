import type { WebsiteShowcase } from "@/types";

/**
 * Selected website heroes — senior-caliber product sites
 * inspired by award-winning work (Linear, Stripe, Vercel, AI product launches).
 */
export const websites: WebsiteShowcase[] = [
  {
    id: "apex-ops",
    name: "Apex Ops",
    url: "https://linear.app",
    category: "SaaS · Product Ops",
    tagline: "Operational clarity at the speed of the team",
    description:
      "A product-led operations platform homepage in the spirit of Linear — restrained type, instant product proof, and a first viewport that feels like the tool itself: fast, precise, and senior.",
    heroImage: "/websites/apex-ops-hero.png",
    tags: ["Next.js", "Product UI", "B2B SaaS", "Motion"],
    highlights: [
      "Brand-forward wordmark with one decisive primary CTA",
      "In-frame product surface as the visual proof — not a collage",
      "Dense-but-breathable layout tuned for technical buyers",
      "Performance-minded composition with intentional scroll hierarchy",
    ],
  },
  {
    id: "lumen-ai",
    name: "Lumen AI",
    url: "https://cleo.com",
    category: "AI · Consumer Product",
    tagline: "Intelligence that feels human in the first five seconds",
    description:
      "An AI product marketing site built for trust and momentum — cinematic storytelling, silky interaction, and a hero that sells capability without drowning visitors in model jargon.",
    heroImage: "/websites/lumen-ai-hero.png",
    tags: ["AI UX", "Storytelling", "Next.js", "Brand"],
    highlights: [
      "Outcome-first headline with a single supporting sentence",
      "Visual system that signals intelligence without neon clichés",
      "Scroll-driven product reveals paced for senior audiences",
      "CTA paths for demo and docs — no noise above the fold",
    ],
  },
  {
    id: "ledgerkit",
    name: "Ledgerkit",
    url: "https://stripe.com",
    category: "Fintech · Developer",
    tagline: "Payments infrastructure that reads as craftsmanship",
    description:
      "A Stripe-caliber developer platform homepage: confident hierarchy, documentation-adjacent clarity, and a visual language that makes complex money movement feel simple and safe.",
    heroImage: "/websites/ledgerkit-hero.png",
    tags: ["Fintech", "Developer UX", "Docs-ready", "Trust"],
    highlights: [
      "Editorial spacing with technical precision",
      "Code and UI previews nested as product evidence",
      "Trust signals without badge clutter",
      "Architecture that scales from landing to deep docs",
    ],
  },
  {
    id: "orbit-mobile",
    name: "Orbit Mobile",
    url: "https://vercel.com",
    category: "Mobile · Platform",
    tagline: "Ship mobile experiences with web-grade velocity",
    description:
      "A platform site for mobile product teams — device-forward visuals, deployment clarity, and a hero composition that positions the product as infrastructure, not a template.",
    heroImage: "/websites/orbit-mobile-hero.png",
    tags: ["Mobile", "React Native", "Platform", "CI/CD"],
    highlights: [
      "Device mockups as the dominant visual plane",
      "Clear path from idea → build → store release",
      "Senior tone: fewer claims, more proof",
      "Responsive composition that holds on phone and desktop",
    ],
  },
];
