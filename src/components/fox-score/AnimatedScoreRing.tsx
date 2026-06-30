"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type Props = {
  score: number;
  duration?: number;
  className?: string;
};

function useAnimatedNumber(target: number, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return value;
}

export function AnimatedScoreRing({ score, duration = 1200, className }: Props) {
  const animated = useAnimatedNumber(score, duration);
  const pct = animated / 100;
  const r = 78;
  const c = 2 * Math.PI * r;

  return (
    <div className={cn("relative mx-auto h-60 w-60 sm:h-64 sm:w-64", className)}>
      <svg className="h-full w-full -rotate-90" viewBox="0 0 180 180" aria-hidden>
        <circle cx="90" cy="90" r={r} fill="none" stroke="currentColor" strokeOpacity={0.08} strokeWidth="14" />
        <circle
          cx="90"
          cy="90"
          r={r}
          fill="none"
          stroke="currentColor"
          className="text-fox-500 transition-[stroke-dashoffset] duration-300"
          strokeWidth="14"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct)}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-[family-name:var(--font-poppins)] text-7xl font-bold tracking-tight sm:text-8xl">
          {animated}
        </span>
        <span className="mt-1 text-sm font-medium text-muted">/ 100</span>
      </div>
    </div>
  );
}
