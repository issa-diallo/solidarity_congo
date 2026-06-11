import { clsx } from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type TypographyComponent = "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";

export type TypographyTheme = "black" | "gray" | "white" | "primary" | "secondary";

export type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "lead"
  | "body-lg"
  | "body-base"
  | "body-sm"
  | "caption1"
  | "caption2"
  | "caption3"
  | "caption4";

export type TypographyWeight = "regular" | "medium" | "bold";

type TypographyProps<T extends TypographyComponent> = {
  children: ReactNode;
  className?: string;
  component?: T;
  theme?: TypographyTheme;
  variant?: TypographyVariant;
  weight?: TypographyWeight;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const defaultComponents: Record<TypographyVariant, TypographyComponent> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  lead: "p",
  "body-lg": "p",
  "body-base": "p",
  "body-sm": "p",
  caption1: "span",
  caption2: "span",
  caption3: "span",
  caption4: "span",
};

const defaultVariantsByComponent: Record<TypographyComponent, TypographyVariant> = {
  div: "body-base",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  p: "body-base",
  span: "caption3",
};

function getVariantStyles(variant: TypographyVariant) {
  switch (variant) {
    case "display":
      return "font-display text-[2rem] leading-[2.5rem] tracking-tight sm:text-5xl sm:leading-[3.5rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[5rem] lg:leading-[4.5rem]";
    case "h1":
      return "font-display text-[1.75rem] leading-8 tracking-tight sm:text-[2.5rem] sm:leading-[3rem] md:text-5xl md:leading-[3.5rem] lg:text-[3.5rem] lg:leading-[3.5rem]";
    case "h2":
      return "font-display text-2xl leading-8 tracking-tight sm:text-[2rem] sm:leading-10 md:text-[2.5rem] md:leading-[3rem] lg:text-5xl lg:leading-[3rem]";
    case "h3":
      return "font-display text-xl leading-6 tracking-tight sm:text-2xl sm:leading-8 md:text-[2rem] md:leading-9 lg:text-4xl lg:leading-9";
    case "h4":
      return "font-display text-base leading-5 sm:text-xl sm:leading-6 md:text-2xl md:leading-7";
    case "h5":
      return "font-display text-sm leading-4 sm:text-base sm:leading-5 md:text-lg md:leading-6";
    case "lead":
      return "font-body text-base leading-6 md:text-xl md:leading-8";
    case "body-lg":
      return "font-body text-sm leading-4 sm:text-base sm:leading-5 md:text-lg md:leading-6 lg:text-xl lg:leading-8";
    case "body-sm":
      return "font-body text-[0.625rem] leading-[0.875rem] sm:text-xs sm:leading-4 md:text-sm md:leading-5 lg:leading-6";
    case "caption1":
      return "font-body text-sm leading-4 sm:text-base sm:leading-5 md:text-lg md:leading-6 lg:text-xl lg:leading-8";
    case "caption2":
      return "font-body text-[0.8125rem] leading-[0.9375rem] sm:text-[0.9375rem] sm:leading-[1.125rem] md:text-[1.0625rem] md:leading-[1.375rem] lg:text-base lg:leading-6";
    case "caption3":
      return "font-body text-xs leading-[0.875rem] sm:text-sm sm:leading-4 md:text-base md:leading-5 lg:text-sm lg:leading-4";
    case "caption4":
      return "font-body text-[0.6875rem] leading-[0.8125rem] sm:text-[0.8125rem] sm:leading-[0.9375rem] md:text-[0.9375rem] md:leading-[1.125rem] lg:text-[0.8125rem]";
    case "body-base":
    default:
      return "font-body text-xs leading-4 sm:text-sm sm:leading-5 md:text-base md:leading-6";
  }
}

function getThemeStyles(theme: TypographyTheme) {
  switch (theme) {
    case "gray":
      return "text-slate-500";
    case "white":
      return "text-white";
    case "primary":
      return "text-sc-blue-800";
    case "secondary":
      return "text-sc-yellow-500";
    case "black":
    default:
      return "text-slate-950";
  }
}

function getWeightStyles(weight: TypographyWeight) {
  switch (weight) {
    case "medium":
      return "font-medium";
    case "bold":
      return "font-bold";
    case "regular":
    default:
      return "font-normal";
  }
}

export function Typography<T extends TypographyComponent = "p">({
  children,
  className,
  component,
  theme = "black",
  variant,
  weight = "regular",
  ...props
}: TypographyProps<T>) {
  const resolvedVariant = variant ?? (component ? defaultVariantsByComponent[component] : "body-base");
  const Component = component ?? defaultComponents[resolvedVariant];

  return (
    <Component
      className={clsx(
        getVariantStyles(resolvedVariant),
        getThemeStyles(theme),
        getWeightStyles(weight),
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
