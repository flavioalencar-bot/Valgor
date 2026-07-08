import { Button } from "@/components/ui/Button";
import { PageBanner } from "@/components/ui/PageBanner";
import { Container, Section } from "@/components/ui/Section";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { PILLAR_CREACAO_SITES } from "@/lib/breadcrumbs";
import { segmentPages } from "@/lib/segment-pages";
import { isRedirectedSegment } from "@/lib/seo-redirects";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Sites por Segmento e Nicho de Mercado",
  description: `Páginas especializadas de criação de sites por nicho: advogados, clínicas, restaurantes, imobiliárias e mais. ${site.brand} em ${site.city}.`,
  path: "/segmentos",
});

const pages = Object.values(segmentPages).filter(
  (page) => !isRedirectedSegment(page.slug.slice(1)),
);

export default function SegmentosPage() {
  return (
    <>
      <PageBanner
        accent="valgor"
        title="Sites profissionais por segmento"
        lead={`Escolha o nicho do seu negócio e veja como a ${site.brand} estrutura criação de sites sob medida em ${site.city} e em todo o Brasil.`}
      />
      <Section className="bg-surface">
        <Container>
          <SeoBreadcrumbs
            items={[
              { name: "Início", href: "/" },
              PILLAR_CREACAO_SITES,
              { name: "Segmentos", href: "/segmentos" },
            ]}
            className="mb-8"
          />
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-muted">
            Cada página abaixo detalha soluções para um nicho específico. O serviço principal
            continua sendo{" "}
            <Link href="/criacao-de-sites" className="font-medium text-valgor-600 hover:underline">
              criação de sites profissionais
            </Link>
            — use estas páginas para entender abordagem, recursos e FAQ por mercado.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pages.map((page) => (
              <li key={page.slug}>
                <Link
                  href={page.slug}
                  className="shadow-card block rounded-xl border border-border bg-surface-card p-4 transition hover:border-valgor-500/30 hover:shadow-md"
                >
                  <h2 className="font-semibold text-foreground">{page.title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted line-clamp-2">
                    {page.lead}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/criacao-de-sites">Ver criação de sites</Button>
            <Button href="/solicitar-orcamento" variant="secondary">
              Solicitar orçamento
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
