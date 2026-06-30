import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const points = [
  "Equipe própria de design, desenvolvimento e suporte",
  "Foco em SEO local para São José do Rio Preto e região",
  "CMS e painéis para autonomia do cliente",
  "Portais imobiliários e classificados como produto",
  "Hospedagem e infraestrutura gerenciada",
];

type Props = {
  compact?: boolean;
};

export function WhyFox({ compact = false }: Props) {
  return (
    <Section
      compact={compact}
      className={cn(
        "border-t border-border-subtle bg-surface",
        !compact && "!py-16 sm:!py-20",
      )}
    >
      <Container>
        <div
          className={cn(
            "grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14",
            compact && "items-start gap-8 lg:gap-12",
          )}
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-fox-500">
              Por que a {site.brand}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Parceiro digital em{" "}
              <span className="text-fox-500">{site.city}</span>, não só um fornecedor
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              Conhecemos o mercado regional e entregamos projetos com padrão nacional —
              sites rápidos, seguros e preparados para converter visitantes em clientes.
            </p>
            {!compact && (
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Do briefing ao lançamento, você fala direto com quem desenvolve — sem
                intermediários e com suporte contínuo após a publicação.
              </p>
            )}
            <Button
              href="/empresa-de-criacao-de-site"
              variant="secondary"
              className="mt-6 !rounded-xl"
            >
              Conheça a empresa
            </Button>
          </div>

          <div className="shadow-card rounded-2xl border border-border bg-surface-card p-6 sm:p-8">
            <ul
              className={cn(
                "grid gap-4",
                compact ? "sm:grid-cols-2 lg:grid-cols-1" : "sm:grid-cols-2",
              )}
            >
              {points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-fox-500/10 text-fox-500">
                    <Check className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm leading-relaxed text-muted">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
