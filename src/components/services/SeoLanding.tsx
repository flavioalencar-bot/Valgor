import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { PortfolioMock, type PortfolioMockVariant } from "@/components/visuals/PortfolioMock";
import { PORTFOLIO_PATH, QUOTE_PATH, VALGOR_SCORE_PATH } from "@/lib/conversion";
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
  MapPinned,
  MessageCircleMore,
  MonitorSmartphone,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const seoFaqs = faqsForPath("/seo-otimizacao-de-site") ?? [];

const stats = [
  { value: "Google + Maps", label: "visibilidade local", icon: MapPinned },
  { value: "Core Web Vitals", label: "performance técnica", icon: MonitorSmartphone },
  { value: "Auditoria", label: "prioridades claras", icon: Search },
  { value: "Relatórios", label: "evolução contínua", icon: BarChart3 },
] as const;

const pains = [
  "Seu site não aparece quando o cliente pesquisa no Google.",
  "Google Meu Negócio sem força local ou sem estratégia.",
  "Site lento, páginas fracas ou estrutura técnica ruim.",
  "Pouco tráfego orgânico e baixa geração de contatos.",
] as const;

const solutions = [
  "Auditoria técnica e plano de prioridade por impacto.",
  "SEO local com foco em São José do Rio Preto e região.",
  "Melhoria de performance, estrutura e páginas estratégicas.",
  "Conteúdo, palavras-chave e medição para crescimento contínuo.",
] as const;

const processSteps = [
  { number: "01", title: "Auditamos o cenário", text: "Site, concorrência, palavras-chave e oportunidades.", icon: Search },
  { number: "02", title: "Definimos prioridades", text: "SEO técnico, local, conteúdo e páginas-chave.", icon: Workflow },
  { number: "03", title: "Executamos as melhorias", text: "Estrutura, performance, conteúdo e sinais locais.", icon: Rocket },
  { number: "04", title: "Acompanhamos evolução", text: "Tráfego, posições e próximas ações.", icon: BarChart3 },
] as const;

const showcases = [
  { title: "SEO local", type: "google meu negócio", variant: "site" as PortfolioMockVariant },
  { title: "Página estratégica", type: "serviço com intenção", variant: "landing" as PortfolioMockVariant },
  { title: "Conteúdo otimizado", type: "tráfego orgânico", variant: "portal" as PortfolioMockVariant },
  { title: "Performance técnica", type: "core web vitals", variant: "ecommerce" as PortfolioMockVariant },
] as const;

const segments = [
  { title: "SEO técnico", text: "estrutura, indexação e rastreabilidade", icon: ShieldCheck },
  { title: "SEO local", text: "google maps e presença regional", icon: MapPinned },
  { title: "Conteúdo", text: "páginas e termos com intenção real", icon: MessageCircleMore },
  { title: "Performance", text: "velocidade e experiência mobile", icon: MonitorSmartphone },
] as const;

