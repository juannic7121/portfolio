import type { Stat, Testimonial } from "@/types";

export const testimonialStats: Stat[] = [
  { value: "5.0 / 5", label: "Overall Rating" },
  { value: "98%", label: "Project Success" },
  { value: "70+", label: "Happy Clients" },
  { value: "95%", label: "On-Time Delivery" },
];

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    quote:
      "Handled our rollout end to end. The custom modules matched how we actually work, and handoff was clean. Would hire again.",
    name: "Alex Morgan",
    role: "Business Owner",
    location: "USA",
    meta: ["Business Verified", "Long-term partner", "6 months engagement"],
  },
  {
    id: "t-2",
    quote:
      "Clear milestones, staging demos every week, and zero surprises at launch. Exactly the partner we needed for a complex rebuild.",
    name: "Jordan Lee",
    role: "Product Lead",
    location: "EU",
    meta: ["Repeat Client", "Fixed-price delivery"],
  },
];
