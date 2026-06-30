type Variant = "site" | "ecommerce" | "portal" | "design" | "marketing" | "imoveis";

const styles: Record<Variant, { from: string; to: string; bars: number }> = {
  site: { from: "from-slate-500/20", to: "to-valgor-500/25", bars: 4 },
  ecommerce: { from: "from-violet-500/20", to: "to-valgor-500/20", bars: 3 },
  portal: { from: "from-cyan-500/15", to: "to-blue-500/20", bars: 5 },
  design: { from: "from-rose-500/20", to: "to-amber-500/15", bars: 2 },
  marketing: { from: "from-emerald-500/15", to: "to-valgor-500/20", bars: 4 },
  imoveis: { from: "from-amber-500/20", to: "to-orange-500/15", bars: 3 },
};

type Props = {
  variant: Variant;
};

export function PortfolioMock({ variant }: Props) {
  const s = styles[variant];

  return (
    <div
      className={`relative flex h-full w-full flex-col bg-gradient-to-br ${s.from} ${s.to} p-5`}
    >
      <div className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-foreground/10" />
        <span className="h-2 w-2 rounded-full bg-foreground/10" />
        <span className="h-2 w-2 rounded-full bg-foreground/10" />
      </div>
      <div className="mt-4 flex-1 rounded-xl border border-white/20 bg-surface-card/90 p-4 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-surface-card/80">
        <div className="h-2 w-1/3 rounded-full bg-foreground/10" />
        <div className="mt-2 h-2 w-1/2 rounded-full bg-foreground/5" />
        <div className="mt-5 grid gap-2" style={{ gridTemplateColumns: `repeat(${s.bars}, 1fr)` }}>
          {Array.from({ length: s.bars }).map((_, i) => (
            <div
              key={i}
              className="aspect-[3/4] rounded-lg bg-gradient-to-b from-muted-bg to-surface-elevated"
            />
          ))}
        </div>
        <div className="mt-4 h-8 w-24 rounded-lg bg-valgor-500/90" />
      </div>
    </div>
  );
}
