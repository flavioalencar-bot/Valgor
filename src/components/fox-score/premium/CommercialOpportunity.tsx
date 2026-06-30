"use client";

import { brl, type ResultContext } from "@/components/fox-score/premium/shared";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/shadcn";
import { motion } from "framer-motion";
import { ArrowDown, TrendingUp } from "lucide-react";

type Props = {
  ctx: ResultContext;
  revenue?: number;
  potentialRevenue?: number;
  currentLeads?: number;
  projectedLeads?: number;
};

function FunnelStep({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-border bg-surface-elevated px-4 py-3 text-center min-w-[100px] flex-1">
      <p className="text-xs font-medium uppercase tracking-wide text-subtle">{label}</p>
      <p className="mt-1 font-[family-name:var(--font-poppins)] text-lg font-bold tabular-nums">{value}</p>
    </div>
  );
}

export function CommercialOpportunity({
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
  const diff = potRev - rev;

  return (
    <Card className="border-amber-500/20 overflow-hidden">
      <CardHeader className="bg-amber-500/5">
        <CardTitle className="flex items-center gap-2 text-lg">
          <TrendingUp className="h-5 w-5 text-amber-600" />
          Estimativa comercial
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <FunnelStep label="Visitantes" value={ctx.estimatedVisitors.toLocaleString("pt-BR")} />
          <ArrowDown className="hidden h-4 w-4 shrink-0 text-muted sm:block" />
          <FunnelStep label="Clientes" value={String(leads)} />
          <ArrowDown className="hidden h-4 w-4 shrink-0 text-muted sm:block" />
          <FunnelStep label="Conversão" value={`${ctx.currentConversionRate}%`} />
          <ArrowDown className="hidden h-4 w-4 shrink-0 text-muted sm:block" />
          <FunnelStep label="Receita" value={brl(rev)} />
        </div>

        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
            Após melhorias
          </p>
          <p className="mt-2 text-sm text-muted">
            <strong className="text-foreground">{potLeads} clientes</strong> · conversão{" "}
            {ctx.optimizedConversionRate}%
          </p>
          <p className="mt-1 font-[family-name:var(--font-poppins)] text-2xl font-bold text-emerald-700 dark:text-emerald-400">
            {brl(potRev)}
          </p>
        </div>

        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.28 }}
          className="rounded-2xl border border-fox-500/30 bg-fox-500/10 py-4 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-subtle">Potencial</p>
          <p className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-fox-600 dark:text-fox-400">
            +{brl(diff)}
          </p>
        </motion.div>
      </CardContent>
    </Card>
  );
}
