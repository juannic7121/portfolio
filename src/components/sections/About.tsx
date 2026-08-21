"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/effects/AnimatedCounter";
import {
  aboutStats,
  contact,
  credentials,
  focusItems,
  site,
  socialLinks,
} from "@/data/site";
import { easeOut } from "@/lib/utils";

const badges = [
  "Web Platform Expert",
  "Full Stack Expert",
  "ERP Specialist",
  "AI & Data Science",
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-10 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <Reveal blur>
          <SectionHeading
            eyebrow="About Me"
            title={
              <>
                Meet{" "}
                <span className="gradient-text">Juan Nicolas</span>
              </>
            }
            description={site.aboutIntro}
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal delay={0.08}>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              {site.aboutBody.map((paragraph, i) => (
                <motion.p
                  key={paragraph.slice(0, 24)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.55, ease: easeOut }}
                >
                  {paragraph}
                </motion.p>
              ))}

              <Stagger className="flex flex-wrap gap-2" delay={0.15} stagger={0.05}>
                {badges.map((badge) => (
                  <StaggerItem key={badge}>
                    <span className="skill-badge">{badge}</span>
                  </StaggerItem>
                ))}
              </Stagger>

              <div className="space-y-2 text-sm">
                <p>{site.location}</p>
                <p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-foreground underline-offset-4 hover:underline"
                  >
                    {contact.email}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[hsl(142_76%_50%)]" />
                  {contact.responseTime}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {socialLinks.map((link) => (
                  <Button
                    key={link.label}
                    href={link.href}
                    variant="outline"
                    external
                    className="!py-2.5 !px-4"
                  >
                    {link.label === "GitHub"
                      ? `GitHub · ${site.github}`
                      : link.label}
                  </Button>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14} x={24} y={0}>
            <div className="glass-card glow-border space-y-8 p-6 sm:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  What I bring
                </p>
                <ul className="mt-4 space-y-4">
                  {credentials.map((item, i) => (
                    <motion.li
                      key={item.title}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08, duration: 0.45, ease: easeOut }}
                      className="flex items-start justify-between gap-4"
                    >
                      <div>
                        <p className="font-semibold text-foreground">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.detail}</p>
                      </div>
                      <span className="accent-badge shrink-0">Core</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  By the numbers
                </p>
                <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {aboutStats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.12 + i * 0.05, duration: 0.4, ease: easeOut }}
                      className="rounded-2xl border border-border/40 bg-secondary/50 p-3 transition hover:border-primary/35 hover:bg-secondary/80"
                    >
                      <dt className="text-[11px] text-muted-foreground">{stat.label}</dt>
                      <dd className="stat-number mt-1 text-xl">
                        <AnimatedCounter value={stat.value} />
                      </dd>
                    </motion.div>
                  ))}
                </dl>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Current focus
                </p>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {focusItems.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.18 + i * 0.07, duration: 0.4, ease: easeOut }}
                      className="flex gap-2"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
