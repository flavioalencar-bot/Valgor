import { Container } from "@/components/ui/Section";

import { homeAuthorityStats } from "@/lib/home-content";

import { site } from "@/lib/site";



export function TrustSection() {

  return (

    <section

      className="relative overflow-hidden border-y border-border-subtle bg-gradient-to-b from-surface-elevated via-surface to-surface-elevated py-12 sm:py-16"

      aria-label={`Credenciais ${site.brand}`}

    >

      <div

        className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-valgor-500/10 blur-3xl"

        aria-hidden

      />

      <div

        className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl"

        aria-hidden

      />



      <Container className="relative">

        <p className="text-center text-xs font-semibold uppercase tracking-widest text-valgor-500">

          Confiança construída em projetos reais

        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {homeAuthorityStats.map(({ value, label }) => (

            <div

              key={label}

              className="shadow-card flex flex-col items-center rounded-2xl border border-border bg-surface-card p-6 text-center transition hover:border-valgor-500/25"

            >

              <p className="font-[family-name:var(--font-poppins)] text-3xl font-bold tracking-tight text-valgor-600 dark:text-valgor-400 sm:text-4xl">

                {value}

              </p>

              <p className="mt-1 text-sm font-medium text-muted">{label}</p>

            </div>

          ))}

        </div>

      </Container>

    </section>

  );

}


