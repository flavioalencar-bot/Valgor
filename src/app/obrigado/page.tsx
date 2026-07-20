import { Button } from "@/components/ui/Button";
import { ThankYouTracker } from "@/components/conversion/ThankYouTracker";
import { Container, Section } from "@/components/ui/Section";
import { QUOTE_PATH, VALGOR_SCORE_PATH } from "@/lib/conversion";
import { site } from "@/lib/site";
import { CheckCircle2, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Solicitação recebida | ${site.brand}`,
  description: `Recebemos seu pedido de orçamento. A ${site.brand} retorna em até 1 dia útil.`,
  robots: { index: false, follow: false },
  alternates: { canonical: `${site.url}/obrigado` },
};

export default function ObrigadoPage() {
  return (
    <>
      <ThankYouTracker />
      <Section className="min-h-[70vh] bg-surface pt-28 sm:pt-32">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-9 w-9" strokeWidth={1.75} />
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest text-valgor-500">
              Solicitação recebida
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-poppins)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Obrigado! Recebemos seu pedido.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Nossa equipe analisa sua mensagem e retorna em até{" "}
              <strong className="font-medium text-foreground">1 dia útil</strong>
              — em horário comercial ({site.hours}).
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button href={site.whatsapp} className="inline-flex items-center gap-2 !rounded-lg">
                <Phone className="h-4 w-4" />
                Falar no WhatsApp agora
              </Button>
              <Button href={VALGOR_SCORE_PATH} variant="secondary" className="!rounded-lg">
                Fazer diagnóstico gratuito
              </Button>
            </div>

            <p className="mt-10 text-sm text-subtle">
              Enviou por engano ou quer complementar?{" "}
              <a href={QUOTE_PATH} className="text-valgor-600 hover:underline dark:text-valgor-400">
                Voltar ao formulário
              </a>{" "}
              ou ligue {site.phoneDisplay}.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
