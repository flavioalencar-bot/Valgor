import { cn } from "@/lib/utils";
import {
  Building2,
  MapPin,
  Search,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

export type PortfolioMockVariant =
  | "landing"
  | "site"
  | "ecommerce"
  | "portal"
  | "design"
  | "marketing"
  | "imoveis";

type Props = {
  variant: PortfolioMockVariant;
  className?: string;
};

function BrowserChrome({
  url,
  children,
  className,
}: {
  url: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full min-h-[220px] flex-col overflow-hidden rounded-lg border border-border/80 bg-[#f4f6f9] shadow-sm dark:border-white/10 dark:bg-[#141414]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border/50 bg-white/90 px-3 py-2 dark:bg-[#1c1c1c]">
        <div className="flex shrink-0 gap-1">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        </div>
        <div className="min-w-0 flex-1 rounded-md bg-black/[0.04] px-2 py-0.5 text-center text-[9px] text-muted dark:bg-white/5">
          <span className="truncate">{url}</span>
        </div>
      </div>
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
}

function LandingPreview() {
  return (
    <BrowserChrome url="campanha.valgor.com.br">
      <div className="grid h-full grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col justify-center bg-gradient-to-br from-[#0f1f3d] to-[#1a2f55] px-4 py-4 text-white">
          <span className="inline-flex w-fit items-center gap-1 rounded-full bg-valgor-500/20 px-2 py-0.5 text-[8px] font-semibold text-[#ffb380]">
            <Sparkles className="h-2.5 w-2.5" />
            Oferta limitada
          </span>
          <div className="mt-2 h-2 w-[88%] rounded-full bg-white/90" />
          <div className="mt-1.5 h-1.5 w-[72%] rounded-full bg-white/35" />
          <div className="mt-1.5 h-1.5 w-[60%] rounded-full bg-white/25" />
          <div className="mt-3 flex gap-1.5">
            <span className="rounded-md bg-valgor-500 px-2 py-1 text-[8px] font-bold">Quero orçamento</span>
            <span className="rounded-md border border-white/25 px-2 py-1 text-[8px]">WhatsApp</span>
          </div>
          <div className="mt-3 flex gap-3 text-[7px] text-white/55">
            <span>★ 4,9</span>
            <span>+120 clientes</span>
          </div>
        </div>
        <div className="flex flex-col justify-center bg-white p-3 dark:bg-[#222]">
          <p className="text-[9px] font-bold text-foreground">Solicite contato</p>
          <div className="mt-2 space-y-1.5">
            <div className="h-5 rounded border border-border bg-muted-bg/50" />
            <div className="h-5 rounded border border-border bg-muted-bg/50" />
            <div className="h-5 rounded border border-border bg-muted-bg/50" />
          </div>
          <div className="mt-2 flex h-6 items-center justify-center rounded-md bg-emerald-500 text-[8px] font-bold text-white">
            Receber proposta
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

function InstitutionalPreview() {
  return (
    <BrowserChrome url="clinicaexemplo.com.br">
      <div className="flex h-full flex-col bg-white dark:bg-[#1a1a1a]">
        <div className="flex items-center justify-between border-b border-border/40 px-3 py-2">
          <div className="flex items-center gap-1.5">
            <span className="flex h-4 w-4 items-center justify-center rounded bg-valgor-500 text-[7px] font-bold text-white">
              C
            </span>
            <span className="text-[8px] font-bold text-foreground">Clínica Exemplo</span>
          </div>
          <div className="hidden gap-1 sm:flex">
            {["Início", "Serviços", "Contato"].map((item) => (
              <span key={item} className="rounded px-1.5 py-0.5 text-[7px] text-muted">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-2 p-3">
          <div className="flex flex-col justify-center">
            <div className="h-2 w-full rounded-full bg-foreground/85" />
            <div className="mt-1.5 h-1.5 w-[80%] rounded-full bg-muted/60" />
            <div className="mt-1.5 h-1.5 w-[65%] rounded-full bg-muted/40" />
            <div className="mt-2 flex items-center gap-1 text-[7px] text-valgor-600 dark:text-valgor-400">
              <MapPin className="h-2.5 w-2.5" />
              São José do Rio Preto
            </div>
            <span className="mt-2 w-fit rounded-md bg-valgor-500 px-2 py-1 text-[7px] font-semibold text-white">
              Agendar consulta
            </span>
          </div>
          <div className="overflow-hidden rounded-lg bg-gradient-to-br from-sky-100 to-blue-200 dark:from-sky-900/40 dark:to-blue-900/20">
            <div className="flex h-full items-end p-2">
              <Building2 className="h-8 w-8 text-blue-600/40 dark:text-blue-300/30" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1.5 border-t border-border/40 px-3 py-2">
          {["Odontologia", "Estética", "Check-up"].map((s) => (
            <div key={s} className="rounded-md border border-border/50 bg-muted-bg/30 p-1.5 text-center">
              <div className="mx-auto h-3 w-3 rounded-full bg-valgor-500/20" />
              <p className="mt-1 text-[6px] font-medium text-foreground">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </BrowserChrome>
  );
}

function EcommercePreview() {
  return (
    <BrowserChrome url="lojaexemplo.com.br">
      <div className="flex h-full flex-col bg-[#fafafa] dark:bg-[#161616]">
        <div className="flex items-center gap-2 border-b border-border/40 bg-white px-3 py-2 dark:bg-[#1c1c1c]">
          <span className="text-[8px] font-bold text-foreground">Loja Regional</span>
          <div className="ml-auto flex flex-1 items-center gap-1 rounded-md border border-border bg-muted-bg/40 px-2 py-1">
            <Search className="h-2.5 w-2.5 text-muted" />
            <span className="text-[7px] text-muted">Buscar produtos</span>
          </div>
          <ShoppingCart className="h-3.5 w-3.5 text-valgor-500" />
        </div>
        <div className="bg-gradient-to-r from-valgor-500 to-orange-400 px-3 py-2 text-white">
          <p className="text-[8px] font-bold">Frete grátis acima de R$ 199</p>
          <p className="text-[7px] text-white/80">PIX com 5% de desconto</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-2 p-2">
          {[
            { price: "R$ 89,90", tag: "Novo" },
            { price: "R$ 129,00", tag: "Top" },
            { price: "R$ 54,90", tag: "" },
            { price: "R$ 199,00", tag: "Sale" },
          ].map((item, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg border border-border/60 bg-white dark:bg-[#222]"
            >
              <div className="relative aspect-[4/3] bg-gradient-to-br from-stone-100 to-stone-200 dark:from-stone-800 dark:to-stone-700">
                <ShoppingBag className="absolute bottom-1 right-1 h-3 w-3 text-stone-400/60" />
                {item.tag && (
                  <span className="absolute left-1 top-1 rounded bg-valgor-500 px-1 text-[6px] font-bold text-white">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="p-1.5">
                <div className="h-1 w-[80%] rounded-full bg-foreground/20" />
                <p className="mt-1 text-[8px] font-bold text-valgor-600 dark:text-valgor-400">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserChrome>
  );
}

function PortalPreview() {
  return (
    <BrowserChrome url="portalregional.com.br">
      <div className="flex h-full flex-col bg-white p-3 dark:bg-[#1a1a1a]">
        <div className="flex items-center justify-between">
          <span className="text-[8px] font-bold">Portal de Anúncios</span>
          <span className="rounded-md bg-valgor-500 px-2 py-0.5 text-[7px] text-white">Publicar</span>
        </div>
        <div className="mt-2 flex gap-1">
          {["Todos", "Veículos", "Imóveis"].map((c, i) => (
            <span
              key={c}
              className={cn(
                "rounded-full px-2 py-0.5 text-[7px]",
                i === 0 ? "bg-valgor-500/15 text-valgor-600" : "bg-muted-bg text-muted",
              )}
            >
              {c}
            </span>
          ))}
        </div>
        <div className="mt-2 space-y-1.5">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex gap-2 rounded-lg border border-border/50 p-1.5">
              <div className="h-8 w-10 shrink-0 rounded bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600" />
              <div className="min-w-0 flex-1">
                <div className="h-1.5 w-[70%] rounded-full bg-foreground/25" />
                <div className="mt-1 h-1 w-[40%] rounded-full bg-muted/50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserChrome>
  );
}

function ImoveisPreview() {
  return (
    <BrowserChrome url="imobiliariaexemplo.com.br">
      <div className="flex h-full flex-col bg-white dark:bg-[#1a1a1a]">
        <div className="border-b border-border/40 px-3 py-2">
          <p className="text-[8px] font-bold">Imóveis em Rio Preto</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-2 p-2">
          {[1, 2].map((n) => (
            <div key={n} className="overflow-hidden rounded-lg border border-border/60">
              <div className="aspect-[5/3] bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/20" />
              <div className="p-1.5">
                <div className="h-1.5 w-[75%] rounded-full bg-foreground/20" />
                <p className="mt-1 text-[7px] font-bold text-valgor-600">R$ 450.000</p>
                <div className="mt-0.5 flex items-center gap-0.5 text-[6px] text-muted">
                  <MapPin className="h-2 w-2" /> Centro
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserChrome>
  );
}

function MarketingPreview() {
  return <LandingPreview />;
}

function DesignPreview() {
  return (
    <BrowserChrome url="marcaexemplo.com.br">
      <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] p-4 text-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-valgor-500 text-sm font-bold text-white">
          V
        </div>
        <div className="mt-2 h-2 w-20 rounded-full bg-white/90" />
        <div className="mt-1.5 h-1.5 w-14 rounded-full bg-white/30" />
        <div className="mt-3 flex gap-1">
          {["#ff6600", "#1a1a1a", "#ffffff"].map((c) => (
            <span key={c} className="h-3 w-3 rounded-full border border-white/20" style={{ background: c }} />
          ))}
        </div>
      </div>
    </BrowserChrome>
  );
}

const previews: Record<PortfolioMockVariant, () => React.ReactNode> = {
  landing: LandingPreview,
  marketing: MarketingPreview,
  site: InstitutionalPreview,
  ecommerce: EcommercePreview,
  portal: PortalPreview,
  imoveis: ImoveisPreview,
  design: DesignPreview,
};

export function PortfolioMock({ variant, className }: Props) {
  const Preview = previews[variant] ?? InstitutionalPreview;
  return (
    <div className={cn("h-full w-full", className)}>
      <Preview />
    </div>
  );
}

/** Preview específico para cada case da home */
export function SiteCasePreview({
  type,
  className,
}: {
  type: "landing" | "institutional" | "ecommerce";
  className?: string;
}) {
  const map = {
    landing: "landing",
    institutional: "site",
    ecommerce: "ecommerce",
  } as const;
  return <PortfolioMock variant={map[type]} className={className} />;
}
