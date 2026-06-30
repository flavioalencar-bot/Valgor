import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
  compact = false,
  /** Remove padding superior/inferior quando seções adjacentes compartilham o mesmo fundo */
  bleed,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  compact?: boolean;
  bleed?: "top" | "bottom" | "y";
}) {
  return (
    <section
      id={id}
      className={cn(
        compact ? "py-12 sm:py-16" : "py-20 sm:py-28",
        bleed === "top" && "!pt-0",
        bleed === "bottom" && "!pb-0",
        bleed === "y" && "!py-0",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        compact ? "mb-8" : "mb-14",
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 inline-flex rounded-full bg-accent-soft px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-valgor-600 dark:text-valgor-400",
            align === "center" && "mx-auto",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
      )}
    </div>
  );
}
