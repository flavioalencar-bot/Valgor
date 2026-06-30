"use client";

import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { navigation, type NavItem } from "@/data/navigation";
import { QUOTE_LABEL, QUOTE_PATH, VALGOR_SCORE_HEADER_LABEL, VALGOR_SCORE_PATH } from "@/lib/conversion";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, Phone, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function isGroup(
  item: (typeof navigation)[number],
): item is { label: string; items: NavItem[] } {
  return "items" in item;
}

function navLabel(item: NavItem) {
  return item.desktopLabel ?? item.label;
}

function linkClass(pathname: string, href: string) {
  const active = pathname === href;
  return cn(
    "shrink-0 whitespace-nowrap rounded-lg px-2 py-2 text-xs font-medium transition lg:px-2.5 xl:px-3 xl:text-[13px]",
    active
      ? "bg-muted-bg text-foreground ring-1 ring-border dark:bg-white/10 dark:ring-white/15"
      : "text-muted hover:bg-muted-bg hover:text-foreground dark:text-[#c9c9c9]",
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-border-subtle backdrop-blur-md"
      style={{ backgroundColor: "var(--header-bg)" }}
    >
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 px-4 sm:gap-3 sm:px-6 lg:px-8">
        <Link href="/" className="relative z-10 shrink-0">
          <Logo priority />
        </Link>

        <nav
          className="hidden min-w-0 items-center justify-center gap-0 lg:flex lg:gap-0.5 xl:gap-1"
          aria-label="Principal"
        >
          {navigation.map((item) =>
            isGroup(item) ? (
              <div key={item.label} className="group relative shrink-0">
                <button
                  type="button"
                  className="inline-flex items-center gap-0.5 whitespace-nowrap rounded-lg px-2 py-2 text-xs font-medium text-muted transition hover:bg-muted-bg hover:text-foreground dark:text-[#c9c9c9] lg:px-2.5 xl:px-3 xl:text-[13px]"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-40 transition group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="shadow-card min-w-52 rounded-xl border border-border bg-surface-card p-1.5">
                    {item.items.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "block rounded-lg px-3 py-2 text-sm transition",
                          pathname === link.href
                            ? "bg-muted-bg font-medium text-foreground"
                            : "text-muted hover:bg-muted-bg hover:text-foreground",
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className={linkClass(pathname, item.href)}>
                <span className="hidden xl:inline">{item.label}</span>
                <span className="xl:hidden">{navLabel(item)}</span>
              </Link>
            ),
          )}
        </nav>

        <div className="hidden shrink-0 items-center justify-end gap-2 lg:flex xl:gap-2.5">
          <a
            href={`tel:+${site.phone}`}
            title={site.phoneDisplay}
            className="hidden items-center gap-1.5 whitespace-nowrap rounded-lg px-2 py-1.5 text-[13px] font-medium text-muted transition hover:bg-muted-bg hover:text-foreground xl:flex"
          >
            <Phone className="h-3.5 w-3.5 shrink-0" />
            {site.phoneDisplay}
          </a>
          <Button
            href={VALGOR_SCORE_PATH}
            variant="secondary"
            className="!rounded-lg !border-fox-500/40 !bg-fox-500/10 !px-2.5 !py-2 !text-xs !font-semibold !text-fox-600 hover:!bg-fox-500/20 xl:!px-3 xl:!text-[13px] dark:!text-fox-400"
          >
            <Sparkles className="h-3.5 w-3.5 shrink-0 xl:mr-1" />
            <span className="hidden xl:inline">{VALGOR_SCORE_HEADER_LABEL}</span>
            <span className="xl:hidden">Valgor Score</span>
          </Button>
          <Button
            href={QUOTE_PATH}
            variant="primary"
            className="!rounded-lg !px-2.5 !py-2 !text-xs xl:!px-4 xl:!text-[13px]"
          >
            <span className="hidden xl:inline">{QUOTE_LABEL}</span>
            <span className="xl:hidden">Orçamento</span>
          </Button>
        </div>

        <div className="col-start-3 flex shrink-0 items-center justify-end lg:hidden">
          <button
            type="button"
            className="rounded-lg border border-border p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border-subtle bg-surface-card px-5 py-4 lg:hidden" aria-label="Menu mobile">
          <ul className="space-y-0.5">
            {navigation.flatMap((item) => (isGroup(item) ? item.items : [item])).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition",
                    pathname === link.href
                      ? "bg-muted-bg text-foreground"
                      : "text-muted hover:bg-muted-bg hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 space-y-3 border-t border-border-subtle pt-3">
              <div className="flex flex-col gap-2 px-1">
                <span className="text-xs font-medium uppercase tracking-wide text-subtle">Aparência</span>
                <ThemeToggle className="w-fit" />
              </div>
              <a
                href={`tel:+${site.phone}`}
                className="flex items-center justify-center gap-2 rounded-lg border border-border px-3 py-2.5 text-sm text-muted"
              >
                <Phone className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
              <Button
                href={VALGOR_SCORE_PATH}
                variant="secondary"
                className="w-full !rounded-lg !border-fox-500/30 !bg-fox-500/10"
              >
                <Sparkles className="h-4 w-4" />
                {VALGOR_SCORE_HEADER_LABEL}
              </Button>
              <Button href={QUOTE_PATH} variant="primary" className="w-full !rounded-lg">
                {QUOTE_LABEL}
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
