import { PageBanner } from "@/components/ui/PageBanner";
import { Button } from "@/components/ui/Button";
import { QUOTE_PATH } from "@/lib/conversion";
import { type ServiceHighlight } from "@/lib/services-data";
import { cn } from "@/lib/utils";
import { CreditCard, Package, ShoppingCart, TrendingUp } from "lucide-react";
import { type ReactNode } from "react";
import { type BannerAccent } from "@/lib/images";

const highlightIcons = [ShoppingCart, CreditCard, Package, TrendingUp] as const;

type Props = {
  title: string;
  lead: string;
  accent: BannerAccent;
  features: string[];
  children: ReactNode;
  highlights?: ServiceHighlight[];
  /** Reduz espaço inferior quando a seção de planos vem em seguida */
  compact?: boolean;
  /** CTA da sidebar aponta para #planos */
  plansAnchor?: boolean;
};

export function ServiceLayout({
  title,
  lead,
  accent,
  features,
  children,
  highlights,
  compact = false,
  plansAnchor = false,
}: Props) {
  return (
    <>
      <PageBanner title={title} lead={lead} accent={accent} />

      <section className={cn("bg-surface", compact ? "pb-8 pt-12 sm:pt-14" : "py-16")}>
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-3 lg:gap-12">
            <div className="space-y-8 lg:col-span-2">
              <div className="space-y-5 leading-relaxed text-muted [&_strong]:text-foreground">
                {children}
              </div>

              {highlights && highlights.length > 0 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  {highlights.map((item, i) => {
                    const Icon = highlightIcons[i % highlightIcons.length];
                    const Card = (
                      <div className="rounded-2xl border border-border bg-surface-card p-5 shadow-sm transition hover:border-fox-500/25 dark:shadow-none">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-fox-500">
                          <Icon className="h-5 w-5" strokeWidth={1.75} />
                        </div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">
                          {item.description}
                        </p>
                      </div>
                    );

                    return item.href ? (
                      <a key={item.title} href={item.href} className="block">
                        {Card}
                      </a>
                    ) : (
                      <div key={item.title}>{Card}</div>
                    );
                  })}
                </div>
              )}
            </div>

            <aside className="sticky top-24 rounded-3xl border border-border bg-surface-card p-6 shadow-sm dark:shadow-none">
              <h2 className="font-semibold text-foreground">Incluído no projeto</h2>
              <ul className="mt-5 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-muted">
                    <span className="text-fox-500 dark:text-fox-400">→</span>
                    {f}
                  </li>
                ))}
              </ul>
              {plansAnchor ? (
                <Button href="#planos" className="mt-8 w-full !rounded-full">
                  Ver planos e preços
                </Button>
              ) : (
                <Button
                  href={QUOTE_PATH}
                  className="mt-8 w-full !rounded-full"
                >
                  Pedir orçamento
                </Button>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
