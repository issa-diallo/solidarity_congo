import Image from "next/image";
import { cn } from "../lib/cn";
import { assetPath } from "../lib/asset-path";

export function SlashMark({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-24 w-24", className)} aria-hidden>
      <Image
        src={assetPath("/griffe.png")}
        alt=""
        fill
        className="object-contain drop-shadow-[0_2px_0_rgba(7,20,44,.55)]"
        sizes="96px"
      />
    </div>
  );
}
