"use client";

import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function FooterThemeToggle() {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
      <span className="text-xs font-medium uppercase tracking-wide text-subtle">Aparência do site</span>
      <ThemeToggle />
    </div>
  );
}
