import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { siteSegments } from "@/lib/keywords";
import {
  IconBuilding,
  IconCart,
  IconChart,
  IconGrid,
  IconLayout,
  IconRocket,
  IconShield,
  IconUsers,
} from "@/components/icons/IllustratedIcons";
import Link from "next/link";

const segmentVisuals = [
  { icon: IconShield, accent: "from-slate-600 to-slate-800" },
  { icon: IconUsers, accent: "from-sky-500 to-blue-600" },
  { icon: IconCart, accent: "from-orange-500 to-red-500" },
  { icon: IconChart, accent: "from-emerald-500 to-teal-600" },
  { icon: IconBuilding, accent: "from-indigo-500 to-violet-600" },
  { icon: IconLayout, accent: "from-amber-500 to-orange-500" },
  { icon: IconRocket, accent: "from-valgor-500 to-rose-500" },
  { icon: IconGrid, accent: "from-cyan-500 to-blue-600" },
] as const;

export function SegmentsSection() {
  return (
    <Section className="relative overflow-hidden border-t border-border-subtle bg-surface">
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-violet-500/8 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <SectionHeader
          eyebrow="Segmentos"
          title="Site profissional para o seu nicho"
          description="Desenvolvimento de sites empresariais sob medida — site institucional, landing page e portal web para captar clientes."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteSegments.map((seg, i) => {
            const { icon: Icon, accent } = segmentVisuals[i];
            return (
              <Link
                key={seg.title}
                href="/criacao-de-sites"
                className="shadow-card group rounded-2xl border border-border bg-surface-card p-5 transition hover:-translate-y-0.5 hover:border-valgor-500/25 hover:shadow-lg dark:shadow-none"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${accent} shadow-sm transition group-hover:scale-110`}
                >
                  <Icon className="h-8 w-8 [&_circle:first-child]:fill-white/20 [&_rect:first-child]:fill-white/15" />
                </div>
                <h3 className="font-semibold text-foreground">{seg.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{seg.desc}</p>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
