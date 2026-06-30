"use client";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className }: LogoProps) {
  return (
    <span
      className={cn(
        "font-heading text-xl font-bold tracking-[0.2em] text-foreground sm:text-[1.35rem]",
        className,
      )}
      aria-label={site.brand}
    >
      VALGOR
    </span>
  );
}

export function LogoIcon({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-lg bg-fox-500 text-xs font-bold text-white",
        className,
      )}
      aria-hidden
    >
      V
    </span>
  );
}
