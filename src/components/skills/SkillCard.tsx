"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import type { MouseEvent } from "react";
import { skillIconMap } from "@/components/skills/skillIcons";
import type { Skill } from "@/types";
import { cn } from "@/lib/utils";

type SkillCardProps = {
  skill: Skill;
  className?: string;
};

export function SkillCard({ skill, className }: SkillCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const Icon = skillIconMap[skill.icon];

  const spotlight = useMotionTemplate`
    radial-gradient(
      180px circle at ${mouseX}px ${mouseY}px,
      ${skill.color}33,
      transparent 55%
    )
  `;

  function onMove(event: MouseEvent<HTMLDivElement>) {
    const { left, top } = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  }

  return (
    <div
      onMouseMove={onMove}
      className={cn(
        "group relative overflow-hidden rounded-[var(--radius)] border border-border/60 bg-card p-4 text-center transition duration-300",
        "hover:border-[color:var(--skill-color)]/50 hover:shadow-[0_16px_36px_-24px_var(--skill-color)]",
        className,
      )}
      style={
        {
          "--skill-color": skill.color,
        } as React.CSSProperties
      }
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ background: spotlight }}
      />

      <div className="relative z-[1] flex flex-col items-center">
        <div
          className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-secondary/70"
          style={{
            color:
              skill.color === "#000000" || skill.color === "#092E20"
                ? "#e5e7eb"
                : skill.color,
          }}
        >
          {Icon ? (
            <Icon size={26} className="drop-shadow-none" style={{ shapeRendering: "geometricPrecision" }} />
          ) : (
            <span className="text-sm font-bold">{skill.name.slice(0, 2)}</span>
          )}
        </div>

        <p className="text-sm font-semibold tracking-tight text-foreground">
          {skill.name}
        </p>

        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${skill.level}%`,
              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`,
              boxShadow: `0 0 10px ${skill.color}66`,
            }}
          />
        </div>

        <p
          className="mt-2 font-[family-name:var(--font-mono)] text-xs font-medium"
          style={{
            color:
              skill.color === "#000000" || skill.color === "#092E20"
                ? "#a3a3a3"
                : skill.color,
          }}
        >
          {skill.level}%
        </p>
      </div>
    </div>
  );
}
