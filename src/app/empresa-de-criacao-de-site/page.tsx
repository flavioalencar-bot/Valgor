import { CtaBand } from "@/components/home/CtaBand";
import { PageBanner } from "@/components/ui/PageBanner";
import { Container } from "@/components/ui/Section";
import { images } from "@/lib/images";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import Image from "next/image";

export const metadata = buildMetadata({
  title: "Empresa de Criação de Sites e Agência Web",
  description: `${site.brand}: empresa de criação de sites e soluções de TI em ${site.city}. Desenvolvimento web, consultoria em tecnologia e transformação digital há 12+ anos.`,
  path: "/empresa-de-criacao-de-site",
});

export default function EmpresaPage() {
  return (
    <>
      <PageBanner
        accent="amber"
        title="A empresa"
        lead="Mais de uma década construindo presença digital para empresas do interior paulista."
      />
      <section className="bg-surface py-16">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="shadow-card overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface-elevated to-accent-soft p-1">
              <Image
                src={images.visuals.about}
                alt={`${site.brand} — soluções digitais em ${site.city}`}
                width={640}
                height={640}
                className="h-auto w-full rounded-[14px] object-cover"
              />
            </div>

            <div className="space-y-6 leading-relaxed text-muted">
              <p>
                A <strong className="text-fox-500 dark:text-fox-400">{site.brand}</strong> é uma
                empresa de tecnologia com sede em{" "}
                <strong className="text-foreground">{site.city}</strong>, especializada em sites,
                lojas virtuais, portais e marketing digital.
              </p>
              <p>
                Combinamos design, desenvolvimento e estratégia para entregar projetos que geram
                resultado — do institucional ao e-commerce e plataformas SaaS como portais
                imobiliários.
              </p>
              <div className="grid gap-4 pt-2 sm:grid-cols-2">
                {[
                  ["12+", "Anos de mercado"],
                  ["10k+", "Projetos"],
                  [site.city, "Nossa base"],
                  [site.cnpj, "CNPJ"],
                ].map(([a, b]) => (
                  <div
                    key={b}
                    className="rounded-2xl border border-border bg-surface-card p-4 shadow-sm dark:shadow-none"
                  >
                    <p className="text-2xl font-bold text-foreground">{a}</p>
                    <p className="text-sm text-subtle">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
