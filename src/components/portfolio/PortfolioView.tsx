"use client";

import { CtaBand } from "@/components/home/CtaBand";
import { PageBanner } from "@/components/ui/PageBanner";
import { Container } from "@/components/ui/Section";
import { PortfolioMock } from "@/components/visuals/PortfolioMock";
import {
  PORTFOLIO_CATEGORIES,
  type PortfolioProject,
} from "@/lib/portfolio";
import { type PortfolioVariant } from "@/lib/images";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";

const segmentToVariant: Record<string, PortfolioVariant> = {
  site: "site",
  ecommerce: "ecommerce",
  portal: "portal",
  design: "design",
  marketing: "marketing",
  imoveis: "imoveis",
};

type Props = { projects: PortfolioProject[] };

export function PortfolioView({ projects }: Props) {
  const [filter, setFilter] = useState<string>("Todos");

  const filtered = useMemo(() => {
    if (filter === "Todos") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter, projects]);

  return (
    <>
      <PageBanner
        accent="fox"
        title="Portfólio"
        lead="Sites, lojas virtuais e plataformas desenvolvidos para gerar resultados reais."
      />
      <section className="bg-surface-elevated py-12 sm:py-16">
        <Container>
          <div className="flex flex-wrap gap-2">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition",
                  filter === cat
                    ? "bg-fox-500 text-white"
                    : "border border-border bg-surface-card text-muted hover:text-foreground",
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => {
              const variant = segmentToVariant[item.segment] ?? "site";
              return (
                <article
                  key={item.id}
                  className="flex flex-col overflow-hidden rounded-3xl border border-border bg-surface-card shadow-sm transition hover:border-fox-500/30 dark:shadow-none"
                >
                  <div className="relative aspect-[4/3] overflow-hidden border-b border-border-subtle">
                    <PortfolioMock variant={variant} />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-fox-500">
                      {item.category}
                    </p>
                    <h2 className="mt-2 font-[family-name:var(--font-poppins)] text-lg font-bold text-foreground">
                      {item.title}
                    </h2>
                    {item.description && (
                      <p className="mt-2 text-sm text-muted">{item.description}</p>
                    )}
                    {item.objective && (
                      <p className="mt-2 text-sm text-muted">
                        <span className="font-medium text-foreground">Objetivo:</span>{" "}
                        {item.objective}
                      </p>
                    )}
                    {item.result && (
                      <p className="mt-1 text-sm font-semibold text-fox-600 dark:text-fox-400">
                        {item.result}
                      </p>
                    )}
                    {item.technologies.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {item.technologies.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-muted-bg px-2 py-0.5 text-xs text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-fox-500 hover:underline"
                      >
                        Ver projeto <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
