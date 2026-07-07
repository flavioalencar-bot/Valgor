import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { QUOTE_PATH, VALGOR_SCORE_PATH } from "@/lib/conversion";
import { ArrowRight, Search, ShieldCheck, Sparkles } from "lucide-react";

const scoreTopics = ["SEO", "Performance", "Conversão", "Google Business Profile"] as const;

export function HomeScoreBandSection() {
  return (
    <Section className="border-t border-border-subtle bg-surface" compact>
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[1.6rem] border border-border bg-gradient-to-r from-valgor-500/8 via-white to-amber-50/70 p-6 shadow-sm md:p-8">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-valgor-500/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-valgor-500">
                  <Sparkles className="h-3.5 w-3.5" />
                  Valgor Score
                </div>

                <h2 className="mt-4 font-[family-name:var(--font-poppins)] text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Quer descobrir onde sua empresa está perdendo oportunidades?
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted sm:text-base">
                  Receba uma leitura inicial da sua presença digital com foco em busca, conversão,
                  segurança e potencial comercial antes de decidir o próximo investimento.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {scoreTopics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-subtle"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3 text-sm text-muted">
                  <Search className="h-4 w-4 text-valgor-500" />
                  <span>Diagnóstico inicial com direção prática para as próximas melhorias.</span>
                </div>
                <div className="mt-2 flex items-center gap-3 text-sm text-muted">
                  <ShieldCheck className="h-4 w-4 text-valgor-500" />
                  <span>Sem compromisso e útil mesmo antes de contratar.</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:min-w-[15rem]">
                <Button href={VALGOR_SCORE_PATH} className="!rounded-xl !px-5 !py-3.5">
                  Fazer diagnóstico
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href={QUOTE_PATH} variant="secondary" className="!rounded-xl !px-5 !py-3.5">
                  Solicitar orçamento
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
