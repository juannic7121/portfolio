"use client";

import { TiltCard } from "@/components/effects/TiltCard";
import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processPromises, processSteps } from "@/data/process";

export function Process() {
  return (
    <section id="process" className="py-24 lg:py-32">
      <Container>
        <Reveal blur>
          <SectionHeading
            eyebrow="How I Work"
            title={
              <>
                How projects <span className="gradient-text">usually run</span>
              </>
            }
            description="Scope first, then milestones. Changes get written down before they hit the timeline."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.07}>
              <TiltCard className="group h-full" maxTilt={7}>
                <article className="glass-card-hover relative h-full overflow-hidden p-6">
                  <p className="bg-gradient-to-br from-primary/40 to-accent/40 bg-clip-text font-[family-name:var(--font-display)] text-4xl font-bold italic text-transparent transition group-hover:from-primary group-hover:to-accent">
                    {step.number}
                  </p>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                  <ul className="mt-4 space-y-1 text-xs text-muted-foreground">
                    {step.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Stagger className="mt-10 flex flex-wrap gap-3" delay={0.1} stagger={0.05}>
          {processPromises.map((item) => (
            <StaggerItem key={item}>
              <span className="accent-badge">{item}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
