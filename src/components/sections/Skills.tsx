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

export function Skills() {
  const [category, setCategory] = useState<SkillCategory | "All">("All");
  const [query, setQuery] = useState("");

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

  return (
    <section id="skills" className="py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title={
              <>
                Tech <span className="gradient-text">stack</span>
              </>
            }
            description={`${skills.length} skills across ${skillCategories.length - 1} disciplines — filter above, or browse the full wall below.`}
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
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter skills..."
              className="w-full border border-border bg-card py-3.5 pl-11 pr-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary"
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
                  onClick={() => setCategory(item)}
                  className={cn(
                    "shrink-0 border px-4 py-2 font-[family-name:var(--font-mono)] text-xs font-medium tracking-[0.1em] uppercase transition",
                    active
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-card text-muted-foreground hover:border-foreground hover:text-foreground",
                  )}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </Reveal>

        {(query || category !== "All") && (
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {filtered.map((skill, index) => (
              <Reveal
                key={`${skill.name}-${category}-${query}`}
                delay={Math.min(index * 0.015, 0.15)}
              >
                <SkillCard skill={skill} />
              </Reveal>
            ))}
          </div>
        )}

        {filtered.length === 0 ? (
          <p className="mt-10 text-center text-sm text-muted-foreground">
            No skills match your search.
          </p>
        ) : null}

        {!query && category === "All" ? (
          <Reveal delay={0.08}>
            <SkillsSphere />
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
