import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { QUOTE_PATH } from "@/lib/conversion";
import { type PlansSet } from "@/lib/plans";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Check, Star } from "lucide-react";

type Props = PlansSet & {
  id?: string;
};

export function PlansSection({
  id = "planos",
  eyebrow,
  title,
  description,
  plans,
  notes,
  footnote,
}: Props) {
  return (
    <Section
      id={id}
      compact
      className="border-t border-border-subtle bg-surface-elevated pb-10 sm:pb-14"
    >
      <Container>
        <SectionHeader
          compact
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={cn(
                "relative flex flex-col rounded-3xl border bg-surface-card p-6 shadow-sm sm:p-8",
                plan.featured
                  ? "border-valgor-500/50 ring-2 ring-valgor-500/20 lg:scale-[1.02]"
                  : "border-border",
              )}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-valgor-500 px-3 py-1 text-xs font-semibold text-white">
                  <Star className="h-3 w-3 fill-white" />
                  Mais popular
                </span>
              )}

              <header>
                <p className="text-sm font-bold uppercase tracking-widest text-valgor-500">
                  {plan.name}
                </p>
                <div className="mt-4 flex flex-wrap items-baseline gap-1">
                  <span className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-foreground sm:text-4xl">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted">/mês</span>
                </div>
                <p className="mt-1 text-xs font-medium text-subtle">{plan.priceNote}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{plan.tagline}</p>
              </header>

              <div className="my-6 h-px bg-border-subtle" />

              {plan.includesPrevious ? (
                <p className="mb-4 text-sm font-semibold text-foreground">
                  Inclui tudo do {plan.includesPrevious}, mais:
                </p>
              ) : (
                <p className="mb-4 text-sm font-semibold text-foreground">Inclui:</p>
              )}

              <ul className="flex-1 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5 text-sm text-muted">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-valgor-500"
                      strokeWidth={2.5}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href={QUOTE_PATH}
                variant={plan.featured ? "primary" : "secondary"}
                className="mt-8 w-full !rounded-xl"
              >
                Solicitar {plan.name}
              </Button>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-surface-card p-6 sm:p-8">
          <h3 className="font-[family-name:var(--font-poppins)] text-lg font-bold text-foreground">
            Informações importantes
          </h3>
          <ul className="mt-5 space-y-3">
            {notes.map((note) => (
              <li key={note} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-valgor-500" strokeWidth={2.5} />
                <span>{note}</span>
              </li>
            ))}
          </ul>
          {footnote && (
            <p className="mt-4 text-xs text-subtle">{footnote}</p>
          )}
          <p className={cn("text-xs text-subtle", footnote ? "mt-3" : "mt-6")}>
            Dúvidas?{" "}
            <a href={site.whatsapp} className="font-medium text-valgor-500 hover:underline">
              Fale conosco no WhatsApp
            </a>
            .
          </p>
        </div>
      </Container>
    </Section>
  );
}
