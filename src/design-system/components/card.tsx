import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";

export function Card({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLElement> & { children: ReactNode }) {
  return (
    <article
      className={cn(
        "rounded-sc-md border border-sc-white/15 bg-sc-blue-900/70 p-6 shadow-sc-soft",
        className,
      )}
      {...props}
    >
      {children}
    </article>
  );
}
