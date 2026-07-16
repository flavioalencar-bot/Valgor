import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { PortfolioMock, type PortfolioMockVariant } from "@/components/visuals/PortfolioMock";
import { PORTFOLIO_PATH, QUOTE_PATH, VALGOR_SCORE_PATH } from "@/lib/conversion";
import { criacaoDeSitesFaqs } from "@/lib/keywords";
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
  BarChart3,
  Building2,
  Check,
  ChevronDown,
  Clock3,
  Globe,
  GraduationCap,
  LayoutTemplate,
  MessageCircleMore,
  MonitorSmartphone,
  PhoneCall,
  Rocket,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Store,
  UtensilsCrossed,
  Workflow,
} from "lucide-react";

const stats = [
  { value: "+150", label: "Projetos entregues", icon: BarChart3 },
  { value: "99,9%", label: "Disponibilidade", icon: ShieldCheck },
  { value: "5 dias", label: "Prazo médio", icon: Clock3 },
  { value: "100%", label: "Responsivos", icon: MonitorSmartphone },
] as const;

const problems = [
  "Site visualmente antigo e sem confiança",
  "Pouca geração de contatos pelo Google",
  "Concorrentes aparecendo melhor",
  "Dependência de indicação ou Instagram",
] as const;

const solutions = [
  "Layout premium e profissional",
  "SEO técnico desde o lançamento",
  "Estrutura comercial com CTA forte",
  "Site rápido, responsivo e atualizado",
] as const;

const processSteps = [
  { number: "01", title: "Conversamos", text: "Entendemos seu objetivo.", icon: MessageCircleMore },
  { number: "02", title: "Criamos o projeto", text: "Estrutura, visual e páginas.", icon: LayoutTemplate },
  { number: "03", title: "Desenvolvemos", text: "Código, SEO e performance.", icon: Workflow },
  { number: "04", title: "Publicamos", text: "Domínio, SSL e suporte.", icon: Rocket },
] as const;

const projects = [
  { title: "Residência Premium", type: "site institucional", variant: "site" as PortfolioMockVariant },
  { title: "Burger House", type: "site para restaurante", variant: "landing" as PortfolioMockVariant },
  { title: "Clínica Saúde", type: "site para clínica", variant: "ecommerce" as PortfolioMockVariant },
  { title: "Indústria Forte", type: "site corporativo", variant: "imoveis" as PortfolioMockVariant },
] as const;

const segments = [
  { title: "Clínicas", icon: Stethoscope },
  { title: "Restaurantes", icon: UtensilsCrossed },
  { title: "Empresas", icon: Building2 },
  { title: "Sites", icon: Globe },
  { title: "Escolas", icon: GraduationCap },
  { title: "Orçamentos", icon: PhoneCall },
] as const;

const differentials = [
  { title: "Atendimento", text: "humanizado", icon: MessageCircleMore },
  { title: "Sites rápidos", text: "e seguros", icon: Rocket },
  { title: "SEO", text: "técnico incluso", icon: Sparkles },
  { title: "Suporte", text: "contínuo", icon: ShieldCheck },
  { title: "Projeto", text: "justo e transparente", icon: BadgeCheck },
] as const;

const plans = plansSets.site;

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
            <PortfolioMock variant="site" className="h-full w-full" />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 right-3 w-24 rounded-[1.4rem] border border-slate-200 bg-white p-2 shadow-2xl sm:w-32">
        <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-slate-200" />
        <div className="aspect-[9/18] overflow-hidden rounded-[0.9rem] border border-slate-200">
          <PortfolioMock variant="landing" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}

