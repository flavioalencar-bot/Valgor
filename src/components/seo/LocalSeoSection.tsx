import { Container, Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

export function LocalSeoSection() {
  return (
    <Section className="relative overflow-hidden bg-surface">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,102,0,0.06),transparent_70%)]"
        aria-hidden
      />
      <Container className="relative">
        <div className="shadow-card mx-auto max-w-3xl rounded-3xl border border-border bg-surface-card p-8 text-center sm:p-12">
          <p className="inline-flex rounded-full bg-valgor-500 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
            Agência web em {site.city}
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Empresa de criação de sites no Noroeste Paulista
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            Somos <strong className="text-valgor-500">agência web</strong> e{" "}
            <strong className="text-foreground">empresa de criação de sites</strong> em{" "}
            {site.city}. Fazemos desenvolvimento de sites, loja virtual, SEO, Google Ads e
            hospedagem — com integração WhatsApp, CMS e Google Meu Negócio.
          </p>
        </div>
      </Container>
    </Section>
  );
}
