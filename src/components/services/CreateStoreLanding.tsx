import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { PortfolioMock, type PortfolioMockVariant } from "@/components/visuals/PortfolioMock";
import { PORTFOLIO_PATH, QUOTE_PATH } from "@/lib/conversion";
import { plansSets } from "@/lib/plans";
import { faqJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/seo";
import { type ServicePageData } from "@/lib/services-data";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  CreditCard,
  LayoutGrid,
  LayoutTemplate,
  MapPinned,
  MessageCircleMore,
  Package,
  Percent,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Store,
  Truck,
  Workflow,
} from "lucide-react";

const stats = [
  { value: "24h", label: "canal de vendas ativo", icon: Store },
  { value: "PIX + Cartão", label: "pagamentos integrados", icon: CreditCard },
  { value: "Mobile", label: "compra pensada para celular", icon: ShoppingCart },
  { value: "SEO", label: "produtos preparados para Google", icon: Search },
] as const;

const pains = [
  "Vendas limitadas ao ponto físico ou Instagram.",
  "Dependência de marketplaces e taxas altas.",
  "Catálogo difícil de organizar e atualizar.",
  "Falta de controle sobre pedidos, frete e promoções.",
] as const;

const solutions = [
  "Loja virtual própria com checkout, PIX e cartão.",
  "Catálogo organizado por categorias, banners e destaques.",
  "Painel para pedidos, cupons, produtos e estoque.",
  "Estrutura otimizada para mobile, performance e SEO.",
] as const;

const processSteps = [
  { number: "01", title: "Entendemos a operação", text: "Produtos, frete, pagamentos e objetivo da loja." },
  { number: "02", title: "Montamos a estrutura", text: "Vitrine, categorias, banners e jornada de compra." },
  { number: "03", title: "Integramos e testamos", text: "Checkout, meios de pagamento e regras da operação." },
  { number: "04", title: "Publicamos e acompanhamos", text: "Loja no ar com suporte e evolução contínua." },
] as const;

const showcases = [
  { title: "Loja regional", type: "varejo local", variant: "ecommerce" as PortfolioMockVariant },
  { title: "Catálogo comercial", type: "vendas por WhatsApp", variant: "landing" as PortfolioMockVariant },
  { title: "Marca própria", type: "vitrine premium", variant: "site" as PortfolioMockVariant },
  { title: "Marketplace local", type: "multi categorias", variant: "portal" as PortfolioMockVariant },
] as const;

const segments = [
  "Moda",
  "Alimentação",
  "Cosméticos",
  "Casa e decoração",
  "Atacado",
  "Negócios regionais",
] as const;

const differentials = [
  { title: "Checkout fluido", text: "menos atrito para comprar", icon: ShoppingCart },
  { title: "Pagamentos", text: "PIX, cartão e gateways", icon: CreditCard },
  { title: "Frete", text: "regras e logística configuradas", icon: Truck },
  { title: "Gestão", text: "painel simples para operar", icon: Package },
  { title: "Promoções", text: "cupons, banners e destaques", icon: Percent },
] as const;

const ecommerceFaqs = [
  {
    question: "Quanto custa criar uma loja virtual profissional?",
    answer:
      "O investimento depende do volume de produtos, meios de pagamento, frete e integrações. A VALGOR envia proposta com escopo, prazo e plano ideal para a operação.",
  },
  {
    question: "A loja já vem com PIX, cartão e painel administrativo?",
    answer:
      "Sim. A estrutura pode incluir checkout, PIX, cartão, painel de produtos, pedidos, banners e cupons conforme o plano contratado.",
  },
  {
    question: "Posso vender pelo celular e receber pedidos no WhatsApp?",
    answer:
      "Sim. A loja é mobile-first e pode combinar checkout online com botões estratégicos de WhatsApp para acelerar atendimento e conversão.",
  },
  {
    question: "A loja virtual ajuda no Google?",
    answer:
      "Sim. Trabalhamos SEO técnico, páginas rápidas, estrutura de categorias e produtos otimizados para melhorar visibilidade orgânica.",
  },
  {
    question: "Vocês integram frete, ERP ou meios de pagamento?",
    answer:
      "Sim. Conforme o plano e a necessidade da operação, a loja pode receber integração com gateways de pagamento, regras de frete, ERP e automações comerciais.",
  },
] as const;