const differentials = [
  { title: "Diagnóstico", text: "prioridade real por impacto", icon: Search },
  { title: "Local", text: "foco em buscas regionais", icon: MapPinned },
  { title: "Técnico", text: "estrutura, indexação e Core Web Vitals", icon: ShieldCheck },
  { title: "Conteúdo", text: "palavras-chave com contexto comercial", icon: Sparkles },
  { title: "Medição", text: "tráfego, páginas e evolução", icon: BarChart3 },
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
      <div className="absolute inset-x-10 top-12 h-40 rounded-full bg-emerald-500/12 blur-3xl" aria-hidden />
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
  const seoTopics = [
    "SEO para sites",
    "Google Meu Negócio",
    "Core Web Vitals",
    "SEO local",
    "Palavras-chave",
    "Tráfego orgânico",
  ] as const;

  return (
    <Section className="border-t border-border-subtle bg-surface" compact>
      <Container>
        <Reveal>
          <div className="mx-auto max-w-5xl rounded-[1rem] border border-border bg-white p-5 shadow-sm sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              SEO em {site.city}
            </p>
            <div className="mt-3 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-3 text-sm leading-7 text-muted">
                <p>
                  A <strong className="text-foreground">VALGOR</strong> faz{" "}
                  <strong className="text-foreground">SEO para sites</strong>,{" "}
                  <strong className="text-foreground">SEO local</strong> e otimização de{" "}
                  <strong className="text-foreground">Google Meu Negócio</strong> para empresas que
                  querem mais visibilidade, mais tráfego orgânico e mais contatos recorrentes.
                </p>
                <p>
                  O trabalho pode incluir auditoria técnica, melhorias em performance, Core Web
                  Vitals, estrutura de páginas, palavras-chave, conteúdo e reforço de presença
                  regional no Google e no Maps.
                </p>
                <p>
                  Se o site já existe e não traz resultado, SEO ajuda a corrigir a base técnica e
                  construir crescimento orgânico com intenção de busca mais qualificada.
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
                    { href: "/landing-pages", label: "Landing Pages" },
                    { href: "/criacao-de-loja-virtual", label: "Loja Virtual" },
                    { href: "/criacao-de-sites-e-loja-virtual", label: "Portfólio" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-full border border-border bg-white px-3 py-1.5 text-sm text-muted transition hover:border-emerald-500/30 hover:text-foreground"
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

export function SeoLanding({ page }: { page: ServicePageData }) {
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
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(seoFaqs)) }}
          />
        </>
      )}

      <Section
        bleed="bottom"
        className="overflow-hidden bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.10),transparent_28%),linear-gradient(to_bottom,#ffffff,#f7fffb)]"
      >
        <Container className="pt-6 sm:pt-8">
          <div className="grid items-center gap-8 md:grid-cols-[0.92fr_1.08fr]">
            <Reveal className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-muted shadow-sm">
                <Sparkles className="h-4 w-4 text-emerald-600" />
                SEO para sites em {site.city}
              </div>

              <div>
                <h1 className="max-w-xl font-[family-name:var(--font-poppins)] text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.45rem] lg:leading-[1.02]">
                  SEO para sites e{" "}
                  <span className="text-emerald-600">Google Meu Negócio</span> que geram mais contatos.
                </h1>
                <p className="mt-4 max-w-lg text-sm leading-7 text-muted sm:text-base lg:text-[15px]">
                  {page.lead} Estruturamos auditoria, performance, páginas estratégicas e SEO local
                  para aumentar visibilidade orgânica com prioridade clara e foco em geração de
                  contatos.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href={QUOTE_PATH} className="!rounded-lg !px-5 !py-3">
                  Solicitar orçamento
                </Button>
                <Button href={VALGOR_SCORE_PATH} variant="secondary" className="!rounded-lg !px-5 !py-3">
                  Fazer diagnóstico
                </Button>
              </div>

              <p className="text-sm text-muted">Escopo claro, prioridade técnica e proposta sem compromisso.</p>

              <div className="flex flex-wrap items-center gap-4 pt-1 sm:gap-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                    <MapPinned className="h-4 w-4 text-emerald-600" />
                  </span>
                  <div className="text-sm text-muted">
                    <strong className="text-foreground">SEO local e Google Maps</strong>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  </span>
                  <div className="text-sm text-muted">
                    <strong className="text-foreground">Performance e estrutura técnica</strong>
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                      <Icon className="h-4 w-4" />
                    </div>
                    <strong className="mt-3 font-[family-name:var(--font-poppins)] text-[1.45rem] font-bold text-foreground">
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
            title="Seu site existe, mas ainda não aparece no Google como deveria?"
            description="SEO ajuda a corrigir base técnica, reforçar presença local e gerar demanda recorrente."
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
            title="Onde o SEO mais impacta"
            description="Os pilares que mais influenciam visibilidade, performance e geração de contatos."
          />

          <Stagger className="grid gap-4 md:grid-cols-4">
            {segments.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <div className="flex h-full flex-col rounded-[1rem] border border-border bg-white p-5 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
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

      <Section className="border-t border-border-subtle bg-surface-elevated" compact>
        <Container>
          <BlockTitle
            title="Como funciona o processo"
            description="Quatro etapas para sair do achismo e construir crescimento orgânico com prioridade."
          />

          <Stagger className="grid gap-4 md:grid-cols-4">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.title}>
                  <div className="flex h-full flex-col items-center rounded-[1rem] border border-border bg-white px-3 py-4 text-center shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
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
            title="Onde o SEO pode destravar resultado"
            description="Áreas comuns em que SEO técnico, local e conteúdo ajudam a crescer."
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
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:underline"
            >
              Ver todos os projetos
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border-subtle bg-surface-elevated" compact>
        <Container>
          <div className="overflow-hidden rounded-[1.1rem] bg-[#102019] px-5 py-6 text-white shadow-sm">
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
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-emerald-400">
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

      <Section id="faq-seo-otimizacao" className="border-t border-border-subtle bg-surface" compact>
        <Container>
          <BlockTitle
            title={page.faqHeader?.title ?? "Perguntas sobre SEO"}
            description={page.faqHeader?.description ?? "Respostas rápidas sobre prazo, SEO local e evolução orgânica."}
          />

          <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              {seoFaqs.map((faq) => (
                <Reveal key={faq.question}>
                  <details className="group rounded-[1rem] border border-border bg-white p-5 shadow-sm">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-foreground sm:text-base">
                      <span>{faq.question}</span>
                      <ChevronDown className="h-5 w-5 shrink-0 text-emerald-600 transition group-open:rotate-180" />
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
                    Receba um diagnóstico claro do seu cenário.
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    Indicamos prioridades conforme estrutura do site, busca local, conteúdo e metas
                    de geração de contatos.
                  </p>
                </div>

                <div className="mt-8 rounded-[0.95rem] border border-border bg-surface p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                      <MessageCircleMore className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Atendimento consultivo</p>
                      <p className="text-sm text-muted">Escopo, prioridade e proposta sem compromisso.</p>
                    </div>
                  </div>
                  <Button href={VALGOR_SCORE_PATH} className="mt-5 w-full !rounded-lg">
                    Quero diagnóstico
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
            <div className="grid items-center gap-6 overflow-hidden rounded-[1.1rem] border border-border bg-gradient-to-r from-emerald-600 via-emerald-700 to-[#102019] p-6 text-white shadow-[0_24px_70px_rgba(16,185,129,0.18)] md:grid-cols-[1fr_0.8fr] md:p-8">
              <div>
                <SectionEyebrow>CTA final</SectionEyebrow>
                <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-poppins)] text-2xl font-bold tracking-tight sm:text-3xl">
                  Pronto para aparecer melhor no Google?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
                  Receba prioridades, prazo e recomendação do melhor caminho para SEO técnico, local
                  e evolução orgânica.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={QUOTE_PATH} className="!rounded-lg bg-white text-emerald-700 hover:bg-white/90">
                    Quero melhorar meu SEO
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
