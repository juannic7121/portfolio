"use client";

import { motion } from "framer-motion";
import { skillIconMap } from "@/components/skills/skillIcons";
import { skillCategories, skills } from "@/data/skills";
import type { Skill, SkillCategory } from "@/types";
import { cn, easeOut } from "@/lib/utils";

/**
 * Full-width skills wall — every skill visible, large tiles, by category.
 * Replaces the old circle / hex constellation.
 */
export function SkillsSphere() {
  const groups = skillCategories
    .filter((c): c is SkillCategory => c !== "All")
    .map((category) => ({
      category,
      items: skills.filter((s) => s.category === category),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="mt-20 space-y-10">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
            Complete stack
          </p>
          <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
            All {skills.length} skills, by discipline
          </h3>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground">
          Large tiles so every capability is readable at a glance — no hidden
          orbit, no tiny cluster.
        </p>
      </div>

      <div className="space-y-8">
        {groups.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              delay: Math.min(groupIndex * 0.05, 0.25),
              duration: 0.5,
              ease: easeOut,
            }}
          >
            <div className="mb-4 flex items-center gap-3">
              <p className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.2em] text-primary uppercase">
                {group.category}
              </p>
              <span className="h-px flex-1 bg-border" />
              <span className="font-[family-name:var(--font-mono)] text-[10px] text-muted-foreground">
                {group.items.length}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {group.items.map((skill) => (
                <SkillTile key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SkillTile({ skill }: { skill: Skill }) {
  const Icon = skillIconMap[skill.icon];
  const iconColor =
    skill.color === "#000000" || skill.color === "#092E20" || skill.color === "#FFFFFF"
      ? undefined
      : skill.color;

  return (
    <div
      className={cn(
        "group flex min-h-[132px] flex-col items-center justify-center gap-3 border border-border bg-card px-3 py-5 text-center transition duration-300",
        "hover:border-primary/60 hover:bg-secondary/40",
      )}
    >
      <span
        className="flex h-14 w-14 items-center justify-center border border-border bg-secondary/50 transition group-hover:scale-105"
        style={{ color: iconColor ?? "hsl(var(--foreground))" }}
      >
        {Icon ? (
          <Icon size={30} style={{ shapeRendering: "geometricPrecision" }} />
        ) : (
          <span className="text-sm font-bold">{skill.name.slice(0, 2)}</span>
        )}
      </span>
      <div>
        <p className="text-sm font-semibold leading-snug text-foreground">
          {skill.name}
        </p>
        <p className="mt-1 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.12em] text-muted-foreground uppercase">
          {skill.level}%
        </p>
      </div>
    </div>
  );
}
