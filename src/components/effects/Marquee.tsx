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
  speed = 38,
  reverse = false,
}: MarqueeProps) {
  const loop = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-border/40 bg-card/40 py-4 backdrop-blur-sm",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

      <motion.div
        className="flex w-max gap-8 whitespace-nowrap"
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
            className="inline-flex items-center gap-3 text-sm font-medium tracking-wide text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
