"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  className?: string;
  speed?: number;
  reverse?: boolean;
};

export function Marquee({
  items,
  className,
  speed = 40,
  reverse = false,
}: MarqueeProps) {
  const loop = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-border/80 bg-background/80 py-3 backdrop-blur-sm",
        className,
      )}
    >
      <motion.div
        className="flex w-max gap-12 whitespace-nowrap"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-4 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.22em] text-muted-foreground uppercase"
          >
            <span className="text-primary" aria-hidden>
              —
            </span>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
