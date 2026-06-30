import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { services } from "@/data/navigation";
import { ArrowUpRight, BarChart3, Grid3X3, Layout, Rocket, ShoppingBag } from "lucide-react";
import Link from "next/link";

const icons = {
  layout: Layout,
  cart: ShoppingBag,
  chart: BarChart3,
  grid: Grid3X3,
  rocket: Rocket,
} as const;

export function ServicesBento() {
  return (
    <Section className="bg-surface-elevated">
      <Container>
        <SectionHeader
          eyebrow="O que fazemos"
          title="Soluções que cobrem toda a jornada digital"
          description="Da presença online à monetização com portais — um parceiro em São José do Rio Preto."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 lg:gap-5">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            const large = i === 0 || i === 3;

            return (
              <Link
                key={service.href}
                href={service.href}
                className={`group relative overflow-hidden rounded-3xl border border-border bg-surface-card p-6 shadow-sm transition duration-300 hover:border-fox-500/30 hover:bg-surface-card-hover hover:shadow-md dark:shadow-none dark:hover:shadow-none ${
                  large ? "lg:col-span-2 lg:row-span-1 lg:p-8" : ""
                }`}
              >
                <div
                  className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${service.accent} opacity-15 blur-2xl transition group-hover:opacity-30 dark:opacity-20 dark:group-hover:opacity-40`}
                />
                <div className="relative">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-muted-bg text-fox-500 ring-1 ring-border dark:text-fox-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-fox-500 dark:text-fox-400">
                    {service.title}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-foreground">{service.subtitle}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-fox-600 opacity-0 transition group-hover:opacity-100 dark:text-fox-400">
                    Saiba mais <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
