/** Preview de UI em CSS — sem imagens legadas. */
export function BrowserMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-border-subtle bg-surface-elevated shadow-inner">
      <div className="flex items-center gap-1.5 border-b border-border-subtle px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400/70" />
        <span className="h-2 w-2 rounded-full bg-amber-400/70" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between gap-2">
          <div className="h-2 w-16 rounded-full bg-muted-bg" />
          <div className="flex gap-1">
            <div className="h-2 w-8 rounded-full bg-muted-bg" />
            <div className="h-2 w-8 rounded-full bg-muted-bg" />
            <div className="h-5 w-12 rounded-md bg-valgor-500/80" />
          </div>
        </div>
        <div className="rounded-lg bg-gradient-to-br from-valgor-500/15 via-surface-card to-violet-500/10 p-4">
          <div className="h-2.5 w-3/4 max-w-[200px] rounded-full bg-foreground/10" />
          <div className="mt-2 h-2 w-1/2 max-w-[140px] rounded-full bg-foreground/5" />
          <div className="mt-4 flex gap-2">
            <div className="h-7 w-20 rounded-lg bg-valgor-500" />
            <div className="h-7 w-20 rounded-lg border border-border bg-surface-card" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((n) => (
            <div key={n} className="rounded-lg border border-border-subtle bg-surface-card p-2">
              <div className="aspect-[4/3] rounded bg-muted-bg" />
              <div className="mt-1.5 h-1.5 w-full rounded-full bg-muted-bg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