function SeoSupportSection() {
  return (
    <Section className="border-t border-border-subtle bg-surface" compact>
      <Container>
        <Reveal>
          <div className="mx-auto max-w-5xl rounded-[1rem] border border-border bg-white p-5 shadow-sm sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-valgor-500">
              Criação de sites em {site.city}
            </p>
            <div className="mt-3 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-3 text-sm leading-7 text-muted">
                <p>
                  A <strong className="text-foreground">VALGOR</strong> cria{" "}
                  <strong className="text-foreground">site profissional</strong>,{" "}
                  <strong className="text-foreground">site empresarial</strong>,{" "}
                  <strong className="text-foreground">site institucional</strong> e{" "}
                  <strong className="text-foreground">landing page</strong> para empresas que
                  querem aparecer melhor no Google, transmitir mais confiança e gerar contatos com
                  estrutura comercial, SEO técnico, WhatsApp, formulários e performance.
                </p>
                <p>
                  Se o seu projeto precisa de mais profundidade, também desenvolvemos páginas
                  focadas em campanhas, lojas virtuais e otimização contínua para busca orgânica.
                </p>
              </div>

              <div className="rounded-[0.9rem] border border-border bg-surface p-4">
                <p className="text-sm font-semibold text-foreground">Explore também</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    { href: "/landing-pages", label: "Landing Pages" },
                    { href: "/criacao-de-loja-virtual", label: "Loja Virtual" },
                    { href: "/seo-otimizacao-de-site", label: "SEO" },
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

export function CreateSitesLanding({ page }: { page: ServicePageData }) {
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
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(criacaoDeSitesFaqs)) }}
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
                Criação de sites profissionais em {site.city}
              </div>

              <div>
                <h1 className="max-w-xl font-[family-name:var(--font-poppins)] text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.45rem] lg:leading-[1.02]">
                  Criação de sites em{" "}
                  <span className="text-valgor-500">São José do Rio Preto</span> que geram
                  resultados no Google.
                </h1>
                <p className="mt-4 max-w-lg text-sm leading-7 text-muted sm:text-base lg:text-[15px]">
                  {page.lead} Desenvolvemos sites premium, rápidos e orientados para conversão,
                  com SEO técnico e experiência mais profissional.{" "}
                  <Link
                    href="/criacao-de-sites-em-sao-jose-do-rio-preto"
                    className="font-medium text-valgor-600 underline-offset-2 hover:underline dark:text-valgor-400"
                  >
                    Ver página local de Rio Preto
                  </Link>
                  .
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href={QUOTE_PATH} className="!rounded-lg !px-5 !py-3">
                  Solicitar orçamento
                </Button>
                <Button
                  href={VALGOR_SCORE_PATH}
                  variant="secondary"
                  className="!rounded-lg !px-5 !py-3"
                >
                  Fazer diagnóstico
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1 sm:gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["A", "B", "C"].map((letter) => (
                      <span
                        key={letter}
                        className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#ffe7d6] text-[10px] font-bold text-valgor-600"
                      >
                        {letter}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-muted">
                    <strong className="text-foreground">Empresas atendidas</strong>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                    <BadgeCheck className="h-4 w-4 text-valgor-500" />
                  </span>
                  <div className="text-sm text-muted">
                    <strong className="text-foreground">5.0 no Google</strong>
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
                    <strong className="mt-3 font-[family-name:var(--font-poppins)] text-[1.85rem] font-bold text-foreground">
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
            title="Seu site atual está te impedindo de crescer?"
            description="Uma comparação simples entre um site comum e uma solução pensada para gerar resultado."
          />

          <div className="grid items-center gap-4 md:grid-cols-2">
            <Reveal className="rounded-[1.1rem] border border-rose-200/70 bg-rose-50/70 p-6 shadow-sm">
              <p className="mb-4 text-sm font-semibold text-rose-500">Problemas comuns</p>
              <ul className="space-y-3">
                {problems.map((item) => (
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
            title="Como funciona o processo"
            description="Quatro passos para sair da ideia e colocar o site no ar."
          />

          <Stagger className="grid gap-4 md:grid-cols-4">
            {processSteps.map((step) => {
              const Icon = step.icon;
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

      <Section className="border-t border-border-subtle bg-surface-elevated" compact>
        <Container>
          <BlockTitle
            title="Conheça alguns projetos"
            description="Uma seleção de exemplos com visual mais próximo do layout de referência."
          />

          <Stagger className="grid gap-4 md:grid-cols-4">
            {projects.map((project) => (
              <StaggerItem key={project.title}>
                <article className="flex h-full flex-col overflow-hidden rounded-[1rem] border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="aspect-[16/10] border-b border-border-subtle p-2.5">
                    <PortfolioMock variant={project.variant} className="h-full w-full" />
                  </div>
                  <div className="p-3.5">
                    <h3 className="font-[family-name:var(--font-poppins)] text-sm font-bold text-foreground sm:text-base">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-subtle">
                      {project.type}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-5 text-center">
            <a
              href={PORTFOLIO_PATH}
              className="inline-flex items-center gap-2 text-sm font-semibold text-valgor-500 hover:underline"
            >
              Ver todos os projetos
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border-subtle bg-surface" compact>
        <Container>
          <BlockTitle
            title="Atendemos diversos segmentos"
            description="Bloco enxuto com ícones e leitura rápida."
          />

          <Stagger className="grid gap-3 md:grid-cols-6">
            {segments.map((segment) => {
              const Icon = segment.icon;
              return (
                <StaggerItem key={segment.title}>
                  <div className="flex h-full flex-col items-center rounded-[0.95rem] border border-border bg-white px-2.5 py-4 text-center shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-valgor-500/10 text-valgor-500">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="mt-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-foreground sm:text-sm">
                      {segment.title}
                    </h3>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </Section>

      <Section id="planos" className="border-t border-border-subtle bg-surface-elevated" compact>
        <Container>
          <BlockTitle
            title="Planos que cabem no seu negócio"
            description="Três opções claras, com destaque real para o plano central."
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
                      Plano Profissional
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

      <Section className="border-t border-border-subtle bg-surface" compact>
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

      <Section id="faq-criacao-de-sites" className="border-t border-border-subtle bg-surface-elevated" compact>
        <Container>
          <BlockTitle
            title={page.faqHeader?.title ?? "Perguntas frequentes"}
            description={page.faqHeader?.description}
          />

          <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              {criacaoDeSitesFaqs.map((faq) => (
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
                  <SectionEyebrow>Ainda tem dúvida?</SectionEyebrow>
                  <h3 className="mt-3 font-[family-name:var(--font-poppins)] text-xl font-bold text-foreground sm:text-2xl">
                    Fale com a VALGOR e receba uma orientação rápida.
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    Nós ajudamos a definir o melhor formato, prazo e faixa de investimento para o
                    seu momento.
                  </p>
                </div>

                <div className="mt-8 rounded-[0.95rem] border border-border bg-surface p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-valgor-500/10 text-valgor-500">
                      <Store className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Atendimento consultivo</p>
                      <p className="text-sm text-muted">Retorno pelo WhatsApp ou proposta.</p>
                    </div>
                  </div>
                  <Button href={QUOTE_PATH} className="mt-5 w-full !rounded-lg">
                    Falar com especialista
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border-subtle bg-surface" compact>
        <Container>
          <Reveal>
            <div className="grid items-center gap-6 overflow-hidden rounded-[1.1rem] border border-border bg-gradient-to-r from-valgor-500 via-valgor-600 to-[#131c2f] p-6 text-white shadow-[0_24px_70px_rgba(255,102,0,0.18)] md:grid-cols-[1fr_0.8fr] md:p-8">
              <div>
                <SectionEyebrow>CTA final</SectionEyebrow>
                <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-poppins)] text-2xl font-bold tracking-tight sm:text-3xl">
                  Pronto para ter um site que realmente gere resultados?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
                  Receba uma proposta clara com escopo, prazo e recomendação do melhor formato
                  para a sua empresa.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    href={QUOTE_PATH}
                    className="!rounded-lg bg-white text-valgor-600 hover:bg-white/90"
                  >
                    Solicitar orçamento
                  </Button>
                  <Button
                    href={site.whatsapp}
                    variant="secondary"
                    className="!rounded-lg border-white/20 bg-white/10 text-white hover:bg-white/15"
                  >
                    Falar pelo WhatsApp
                  </Button>
                </div>
              </div>

              <div className="mx-auto w-full max-w-sm">
                <div className="rounded-[1.1rem] border border-white/10 bg-black/20 p-3 backdrop-blur">
                  <div className="aspect-[16/10] overflow-hidden rounded-[0.85rem] border border-white/10">
                    <PortfolioMock variant="site" className="h-full w-full" />
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
