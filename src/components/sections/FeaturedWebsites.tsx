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

  // Use vw (not %) — % is relative to the flex track width and skips slides.
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${(websites.length - 1) * 100}vw`],
  );

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative"
      style={{ height: `${websites.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden pt-[72px]">
        <Container className="shrink-0 pb-6 pt-10 lg:pt-14">
          <Reveal>
            <SectionHeading
              eyebrow="Selected Work"
              title={
                <>
                  Website <span className="gradient-text">heroes</span>
                </>
              }
              description="Scroll to move across each site. Click a preview to open the live reference in a new tab."
            />
          </Reveal>
        </Container>

        <div className="relative min-h-0 flex-1">
          <motion.div
            style={{ x }}
            className="flex h-full w-max will-change-transform"
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

        <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex justify-center px-6">
          <div className="h-px w-full max-w-sm overflow-hidden bg-border">
            <motion.div
              style={{ width: progressWidth }}
              className="h-px bg-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WebsiteBlock({
  site,
  index,
}: {
  site: (typeof websites)[number];
  index: number;
}) {
  const href = site.url ?? "#contact";

  return (
    <article className="mx-auto grid w-full max-w-6xl items-center gap-8 border border-border bg-card/90 p-5 backdrop-blur-sm lg:grid-cols-2 lg:gap-12 lg:p-8">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden border border-border outline-none transition hover:border-primary focus-visible:border-primary"
        aria-label={`Open ${site.name} website`}
      >
        <div className="flex items-center gap-2 border-b border-border px-3 py-2">
          <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(websites.length).padStart(2, "0")}
          </span>
          <span className="ml-auto truncate font-[family-name:var(--font-mono)] text-[11px] text-muted-foreground">
            {site.name.toLowerCase().replace(/\s+/g, "")}.product
          </span>
          <ExternalLink
            size={12}
            className="shrink-0 text-muted-foreground transition group-hover:text-primary"
          />
        </div>
        <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
          <Image
            src={site.heroImage}
            alt={`${site.name} website hero`}
            fill
            quality={90}
            priority={index < 2}
            className="object-cover object-center transition duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 560px"
          />
          <div className="pointer-events-none absolute inset-0 flex items-end justify-between bg-gradient-to-t from-background/70 via-transparent to-transparent p-4 opacity-0 transition group-hover:opacity-100">
            <span className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.14em] text-foreground uppercase">
              Open live site
            </span>
            <ArrowUpRight size={16} className="text-primary" />
          </div>
        </div>
      </a>

      <div>
        <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-primary uppercase">
          {site.category}
        </p>
        <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-4xl">
          {site.name}
        </h3>
        <p className="mt-3 text-lg text-foreground">{site.tagline}</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {site.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {site.tags.map((tag) => (
            <span key={tag} className="skill-badge">
              {tag}
            </span>
          ))}
        </div>

        <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
          {site.highlights.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2.5 h-px w-4 shrink-0 bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={href} variant="outline" external>
            Visit site <ExternalLink size={14} />
          </Button>
          <Button href="#contact" variant="outline">
            Discuss a similar build <ArrowUpRight size={15} />
          </Button>
        </div>
      </div>
    </article>
  );
}
