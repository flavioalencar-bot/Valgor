"use client";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/** PNG recortado — valgor-logo.png (1422×283 após trim) */
const LOGO_VERSION = "6";

type LogoProps = {
  className?: string;
  iconOnly?: boolean;
  compact?: boolean;
  placement?: "header" | "footer" | "default";
};

export function Logo({
  className,
  iconOnly = false,
  compact = false,
  placement = "default",
}: LogoProps) {
  const file = iconOnly ? "valgor-mark.png" : "valgor-logo.png";
  const src = `/img/${file}?v=${LOGO_VERSION}`;

  const heightClass = {
    header: "h-12 w-auto sm:h-[3.35rem]",
    footer: "h-16 w-auto sm:h-[4.5rem]",
    default: "h-12 w-auto sm:h-[3.35rem]",
  } as const;

  return (
    <span className={cn("inline-flex shrink-0 items-center", className)} aria-label={site.brand}>
      {/* img nativo — evita cache do otimizador Next.js e garante o PNG exato */}
      <img
        src={src}
        alt={iconOnly ? "" : site.brand}
        decoding="async"
        className={cn(
          "block max-w-none object-contain object-left",
          iconOnly ? "h-9 w-9 sm:h-10 sm:w-10" : compact ? "h-10 w-auto" : heightClass[placement],
        )}
      />
    </span>
  );
}

export function LogoIcon({ className }: { className?: string }) {
  return <Logo iconOnly className={className} />;
}
