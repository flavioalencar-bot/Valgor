"use client";

import { brl, type ResultContext } from "@/components/fox-score/premium/shared";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/shadcn";
import { ArrowDown, TrendingDown } from "lucide-react";

type Props = {
  ctx: ResultContext;
  revenue?: number;
  potentialRevenue?: number;
  currentLeads?: number;
  projectedLeads?: number;
};

export function CostOfInactionCard({
  ctx,
  revenue,
  potentialRevenue,
  currentLeads,
  projectedLeads,
}: Props) {
  const rev = revenue ?? ctx.currentRevenue;
  const potRev = potentialRevenue ?? ctx.potentialRevenue;
  const leads = currentLeads ?? ctx.currentClients;
  const potLeads = projectedLeads ?? ctx.projectedClients;

  return (
    <Card className="border-red-500/25 bg-gradient-to-br from-red-500/5 to-transparent">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <TrendingDown className="h-5 w-5 text-red-500" />
          Quanto sua empresa pode estar deixando de faturar?
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-surface p-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-subtle">Hoje</p>
          <div className="mt-4 space-y-2 text-sm text-muted">
            <p>{ctx.estimatedVisitors.toLocaleString("pt-BR")} visitantes</p>
            <ArrowDown className="mx-auto h-4 w-4" />
            <p>{leads} contatos</p>
            <ArrowDown className="mx-auto h-4 w-4" />
            <p className="font-[family-name:var(--font-poppins)] text-xl font-bold text-foreground">{brl(rev)}</p>
          </div>
        </div>
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
            Após melhorias
          </p>
          <div className="mt-4 space-y-2 text-sm text-muted">
            <p>{potLeads} contatos</p>
            <ArrowDown className="mx-auto h-4 w-4" />
            <p className="font-[family-name:var(--font-poppins)] text-xl font-bold text-emerald-700 dark:text-emerald-400">
              {brl(potRev)}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl border border-valgor-500/30 bg-valgor-500/10 p-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-subtle">Potencial</p>
          <p className="mt-3 font-[family-name:var(--font-poppins)] text-3xl font-bold text-valgor-600 dark:text-valgor-400">
            +{brl(potRev - rev)}
          </p>
          <p className="mt-1 text-xs text-muted">por mês</p>
        </div>
      </CardContent>
    </Card>
  );
}
