"use client";

import { ArrowRight } from "lucide-react";
import { AnimatedCounter } from "@/components/effects/AnimatedCounter";
import { TiltCard } from "@/components/effects/TiltCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceStats, services } from "@/data/services";

export function Services() {
  const core = services.filter((s) => s.group === "core");
  const specialized = services.filter((s) => s.group === "specialized");

  return (
    <section id="services" className="py-24 lg:py-32">
      <Container>
        <Reveal blur>
          <SectionHeading
            eyebrow="Services"
            title={
              <>
                What I <span className="gradient-text">take on</span>
              </>
            }
            description="Nine service lines across two focus areas — from core product engineering to specialized delivery."
          />
        </Reveal>

        <Stagger
          className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4"
          delay={0.08}
        >
          {serviceStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="glass-card p-5 text-center transition hover:-translate-y-1">
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {stat.label}
                </p>
                <p className="stat-number mt-2 text-2xl">
                  <AnimatedCounter value={stat.value} />
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <ServiceGroup title="Core Expertise" items={core} />
        <ServiceGroup title="Specialized Services" items={specialized} />

        <Reveal>
          <div className="glass-card glow-border mt-14 flex flex-col items-start justify-between gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold">
                Ready to get started?
              </h3>
              <p className="mt-2 max-w-xl text-muted-foreground">
                Let&apos;s discuss your project — I typically reply within 24 hours.
              </p>
            </div>
            <Button href="#contact">
              Get Free Consultation <ArrowRight size={16} />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function ServiceGroup({
  title,
  items,
}: {
  title: string;
  items: typeof services;
}) {
  return (
    <div className="mt-14">
      <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {title}
      </h3>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((service, index) => (
          <Reveal key={service.id} delay={Math.min(index * 0.06, 0.24)}>
            <TiltCard className="group h-full">
              <article className="glass-card-hover flex h-full flex-col p-6">
                <div className="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-16" />
                <h4 className="font-[family-name:var(--font-display)] text-xl font-semibold">
                  {service.title}
                </h4>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
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
    </div>
  );
}
