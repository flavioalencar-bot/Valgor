"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ReactNode } from "react";

const THEME_STORAGE_KEY = "valgor-theme";
const LEGACY_THEME_STORAGE_KEY = "fox-theme";

/** Copia preferência claro/escuro salva antes do rebrand VALGOR. */
function migrateLegacyThemeStorage() {
  if (typeof window === "undefined") return;

  try {
    if (localStorage.getItem(THEME_STORAGE_KEY)) return;

    const legacy = localStorage.getItem(LEGACY_THEME_STORAGE_KEY);
    if (legacy === "light" || legacy === "dark") {
      localStorage.setItem(THEME_STORAGE_KEY, legacy);
      localStorage.removeItem(LEGACY_THEME_STORAGE_KEY);
    }
  } catch {
    // localStorage indisponível (modo privado, etc.)
  }
}

migrateLegacyThemeStorage();

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      storageKey={THEME_STORAGE_KEY}
      themes={["light", "dark"]}
    >
      {children}
    </NextThemesProvider>
  );
}
