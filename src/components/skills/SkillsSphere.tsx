"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { skillIconMap } from "@/components/skills/skillIcons";
import { skills } from "@/data/skills";
import { cn } from "@/lib/utils";

type Point3D = { x: number; y: number; z: number };

function fibonacciSphere(count: number, radius: number): Point3D[] {
  const points: Point3D[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i += 1) {
    const y = 1 - (i / Math.max(count - 1, 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    points.push({
      x: Math.cos(theta) * r * radius,
      y: y * radius,
      z: Math.sin(theta) * r * radius,
    });
  }

  return points;
}

function rotateY(point: Point3D, angle: number): Point3D {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: point.x * cos + point.z * sin,
    y: point.y,
    z: -point.x * sin + point.z * cos,
  };
}

function rotateX(point: Point3D, angle: number): Point3D {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: point.x,
    y: point.y * cos - point.z * sin,
    z: point.y * sin + point.z * cos,
  };
}

function roundStyle(n: number, digits = 3) {
  const f = 10 ** digits;
  return Math.round(n * f) / f;
}

const SPHERE_SKILLS = skills.slice(0, 28);

export function SkillsSphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });
  const rotation = useRef({ x: 0.25, y: 0 });
  const velocity = useRef({ x: 0, y: 0.004 });
  const frame = useRef(0);
  const [tick, setTick] = useState(0);
  const [hovered, setHovered] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [size, setSize] = useState(720);
  const [mounted, setMounted] = useState(false);

  const radius = size * 0.36;

  const basePoints = useMemo(
    () => fibonacciSphere(SPHERE_SKILLS.length, radius),
    [radius],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const node = containerRef.current;
    if (!node) return;

    const update = () => {
      const rect = node.getBoundingClientRect();
      setSize(Math.max(280, Math.min(rect.width, rect.height)));
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    const loop = () => {
      if (!dragging.current && !reduceMotion) {
        rotation.current.y += velocity.current.y;
        rotation.current.x += velocity.current.x;
        velocity.current.y *= 0.98;
        velocity.current.x *= 0.98;
        if (Math.abs(velocity.current.y) < 0.0015) velocity.current.y = 0.004;
        if (Math.abs(velocity.current.x) < 0.0002) velocity.current.x = 0;
      }
      setTick((t) => t + 1);
      frame.current = requestAnimationFrame(loop);
    };

    frame.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame.current);
  }, [mounted, reduceMotion]);

  const onPointerDown = useCallback((event: ReactPointerEvent) => {
    dragging.current = true;
    setIsDragging(true);
    last.current = { x: event.clientX, y: event.clientY };
    velocity.current = { x: 0, y: 0 };
    event.currentTarget.setPointerCapture(event.pointerId);
  }, []);

  const onPointerMove = useCallback((event: ReactPointerEvent) => {
    if (!dragging.current) return;
    const dx = event.clientX - last.current.x;
    const dy = event.clientY - last.current.y;
    last.current = { x: event.clientX, y: event.clientY };
    rotation.current.y += dx * 0.005;
    rotation.current.x -= dy * 0.005;
    velocity.current = { x: -dy * 0.00025, y: dx * 0.00025 };
  }, []);

  const onPointerUp = useCallback((event: ReactPointerEvent) => {
    dragging.current = false;
    setIsDragging(false);
    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      /* ignore */
    }
  }, []);

  void tick;

  const iconBox = size < 420 ? 44 : size < 640 ? 52 : 58;
  const iconGlyph = Math.round(iconBox * 0.44);

  if (!mounted) {
    return (
      <div className="mt-20 select-none">
        <p className="mb-4 text-center text-sm text-muted-foreground sm:mb-6 sm:text-base">
          Drag to explore skills
        </p>
        <div className="relative mx-auto aspect-square w-full max-w-[min(72vw,780px)] rounded-full border border-border/20 bg-card/30" />
      </div>
    );
  }

  return (
    <div className="mt-20 select-none">
      <p className="mb-4 text-center text-sm text-muted-foreground sm:mb-6 sm:text-base">
        {isDragging ? "Release to spin" : "Drag to explore skills"}
      </p>

      <div
        ref={containerRef}
        className={cn(
          "relative mx-auto aspect-square w-full max-w-[min(72vw,780px)] touch-none",
          isDragging ? "cursor-grabbing" : "cursor-grab",
        )}
        style={{ perspective: `${Math.round(size * 1.35)}px` }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/30"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.14),transparent_70%)] blur-2xl"
        />

        <div
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d" }}
        >
          {SPHERE_SKILLS.map((skill, index) => {
            const rotated = rotateX(
              rotateY(basePoints[index], rotation.current.y),
              rotation.current.x,
            );
            const depth = (rotated.z + radius) / (radius * 2 || 1);
            const scale = 0.55 + depth * 0.7;
            const opacity = 0.35 + depth * 0.65;
            const Icon = skillIconMap[skill.icon];
            const active = hovered === skill.name;
            const x = roundStyle(rotated.x);
            const y = roundStyle(rotated.y);
            const z = roundStyle(rotated.z);

            return (
              <button
                key={skill.name}
                type="button"
                aria-label={skill.name}
                className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-border/50 bg-card/85 shadow-lg backdrop-blur-md transition-shadow"
                style={{
                  width: `${iconBox}px`,
                  height: `${iconBox}px`,
                  transform: `translate3d(${x}px, ${y}px, ${z}px) scale(${roundStyle(scale, 4)})`,
                  opacity: roundStyle(opacity, 4),
                  zIndex: Math.round(rotated.z + radius + 40),
                  color:
                    skill.color === "#000000" || skill.color === "#092E20"
                      ? "#e5e7eb"
                      : skill.color,
                  boxShadow: active
                    ? `0 0 28px ${skill.color}88, 0 0 0 1px ${skill.color}66`
                    : `0 8px 24px -12px ${skill.color}66`,
                  borderColor: active ? `${skill.color}99` : undefined,
                }}
                onPointerEnter={() => setHovered(skill.name)}
                onPointerLeave={() =>
                  setHovered((current) =>
                    current === skill.name ? null : current,
                  )
                }
              >
                {Icon ? (
                  <Icon
                    size={iconGlyph}
                    style={{ shapeRendering: "geometricPrecision" }}
                  />
                ) : (
                  skill.name.slice(0, 2)
                )}
              </button>
            );
          })}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center sm:bottom-6">
          <span
            className={cn(
              "rounded-full border border-border/50 bg-card/90 px-5 py-2 text-sm font-semibold text-foreground shadow-lg backdrop-blur-xl transition",
              hovered ? "opacity-100" : "opacity-0",
            )}
          >
            {hovered ?? "Skill"}
          </span>
        </div>
      </div>
    </div>
  );
}
