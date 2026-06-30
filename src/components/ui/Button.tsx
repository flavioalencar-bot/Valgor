import { cn } from "@/lib/utils";
import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";

const variants: Record<Variant, string> = {
  primary:
    "bg-valgor-500 text-white hover:bg-valgor-600 shadow-sm",
  secondary:
    "border border-border bg-surface-card text-foreground hover:bg-muted-bg shadow-sm dark:bg-surface-card dark:hover:bg-muted-bg",
  ghost: "text-muted hover:text-foreground hover:bg-muted-bg",
  whatsapp:
    "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm",
};

type Props = {
  variant?: Variant;
  href?: string;
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  type = "button",
  href,
  children,
  className,
  ...props
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
