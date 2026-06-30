import { Button } from "@/components/ui/Button";

import { Container, Section, SectionHeader } from "@/components/ui/Section";

import { QUOTE_PATH } from "@/lib/conversion";

import { homePlanBenefits, homePlanDisplayNames } from "@/lib/home-content";

import { sitePlansSet } from "@/lib/plans";

import { whatsappPlanLink } from "@/lib/whatsapp";

import { cn } from "@/lib/utils";

import { Check, Star } from "lucide-react";



export function HomePlansSection() {

  return (

    <Section id="planos" className="border-t border-border-subtle bg-surface-elevated">

      <Container>

        <SectionHeader

          eyebrow="Planos"

          title="Escolha o plano ideal para crescer online"

          description="Desenvolvimento, hospedagem e suporte em mensalidade — sem investimento inicial alto."

          align="center"

          compact

        />



        <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:items-stretch">

          {sitePlansSet.plans.map((plan) => {

            const displayName = homePlanDisplayNames[plan.id] ?? plan.name;

            const benefit = homePlanBenefits[plan.id] ?? plan.tagline;

            return (

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

                    Plano {displayName}

                  </p>

                  <div className="mt-4 flex flex-wrap items-baseline gap-1">

                    <span className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-foreground sm:text-4xl">

                      {plan.price}

                    </span>

                    <span className="text-sm text-muted">/mês</span>

                  </div>

                  <p className="mt-1 text-xs font-medium text-subtle">{plan.priceNote}</p>

                  <p className="mt-4 text-sm leading-relaxed text-muted">{benefit}</p>

                </header>



                <div className="my-6 h-px bg-border-subtle" />



                <ul className="flex-1 space-y-2.5">

                  {plan.features.slice(0, 8).map((feature) => (

                    <li key={feature} className="flex gap-2.5 text-sm text-muted">

                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-valgor-500" strokeWidth={2.5} />

                      <span>{feature}</span>

                    </li>

                  ))}

                  {plan.features.length > 8 && (

                    <li className="text-xs text-subtle">+ {plan.features.length - 8} itens inclusos</li>

                  )}

                </ul>



                <Button

                  href={whatsappPlanLink(displayName)}

                  variant={plan.featured ? "primary" : "secondary"}

                  className="mt-8 w-full !rounded-xl"

                >

                  Quero este plano

                </Button>

              </article>

            );

          })}

        </div>



        <p className="mt-8 text-center text-xs text-subtle">

          Prefere proposta detalhada?{" "}

          <a href={QUOTE_PATH} className="text-valgor-500 hover:underline">

            Solicitar orçamento personalizado

          </a>

        </p>

      </Container>

    </Section>

  );

}


