import Image from "next/image";
import { cn } from "../lib/cn";
import { assetPath } from "../lib/asset-path";

type LogoMarkSize = "xs" | "sm" | "md" | "lg";
type LogoLockupSize = "nav" | "hero" | "footer";

const sizes: Record<LogoMarkSize, string> = {
  xs: "h-10 w-8",
  sm: "h-14 w-11",
  md: "h-20 w-16",
  lg: "h-28 w-[5.6rem]",
};

const lockupSizes: Record<LogoLockupSize, string> = {
  nav: "h-14 w-[10.5rem] sm:h-[4.5rem] sm:w-60",
  hero: "h-[clamp(7rem,14vw,12rem)] w-[min(92vw,42rem)]",
  footer: "h-[4.5rem] w-56",
};

const slashSizes: Record<LogoLockupSize, string> = {
  nav: "top-0 h-5 gap-0.5 [&>i]:w-1 [&>i:nth-child(1)]:h-3 [&>i:nth-child(2)]:h-4 [&>i:nth-child(3)]:h-5 [&>i:nth-child(4)]:h-4 [&>i:nth-child(5)]:h-3",
  hero: "top-0 h-12 gap-1.5 [&>i]:w-3 [&>i:nth-child(1)]:h-8 [&>i:nth-child(2)]:h-10 [&>i:nth-child(3)]:h-12 [&>i:nth-child(4)]:h-10 [&>i:nth-child(5)]:h-8",
  footer: "top-0 h-7 gap-1 [&>i]:w-1.5 [&>i:nth-child(1)]:h-4 [&>i:nth-child(2)]:h-6 [&>i:nth-child(3)]:h-7 [&>i:nth-child(4)]:h-6 [&>i:nth-child(5)]:h-4",
};

const wordmarkOffsets: Record<LogoLockupSize, string> = {
  nav: "translate-y-2 sm:translate-y-3",
  hero: "translate-y-5 sm:translate-y-7",
  footer: "translate-y-3",
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

export function LogoLockup({
  className,
  priority = false,
  size = "nav",
}: {
  className?: string;
  priority?: boolean;
  size?: LogoLockupSize;
}) {
  void priority;

  return (
    <span
      aria-label="Solidarite Congo"
      role="img"
      className={cn(
        "relative inline-block overflow-visible bg-transparent",
        lockupSizes[size],
        className,
      )}
    >
      <span
        className={cn(
          "absolute left-1/2 z-10 flex -translate-x-1/2 items-center justify-center",
          slashSizes[size],
        )}
        aria-hidden
      >
        <i className="skew-x-[-18deg] rounded-sm bg-sc-cyan-500 shadow-[0_1px_0_rgba(0,0,0,.5)]" />
        <i className="skew-x-[-18deg] rounded-sm bg-sc-yellow-500 shadow-[0_1px_0_rgba(0,0,0,.5)]" />
        <i className="skew-x-[-18deg] rounded-sm bg-sc-red-600 shadow-[0_1px_0_rgba(0,0,0,.5)]" />
        <i className="skew-x-[-18deg] rounded-sm bg-sc-orange-500 shadow-[0_1px_0_rgba(0,0,0,.5)]" />
        <i className="skew-x-[-18deg] rounded-sm bg-sc-cyan-500 shadow-[0_1px_0_rgba(0,0,0,.5)]" />
      </span>
      <span
        className={cn("absolute inset-0 bg-sc-yellow-500 drop-shadow-[0_10px_0_rgba(7,20,44,.62)]", wordmarkOffsets[size])}
        aria-hidden
        style={{
          maskImage: `url('${assetPath("/logo-congo-solidarite-transparent.png")}')`,
          maskPosition: "center",
          maskRepeat: "no-repeat",
          maskSize: "contain",
          WebkitMaskImage: `url('${assetPath("/logo-congo-solidarite-transparent.png")}')`,
          WebkitMaskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
        }}
      />
    </span>
  );
}
