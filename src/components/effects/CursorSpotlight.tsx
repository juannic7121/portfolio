"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useId, useState } from "react";

type TrailPoint = { id: number; x: number; y: number };
type Ripple = { id: number; x: number; y: number };

const TRAIL_LENGTH = 10;

/**
 * Cursor with motion trail + click ripple lights.
 */
export function CursorSpotlight() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const trailId = useId();

  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);
  const trailX = useSpring(mouseX, { stiffness: 180, damping: 26, mass: 0.4 });
  const trailY = useSpring(mouseY, { stiffness: 180, damping: 26, mass: 0.4 });
  const softX = useSpring(mouseX, { stiffness: 90, damping: 22, mass: 0.55 });
  const softY = useSpring(mouseY, { stiffness: 90, damping: 22, mass: 0.55 });
  const bracketSize = useSpring(28, { stiffness: 280, damping: 24 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(finePointer && !reduceMotion);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let frame = 0;
    let latest = { x: -400, y: -400 };
    let seq = 0;

    const onMove = (event: MouseEvent) => {
      latest = { x: event.clientX, y: event.clientY };
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setVisible(true);

      const target = event.target as HTMLElement | null;
      const interactive = Boolean(
        target?.closest(
          "a, button, [role='button'], input, textarea, select, label",
        ),
      );
      setHovering(interactive);
      bracketSize.set(interactive ? 44 : 28);
    };

    const onLeave = () => {
      setVisible(false);
      setTrail([]);
    };

    const onClick = (event: MouseEvent) => {
      const id = Date.now() + Math.random();
      setRipples((current) => [
        ...current.slice(-4),
        { id, x: event.clientX, y: event.clientY },
      ]);
      window.setTimeout(() => {
        setRipples((current) => current.filter((r) => r.id !== id));
      }, 900);
    };

    const pumpTrail = () => {
      seq += 1;
      setTrail((prev) => {
        const next = [
          { id: seq, x: latest.x, y: latest.y },
          ...prev,
        ].slice(0, TRAIL_LENGTH);
        return next;
      });
      frame = window.setTimeout(pumpTrail, 28);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onClick);
    document.documentElement.addEventListener("mouseleave", onLeave);
    frame = window.setTimeout(pumpTrail, 28);

    return () => {
      window.clearTimeout(frame);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onClick);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled, mouseX, mouseY, bracketSize]);

  const sizeTemplate = useMotionTemplate`${bracketSize}px`;

  if (!enabled) return null;

  return (
    <>
      {/* Soft trailing glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[59] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-300"
        style={{
          left: softX,
          top: softY,
          opacity: visible ? 0.35 : 0,
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.35), transparent 70%)",
        }}
      />

      {/* Discrete trail dots */}
      {trail.map((point, index) => {
        const t = 1 - index / TRAIL_LENGTH;
        const size = 3 + t * 7;
        return (
          <span
            key={`${trailId}-${point.id}`}
            aria-hidden
            className="pointer-events-none fixed z-[60] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
            style={{
              left: point.x,
              top: point.y,
              width: size,
              height: size,
              opacity: visible ? t * 0.45 : 0,
              transition: "opacity 120ms linear",
            }}
          />
        );
      })}

      {/* Lagging brackets */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[61] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
        style={{
          left: trailX,
          top: trailY,
          width: sizeTemplate,
          height: sizeTemplate,
          opacity: visible ? 1 : 0,
        }}
      >
        <span
          className={`absolute left-0 top-0 h-2.5 w-2.5 border-l border-t ${hovering ? "border-primary" : "border-foreground/55"}`}
        />
        <span
          className={`absolute right-0 top-0 h-2.5 w-2.5 border-r border-t ${hovering ? "border-primary" : "border-foreground/55"}`}
        />
        <span
          className={`absolute bottom-0 left-0 h-2.5 w-2.5 border-b border-l ${hovering ? "border-primary" : "border-foreground/55"}`}
        />
        <span
          className={`absolute bottom-0 right-0 h-2.5 w-2.5 border-b border-r ${hovering ? "border-primary" : "border-foreground/55"}`}
        />
      </motion.div>

      {/* Diamond tip */}
      <motion.div
        aria-hidden
        className={`pointer-events-none fixed z-[62] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 transition-colors duration-150 ${hovering ? "bg-primary" : "bg-foreground"}`}
        style={{
          left: mouseX,
          top: mouseY,
          opacity: visible ? 1 : 0,
        }}
      />

      {/* Click ripples — circle lights from click point */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            aria-hidden
            className="pointer-events-none fixed z-[63] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary"
            style={{ left: ripple.x, top: ripple.y }}
            initial={{ width: 8, height: 8, opacity: 0.9 }}
            animate={{ width: 180, height: 180, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={`glow-${ripple.id}`}
            aria-hidden
            className="pointer-events-none fixed z-[62] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              left: ripple.x,
              top: ripple.y,
              background:
                "radial-gradient(circle, hsl(var(--primary) / 0.55), hsl(var(--accent) / 0.2), transparent 70%)",
            }}
            initial={{ width: 20, height: 20, opacity: 0.85 }}
            animate={{ width: 220, height: 220, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={`core-${ripple.id}`}
            aria-hidden
            className="pointer-events-none fixed z-[64] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
            style={{ left: ripple.x, top: ripple.y }}
            initial={{ width: 6, height: 6, opacity: 1 }}
            animate={{ width: 0, height: 0, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </>
  );
}
