"use client";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/** PNG recortado — valgor-logo.png (938×253 após trim) */
const LOGO_VERSION = "10";

/** Proporção largura/altura do wordmark (~3.7:1) */
const LOGO_ASPECT = 938 / 253;

type LogoProps = {
  className?: string;
  iconOnly?: boolean;
  compact?: boolean;
  placement?: "header" | "footer" | "default";
};

function wordmarkSize(placement: "header" | "footer" | "default", compact: boolean) {
  if (compact) return { h: 32, maxW: 150 };
  if (placement === "header") return { h: 36, maxW: 168 };
  if (placement === "footer") return { h: 42, maxW: 200 };
  return { h: 36, maxW: 168 };
}

export function Logo({
  className,
  iconOnly = false,
  compact = false,
  placement = "default",
}: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const file = iconOnly
    ? isDark
      ? "valgor-mark-dark.png"
      : "valgor-mark.png"
    : isDark
      ? "valgor-logo-dark.png"
      : "valgor-logo.png";
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
