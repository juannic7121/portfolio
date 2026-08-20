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
  "Web Platforms",
  "AI Engineering",
  "Mobile Apps",
  "System Design",
];

export function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title={
              <>
                Senior craft across{" "}
                <span className="gradient-text">web, AI & mobile</span>
              </>
            }
            description={site.aboutIntro}
          />
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.06}>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              {site.aboutBody.map((paragraph, i) => (
                <motion.p
                  key={paragraph.slice(0, 24)}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.55, ease: easeOut }}
                >
                  {paragraph}
                </motion.p>
              ))}

              <Stagger className="flex flex-wrap gap-2" delay={0.1} stagger={0.04}>
                {badges.map((badge) => (
                  <StaggerItem key={badge}>
                    <span className="skill-badge">{badge}</span>
                  </StaggerItem>
                ))}
              </Stagger>

              <div className="space-y-2 border-t border-border pt-6 text-sm">
                <p>{site.location}</p>
                <p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-foreground underline-offset-4 hover:underline"
                  >
                    {contact.email}
                  </a>
                </p>
                <p>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-foreground underline-offset-4 hover:underline"
                  >
                    {contact.phone}
                  </a>
                </p>
                <p className="flex items-center gap-2 pt-1">
                  <span className="h-px w-4 bg-primary" />
                  {contact.responseTime}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {socialLinks
                  .filter((l) => !l.href.startsWith("mailto:"))
                  .map((link) => (
                    <Button
                      key={link.label}
                      href={link.href}
                      variant="outline"
                      external
                      className="!px-4 !py-2.5"
                    >
                      {link.label}
                    </Button>
                  ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} x={20} y={0}>
            <div className="glass-card glow-border space-y-10 p-7 sm:p-9">
              <div>
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
                  What I bring
                </p>
                <ul className="mt-5 space-y-5">
                  {credentials.map((item, i) => (
                    <motion.li
                      key={item.title}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.06, duration: 0.45, ease: easeOut }}
                      className="flex items-start justify-between gap-4"
                    >
                      <div>
                        <p className="font-semibold text-foreground">{item.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                      </div>
                      <span className="accent-badge shrink-0">Core</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
                  By the numbers
                </p>
                <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {aboutStats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.04, duration: 0.4, ease: easeOut }}
                      className="border border-border bg-secondary/40 p-3"
                    >
                      <dt className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.12em] text-muted-foreground uppercase">
                        {stat.label}
                      </dt>
                      <dd className="stat-number mt-1 text-xl">
                        <AnimatedCounter value={stat.value} />
                      </dd>
                    </motion.div>
                  ))}
                </dl>
              </div>

              <div>
                <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
                  Current focus
                </p>
                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                  {focusItems.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.12 + i * 0.05, duration: 0.4, ease: easeOut }}
                      className="flex gap-3"
                    >
                      <span className="mt-2.5 h-px w-3 shrink-0 bg-primary" />
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
