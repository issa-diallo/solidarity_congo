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
  nav: "-top-4 h-8 w-8 sm:-top-5 sm:h-10 sm:w-10",
  hero: "-top-16 h-24 w-24 sm:-top-20 sm:h-28 sm:w-28",
  footer: "-top-8 h-12 w-12",
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
          "absolute left-1/2 z-10 -translate-x-1/2",
          slashSizes[size],
        )}
        aria-hidden
      >
        <Image
          src={assetPath("/griffe.png")}
          alt=""
          fill
          className="object-contain drop-shadow-[0_2px_0_rgba(7,20,44,.55)]"
          priority={priority}
          sizes={size === "hero" ? "128px" : size === "footer" ? "48px" : "40px"}
        />
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
