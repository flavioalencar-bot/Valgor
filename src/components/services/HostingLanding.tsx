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
  Check,
  ChevronDown,
  Database,
  Globe,
  HardDrive,
  Lock,
  MessageCircleMore,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const hostingFaqs = faqsForPath("/hospedagem") ?? [];

const stats = [
  { value: "99,9%", label: "disponibilidade", icon: Server },
  { value: "SSL", label: "segurança ativa", icon: Lock },
  { value: "Backups", label: "recuperação rápida", icon: Database },
  { value: "Suporte", label: "acompanhamento técnico", icon: MessageCircleMore },
] as const;

const pains = [
  "Site lento, instável ou fora do ar em momentos críticos.",
  "Certificado SSL, domínio ou e-mails sem gestão clara.",
  "Sem backup confiável ou plano de recuperação.",
  "Dependência de suporte demorado quando algo quebra.",
] as const;

const solutions = [
  "Hospedagem estável com estrutura pronta para crescer.",
  "SSL, domínio, monitoramento e rotina técnica organizados.",
  "Backups e recuperação pensados para reduzir risco.",
  "Suporte consultivo para incidentes, ajustes e evolução.",
] as const;

const processSteps = [
  { number: "01", title: "Mapeamos o cenário", text: "Site, domínio, e-mails, SSL e risco atual.", icon: MessageCircleMore },
  { number: "02", title: "Montamos a estrutura", text: "Servidor, segurança, backups e performance.", icon: Server },
  { number: "03", title: "Migramos e validamos", text: "Publicação com testes e checagem técnica.", icon: Workflow },
  { number: "04", title: "Monitoramos e apoiamos", text: "Acompanhamento contínuo e suporte.", icon: ShieldCheck },
] as const;

const showcases = [
  { title: "Site institucional", type: "estrutura estável", variant: "site" as PortfolioMockVariant },
  { title: "Landing page", type: "campanha no ar", variant: "landing" as PortfolioMockVariant },
  { title: "Loja virtual", type: "performance e checkout", variant: "ecommerce" as PortfolioMockVariant },
  { title: "Portal de conteúdo", type: "mais páginas e tráfego", variant: "portal" as PortfolioMockVariant },
] as const;

const segments = [
  { title: "Segurança", text: "ssl, proteção e rotinas técnicas", icon: Lock },
  { title: "Performance", text: "cache, velocidade e estabilidade", icon: Rocket },
  { title: "Backups", text: "recuperação e redundância", icon: HardDrive },
  { title: "Suporte", text: "resposta e manutenção contínua", icon: MessageCircleMore },
] as const;

const differentials = [
  { title: "Estrutura", text: "cloud e ambiente estável", icon: Server },
  { title: "Segurança", text: "ssl, backups e monitoramento", icon: ShieldCheck },
  { title: "Velocidade", text: "performance para o site carregar bem", icon: Rocket },
  { title: "Migração", text: "apoio para sair do ambiente antigo", icon: Workflow },
  { title: "Suporte", text: "time acessível para ajustes e incidentes", icon: BadgeCheck },
] as const;

const supportHighlights = [
  "Diagnóstico técnico e indicação do melhor cenário.",
  "Migração, SSL, backups e acompanhamento contínuo.",
] as const;

function SectionEyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 sm:text-sm">{children}</p>;
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
      <div className="absolute inset-x-10 top-12 h-40 rounded-full bg-cyan-500/12 blur-3xl" aria-hidden />
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
    "Hospedagem de sites",
    "SSL e domínio",
    "Cloud e performance",
    "Backups",
    "Suporte técnico",
    "Site seguro",
  ] as const;

  return (
    <Section className="border-t border-border-subtle bg-surface" compact>
      <Container>
        <Reveal>
          <div className="mx-auto max-w-5xl rounded-[1rem] border border-border bg-white p-5 shadow-sm sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Hospedagem em {site.city}
            </p>
            <div className="mt-3 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-3 text-sm leading-7 text-muted">
                <p>
                  A <strong className="text-foreground">VALGOR</strong> oferece{" "}
                  <strong className="text-foreground">hospedagem de sites</strong>,{" "}
                  <strong className="text-foreground">SSL</strong>, domínio, backups e suporte para
                  empresas que precisam manter o site rápido, seguro e disponível.
                </p>
                <p>
                  A estrutura pode incluir ambiente cloud, monitoramento, performance, rotina de
                  manutenção e apoio técnico para sites institucionais, landing pages, lojas virtuais
                  e projetos já publicados.
                </p>
                <p>
                  Se o problema hoje é instabilidade, lentidão ou falta de suporte quando algo cai,
                  a hospedagem certa ajuda a proteger sua presença digital e a reduzir risco
                  operacional.
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
                <p className="mt-2 text-sm leading-6 text-muted">
                  Serviços que costumam caminhar junto com hospedagem, performance e suporte.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    { href: "/criacao-de-sites", label: "Criação de Sites" },
                    { href: "/criacao-de-loja-virtual", label: "Loja Virtual" },
                    { href: "/landing-pages", label: "Landing Pages" },
                    { href: "/seo-otimizacao-de-site", label: "SEO" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-full border border-border bg-white px-3 py-1.5 text-sm text-muted transition hover:border-cyan-500/30 hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <ul className="mt-4 space-y-2 border-t border-border pt-4 text-sm text-muted">
                  {supportHighlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-cyan-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export function HostingLanding({ page }: { page: ServicePageData }) {
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
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(hostingFaqs)) }}
          />
        </>
      )}

      <Section
        bleed="bottom"
        className="overflow-hidden bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.10),transparent_28%),linear-gradient(to_bottom,#ffffff,#f7fdff)]"
      >
        <Container className="pt-6 sm:pt-8">
          <div className="grid items-center gap-10 md:grid-cols-[0.92fr_1.08fr] lg:gap-14">
            <Reveal className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-muted shadow-sm">
                <Sparkles className="h-4 w-4 text-cyan-600" />
                Hospedagem para sites em {site.city}
              </div>

              <div>
                <h1 className="max-w-xl font-[family-name:var(--font-poppins)] text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.45rem] lg:leading-[1.02]">
                  Hospedagem de sites com{" "}
                  <span className="text-cyan-600">mais estabilidade</span> e suporte técnico.
                </h1>
                <p className="mt-4 max-w-lg text-sm leading-7 text-muted sm:text-base lg:text-[15px]">
                  {page.lead} Organizamos estrutura, SSL, backups e acompanhamento para reduzir risco,
                  melhorar performance e manter o site no ar.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href={QUOTE_PATH} className="!rounded-lg !px-5 !py-3.5">
                  Solicitar orçamento
                </Button>
                <Button href={PORTFOLIO_PATH} variant="secondary" className="!rounded-lg !px-5 !py-3.5">
                  Ver projetos
                </Button>
              </div>

              <p className="text-sm text-muted">
                Escopo claro, suporte técnico e recomendação sem compromisso.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1 sm:gap-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                    <ShieldCheck className="h-4 w-4 text-cyan-600" />
                  </span>
                  <div className="text-sm text-muted">
                    <strong className="text-foreground">SSL, backup e monitoramento</strong>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                    <Globe className="h-4 w-4 text-cyan-600" />
                  </span>
                  <div className="text-sm text-muted">
                    <strong className="text-foreground">Domínio, cloud e suporte</strong>
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
          <Stagger className="grid gap-3 rounded-[1.25rem] border border-border bg-white p-3 shadow-sm md:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.label}>
                  <div className="flex flex-col items-center rounded-[1rem] border border-border/70 bg-white px-4 py-5 text-center shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600">
                      <Icon className="h-4 w-4" />
                    </div>
                    <strong className="mt-3 font-[family-name:var(--font-poppins)] text-[1.6rem] font-bold text-foreground">
                      {item.value}
                    </strong>
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">{item.label}</p>
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
            title="Seu site está no ar, mas a infraestrutura não acompanha?"
            description="Hospedagem ruim compromete velocidade, segurança, conversão e confiança."
          />

          <div className="mx-auto grid max-w-5xl items-stretch gap-5 md:grid-cols-2">
            <Reveal className="rounded-[1.1rem] border border-rose-200 bg-gradient-to-br from-rose-50 via-white to-white p-6 shadow-sm">
              <div className="mb-4 inline-flex items-center rounded-full border border-rose-200 bg-white px-3 py-1 text-sm font-semibold text-rose-500">
                Problemas comuns
              </div>
              <ul className="space-y-3">
                {pains.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-foreground/75">
                    <span className="mt-2 h-2 w-2 rounded-full bg-rose-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="rounded-[1.1rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white p-6 shadow-sm">
              <div className="mb-4 inline-flex items-center rounded-full border border-emerald-200 bg-white px-3 py-1 text-sm font-semibold text-emerald-600">
                A solução VALGOR
              </div>
              <ul className="space-y-3">
                {solutions.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-foreground/75">
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
            title="Onde a hospedagem mais impacta"
            description="Os pilares que mais influenciam segurança, velocidade e continuidade do site."
          />

          <Stagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {segments.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <div className="flex h-full flex-col rounded-[1rem] border border-border bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
                    <div className="mb-4 h-1.5 w-12 rounded-full bg-cyan-500/70" />
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-[family-name:var(--font-poppins)] text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-foreground/70">{item.text}</p>
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
            description="Quatro etapas para organizar a estrutura, migrar com segurança e acompanhar a operação."
          />

          <Stagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.title}>
                  <div className="flex h-full flex-col items-center rounded-[1rem] border border-border bg-white px-5 py-6 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="mt-3 inline-flex rounded-full bg-surface px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-subtle">
                      {step.number}
                    </span>
                    <h3 className="mt-3 font-[family-name:var(--font-poppins)] text-lg font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-foreground/70">{step.text}</p>
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
            title="Projetos em que a infraestrutura faz diferença"
            description="Exemplos de cenários em que hospedagem, suporte e performance pesam no resultado."
          />

          <Stagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {showcases.map((item) => (
              <StaggerItem key={item.title}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[1rem] border border-border bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
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
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:underline"
            >
              Ver todos os projetos
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border-subtle bg-surface-elevated" compact>
        <Container>
          <div className="overflow-hidden rounded-[1.25rem] bg-[#10212a] px-5 py-6 text-white shadow-sm sm:px-6 sm:py-7">
            <div className="mb-6 text-center">
              <SectionEyebrow>Diferenciais</SectionEyebrow>
              <h2 className="mt-2 font-[family-name:var(--font-poppins)] text-2xl font-bold">
                Por que escolher a VALGOR
              </h2>
              <p className="mt-2 text-sm text-white/70">
                Infraestrutura, manutenção e suporte pensados para manter operação e confiança.
              </p>
            </div>

            <Stagger className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
              {differentials.map((item) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={item.title}>
                    <div className="flex items-center gap-3 rounded-[0.9rem] border border-white/10 bg-white/5 p-3.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-cyan-400">
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

      <Section id="faq-hospedagem" className="border-t border-border-subtle bg-surface" compact>
        <Container>
          <BlockTitle
            title={page.faqHeader?.title ?? "Perguntas sobre hospedagem"}
            description={page.faqHeader?.description ?? "Respostas sobre migração, SSL, backups e suporte técnico."}
          />

          <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              {hostingFaqs.map((faq) => (
                <Reveal key={faq.question}>
                  <details className="group rounded-[1rem] border border-border bg-white p-5 shadow-sm">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-foreground sm:text-base">
                      <span>{faq.question}</span>
                      <ChevronDown className="h-5 w-5 shrink-0 text-cyan-600 transition group-open:rotate-180" />
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
                    Receba uma proposta clara para sua estrutura.
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    Indicamos o melhor formato conforme tipo de site, risco atual, suporte necessário
                    e objetivo de estabilidade.
                  </p>
                </div>

                <div className="mt-8 rounded-[0.95rem] border border-border bg-surface p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600">
                      <MessageCircleMore className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Atendimento consultivo</p>
                      <p className="text-sm text-muted">Escopo, migração e suporte sem compromisso.</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    <li className="flex gap-2">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-cyan-600" />
                      <span>Indicação do melhor formato de hospedagem.</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-cyan-600" />
                      <span>Apoio para migração, SSL e continuidade técnica.</span>
                    </li>
                  </ul>
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
            <div className="grid items-center gap-6 overflow-hidden rounded-[1.25rem] border border-border bg-gradient-to-r from-cyan-600 via-cyan-700 to-[#10212a] p-6 text-white shadow-[0_24px_70px_rgba(6,182,212,0.18)] md:grid-cols-[1fr_0.8fr] md:p-8">
              <div>
                <SectionEyebrow>CTA final</SectionEyebrow>
                <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-poppins)] text-2xl font-bold tracking-tight sm:text-3xl">
                  Pronto para ter uma estrutura mais estável?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
                  Receba escopo, prazo e recomendação da melhor hospedagem para manter seu site
                  rápido, seguro e bem acompanhado.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-white/70">
                  <span className="rounded-full border border-white/15 px-3 py-1">SSL</span>
                  <span className="rounded-full border border-white/15 px-3 py-1">Backups</span>
                  <span className="rounded-full border border-white/15 px-3 py-1">Suporte</span>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={QUOTE_PATH} className="!rounded-lg bg-white text-cyan-700 hover:bg-white/90">
                    Solicitar proposta
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
