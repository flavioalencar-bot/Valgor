import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { services } from "@/data/navigation";
import {
  IconCart,
  IconChart,
  IconGrid,
  IconLayout,
  IconRocket,
} from "@/components/icons/IllustratedIcons";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const illustrated = {
  layout: IconLayout,
  cart: IconCart,
  chart: IconChart,
  grid: IconGrid,
  rocket: IconRocket,
} as const;

const cardBar: Record<string, string> = {
  layout: "bg-rose-500",
  cart: "bg-violet-500",
  chart: "bg-cyan-500",
  grid: "bg-orange-500",
  rocket: "bg-amber-500",
};

export function ServicesPro() {
  return (
    <Section className="bg-surface">
      <Container>
        <SectionHeader
          eyebrow="Serviços"
          title="Soluções completas para sua operação digital"
          description="Do site institucional à plataforma de negócios — estruturamos, desenvolvemos e acompanhamos cada etapa."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = illustrated[service.icon];
            return (
              <Link
                key={service.href}
                href={service.href}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface-card p-6 transition hover:-translate-y-1 hover:border-fox-500/30 sm:p-8"
              >
                <div
                  className={`absolute inset-y-0 left-0 w-1 ${cardBar[service.icon]}`}
                  aria-hidden
                />
                <div className="relative flex gap-5">
                  <div className="shrink-0">
                    <Icon className="h-14 w-14 transition group-hover:scale-110" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`inline-flex rounded-lg bg-gradient-to-r ${service.accent} px-2 py-0.5 text-xs font-bold text-white`}
                      >
                        0{index + 1}
                      </span>
                      <ArrowRight className="h-4 w-4 text-subtle transition group-hover:translate-x-0.5 group-hover:text-fox-500" />
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-foreground">
                      {service.subtitle}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
