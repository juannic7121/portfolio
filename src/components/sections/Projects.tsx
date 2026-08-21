"use client";

import { TiltCard } from "@/components/effects/TiltCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <Container>
        <Reveal blur>
          <SectionHeading
            eyebrow="Portfolio"
            title={
              <>
                Featured <span className="gradient-text">Projects</span>
              </>
            }
            description="A short selection of shipped work across platforms, product sites, and systems."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.06}>
              <TiltCard className="group h-full" maxTilt={6}>
                <article className="glass-card-hover h-full p-6">
                  <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-accent opacity-80 transition-all duration-500 group-hover:w-20" />
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    {project.category}
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="skill-badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
