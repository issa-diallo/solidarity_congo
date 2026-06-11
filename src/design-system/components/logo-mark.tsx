import Image from "next/image";
import { cn } from "../lib/cn";

type LogoMarkSize = "xs" | "sm" | "md" | "lg";

const sizes: Record<LogoMarkSize, string> = {
  xs: "size-9",
  sm: "size-14",
  md: "size-20",
  lg: "size-28",
};

export function LogoMark({
  className,
  priority = false,
  size = "md",
}: {
  className?: string;
  priority?: boolean;
  size?: LogoMarkSize;
}) {
  return (
    <span
      className={cn(
        "relative inline-block overflow-hidden rounded-full bg-sc-blue-950 shadow-sm ring-1 ring-sc-blue-800/20",
        sizes[size],
        className,
      )}
    >
      <Image
        src="/logo-congo-solidarite.jpeg"
        alt="Solidarite Congo"
        fill
        className="object-cover"
        priority={priority}
        sizes="112px"
      />
    </span>
  );
}
