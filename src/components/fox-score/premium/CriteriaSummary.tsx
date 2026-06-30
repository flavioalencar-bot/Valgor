"use client";

import { FOX_SCORE_CRITERIA_COUNT, FOX_SCORE_CRITERIA_ITEMS } from "@/lib/fox-score/config";
import { Check, Info } from "lucide-react";
import { useState } from "react";

export function CriteriaSummary() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="border-b border-border-subtle bg-surface-elevated/80 px-4 py-4 sm:px-6">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-valgor-600 dark:text-valgor-400">
        {FOX_SCORE_CRITERIA_COUNT} critérios analisados
      </p>
      <ul className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
        {FOX_SCORE_CRITERIA_ITEMS.map(({ label, tooltip }) => (
          <li key={label} className="relative">
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-full bg-surface px-2.5 py-1 text-xs font-medium text-muted ring-1 ring-border transition hover:text-foreground"
              onMouseEnter={() => setActive(label)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(label)}
              onBlur={() => setActive(null)}
            >
              <Check className="h-3 w-3 text-emerald-500" />
              {label}
              <Info className="h-3 w-3 opacity-40" />
            </button>
            {active === label && (
              <span className="absolute left-1/2 top-full z-20 mt-2 w-56 -translate-x-1/2 rounded-lg border border-border bg-surface-card px-3 py-2 text-left text-xs leading-relaxed text-muted shadow-lg">
                {tooltip}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
