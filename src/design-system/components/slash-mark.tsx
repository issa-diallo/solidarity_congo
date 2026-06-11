import { cn } from "../lib/cn";

export function SlashMark({ className }: { className?: string }) {
  return (
    <div className={cn("flex h-24 items-center justify-center gap-1.5", className)} aria-hidden>
      <i className="h-14 w-3 skew-x-[-18deg] rounded-sm bg-sc-cyan-500 shadow-[0_0_0_2px_#07142c]" />
      <i className="h-[74px] w-3 skew-x-[-18deg] rounded-sm bg-sc-yellow-500 shadow-[0_0_0_2px_#07142c]" />
      <i className="h-20 w-3 skew-x-[-18deg] rounded-sm bg-sc-red-600 shadow-[0_0_0_2px_#07142c]" />
      <i className="h-[74px] w-3 skew-x-[-18deg] rounded-sm bg-sc-orange-500 shadow-[0_0_0_2px_#07142c]" />
      <i className="h-14 w-3 skew-x-[-18deg] rounded-sm bg-sc-cyan-500 shadow-[0_0_0_2px_#07142c]" />
    </div>
  );
}
