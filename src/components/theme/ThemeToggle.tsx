"use client";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className={cn("h-9 w-[7.25rem] rounded-full bg-muted-bg", className)} />;
  }

  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex items-center rounded-full border border-border bg-surface-card p-1 shadow-sm dark:border-white/10 dark:bg-surface-elevated",
        className,
      )}
      role="group"
      aria-label="Tema do site"
    >
      <button
        type="button"
        onClick={() => setTheme("light")}
        className={cn(
          "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all",
          !isDark
            ? "bg-foreground text-surface shadow-sm"
            : "text-muted hover:bg-muted-bg hover:text-foreground",
        )}
        aria-pressed={!isDark}
      >
        <Sun className="h-3.5 w-3.5" />
        Clean
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        className={cn(
          "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all",
          isDark
            ? "bg-valgor-500/20 text-valgor-400 ring-1 ring-valgor-500/40"
            : "text-muted hover:bg-muted-bg hover:text-foreground",
        )}
        aria-pressed={isDark}
      >
        <Moon className="h-3.5 w-3.5" />
        Dark
      </button>
    </div>
  );
}
