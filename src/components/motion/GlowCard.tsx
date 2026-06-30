"use client";

import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/** Card com borda em gradiente animado no hover */
export function GlowCard({ children, className }: Props) {
  return (
    <div className={cn("group relative rounded-2xl p-[1px]", className)}>
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fox-500/0 via-fox-500/0 to-fox-500/0 opacity-0 blur-sm transition duration-500 group-hover:from-fox-500/30 group-hover:via-fox-500/20 group-hover:to-fox-500/30 group-hover:opacity-100"
        aria-hidden
      />
      <div className="relative h-full rounded-[15px]">{children}</div>
    </div>
  );
}
