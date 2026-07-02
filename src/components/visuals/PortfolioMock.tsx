import { cn } from "@/lib/utils";
import { MapPin, Search, ShoppingCart, Sparkles } from "lucide-react";
import Image from "next/image";

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

const mockImages = {
  landingHero:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=480&h=360&fit=crop&q=80",
  clinicHero:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=480&h=200&fit=crop&q=80",
  clinicTeam:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=120&fit=crop&q=80",
  shopBanner:
    "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=480&h=120&fit=crop&q=80",
  products: [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop&q=80",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop&q=80",
    "https://images.unsplash.com/photo-1577803645773-f96470509666?w=200&h=200&fit=crop&q=80",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop&q=80",
  ],
  portal: [
    "https://images.unsplash.com/photo-1494976388531-d1058498cdd8?w=120&h=80&fit=crop&q=80",
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=120&h=80&fit=crop&q=80",
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=120&h=80&fit=crop&q=80",
  ],
  imovel: [
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=240&h=160&fit=crop&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=240&h=160&fit=crop&q=80",
  ],
} as const;

function MockPhoto({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 33vw, 200px"
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}

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
        "flex h-full min-h-0 flex-col overflow-hidden rounded-lg border border-border/80 bg-[#f4f6f9] shadow-sm dark:border-white/10 dark:bg-[#141414]",
        className,
      )}
    >
      <div className="flex shrink-0 items-center gap-2 border-b border-border/50 bg-white/90 px-3 py-1.5 dark:bg-[#1c1c1c]">
        <div className="flex shrink-0 gap-1">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        </div>
        <div className="min-w-0 flex-1 rounded-md bg-black/[0.04] px-2 py-0.5 text-center text-[9px] text-muted dark:bg-white/5">
          <span className="truncate">{url}</span>
        </div>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
    </div>
  );
}

