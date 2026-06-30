import { GridPattern } from "@/components/visuals/GridPattern";
import { type BannerAccent } from "@/lib/images";
import { site } from "@/lib/site";
import { type ReactNode } from "react";
const accents: Record<BannerAccent, string> = {
  valgor: "from-valgor-500/14 via-valgor-500/5 to-transparent",
  violet: "from-violet-500/14 via-violet-500/5 to-transparent",
  cyan: "from-cyan-500/12 via-cyan-500/4 to-transparent",
  amber: "from-amber-500/14 via-amber-500/5 to-transparent",
  emerald: "from-emerald-500/12 via-emerald-500/4 to-transparent",
};

type Props = {
  title: string;
  lead: string;
  accent?: BannerAccent;
  children?: ReactNode;
};

export function PageBanner({ title, lead, accent = "valgor", children }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border-subtle bg-surface pt-28 sm:pt-32">
      <GridPattern className="opacity-60" />
      <div
        className={`pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gradient-to-br ${accents[accent]} blur-3xl`}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(50% 70% at 0% 100%, var(--hero-glow), transparent 55%)`,
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-4 sm:px-6 sm:pb-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-valgor-500">{site.brand}</p>
        <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-poppins)] text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{lead}</p>
        {children}
      </div>
    </section>
  );
}
