"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { websites } from "@/data/websites";

export function FeaturedWebsites() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(websites.length - 1) * 100}%`],
  );

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="websites"
      ref={sectionRef}
      className="relative"
      style={{ height: `${websites.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden pt-[68px]">
        <Container className="shrink-0 pb-6 pt-10 lg:pt-14">
          <Reveal>
            <SectionHeading
              eyebrow="Featured Work"
              title={
                <>
                  Website <span className="gradient-text">heroes</span>
                </>
              }
              description="Selected live homepages — scroll through this section, then click any preview to open the site in a new tab."
            />
          </Reveal>
        </Container>

        <div className="relative min-h-0 flex-1">
          <motion.div
            style={{ x }}
            className="flex h-full w-full will-change-transform"
          >
            {websites.map((site, index) => (
              <div
                key={site.id}
                className="flex h-full w-screen shrink-0 items-center px-4 sm:px-6 lg:px-10"
              >
                <WebsiteBlock site={site} index={index} />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-5 z-10 flex justify-center px-6">
          <div className="w-full max-w-xs overflow-hidden rounded-full bg-border/40">
            <motion.div
              style={{ width: progressWidth }}
              className="h-1 rounded-full bg-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function displayHost(url?: string, fallbackName?: string) {
  if (!url) {
    return `${(fallbackName ?? "site").toLowerCase().replace(/\s+/g, "")}.studio`;
  }
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function WebsiteBlock({
  site,
  index,
}: {
  site: (typeof websites)[number];
  index: number;
}) {
  const host = displayHost(site.url, site.name);

  return (
    <article className="mx-auto grid w-full max-w-6xl items-center gap-6 rounded-[calc(var(--radius)+6px)] border border-border/60 bg-card p-5 lg:grid-cols-2 lg:gap-10 lg:p-8">
      <div className="relative">
        <div className="absolute inset-[-6%] rounded-2xl bg-gradient-to-br from-primary/15 via-transparent to-accent/10 blur-2xl" />
        <div className="relative overflow-hidden rounded-[var(--radius)] border border-border/70 bg-secondary shadow-[0_24px_50px_-28px_rgba(0,0,0,0.55)]">
          <div className="flex items-center gap-1.5 border-b border-border/50 bg-secondary/90 px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 truncate font-[family-name:var(--font-mono)] text-[11px] text-muted-foreground">
              {host}
            </span>
            <span className="ml-auto text-[11px] text-muted-foreground">
              {index + 1}/{websites.length}
            </span>
          </div>

          {site.url ? (
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${site.name} website`}
              className="group relative block aspect-[16/10] overflow-hidden bg-background outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Image
                src={site.heroImage}
                alt={`${site.name} website hero`}
                fill
                quality={90}
                className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/95 px-3 py-1.5 text-xs font-semibold text-foreground opacity-0 shadow-lg backdrop-blur transition group-hover:opacity-100">
                Open site <ExternalLink size={12} />
              </span>
            </a>
          ) : (
            <div className="relative aspect-[16/10] overflow-hidden bg-background">
              <Image
                src={site.heroImage}
                alt={`${site.name} website hero`}
                fill
                quality={90}
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          )}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {site.category}
        </p>
        <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight">
          {site.name}
        </h3>
        <p className="mt-2 text-lg text-foreground">{site.tagline}</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {site.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {site.tags.map((tag) => (
            <span key={tag} className="skill-badge">
              {tag}
            </span>
          ))}
        </div>

        <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
          {site.highlights.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-3">
          {site.url ? (
            <Button href={site.url} external>
              Visit website <ExternalLink size={15} />
            </Button>
          ) : null}
          <Button href="#contact" variant="outline">
            Build something similar <ArrowUpRight size={15} />
          </Button>
        </div>
      </div>
    </article>
  );
}
