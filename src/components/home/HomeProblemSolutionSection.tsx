import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { QUOTE_PATH, VALGOR_SCORE_PATH } from "@/lib/conversion";
import {
  AlertCircle,
  ArrowRight,
  Check,
  Gauge,
  MessageCircleMore,
  Search,
  ShieldCheck,
} from "lucide-react";

const pains = [
  "Seu site existe, mas gera poucos contatos.",
  "A empresa aparece pouco no Google quando o cliente pesquisa.",
  "Concorrentes parecem mais profissionais e recebem mais orçamentos.",
  "Falta clareza sobre o que melhorar primeiro no digital.",
] as const;

const solutions = [
  "Estrutura comercial pensada para gerar mais contatos e credibilidade.",
  "SEO técnico, páginas orientadas a busca e presença local mais forte.",
  "Design, copy e experiência coerentes com o valor da sua empresa.",
  "Diagnóstico, plano de evolução e suporte para crescer com direção.",
] as const;

const highlights = [
  { title: "Google e SEO", text: "mais visibilidade para buscas relevantes", icon: Search },
  { title: "WhatsApp e leads", text: "estrutura para transformar visita em contato", icon: MessageCircleMore },
  { title: "Performance", text: "site rápido, seguro e confiável", icon: Gauge },
  { title: "Suporte", text: "continuidade técnica e evolução", icon: ShieldCheck },
] as const;

export function HomeProblemSolutionSection() {
  return (
    <Section className="border-t border-border-subtle bg-surface-elevated" compact>
      <Container>
        <SectionHeader
          eyebrow="Diagnóstico e solução"
          title="Sua presença digital precisa gerar contato, não só existir."
          description="Menos ruído, mais clareza comercial: o que está travando hoje e o que a VALGOR entrega para corrigir."
          align="center"
          compact
        />

        <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-2">
          <Reveal className="rounded-[1.35rem] border border-rose-200 bg-gradient-to-br from-rose-50 via-white to-white p-6 shadow-sm">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-3 py-1 text-sm font-semibold text-rose-500">
              <AlertCircle className="h-4 w-4" />
              O que costuma travar resultados
            </div>

            <ul className="space-y-3">
              {pains.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-foreground/75">
                  <span className="mt-2 h-2 w-2 rounded-full bg-rose-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="rounded-[1.35rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white p-6 shadow-sm">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-sm font-semibold text-emerald-600">
              <Check className="h-4 w-4" />
              O que a VALGOR entrega
            </div>

            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-foreground/75">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Stagger className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <StaggerItem key={item.title}>
                <div className="flex h-full flex-col rounded-[1rem] border border-border bg-white p-5 shadow-sm">
                  <div className="mb-4 h-1.5 w-12 rounded-full bg-valgor-500/70" />
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-valgor-500/10 text-valgor-500">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-poppins)] text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-foreground/70">{item.text}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={VALGOR_SCORE_PATH} className="!rounded-xl !px-5 !py-3.5">
            Fazer diagnóstico gratuito
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href={QUOTE_PATH} variant="secondary" className="!rounded-xl !px-5 !py-3.5">
            Solicitar orçamento
          </Button>
        </div>
      </Container>
    </Section>
  );
}
