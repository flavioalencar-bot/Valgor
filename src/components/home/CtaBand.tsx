import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { QUOTE_LABEL, QUOTE_PATH } from "@/lib/conversion";
import { site } from "@/lib/site";
import { Phone } from "lucide-react";

type Props = {
  compact?: boolean;
};

export function CtaBand({ compact = false }: Props) {
  return (
    <Section
      compact={compact}
      className={compact ? "bg-surface py-10 sm:py-14" : "bg-surface"}
    >
      <Container>
        <div className="shadow-card overflow-hidden rounded-2xl border border-border bg-surface-card lg:grid lg:grid-cols-5">
          <div className="relative overflow-hidden bg-gradient-to-br from-fox-500 via-fox-600 to-graphite px-8 py-10 text-white lg:col-span-2 lg:px-10 lg:py-12">
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl"
              aria-hidden
            />
            <p className="text-sm font-medium uppercase tracking-wider text-white/80">
              Próximo passo
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-poppins)] text-2xl font-bold sm:text-3xl">
              Vamos conversar sobre seu projeto?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/85">
              Proposta sem compromisso. Atendimento em {site.city} e atendimento remoto
              para todo o Brasil.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-5 px-8 py-10 lg:col-span-3 lg:px-12">
            <p className="text-muted">
              Conte o que você precisa — site, loja virtual ou portal — e retornamos com
              escopo e investimento estimado.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href={QUOTE_PATH} className="!rounded-xl">
                {QUOTE_LABEL}
              </Button>
              <Button
                href={site.whatsapp}
                variant="secondary"
                className="inline-flex !rounded-xl items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                {site.phoneDisplay}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
