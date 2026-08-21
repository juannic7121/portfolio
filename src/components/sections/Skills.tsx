"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { SkillCard } from "@/components/skills/SkillCard";
import { SkillsSphere } from "@/components/skills/SkillsSphere";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories, skills } from "@/data/skills";
import type { SkillCategory } from "@/types";
import { cn } from "@/lib/utils";

const INITIAL = 24;

export function Skills() {
  const [category, setCategory] = useState<SkillCategory | "All">("All");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return skills.filter((skill) => {
      const matchesCategory = category === "All" || skill.category === category;
      const matchesQuery =
        !q ||
        skill.name.toLowerCase().includes(q) ||
        skill.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const visible = expanded ? filtered : filtered.slice(0, INITIAL);
  const remaining = Math.max(filtered.length - INITIAL, 0);

  return (
    <section id="skills" className="py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title={
              <>
                Tech <span className="gradient-text">Arsenal</span>
              </>
            }
            description={`${skills.length}+ skills across ${skillCategories.length - 1} categories. Filter and explore.`}
          />
        </Reveal>

        <Reveal delay={0.06}>
          <label className="relative mt-10 block">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setExpanded(false);
              }}
              placeholder="Search skills..."
              className="w-full rounded-[var(--radius)] border border-border/60 bg-card py-3.5 pl-11 pr-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary/50 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.12)]"
            />
          </label>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
            {skillCategories.map((item) => {
              const active = category === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setCategory(item);
                    setExpanded(false);
                  }}
                  className={cn(
                    "shrink-0 rounded-[var(--radius)] px-4 py-2 text-sm font-medium transition",
                    active
                      ? "border border-primary bg-primary text-primary-foreground"
                      : "border border-border/60 bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
                  )}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {visible.map((skill, index) => (
            <Reveal
              key={`${skill.name}-${category}-${query}`}
              delay={Math.min(index * 0.02, 0.18)}
            >
              <SkillCard skill={skill} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-10 text-center text-sm text-muted-foreground">
            No skills match your search.
          </p>
        ) : null}

        {!expanded && remaining > 0 ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="btn-outline"
            >
              Load More Skills ({remaining} remaining)
            </button>
          </div>
        ) : null}

        <Reveal delay={0.08}>
          <SkillsSphere />
        </Reveal>
      </Container>
    </section>
  );
}
