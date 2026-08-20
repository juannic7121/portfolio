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
        "group relative overflow-hidden border border-border bg-card p-4 text-center transition duration-200",
        "hover:border-[color:var(--skill-color)] hover:shadow-[4px_4px_0_0_var(--skill-color)]",
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
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-200 group-hover:opacity-100"
        style={{ background: spotlight }}
      />

      <div className="relative z-[1] flex flex-col items-center">
        <div
          className="mb-3 flex h-12 w-12 items-center justify-center border border-border bg-secondary"
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

        <div className="mt-3 h-1.5 w-full overflow-hidden bg-secondary">
          <div
            className="h-full transition-all duration-700"
            style={{
              width: `${skill.level}%`,
              background: skill.color,
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
