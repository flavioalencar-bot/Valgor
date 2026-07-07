import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { PortfolioMock, type PortfolioMockVariant } from "@/components/visuals/PortfolioMock";
import { PORTFOLIO_PATH, QUOTE_PATH } from "@/lib/conversion";
import { faqsForPath } from "@/lib/keywords";
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
  Check,
  ChevronDown,
  Clock3,
  LayoutTemplate,
  MessageCircleMore,
  MonitorSmartphone,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const landingPagesFaqs = faqsForPath("/landing-pages") ?? [];

const stats = [
  { value: "1 CTA", label: "foco por página", icon: LayoutTemplate },
  { value: "7-15 dias", label: "prazo médio", icon: Clock3 },
  { value: "100%", label: "pensada para celular", icon: MonitorSmartphone },
  { value: "Pixel + UTM", label: "rastreamento configurado", icon: BarChart3 },
] as const;

const pains = [
  "Cliques chegando, mas poucos contatos.",
  "Campanha levando para página genérica demais.",
  "Formulário fraco ou CTA escondido.",
  "Sem pixel, UTM ou medição de conversão.",
] as const;

const solutions = [
  "Headline clara com oferta e ação principal.",
  "Copy curta e comercial, sem distrações.",
  "Formulário, WhatsApp e CTA distribuídos com lógica.",
  "Rastreamento técnico para medir resultado real.",
] as const;

const processSteps = [
  { number: "01", title: "Entendemos a campanha", text: "Oferta, público e objetivo comercial.", icon: MessageCircleMore },
  { number: "02", title: "Montamos a estrutura", text: "Headline, seções, prova e CTA.", icon: LayoutTemplate },
  { number: "03", title: "Configuramos o rastreamento", text: "Pixels, UTMs e eventos.", icon: Workflow },
  { number: "04", title: "Publicamos para converter", text: "Página no ar com suporte.", icon: Rocket },
] as const;

const showcases = [
  { title: "Captação local", type: "Google Ads", variant: "landing" as PortfolioMockVariant },
  { title: "Oferta por WhatsApp", type: "Lead page", variant: "landing" as PortfolioMockVariant },
  { title: "Lançamento premium", type: "High ticket", variant: "premium" as PortfolioMockVariant },
  { title: "Campanha segmentada", type: "Conversão mobile", variant: "ecommerce" as PortfolioMockVariant },
] as const;

const segments = [
  { title: "Google Ads", text: "página alinhada à palavra-chave", icon: Search },
  { title: "Meta Ads", text: "copy direta para tráfego social", icon: Sparkles },
  { title: "WhatsApp", text: "contato rápido com menos atrito", icon: MessageCircleMore },
  { title: "Lançamentos", text: "oferta com urgência e prova", icon: Rocket },
] as const;

const differentials = [
  { title: "Conversão", text: "uma página, um objetivo", icon: BadgeCheck },
  { title: "Velocidade", text: "página leve e responsiva", icon: Rocket },
  { title: "Rastreamento", text: "pixels, UTMs e eventos", icon: BarChart3 },
  { title: "Mobile", text: "experiência pensada para celular", icon: MonitorSmartphone },
  { title: "Suporte", text: "ajustes e publicação com clareza", icon: ShieldCheck },
] as const;

function SectionEyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.2em] text-valgor-500 sm:text-sm">{children}</p>;
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
            <PortfolioMock variant="landing" className="h-full w-full" />
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
  const seoTopics = [
    "Landing page para Google Ads",
    "Landing page para Meta Ads",
    "Pixel e UTM",
    "Geração de leads",
    "Formulário + WhatsApp",
    "Mobile first",
  ] as const;

  return (
    <Section className="border-t border-border-subtle bg-surface" compact>
      <Container>
        <Reveal>
          <div className="mx-auto max-w-5xl rounded-[1rem] border border-border bg-white p-5 shadow-sm sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-valgor-500">
              Landing pages em {site.city}
            </p>
            <div className="mt-3 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-3 text-sm leading-7 text-muted">
                <p>
                  A <strong className="text-foreground">VALGOR</strong> cria{" "}
                  <strong className="text-foreground">landing pages</strong> para campanhas de{" "}
                  <strong className="text-foreground">Google Ads</strong>,{" "}
                  <strong className="text-foreground">Meta Ads</strong> e captação comercial com
                  foco em conversão, velocidade e clareza da oferta.
                </p>
                <p>
                  A estrutura pode incluir headline, copy curta, formulário, WhatsApp, prova social,
                  integração com pixels, UTMs e eventos para medir contatos e otimizar o tráfego.
                </p>
                <p>
                  Se a meta é gerar mais leads com menos desperdício de clique, a landing precisa
                  reduzir distrações e conduzir o visitante para uma única ação principal.
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

export function LandingPagesLanding({ page }: { page: ServicePageData }) {
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
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(landingPagesFaqs)) }}
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
                Landing pages para campanhas em {site.city}
              </div>

              <div>
                <h1 className="max-w-xl font-[family-name:var(--font-poppins)] text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.45rem] lg:leading-[1.02]">
                  Landing pages para{" "}
                  <span className="text-valgor-500">Google Ads e Meta Ads</span> que geram mais
                  contatos.
                </h1>
                <p className="mt-4 max-w-lg text-sm leading-7 text-muted sm:text-base lg:text-[15px]">
                  {page.lead} Estruturamos oferta, copy, formulário e rastreamento para transformar
                  clique em lead com menos distração e mais clareza comercial.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href={QUOTE_PATH} className="!rounded-lg !px-5 !py-3">
                  Solicitar orçamento
                </Button>
                <Button href={PORTFOLIO_PATH} variant="secondary" className="!rounded-lg !px-5 !py-3">
                  Ver modelos
                </Button>
              </div>

              <p className="text-sm text-muted">Escopo claro, prazo definido e proposta sem compromisso.</p>

              <div className="flex flex-wrap items-center gap-4 pt-1 sm:gap-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                    <Search className="h-4 w-4 text-valgor-500" />
                  </span>
                  <div className="text-sm text-muted">
                    <strong className="text-foreground">Google Ads e Meta Ads</strong>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                    <BadgeCheck className="h-4 w-4 text-valgor-500" />
                  </span>
                  <div className="text-sm text-muted">
                    <strong className="text-foreground">Rastreamento pronto para campanha</strong>
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
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-subtle">{item.label}</p>
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
            title="Sua campanha está levando tráfego, mas não está convertendo?"
            description="Uma landing page certa reduz distrações e direciona o clique para uma única ação."
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
            title="O que não pode faltar na sua landing"
            description="Os elementos que mais impactam campanha, medição e geração de leads."
          />

          <Stagger className="grid gap-4 md:grid-cols-4">
            {(page.highlights ?? []).map((item, index) => {
              const icons = [BadgeCheck, BarChart3, Clock3, MonitorSmartphone] as const;
              const Icon = icons[index] ?? Sparkles;
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
            description="Quatro passos para colocar a campanha no ar com mais velocidade e clareza."
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

      <Section className="border-t border-border-subtle bg-surface" compact>
        <Container>
          <BlockTitle
            title="Alguns modelos de landing que desenvolvemos"
            description="Exemplos de apresentação para campanhas, captação e oferta direta."
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
                    <p className="mt-1 h-[2rem] text-xs uppercase tracking-[0.14em] text-subtle">{item.type}</p>
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

      <Section className="border-t border-border-subtle bg-surface-elevated" compact>
        <Container>
          <BlockTitle
            title="Onde a landing funciona melhor"
            description="Cenários clássicos em que uma página enxuta converte melhor que um site genérico."
          />

          <Stagger className="grid gap-4 md:grid-cols-4">
            {segments.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <div className="flex h-full flex-col rounded-[1rem] border border-border bg-white p-5 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-valgor-500/10 text-valgor-500">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-[family-name:var(--font-poppins)] text-base font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{item.text}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
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

      <Section id="faq-landing-pages" className="border-t border-border-subtle bg-surface-elevated" compact>
        <Container>
          <BlockTitle
            title={page.faqHeader?.title ?? "Perguntas frequentes"}
            description={page.faqHeader?.description}
          />

          <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              {landingPagesFaqs.map((faq) => (
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
                    Receba uma proposta clara para sua landing.
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    Indicamos a melhor estrutura conforme oferta, tráfego, canal de anúncio e
                    objetivo de conversão.
                  </p>
                </div>

                <div className="mt-8 rounded-[0.95rem] border border-border bg-surface p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-valgor-500/10 text-valgor-500">
                      <MessageCircleMore className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Atendimento consultivo</p>
                      <p className="text-sm text-muted">Escopo, prazo e proposta sem compromisso.</p>
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

      <Section className="border-t border-border-subtle bg-surface" compact>
        <Container>
          <Reveal>
            <div className="grid items-center gap-6 overflow-hidden rounded-[1.1rem] border border-border bg-gradient-to-r from-valgor-500 via-valgor-600 to-[#131c2f] p-6 text-white shadow-[0_24px_70px_rgba(255,102,0,0.18)] md:grid-cols-[1fr_0.8fr] md:p-8">
              <div>
                <SectionEyebrow>CTA final</SectionEyebrow>
                <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-poppins)] text-2xl font-bold tracking-tight sm:text-3xl">
                  Pronto para transformar tráfego em contato?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
                  Receba escopo, prazo e recomendação da melhor landing para sua oferta e campanha.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={QUOTE_PATH} className="!rounded-lg bg-white text-valgor-600 hover:bg-white/90">
                    Quero minha landing
                  </Button>
                  <Button
                    href={site.whatsapp}
                    variant="secondary"
                    className="!rounded-lg border-white/20 bg-white/10 text-white hover:bg-white/15"
                  >
                    Falar no WhatsApp
                  </Button>
                </div>
              </div>

              <div className="mx-auto w-full max-w-sm">
                <div className="rounded-[1.1rem] border border-white/10 bg-black/20 p-3 backdrop-blur">
                  <div className="aspect-[16/10] overflow-hidden rounded-[0.85rem] border border-white/10">
                    <PortfolioMock variant="landing" className="h-full w-full" />
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
