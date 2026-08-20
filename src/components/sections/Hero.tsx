"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Marquee } from "@/components/effects/Marquee";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { heroStats, marqueeItems, site, socialLinks } from "@/data/site";
import { easeOut } from "@/lib/utils";

function RoleCycle({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, [roles.length]);

  return (
    <p className="mt-5 min-h-[1.75rem] font-[family-name:var(--font-mono)] text-sm tracking-[0.18em] text-primary uppercase">
      <motion.span
        key={roles[index]}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: easeOut }}
        className="inline-block"
      >
        {roles[index]}
      </motion.span>
    </p>
  );
}

export function Hero() {
  return (
    <section id="top" className="hero-stage">
      <div className="hero-photo" aria-hidden>
        <Image
          src={site.portrait}
          alt=""
          fill
          priority
          quality={95}
          className="object-cover object-[42%_18%]"
          sizes="100vw"
        />
      </div>
      <div className="hero-veil" aria-hidden />

      <Container className="relative z-[2] flex min-h-[100svh] flex-col justify-end pb-16 pt-[88px] lg:justify-center lg:pb-24">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.28em] text-muted-foreground uppercase"
          >
            {site.badge}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.75, ease: easeOut }}
            className="brand-name mt-5 text-5xl sm:text-6xl lg:text-[6.5rem]"
          >
            {site.firstName}{" "}
            <span className="name-accent">{site.accentName}</span>
          </motion.h1>

          <RoleCycle roles={site.typedRoles} />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.65, ease: easeOut }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {site.headline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: easeOut }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Button href="#work">
              Selected work <ArrowDownRight size={16} />
            </Button>
            <Button href="#contact" variant="outline">
              Start a conversation
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-border/70 pt-6"
          >
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="stat-number text-2xl">{stat.value}</p>
                <p className="mt-1 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.16em] text-muted-foreground uppercase transition hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>
      </Container>

      <div className="relative z-[2]">
        <Marquee items={marqueeItems} />
      </div>
    </section>
  );
}
