import type { WebsiteShowcase } from "@/types";

/** Featured website heroes — live client / shipped builds. */
export const websites: WebsiteShowcase[] = [
  {
    id: "yolked",
    name: "Yolked Junk Removal",
    url: "https://yolkedjunkremoval.com/",
    category: "Local Service · Utah",
    tagline: "Junk removal and trailer rental that books fast",
    description:
      "A high-contrast booking site for a brother-owned Salt Lake County crew — quote cart, haul sizes, and dumpster rentals without the phone tag.",
    heroImage: "/websites/yolked-hero.png",
    tags: ["Next.js", "Booking", "Local SEO", "Quote flow"],
    highlights: [
      "Bold black-and-yellow brand system with clear CTAs",
      "Service catalog that builds a quote cart in seconds",
      "Strong local proof across Salt Lake County cities",
      "Call, text, and quote paths above the fold",
    ],
  },
  {
    id: "conxept",
    name: "Conxept",
    url: "https://conxept.co/",
    category: "Agency · Growth",
    tagline: "Digital marketing for real growth, not just reports",
    description:
      "Marketing-agency homepage centered on measurable outcomes — SEO, paid media, and content under one growth plan with stats that land hard.",
    heroImage: "/websites/conxept-hero.png",
    tags: ["Marketing site", "Agency", "Conversion", "Brand"],
    highlights: [
      "Cloud-sky hero with a rising growth chart as the visual anchor",
      "4.9 rating chip and outcome-led headline hierarchy",
      "Stat strip for businesses grown, revenue, and conversion lift",
      "Build / Rank / Grow navigation that mirrors the offer",
    ],
  },
  {
    id: "linkilo",
    name: "Linkilo",
    url: "https://linkilo.co/",
    category: "SaaS · SEO",
    tagline: "WordPress SEO that starts after the meta tags",
    description:
      "Product marketing for an AI SEO platform — internal links, topic clusters, crawl logs, and MCP access framed as the layer Yoast doesn’t cover.",
    heroImage: "/websites/linkilo-hero.png",
    tags: ["SaaS", "WordPress", "Product UI", "SEO"],
    highlights: [
      "Dark product-led hero with a single decisive CTA",
      "Positioning that sits alongside Yoast / Rank Math, not against them",
      "Dashboard preview under the fold for immediate product proof",
      "Trust line with money-back guarantee under the primary button",
    ],
  },
  {
    id: "duda",
    name: "Duda",
    url: "https://www.duda.co/",
    category: "Platform · Agencies",
    tagline: "The AI-ready website platform built for pros",
    description:
      "Enterprise-feeling marketing site for agencies and SaaS platforms — AI build paths, trial CTAs, and a dark system that scales with the product story.",
    heroImage: "/websites/duda-hero.png",
    tags: ["SaaS", "Agency platform", "AI", "Enterprise"],
    highlights: [
      "Centered hero with AI sparkle accent and orange primary CTA",
      "Four build-path cards that segment the first decision",
      "Nav tuned for Platform / Solutions / Resources buyers",
      "Visual proof panels starting just under the fold",
    ],
  },
  {
    id: "stayverified",
    name: "Stay Verified",
    url: "https://stayverified.com/",
    category: "Automotive · Reports",
    tagline: "Lookup used vehicle history with confidence",
    description:
      "Vehicle-history product site with a busy, conversion-forward hero — VIN / plate lookup messaging, floating report cards, and multi-vehicle service lines.",
    heroImage: "/websites/stayverified-hero.png",
    tags: ["E-commerce", "Automotive", "Lead gen", "Reports"],
    highlights: [
      "Split hero: copy left, lifestyle + UI collage right",
      "Carfax-alternative positioning with clear support CTA",
      "Publication logo strip for trust under the fold",
      "Service grid covering cars, boats, RVs, and more",
    ],
  },
  {
    id: "proactive",
    name: "Proactive Services Group",
    url: "https://proactive.group/",
    category: "B2B · IT & Security",
    tagline: "IT support, electrical, and security solutions",
    description:
      "UK technical-services homepage for IT, CCTV, networks, and renewables — geometric mesh atmosphere, booking banner, and a calm professional CTA.",
    heroImage: "/websites/proactive-hero.png",
    tags: ["Corporate", "IT services", "Security", "UK"],
    highlights: [
      "Dark navy hero with network mesh visual language",
      "Top booking banner plus phone CTA in the nav",
      "Clear multi-discipline positioning in one line",
      "Service icon strip introducing the full offer set",
    ],
  },
];
