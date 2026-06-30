import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { site } from "@/lib/site";
import { Check } from "lucide-react";

const points = [
  "SEO local configurado para São José do Rio Preto e região",
  "Equipe própria — design, dev e suporte no mesmo lugar",
  "CMS e painéis para você atualizar sem depender de terceiros",
  "Portais imobiliários e classificados como produto pronto",
  "Hospedagem e performance otimizada para o Brasil",
];

export function LocalSection() {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-fox-500/15 to-violet-500/10 blur-2xl dark:from-fox-600/20" />
            <div className="relative rounded-3xl border border-border bg-surface-card p-8 shadow-sm sm:p-10 dark:shadow-none">
              <p className="text-sm font-semibold uppercase tracking-widest text-fox-500 dark:text-fox-400">
                Presença local
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
                Sua agência em{" "}
                <span className="text-fox-500 dark:text-fox-400">{site.city}</span>
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Não somos uma fábrica genérica de templates. Conhecemos o mercado
                de Rio Preto e desenvolvemos projetos que falam com o seu público
                regional.
              </p>
              <ul className="mt-8 space-y-4">
                {points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-muted">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="rounded-3xl border border-dashed border-border bg-surface-elevated p-8 text-center sm:p-12">
              <p
                className="text-6xl font-bold"
                style={{ color: "var(--watermark)" }}
              >
                SJRP
              </p>
              <p className="mt-4 text-lg font-medium text-foreground">
                Noroeste Paulista
              </p>
              <p className="mt-2 text-sm text-muted">{site.hours}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button href={site.whatsapp} variant="whatsapp">
                  WhatsApp
                </Button>
                <Button href="/criacao-de-sites-fox-solution" variant="secondary">
                  E-mail
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
