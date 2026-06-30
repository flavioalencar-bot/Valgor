import { ContactForm } from "@/components/contact/ContactForm";
import { PageBanner } from "@/components/ui/PageBanner";
import { Container } from "@/components/ui/Section";
import { positioning } from "@/lib/conversion";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `Solicitar Orçamento de Site | ${site.brand}`,
  description: `${positioning} Solicite orçamento para site profissional, loja virtual ou landing page. Resposta em até 1 dia útil.`,
  path: "/solicitar-orcamento",
});

export default function SolicitarOrcamentoPage() {
  return (
    <>
      <PageBanner
        accent="valgor"
        title="Solicitar Orçamento"
        lead={`${positioning} Conte sobre seu negócio e receba proposta personalizada — site, loja virtual ou landing page.`}
      />
      <section className="bg-surface py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <aside className="space-y-6 lg:col-span-2">
              <div className="rounded-3xl border border-border bg-surface-card p-6 shadow-sm dark:shadow-none">
                <h2 className="font-semibold text-foreground">Por que solicitar agora?</h2>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  <li>→ Proposta sem compromisso</li>
                  <li>→ Planos a partir de R$ 199,90/mês</li>
                  <li>→ Desenvolvimento incluso na mensalidade</li>
                  <li>→ Atendimento em {site.city} e online</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-border bg-surface-card p-6 shadow-sm dark:shadow-none">
                <h2 className="font-semibold text-foreground">Atendimento direto</h2>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  <li>
                    <a href={site.whatsapp} className="text-valgor-500 hover:underline dark:text-valgor-400">
                      WhatsApp {site.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${site.email}`} className="hover:text-foreground">
                      {site.email}
                    </a>
                  </li>
                  <li>
                    {site.city}, {site.state} · {site.hours}
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
