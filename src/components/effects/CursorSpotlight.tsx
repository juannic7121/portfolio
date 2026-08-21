"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Soft blue spotlight + trailing cursor ring that follows the pointer.
 * Disabled on coarse pointers (touch) and reduced-motion preferences.
 */
export function CursorSpotlight() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);
  const springX = useSpring(mouseX, { stiffness: 280, damping: 32, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 280, damping: 32, mass: 0.4 });

  const ringX = useSpring(mouseX, { stiffness: 420, damping: 28, mass: 0.25 });
  const ringY = useSpring(mouseY, { stiffness: 420, damping: 28, mass: 0.25 });

  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      380px circle at ${springX}px ${springY}px,
      hsl(var(--primary) / 0.1),
      hsl(var(--accent) / 0.04) 40%,
      transparent 68%
    )
  `;

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(finePointer && !reduceMotion);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setVisible(true);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[60] transition-opacity duration-300"
        style={{
          background: spotlightBackground,
          opacity: visible ? 1 : 0,
        }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[61] h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/45 bg-primary/8 shadow-[0_0_18px_hsl(var(--primary)/0.25)] transition-opacity duration-200"
        style={{
          left: ringX,
          top: ringY,
          opacity: visible ? 1 : 0,
        }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[62] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_10px_hsl(var(--accent)/0.8)] transition-opacity duration-150"
        style={{
          left: mouseX,
          top: mouseY,
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
}
