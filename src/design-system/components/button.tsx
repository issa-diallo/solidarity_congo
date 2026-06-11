import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";

type ButtonVariant = "primary" | "accent" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg" | "icon-sm" | "icon-md" | "icon-lg";

type BaseProps = {
  children: ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkButtonProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-sc-blue-800 text-sc-white shadow-[0_4px_0_#001743] hover:-translate-y-0.5 hover:bg-sc-blue-700 hover:shadow-[0_6px_0_#001743]",
  accent:
    "bg-sc-yellow-500 text-sc-blue-950 shadow-[0_4px_0_#8f9430] hover:-translate-y-0.5 hover:shadow-[0_6px_0_#8f9430]",
  secondary:
    "bg-sc-blue-800/10 text-sc-blue-800 hover:bg-sc-blue-800/15",
  outline:
    "border border-slate-300 bg-white text-slate-900 hover:border-sc-blue-800 hover:text-sc-blue-800",
  ghost:
    "bg-transparent text-sc-blue-800 hover:bg-sc-blue-800/10",
  danger:
    "bg-sc-red-600 text-sc-white shadow-[0_6px_0_#701018] hover:-translate-y-0.5 hover:shadow-[0_8px_0_#701018]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-9 px-4 py-2 text-xs",
  md: "min-h-11 px-5 py-3 text-sm",
  lg: "min-h-13 px-6 py-4 text-base",
  "icon-sm": "size-9 p-0 text-xs",
  "icon-md": "size-11 p-0 text-sm",
  "icon-lg": "size-13 p-0 text-base",
};

function isLinkButtonProps(props: ButtonProps | LinkButtonProps): props is LinkButtonProps {
  return typeof (props as LinkButtonProps).href === "string";
}

function getLinkProps(props: LinkButtonProps) {
  const rest: Partial<LinkButtonProps> = { ...props };
  delete rest.children;
  delete rest.className;
  delete rest.size;
  delete rest.variant;

  return rest as Omit<LinkButtonProps, keyof BaseProps>;
}

function getButtonProps(props: ButtonProps) {
  const rest: Partial<ButtonProps> = { ...props };
  delete rest.children;
  delete rest.className;
  delete rest.size;
  delete rest.variant;

  return rest as Omit<ButtonProps, keyof BaseProps>;
}

export function Button(props: ButtonProps | LinkButtonProps) {
  const { children, className, size = "md", variant = "primary" } = props;
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-sc-md font-heading uppercase leading-none transition duration-200 disabled:pointer-events-none disabled:opacity-45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sc-blue-500",
    variants[variant],
    sizes[size],
    className,
  );

  if (isLinkButtonProps(props)) {
    return (
      <Link className={classes} {...getLinkProps(props)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...getButtonProps(props)}>
      {children}
    </button>
  );
}
