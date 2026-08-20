"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";
import { easeOut } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Career"
            title={
              <>
                Work <span className="gradient-text">history</span>
              </>
            }
            description="Roles that shaped how I lead delivery across web, AI, and mobile."
          />
        </Reveal>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div
            className="absolute bottom-0 left-4 top-0 w-0.5 bg-primary"
            aria-hidden
          />

          <div className="space-y-6">
            {experience.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.07}>
                <article className="relative pl-12">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, ease: easeOut }}
                    className="absolute left-2.5 top-6 h-4 w-4 border-2 border-primary bg-background"
                  />
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.25, ease: easeOut }}
                    className="glass-card-hover p-6"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">
                        {item.role}
                      </h3>
                      <span className="accent-badge">{item.employmentType}</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase size={14} /> {item.company}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar size={14} /> {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={14} /> {item.location}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {item.summary}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>
                          <span className="text-primary">▸</span> {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="skill-badge">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
