import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Snappy, industrial easing — replaces soft studio ease */
export const easeOut = [0.16, 1, 0.3, 1] as const;
