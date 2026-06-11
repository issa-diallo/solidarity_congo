import { cn } from "../lib/cn";

type SpinnerSize = "sm" | "md" | "lg";

const sizes: Record<SpinnerSize, string> = {
  sm: "size-5 border-2",
  md: "size-8 border-[3px]",
  lg: "size-12 border-4",
};

export function Spinner({ className, size = "md" }: { className?: string; size?: SpinnerSize }) {
  return (
    <span
      className={cn(
        "inline-block animate-spin rounded-full border-sc-blue-800/20 border-t-sc-blue-800",
        sizes[size],
        className,
      )}
      aria-label="Chargement"
      role="status"
    />
  );
}
