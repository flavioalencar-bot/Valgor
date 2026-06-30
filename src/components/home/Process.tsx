import { Container, Section, SectionHeader } from "@/components/ui/Section";
import {
  IconCode,
  IconLaunch,
  IconPalette,
  IconSearch,
} from "@/components/icons/IllustratedIcons";

const steps = [
  {
    step: "01",
    title: "Diagnóstico",
    text: "Entendemos seu negócio, público e objetivos em uma reunião objetiva.",
    icon: IconSearch,
    color: "from-amber-400 to-orange-500",
    bg: "bg-amber-50 dark:bg-amber-500/10",
  },
  {
    step: "02",
    title: "Estratégia & design",
    text: "Definimos arquitetura, layout e identidade visual alinhados à sua marca.",
    icon: IconPalette,
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50 dark:bg-pink-500/10",
  },
  {
    step: "03",
    title: "Desenvolvimento",
    text: "Construímos com tecnologia moderna, SEO e painel de gestão inclusos.",
    icon: IconCode,
    color: "from-cyan-500 to-blue-600",
    bg: "bg-cyan-50 dark:bg-cyan-500/10",
  },
  {
    step: "04",
    title: "Lançamento & suporte",
    text: "Publicamos, treinamos sua equipe e acompanhamos os primeiros resultados.",
    icon: IconLaunch,
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
  },
] as const;

export function Process() {
  return (
    <Section className="relative overflow-hidden border-y border-border-subtle bg-surface-elevated">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(214,18,92,0.06),transparent_55%)]"
        aria-hidden
      />
      <Container className="relative">
        <SectionHeader
          eyebrow="Metodologia"
          title="Como trabalhamos"
          description="Processo claro, prazos definidos e comunicação direta do início ao pós-entrega."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className={`shadow-card rounded-2xl border border-border p-6 ${item.bg}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-md`}
                  >
                    <Icon className="h-9 w-9 [&_circle:first-child]:fill-white/25 [&_rect:first-child]:fill-white/20" />
                  </div>
                  <span className="text-2xl font-bold text-foreground/15 dark:text-foreground/20">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
