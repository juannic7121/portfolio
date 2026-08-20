"use client";

import { Quote, Star } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatedCounter } from "@/components/effects/AnimatedCounter";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonialStats, testimonials } from "@/data/testimonials";
import { cn, easeOut } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  useEffect(() => {
    if (testimonials.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title={
              <>
                Words from clients who{" "}
                <span className="gradient-text">trust the work</span>
              </>
            }
            description="Names and details are shared with client permission. Feedback reflects real projects."
          />
        </Reveal>

        <Reveal delay={0.07}>
          <dl className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {testimonialStats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card p-5 text-center transition hover:-translate-y-1"
              >
                <dt className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {stat.label}
                </dt>
                <dd className="stat-number mt-2 text-2xl">
                  <AnimatedCounter value={stat.value} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="glass-card relative mx-auto mt-10 max-w-3xl overflow-hidden">
            <motion.div
              className="h-0.5 origin-left bg-primary"
              key={item?.id}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 6.5, ease: "linear" }}
            />
            <div className="p-6 sm:p-10">
              <Quote
                className="absolute right-6 top-8 text-primary opacity-15"
                size={64}
              />
              <AnimatePresence mode="wait">
                {item ? (
                  <motion.blockquote
                    key={item.id}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.35, ease: easeOut }}
                  >
                    <div className="mb-4 flex gap-1 text-primary">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                      “{item.quote}”
                    </p>
                    <footer className="mt-8 flex flex-wrap items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center border-2 border-primary bg-primary/10 font-[family-name:var(--font-display)] text-lg font-bold text-primary">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.role} · {item.location}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 sm:ml-auto">
                        {item.meta.map((meta) => (
                          <span key={meta} className="accent-badge">
                            {meta}
                          </span>
                        ))}
                      </div>
                    </footer>
                  </motion.blockquote>
                ) : null}
              </AnimatePresence>

              <div className="mt-8 flex gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    aria-label={`Show testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={cn(
                      "h-1.5 transition-all",
                      index === i
                        ? "w-8 bg-primary"
                        : "w-3 bg-muted-foreground/40",
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
