"use client";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/** PNG recortado — valgor-logo.png (1422×283 após trim) */
const LOGO_VERSION = "7";

/** Proporção largura/altura do wordmark (~5:1) */
const LOGO_ASPECT = 1422 / 283;

type LogoProps = {
  className?: string;
  iconOnly?: boolean;
  compact?: boolean;
  placement?: "header" | "footer" | "default";
};

function wordmarkSize(placement: "header" | "footer" | "default", compact: boolean) {
  if (compact) return { h: 28, maxW: 130 };
  if (placement === "header") return { h: 30, maxW: 148 };
  if (placement === "footer") return { h: 36, maxW: 175 };
  return { h: 30, maxW: 148 };
}

export function Logo({
  className,
  iconOnly = false,
  compact = false,
  placement = "default",
}: LogoProps) {
  const file = iconOnly ? "valgor-mark.png" : "valgor-logo.png";
  const src = `/img/${file}?v=${LOGO_VERSION}`;
  const { h, maxW } = wordmarkSize(placement, compact);

  return (
    <span className={cn("inline-flex shrink-0 items-center", className)} aria-label={site.brand}>
      <img
        src={src}
        alt={iconOnly ? "" : site.brand}
        decoding="async"
        width={iconOnly ? 32 : Math.round(h * LOGO_ASPECT)}
        height={iconOnly ? 32 : h}
        className={cn(
          "block object-contain object-left",
          iconOnly ? "h-8 w-8" : "w-auto max-w-none",
        )}
        style={
          iconOnly
            ? undefined
            : {
                height: h,
                maxHeight: h,
                maxWidth: maxW,
                width: "auto",
              }
        }
      />
    </span>
  );
}

export function LogoIcon({ className }: { className?: string }) {
  return <Logo iconOnly className={className} />;
}
