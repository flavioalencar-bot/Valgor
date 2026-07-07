import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  LayoutTemplate,
  Megaphone,
  Search,
  ServerCog,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Criação de Sites",
    description: "Sites institucionais com foco em posicionamento, confiança e geração de contatos.",
    href: "/criacao-de-sites",
    icon: LayoutTemplate,
    accent: "from-valgor-500/18 to-transparent",
    span: "lg:col-span-3",
  },
  {
    title: "Landing Pages",
    description: "Páginas para campanhas com copy, formulário, WhatsApp e rastreamento.",
    href: "/landing-pages",
    icon: Megaphone,
    accent: "from-amber-500/15 to-transparent",
    span: "lg:col-span-3",
  },
  {
    title: "Loja Virtual",
    description: "E-commerce com catálogo, checkout, PIX e estrutura preparada para vender online.",
    href: "/criacao-de-loja-virtual",
    icon: ShoppingCart,
    accent: "from-orange-500/15 to-transparent",
    span: "lg:col-span-2",
  },
  {
    title: "SEO",
    description: "Mais visibilidade no Google com melhorias técnicas, estrutura e conteúdo certo.",
    href: "/seo-otimizacao-de-site",
    icon: Search,
    accent: "from-emerald-500/15 to-transparent",
    span: "lg:col-span-2",
  },
  {
    title: "Hospedagem",
    description: "Cloud, SSL, backups e suporte para manter seu site rápido, seguro e estável.",
    href: "/hospedagem",
    icon: ServerCog,
    accent: "from-cyan-500/15 to-transparent",
    span: "lg:col-span-2",
  },
] as const;

export function HomeServicesSection() {
  return (
    <Section className="border-t border-border-subtle bg-surface">
      <Container>
        <SectionHeader
          eyebrow="Serviços principais"
          title="Escolha o caminho ideal para crescer online"
          description="A home direciona. Cada página de serviço aprofunda a oferta certa para o seu momento."
          align="center"
          compact
        />

        <Stagger className="grid gap-4 lg:grid-cols-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <StaggerItem key={service.href} className={cn(service.span)}>
                <Reveal>
                  <Link
                    href={service.href}
                    className="group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-[1.6rem] border border-border bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-valgor-500/30 hover:shadow-md"
                  >
                    <div
                      className={cn(
                        "pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br blur-3xl transition duration-200 group-hover:opacity-80",
                        service.accent,
                      )}
                      aria-hidden
                    />

                    <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-muted-bg text-valgor-500 ring-1 ring-border">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="relative mt-6">
                      <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-3 max-w-md text-sm leading-7 text-muted">
                        {service.description}
                      </p>
                    </div>

                    <span className="relative mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold text-valgor-500">
                      Ver página
                      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </Reveal>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
