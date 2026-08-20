import type { Stat, Testimonial } from "@/types";

export const testimonialStats: Stat[] = [
  { value: "5.0 / 5", label: "Overall Rating" },
  { value: "98%", label: "Project Success" },
  { value: "8+", label: "Years Trusted" },
  { value: "95%", label: "On-Time Delivery" },
];

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    quote:
      "Gael operated like a staff engineer on our team — clear architecture, calm delivery, and AI features that agents actually used. Rare combination of taste and rigor.",
    name: "Alex Morgan",
    role: "Head of Product",
    location: "USA",
    meta: ["AI platform", "Long-term partner"],
  },
  {
    id: "t-2",
    quote:
      "He shipped our mobile app and the supporting web APIs without drama. Weekly demos, honest estimates, zero surprises at launch.",
    name: "Jordan Lee",
    role: "Founder",
    location: "EU",
    meta: ["Mobile + API", "Fixed-price delivery"],
  },
  {
    id: "t-3",
    quote:
      "Senior judgment from day one. He cut scope that would have wasted months and still hit the quality bar we needed for enterprise buyers.",
    name: "Sam Rivera",
    role: "CTO",
    location: "LATAM",
    meta: ["Web platform", "Architecture"],
  },
];
