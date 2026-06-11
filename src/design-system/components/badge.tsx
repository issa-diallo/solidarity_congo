import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";

type BadgeTone = "light" | "yellow" | "cyan" | "red";

const tones: Record<BadgeTone, string> = {
  light: "bg-sc-white text-sc-blue-950",
  yellow: "bg-sc-yellow-500 text-sc-blue-950",
  cyan: "bg-sc-cyan-500 text-sc-blue-950",
  red: "bg-sc-red-600 text-sc-white",
};

export function Badge({
  children,
  className,
  tone = "light",
  ...props
}: HTMLAttributes<HTMLSpanElement> & { children: ReactNode; tone?: BadgeTone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 font-heading text-xs uppercase leading-none",
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