const plans = plansSets.ecommerce;

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-valgor-500 sm:text-sm">
      {children}
    </p>
  );
}

function BlockTitle({
  title,
  description,
  center = true,
}: {
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("mb-7 max-w-3xl", center && "mx-auto text-center")}>
      <h2 className="font-[family-name:var(--font-poppins)] text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {description && <p className="mt-2 text-sm leading-7 text-muted sm:text-base">{description}</p>}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[40rem]">
      <div className="absolute inset-x-10 top-12 h-40 rounded-full bg-valgor-500/12 blur-3xl" aria-hidden />
      <div className="relative rounded-[1.45rem] bg-[#131c2f] p-3 shadow-[0_30px_80px_rgba(15,23,42,0.24)]">
        <div className="overflow-hidden rounded-[1rem] border border-white/10">
          <div className="aspect-[16/10]">
            <PortfolioMock variant="ecommerce" className="h-full w-full" />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 right-3 w-24 rounded-[1.4rem] border border-slate-200 bg-white p-2 shadow-2xl sm:w-32">
        <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-slate-200" />
        <div className="aspect-[9/18] overflow-hidden rounded-[0.9rem] border border-slate-200">
          <PortfolioMock variant="ecommerce" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}

function SeoSupportSection() {
  const seoTopics = [
    "Criação de loja virtual",
    "E-commerce com PIX e cartão",
    "Catálogo e páginas de produto",
    "SEO para Google",
    "Integração com WhatsApp",
    "Frete e painel administrativo",
  ] as const;

  return (
    <Section className="border-t border-border-subtle bg-surface" compact>
      <Container>
        <Reveal>
          <div className="mx-auto max-w-5xl rounded-[1rem] border border-border bg-white p-5 shadow-sm sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-valgor-500">
              Loja virtual em {site.city}
            </p>
            <div className="mt-3 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-3 text-sm leading-7 text-muted">
                <p>
                  A <strong className="text-foreground">VALGOR</strong> desenvolve{" "}
                  <strong className="text-foreground">loja virtual</strong> e{" "}
                  <strong className="text-foreground">e-commerce</strong> para empresas que
                  precisam vender online com mais autonomia, catálogo organizado, checkout seguro,
                  integração com pagamentos e estrutura pronta para performance e conversão.
                </p>
                <p>
                  Isso inclui páginas rápidas, layout responsivo, SEO para produtos, banners,
                  vitrine comercial e integração com WhatsApp para apoiar o crescimento da operação.
                </p>
                <p>
                  Se o objetivo é aumentar pedidos, melhorar presença no Google e centralizar a
                  gestão em um painel simples, a estrutura pode incluir categorias, filtros,
                  páginas de produto, cupons, frete e checkout pensado para celular.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {seoTopics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-subtle"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[0.9rem] border border-border bg-surface p-4">
                <p className="text-sm font-semibold text-foreground">Explore também</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    { href: "/criacao-de-sites", label: "Criação de Sites" },
                    { href: "/seo-otimizacao-de-site", label: "SEO" },
                    { href: "/landing-pages", label: "Landing Pages" },
                    { href: "/criacao-de-sites-e-loja-virtual", label: "Portfólio" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-full border border-border bg-white px-3 py-1.5 text-sm text-muted transition hover:border-valgor-500/30 hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export function CreateStoreLanding({ page }: { page: ServicePageData }) {
  const pageUrl = `${site.url}${page.slug}`;

  return (
    <>
      {page.schemaService && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                serviceJsonLd({
                  name: page.schemaService.name,
                  description: page.schemaService.description,
                  url: pageUrl,
                }),
              ),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                webPageJsonLd({
                  name: page.metaTitle,
                  description: page.description,
                  url: pageUrl,
                }),
              ),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(ecommerceFaqs)) }}
          />
        </>
      )}

      <Section
        bleed="bottom"
        className="overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,102,0,0.08),transparent_28%),linear-gradient(to_bottom,#ffffff,#fffaf7)]"
      >
        <Container className="pt-6 sm:pt-8">
          <div className="grid items-center gap-8 md:grid-cols-[0.92fr_1.08fr]">
            <Reveal className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-muted shadow-sm">
                <Sparkles className="h-4 w-4 text-valgor-500" />
                Loja virtual e e-commerce em {site.city}
              </div>

              <div>
                <h1 className="max-w-xl font-[family-name:var(--font-poppins)] text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.45rem] lg:leading-[1.02]">
                  Criação de loja virtual e{" "}
                  <span className="text-valgor-500">e-commerce para vender mais online</span>.
                </h1>
                <p className="mt-4 max-w-lg text-sm leading-7 text-muted sm:text-base lg:text-[15px]">
                  {page.lead} Estruturamos checkout, pagamentos, catálogo e experiência mobile
                  para sua operação vender com mais controle e menos dependência de marketplace.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href={QUOTE_PATH} className="!rounded-lg !px-5 !py-3">
                  Solicitar orçamento
                </Button>
                <Button
                  href={PORTFOLIO_PATH}
                  variant="secondary"
                  className="!rounded-lg !px-5 !py-3"
                >
                  Ver modelos
                </Button>
              </div>

              <p className="text-sm text-muted">Escopo claro, prazo definido e proposta sem compromisso.</p>

              <div className="flex flex-wrap items-center gap-4 pt-1 sm:gap-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                    <CreditCard className="h-4 w-4 text-valgor-500" />
                  </span>
                  <div className="text-sm text-muted">
                    <strong className="text-foreground">PIX, cartão e checkout</strong>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                    <BadgeCheck className="h-4 w-4 text-valgor-500" />
                  </span>
                  <div className="text-sm text-muted">
                    <strong className="text-foreground">Estrutura pronta para vender 24h</strong>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <HeroVisual />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section compact className="bg-surface">
        <Container>
          <Stagger className="grid gap-3 rounded-[1.1rem] border border-border bg-white p-3 shadow-sm md:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.label}>
                  <div className="flex flex-col items-center rounded-[0.9rem] border border-border/70 bg-white px-3 py-4 text-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-valgor-500/10 text-valgor-500">
                      <Icon className="h-4 w-4" />
                    </div>
                    <strong className="mt-3 font-[family-name:var(--font-poppins)] text-[1.6rem] font-bold text-foreground">
                      {item.value}
                    </strong>
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-subtle">
                      {item.label}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </Section>

      <Section className="border-t border-border-subtle bg-surface-elevated" compact>
        <Container>
          <BlockTitle
            title="Sua operação ainda vende menos do que poderia?"
            description="Uma visão rápida das dores mais comuns e do que a loja virtual certa resolve."
          />

          <div className="grid items-center gap-4 md:grid-cols-2">
            <Reveal className="rounded-[1.1rem] border border-rose-200/70 bg-rose-50/70 p-6 shadow-sm">
              <p className="mb-4 text-sm font-semibold text-rose-500">Problemas comuns</p>
              <ul className="space-y-3">
                {pains.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-muted">
                    <span className="mt-2 h-2 w-2 rounded-full bg-rose-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="rounded-[1.1rem] border border-emerald-200/70 bg-emerald-50/70 p-6 shadow-sm">
              <p className="mb-4 text-sm font-semibold text-emerald-600">A solução VALGOR</p>
              <ul className="space-y-3">
                {solutions.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-muted">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border-subtle bg-surface" compact>
        <Container>
          <BlockTitle
            title="Recursos que fazem a loja funcionar"
            description="Os recursos que mais impactam conversão, operação, SEO e autonomia no e-commerce."
          />

          <Stagger className="grid gap-4 md:grid-cols-4">
            {(page.highlights ?? []).map((item, index) => {
              const icons = [CreditCard, Truck, LayoutGrid, Package] as const;
              const Icon = icons[index] ?? ShoppingBag;
              return (
                <StaggerItem key={item.title}>
                  <div className="flex h-full flex-col rounded-[1rem] border border-border bg-white p-5 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-valgor-500/10 text-valgor-500">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-[family-name:var(--font-poppins)] text-base font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{item.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </Section>

      <Section className="border-t border-border-subtle bg-surface-elevated" compact>
        <Container>
          <BlockTitle
            title="Como funciona o processo"
            description="Quatro passos para colocar a loja no ar com mais clareza."
          />

          <Stagger className="grid gap-4 md:grid-cols-4">
            {processSteps.map((step) => {
              const icons = [MessageCircleMore, LayoutTemplate, Workflow, Rocket] as const;
              const Icon = icons[Number(step.number) - 1] ?? Rocket;
              return (
                <StaggerItem key={step.title}>
                  <div className="flex h-full flex-col items-center rounded-[1rem] border border-border bg-white px-3 py-4 text-center shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-valgor-500/10 text-valgor-500">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
                      {step.number}
                    </span>
                    <h3 className="mt-2 font-[family-name:var(--font-poppins)] text-base font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-muted">{step.text}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </Section>

      <Section className="border-t border-border-subtle bg-surface" compact>
        <Container>
          <BlockTitle
            title="Alguns formatos de loja que desenvolvemos"
            description="Exemplos de apresentação para diferentes tipos de operação."
          />

          <Stagger className="grid gap-4 md:grid-cols-4">
            {showcases.map((item) => (
              <StaggerItem key={item.title}>
                <article className="flex h-full flex-col overflow-hidden rounded-[1rem] border border-border bg-white shadow-sm">
                  <div className="border-b border-border-subtle p-2.5">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[0.85rem]">
                      <div className="absolute inset-0">
                        <PortfolioMock variant={item.variant} className="h-full w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-3.5">
                    <h3 className="h-[2.5rem] font-[family-name:var(--font-poppins)] text-sm font-bold leading-snug text-foreground sm:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-1 h-[2rem] text-xs uppercase tracking-[0.14em] text-subtle">
                      {item.type}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section className="border-t border-border-subtle bg-surface-elevated" compact>
        <Container>
          <BlockTitle
            title="Tipos de negócio que vendem bem online"
            description="Categorias comuns para e-commerce com operação regional ou nacional."
          />

          <Stagger className="grid gap-3 md:grid-cols-6">
            {segments.map((segment, index) => {
              const icons = [ShoppingBag, Store, Package, Sparkles, MapPinned, CreditCard] as const;
              const Icon = icons[index] ?? ShoppingBag;
              return (
                <StaggerItem key={segment}>
                  <div className="flex h-full flex-col items-center rounded-[0.95rem] border border-border bg-white px-2.5 py-4 text-center shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-valgor-500/10 text-valgor-500">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="mt-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-foreground sm:text-sm">
                      {segment}
                    </h3>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </Section>

      <Section id="planos" className="border-t border-border-subtle bg-surface" compact>
        <Container>
          <BlockTitle
            title="Planos para lançar, crescer e escalar"
            description="Escolha a estrutura que faz sentido para o estágio atual da sua loja."
          />

          <div className="grid gap-4 md:grid-cols-3 md:items-stretch">
            {plans.plans.map((plan) => (
              <Reveal key={plan.id}>
                <article
                  className={cn(
                    "relative flex h-full flex-col rounded-[1rem] border bg-white p-5 shadow-sm",
                    plan.featured
                      ? "border-valgor-500/50 -translate-y-1 ring-2 ring-valgor-500/15"
                      : "border-border",
                  )}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-6 rounded-full bg-valgor-500 px-3 py-1 text-xs font-semibold text-white">
                      Mais escolhido
                    </span>
                  )}

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-subtle">
                      {plan.name}
                    </p>
                    <div className="mt-3 flex items-end gap-2">
                      <span className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-foreground sm:text-4xl">
                        {plan.price}
                      </span>
                      <span className="pb-1 text-sm text-muted">/mês</span>
                    </div>
                    <p className="mt-1 text-xs text-subtle">{plan.priceNote}</p>
                  </div>

                  <ul className="mt-5 flex-1 space-y-2.5">
                    {plan.features.slice(0, 6).map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm leading-6 text-muted">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-valgor-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href={QUOTE_PATH}
                    variant={plan.featured ? "primary" : "secondary"}
                    className="mt-6 w-full !rounded-lg"
                  >
                    Contratar plano
                  </Button>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border-subtle bg-surface-elevated" compact>
        <Container>
          <div className="overflow-hidden rounded-[1.1rem] bg-[#121827] px-5 py-6 text-white shadow-sm">
            <div className="mb-5 text-center">
              <SectionEyebrow>Diferenciais</SectionEyebrow>
              <h2 className="mt-2 font-[family-name:var(--font-poppins)] text-2xl font-bold">
                Por que escolher a VALGOR
              </h2>
            </div>

            <Stagger className="grid gap-3 md:grid-cols-5">
              {differentials.map((item) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={item.title}>
                    <div className="flex items-center gap-3 rounded-[0.9rem] border border-white/10 bg-white/5 p-3.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-valgor-500">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="text-xs text-white/70">{item.text}</p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </Container>
      </Section>

      <SeoSupportSection />

      <Section id="faq-criacao-de-loja-virtual" className="border-t border-border-subtle bg-surface" compact>
        <Container>
          <BlockTitle
            title="Perguntas sobre loja virtual"
            description="Respostas rápidas sobre investimento, operação e performance."
          />

          <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              {ecommerceFaqs.map((faq) => (
                <Reveal key={faq.question}>
                  <details className="group rounded-[1rem] border border-border bg-white p-5 shadow-sm">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-foreground sm:text-base">
                      <span>{faq.question}</span>
                      <ChevronDown className="h-5 w-5 shrink-0 text-valgor-500 transition group-open:rotate-180" />
                    </summary>
                    <p className="mt-4 pr-8 text-sm leading-7 text-muted">{faq.answer}</p>
                  </details>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="flex h-full flex-col justify-between rounded-[1rem] border border-border bg-white p-6 shadow-sm">
                <div>
                  <SectionEyebrow>Próximo passo</SectionEyebrow>
                  <h3 className="mt-3 font-[family-name:var(--font-poppins)] text-xl font-bold text-foreground sm:text-2xl">
                    Receba uma proposta clara para sua loja.
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    Indicamos o melhor formato conforme catálogo, logística, pagamentos,
                    integrações e momento da sua operação.
                  </p>
                </div>

                <div className="mt-8 rounded-[0.95rem] border border-border bg-surface p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-valgor-500/10 text-valgor-500">
                      <Store className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Atendimento consultivo</p>
                      <p className="text-sm text-muted">Escopo, prazo e plano ideal.</p>
                    </div>
                  </div>
                  <Button href={QUOTE_PATH} className="mt-5 w-full !rounded-lg">
                    Quero minha proposta
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border-subtle bg-surface-elevated" compact>
        <Container>
          <Reveal>
            <div className="grid items-center gap-6 overflow-hidden rounded-[1.1rem] border border-border bg-gradient-to-r from-valgor-500 via-valgor-600 to-[#131c2f] p-6 text-white shadow-[0_24px_70px_rgba(255,102,0,0.18)] md:grid-cols-[1fr_0.8fr] md:p-8">
              <div>
                <SectionEyebrow>CTA final</SectionEyebrow>
                <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-poppins)] text-2xl font-bold tracking-tight sm:text-3xl">
                  Pronto para lançar ou evoluir sua loja virtual?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
                  Receba escopo, prazo e recomendação do plano ideal para vender online com mais
                  estrutura e autonomia.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    href={QUOTE_PATH}
                    className="!rounded-lg bg-white text-valgor-600 hover:bg-white/90"
                  >
                    Solicitar proposta
                  </Button>
                  <Button
                    href={PORTFOLIO_PATH}
                    variant="secondary"
                    className="!rounded-lg border-white/20 bg-white/10 text-white hover:bg-white/15"
                  >
                    Ver modelos
                  </Button>
                </div>
              </div>

              <div className="mx-auto w-full max-w-sm">
                <div className="rounded-[1.1rem] border border-white/10 bg-black/20 p-3 backdrop-blur">
                  <div className="aspect-[16/10] overflow-hidden rounded-[0.85rem] border border-white/10">
                    <PortfolioMock variant="ecommerce" className="h-full w-full" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
