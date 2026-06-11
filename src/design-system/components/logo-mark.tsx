import Image from "next/image";
import { cn } from "../lib/cn";
import { assetPath } from "../lib/asset-path";

type LogoMarkSize = "xs" | "sm" | "md" | "lg";

const sizes: Record<LogoMarkSize, string> = {
  xs: "h-10 w-8",
  sm: "h-14 w-11",
  md: "h-20 w-16",
  lg: "h-28 w-[5.6rem]",
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
        "relative inline-block overflow-hidden bg-transparent",
        sizes[size],
        className,
      )}
    >
      <Image
        src={assetPath("/logo-congo-solidarite.jpeg")}
        alt="Solidarite Congo"
        fill
        className="object-contain"
        priority={priority}
        sizes="112px"
      />
    </span>
  );
}
