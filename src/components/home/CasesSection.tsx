import { Button } from "@/components/ui/Button";

import { Container, Section, SectionHeader } from "@/components/ui/Section";

import { Stagger, StaggerItem } from "@/components/motion/Reveal";

import { PORTFOLIO_PATH } from "@/lib/conversion";

import { homeCases } from "@/lib/home-content";

import { PortfolioMock } from "@/components/visuals/PortfolioMock";

import Link from "next/link";



const variants = ["site", "ecommerce", "imoveis"] as const;



export function CasesSection() {

  return (

    <Section className="border-t border-border-subtle bg-surface-elevated">

      <Container>

        <SectionHeader

          eyebrow="Portfólio"

          title="Projetos que geram resultados"

          description="Sites, landing pages e lojas desenvolvidos para converter visitantes em clientes."

          align="center"

          compact

        />

        <Stagger className="mt-10 grid gap-6 lg:grid-cols-3">

          {homeCases.map((item, i) => (

            <StaggerItem key={item.name}>

              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-card shadow-sm dark:shadow-none">

                <div className="border-b border-border-subtle p-4">

                  <PortfolioMock variant={variants[i % variants.length]} />

                </div>

                <div className="flex flex-1 flex-col p-6">

                  <p className="text-xs font-semibold uppercase tracking-widest text-valgor-500">

                    {item.segment}

                  </p>

                  <h3 className="mt-2 font-[family-name:var(--font-poppins)] text-lg font-bold text-foreground">

                    {item.name}

                  </h3>

                  <p className="mt-2 text-sm text-muted">

                    <span className="font-medium text-foreground">Desafio:</span> {item.challenge}

                  </p>

                  <p className="mt-2 text-sm text-muted">

                    <span className="font-medium text-foreground">Solução:</span> {item.solution}

                  </p>

                  <p className="mt-3 rounded-lg bg-emerald-500/10 px-3 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400">

                    Resultado: {item.result}

                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">

                    {item.tech.map((t) => (

                      <span

                        key={t}

                        className="rounded-md bg-muted-bg px-2 py-0.5 text-xs text-muted"

                      >

                        {t}

                      </span>

                    ))}

                  </div>

                  <Link

                    href={item.href}

                    className="mt-5 text-sm font-semibold text-valgor-500 hover:underline"

                  >

                    Ver portfólio →

                  </Link>

                </div>

              </article>

            </StaggerItem>

          ))}

        </Stagger>

        <div className="mt-10 text-center">

          <Button href={PORTFOLIO_PATH} variant="secondary" className="!rounded-xl">

            Ver todos os projetos

          </Button>

        </div>

      </Container>

    </Section>

  );

}


