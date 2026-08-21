import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-1",
    number: "01",
    industry: "Healthcare · ERP",
    title: "Hospital Operations Platform",
    subtitle: "End-to-end digital healthcare operations",
    duration: "3–4 months",
    team: "3–4 developers",
    audience: "Healthcare Institutions",
    challenge:
      "A multi-department hospital needed to unify patient records, appointments, billing, pharmacy, and lab workflows into a single digital system.",
    solution:
      "Built a comprehensive ERP-based platform with 50+ custom modules covering clinical and administrative workflows.",
    outcome:
      "Reduced administrative overhead by 40% and eliminated manual record errors across 50+ clinical workflows.",
    metrics: [
      { value: "50+", label: "Workflows Automated" },
      { value: "−40%", label: "Admin Overhead" },
      { value: "5/5", label: "Client Rating" },
    ],
    tags: ["Python", "PostgreSQL", "JavaScript", "XML"],
  },
  {
    id: "cs-2",
    number: "02",
    industry: "Automotive · ERP",
    title: "Workshop Management System",
    subtitle: "Streamlined automotive service management",
    duration: "2–3 months",
    team: "2–3 developers",
    audience: "Automotive Repair Shops",
    challenge:
      "An automotive repair chain was losing revenue to manual job tracking, incorrect billing, and slow customer communication.",
    solution:
      "Delivered a workshop module with real-time job card tracking, automated invoicing, and customer SMS notifications.",
    outcome:
      "Cut invoice processing time by 60% and improved customer satisfaction with real-time status updates.",
    metrics: [
      { value: "−60%", label: "Invoice Processing" },
      { value: "~0", label: "Manual Errors" },
      { value: "5/5", label: "Client Rating" },
    ],
    tags: ["Python", "PostgreSQL", "JavaScript", "XML"],
  },
  {
    id: "cs-3",
    number: "03",
    industry: "Hospitality · ERP",
    title: "Hotel Operations Suite",
    subtitle: "Unified hotel operations from front desk to financials",
    duration: "4–5 months",
    team: "3–4 developers",
    audience: "Hospitality Industry",
    challenge:
      "A hotel group operated reservations, housekeeping, POS, and billing in silos, causing double-bookings and revenue leakage.",
    solution:
      "Integrated all hotel operations into a unified platform with real-time room availability and financial dashboards.",
    outcome:
      "Eliminated double-bookings and delivered real-time financial visibility across departments.",
    metrics: [
      { value: "7", label: "Departments Unified" },
      { value: "0", label: "Double-Bookings" },
      { value: "5/5", label: "Client Rating" },
    ],
    tags: ["Python", "PostgreSQL", "JavaScript", "QWeb"],
  },
];