function LandingPreview() {
  return (
    <BrowserChrome url="campanha.valgor.com.br">
      <div className="grid h-full min-h-0 grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-0">
          <MockPhoto
            src={mockImages.landingHero}
            alt="Equipe em reunião de negócios"
            className="absolute inset-0"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f3d]/95 via-[#1a2f55]/85 to-[#1a2f55]/40" />
          <div className="relative flex h-full flex-col justify-center px-3 py-2 text-white">
            <span className="inline-flex w-fit items-center gap-1 rounded-full bg-valgor-500/25 px-2 py-0.5 text-[7px] font-semibold text-[#ffb380]">
              <Sparkles className="h-2 w-2" />
              Oferta limitada
            </span>
            <div className="mt-1.5 h-1.5 w-[88%] rounded-full bg-white/90" />
            <div className="mt-1 h-1 w-[72%] rounded-full bg-white/35" />
            <div className="mt-2 flex gap-1">
              <span className="rounded bg-valgor-500 px-1.5 py-0.5 text-[7px] font-bold">Orçamento</span>
              <span className="rounded border border-white/25 px-1.5 py-0.5 text-[7px]">WhatsApp</span>
            </div>
            <div className="mt-2 flex gap-2 text-[6px] text-white/60">
              <span>★ 4,9</span>
              <span>+120 clientes</span>
            </div>
          </div>
        </div>
        <div className="flex min-h-0 flex-col justify-center bg-white p-2.5 dark:bg-[#222]">
          <p className="text-[8px] font-bold text-foreground">Solicite contato</p>
          <div className="mt-1.5 space-y-1">
            <div className="h-4 rounded border border-border bg-muted-bg/50" />
            <div className="h-4 rounded border border-border bg-muted-bg/50" />
            <div className="h-4 rounded border border-border bg-muted-bg/50" />
          </div>
          <div className="mt-1.5 flex h-5 items-center justify-center rounded-md bg-emerald-500 text-[7px] font-bold text-white">
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
      <div className="flex h-full min-h-0 flex-col bg-white dark:bg-[#1a1a1a]">
        <div className="flex shrink-0 items-center justify-between border-b border-border/40 px-2.5 py-1.5">
          <div className="flex items-center gap-1">
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded bg-valgor-500 text-[6px] font-bold text-white">
              C
            </span>
            <span className="text-[7px] font-bold text-foreground">Clínica Exemplo</span>
          </div>
          <div className="flex gap-0.5">
            {["Início", "Serviços", "Contato"].map((item) => (
              <span key={item} className="rounded px-1 py-0.5 text-[6px] text-muted">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative h-[38%] min-h-[52px] shrink-0">
          <MockPhoto src={mockImages.clinicHero} alt="Recepção da clínica" className="h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
          <div className="absolute bottom-1.5 left-2 right-2">
            <div className="h-1.5 w-[70%] rounded-full bg-white/90" />
            <div className="mt-0.5 h-1 w-[50%] rounded-full bg-white/50" />
          </div>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-[1fr_0.85fr] gap-1.5 p-2">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-0.5 text-[6px] text-valgor-600 dark:text-valgor-400">
              <MapPin className="h-2 w-2" />
              São José do Rio Preto
            </div>
            <span className="mt-1.5 w-fit rounded bg-valgor-500 px-1.5 py-0.5 text-[6px] font-semibold text-white">
              Agendar consulta
            </span>
          </div>
          <MockPhoto src={mockImages.clinicTeam} alt="Equipe médica" className="h-full min-h-[36px] rounded-md" />
        </div>

        <div className="grid shrink-0 grid-cols-3 gap-1 border-t border-border/40 px-2 py-1.5">
          {["Odontologia", "Estética", "Check-up"].map((s) => (
            <div key={s} className="rounded border border-border/50 bg-muted-bg/30 p-1 text-center">
              <p className="text-[5px] font-medium text-foreground">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </BrowserChrome>
  );
}

const ecommerceProducts = [
  { price: "R$ 89,90", tag: "Novo", image: mockImages.products[0], name: "Relógio" },
  { price: "R$ 129,00", tag: "Top", image: mockImages.products[1], name: "Fone" },
  { price: "R$ 54,90", tag: "", image: mockImages.products[2], name: "Óculos" },
  { price: "R$ 199,00", tag: "Sale", image: mockImages.products[3], name: "Tênis" },
] as const;

function EcommercePreview() {
  return (
    <BrowserChrome url="lojaexemplo.com.br">
      <div className="flex h-full min-h-0 flex-col bg-[#fafafa] dark:bg-[#161616]">
        <div className="flex shrink-0 items-center gap-1.5 border-b border-border/40 bg-white px-2.5 py-1.5 dark:bg-[#1c1c1c]">
          <span className="shrink-0 text-[7px] font-bold text-foreground">Loja Regional</span>
          <div className="flex min-w-0 flex-1 items-center gap-1 rounded border border-border bg-muted-bg/40 px-1.5 py-0.5">
            <Search className="h-2 w-2 shrink-0 text-muted" />
            <span className="truncate text-[6px] text-muted">Buscar</span>
          </div>
          <ShoppingCart className="h-3 w-3 shrink-0 text-valgor-500" />
        </div>

        <div className="relative h-[22%] min-h-[28px] shrink-0">
          <MockPhoto src={mockImages.shopBanner} alt="Promoção da loja" className="h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-valgor-600/90 to-orange-500/75" />
          <div className="absolute inset-0 flex flex-col justify-center px-2.5 text-white">
            <p className="text-[7px] font-bold leading-tight">Frete grátis acima de R$ 199</p>
            <p className="text-[6px] text-white/85">PIX com 5% de desconto</p>
          </div>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-2 grid-rows-2 gap-1 p-1.5">
          {ecommerceProducts.map((item) => (
            <div
              key={item.name}
              className="flex min-h-0 flex-col overflow-hidden rounded border border-border/60 bg-white dark:bg-[#222]"
            >
              <div className="relative min-h-0 flex-1">
                <MockPhoto src={item.image} alt={item.name} className="h-full w-full" />
                {item.tag && (
                  <span className="absolute left-0.5 top-0.5 rounded bg-valgor-500 px-1 text-[5px] font-bold text-white">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="shrink-0 px-1 py-0.5">
                <p className="truncate text-[6px] text-foreground/70">{item.name}</p>
                <p className="text-[7px] font-bold leading-none text-valgor-600 dark:text-valgor-400">
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
      <div className="flex h-full min-h-0 flex-col bg-white p-2.5 dark:bg-[#1a1a1a]">
        <div className="flex shrink-0 items-center justify-between">
          <span className="text-[8px] font-bold">Portal de Anúncios</span>
          <span className="rounded-md bg-valgor-500 px-2 py-0.5 text-[7px] text-white">Publicar</span>
        </div>
        <div className="mt-1.5 flex shrink-0 gap-1">
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
        <div className="mt-1.5 min-h-0 flex-1 space-y-1 overflow-hidden">
          {mockImages.portal.map((src, n) => (
            <div key={n} className="flex gap-1.5 rounded-lg border border-border/50 p-1">
              <MockPhoto src={src} alt={`Anúncio ${n + 1}`} className="h-7 w-9 shrink-0 rounded" />
              <div className="min-w-0 flex-1 py-0.5">
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
      <div className="flex h-full min-h-0 flex-col bg-white dark:bg-[#1a1a1a]">
        <div className="shrink-0 border-b border-border/40 px-2.5 py-1.5">
          <p className="text-[8px] font-bold">Imóveis em Rio Preto</p>
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-2 gap-1.5 p-1.5">
          {mockImages.imovel.map((src, n) => (
            <div key={n} className="flex min-h-0 flex-col overflow-hidden rounded-lg border border-border/60">
              <MockPhoto src={src} alt={`Imóvel ${n + 1}`} className="min-h-0 flex-1" />
              <div className="shrink-0 p-1">
                <p className="text-[7px] font-bold text-valgor-600">R$ 450.000</p>
                <div className="flex items-center gap-0.5 text-[6px] text-muted">
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
    <div className={cn("h-full min-h-0 w-full", className)}>
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
