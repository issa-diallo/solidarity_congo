import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: string;
  children: ReactNode;
};

export function SectionHeading({ title, children }: SectionHeadingProps) {
  return (
    <div className="mb-9 grid items-end gap-6 md:grid-cols-[0.55fr_1fr]">
      <h2 className="font-display text-5xl uppercase leading-none text-sc-white shadow-title md:text-7xl">
        {title}
      </h2>
      <p className="max-w-2xl text-2xl font-bold text-sc-white/75">{children}</p>
    </div>
  );
}
