import { cn } from "../lib/cn";

type SwatchProps = {
  name: string;
  hex: string;
  token: string;
  className?: string;
  darkText?: boolean;
};

export function Swatch({ name, hex, token, className, darkText }: SwatchProps) {
  return (
    <div
      className={cn(
        "flex min-h-40 flex-col justify-end rounded-sc-md border border-sc-white/15 p-4 shadow-[0_8px_0_rgba(0,0,0,.2)]",
        darkText ? "text-sc-blue-950" : "text-sc-white",
        className,
      )}
      style={{ backgroundColor: hex }}
    >
      <b className="font-heading text-sm uppercase">{name}</b>
      <code className="mt-1 font-mono text-xs opacity-75">{hex}</code>
      <code className="font-mono text-xs opacity-75">bg-{token}</code>
    </div>
  );
}
