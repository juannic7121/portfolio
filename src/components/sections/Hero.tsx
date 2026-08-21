"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatedCounter } from "@/components/effects/AnimatedCounter";
import { Marquee } from "@/components/effects/Marquee";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  floatingChips,
  heroStats,
  marqueeItems,
  site,
  socialLinks,
} from "@/data/site";
import { easeOut } from "@/lib/utils";

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${6 + ((i * 5.5) % 88)}%`,
  size: 2 + (i % 4),
  delay: i * 0.85,
  duration: 9 + (i % 6),
  color:
    i % 3 === 0
      ? "hsl(var(--primary) / 0.45)"
      : i % 3 === 1
        ? "hsl(var(--accent) / 0.4)"
        : "hsl(213 70% 65% / 0.3)",
}));

function Typewriter({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index] ?? "";
    const delay = deleting ? 35 : text === current ? 2200 : 75;

    const timer = window.setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
        return;
      }
      const next = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
      setText(next);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, index, roles, text]);

  return (
    <p className="mt-4 min-h-[2rem] font-[family-name:var(--font-sans)] text-xl font-semibold tracking-[-0.015em] text-primary sm:text-2xl">
      {text}
      <span className="ml-0.5 animate-pulse text-accent">|</span>
    </p>
  );
}

function FloatingChip({
  chip,
  className,
  delay,
}: {
  chip: (typeof floatingChips)[number];
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: easeOut }}
      className={`glass-card absolute hidden px-3 py-2 text-left sm:block ${className}`}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3.6 + delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <p className="text-xs font-semibold text-foreground">{chip.label}</p>
        <p className="text-[11px] text-muted-foreground">{chip.detail}</p>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const portraitRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(springY, [-40, 40], [6, -6]);
  const rotateY = useTransform(springX, [-40, 40], [-6, 6]);

  const onPortraitMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = portraitRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left - rect.width / 2);
    mouseY.set(event.clientY - rect.top - rect.height / 2);
  };

  const onPortraitLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="top"
      className="relative isolate min-h-screen overflow-hidden pt-[68px]"
    >
      <div
        className="hero-glow hero-orb-blue left-[-10%] top-[10%] h-[420px] w-[420px]"
        aria-hidden
      />
      <div
        className="hero-glow hero-orb-sky right-[-5%] top-[5%] h-[380px] w-[380px]"
        style={{ animationDelay: "2s" }}
        aria-hidden
      />
      <div
        className="hero-glow bottom-[10%] left-[35%] h-[300px] w-[300px] opacity-40"
        aria-hidden
      />
      <div className="hero-grid hero-grid-flow" aria-hidden />

      {particles.map((p) => (
        <span
          key={p.id}
          className="floating-particle"
          style={{
            left: p.left,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            background: `radial-gradient(circle, ${p.color}, transparent)`,
          }}
          aria-hidden
        />
      ))}

      <Container className="relative grid min-h-[calc(100svh-68px)] items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: easeOut }}
            className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 lg:justify-start"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/60 px-3 py-1.5 text-sm text-muted-foreground backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[hsl(142_76%_50%)]" />
              {site.availability}
            </span>
            <span className="accent-badge">{site.badge}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm font-medium text-muted-foreground"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.7, ease: easeOut }}
            className="mt-2 font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-7xl"
          >
            <span className="inline-block">
              {site.firstName.split("").map((char, i) => (
                <motion.span
                  key={`f-${char}-${i}`}
                  className="inline-block"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.04, duration: 0.45, ease: easeOut }}
                >
                  {char}
                </motion.span>
              ))}
            </span>{" "}
            <span className="name-accent inline-block">
              {site.accentName.split("").map((char, i) => (
                <motion.span
                  key={`a-${char}-${i}`}
                  className="inline-block"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.55 + i * 0.035,
                    duration: 0.45,
                    ease: easeOut,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
            {site.lastName ? ` ${site.lastName}` : null}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
          >
            <Typewriter roles={site.typedRoles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6, ease: easeOut }}
            className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground lg:mx-0"
          >
            {site.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.6, ease: easeOut }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <Button href="#websites">
              View My Work{" "}
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </Button>
            <Button href="#contact" variant="outline">
              Let&apos;s Build Together
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <div className="flex items-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + i * 0.06, type: "spring", stiffness: 320 }}
                >
                  <Star size={14} fill="currentColor" />
                </motion.span>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">{site.rating}</span>
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  title={
                    link.label === "GitHub"
                      ? `GitHub · ${site.github}`
                      : link.label
                  }
                  aria-label={
                    link.label === "GitHub"
                      ? `GitHub ${site.github}`
                      : link.label
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border/50 bg-card/60 text-xs text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
                >
                  {link.label === "GitHub" ? "GH" : link.label.slice(0, 2)}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          ref={portraitRef}
          onMouseMove={onPortraitMove}
          onMouseLeave={onPortraitLeave}
          initial={{ opacity: 0, x: 30, scale: 0.85 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.9, ease: easeOut }}
          className="relative mx-auto w-full max-w-[480px]"
          style={{ perspective: 1000 }}
        >
          <motion.div
            aria-hidden
            className="absolute inset-[-8%] rounded-[2rem] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.18),hsl(var(--accent)/0.1),transparent_70%)] blur-3xl"
            animate={{ opacity: [0.55, 0.9, 0.55], scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative overflow-hidden rounded-[1.25rem] border border-border/60 bg-card shadow-[0_24px_60px_-32px_rgba(0,0,0,0.55)] ring-1 ring-primary/20"
          >
            <div className="relative aspect-[5/4] overflow-hidden sm:aspect-[4/3]">
              <Image
                src="/images/juan-portrait.jpg"
                alt={`${site.name} at work`}
                fill
                priority
                quality={95}
                className="object-cover object-[35%_20%] transition duration-700"
                sizes="(max-width: 1024px) 90vw, 520px"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background/70 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10" />
            </div>
          </motion.div>

          {floatingChips.map((chip, i) => (
            <FloatingChip
              key={chip.label}
              chip={chip}
              delay={1 + i * 0.12}
              className={
                i === 0
                  ? "-left-6 top-10"
                  : i === 1
                    ? "-right-4 top-1/3"
                    : "-left-4 bottom-16"
              }
            />
          ))}
        </motion.div>
      </Container>

      <Container className="relative pb-10">
        <motion.dl
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7, ease: easeOut }}
          className="mx-auto grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4"
        >
          {heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{
                delay: 1.05 + i * 0.08,
                duration: 0.5,
                ease: easeOut,
              }}
              className="glass-card-hover p-4 text-center"
            >
              <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="stat-number mt-2 text-2xl sm:text-3xl">
                <AnimatedCounter value={stat.value} />
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </Container>

      <Marquee items={marqueeItems} className="mt-4" />
    </section>
  );
}
