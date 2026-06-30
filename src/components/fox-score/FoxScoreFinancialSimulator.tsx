"use client";

import { useMemo, useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, Input, Label } from "@/components/ui/shadcn";
import { FOX_SCORE_DEFAULTS } from "@/lib/fox-score/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export type FinancialCalc = {
  ticket: number;
  clients: number;
  margin: number;
  conversionRate: number;
  investment: number;
  currentRevenue: number;
  potentialRevenue: number;
  gain: number;
  currentLeads: number;
  projectedLeads: number;
  extraLeads: number;
  paybackMonths: number;
};

type Props = {
  monthlyVisitors: number;
  conversionRate: number;
  benchmarkConversion: number;
  onCalcChange?: (calc: FinancialCalc) => void;
};

function brl(n: number) {
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

function formatCurrencyInput(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return "";
  return Number(digits).toLocaleString("pt-BR");
}

function parseCurrency(raw: string): number {
  return Math.max(0, Number(raw.replace(/\D/g, "")) || 0);
}

function clampPercent(raw: string): string {
  const n = Math.min(100, Math.max(0, Number(raw.replace(/\D/g, "")) || 0));
  return String(n);
}

export function FoxScoreFinancialSimulator({
  monthlyVisitors,
  conversionRate: initialConversion,
  benchmarkConversion,
  onCalcChange,
}: Props) {
  const [ticket, setTicket] = useState(String(FOX_SCORE_DEFAULTS.averageTicket));
  const [clients, setClients] = useState(String(FOX_SCORE_DEFAULTS.clientsPerMonth));
  const [margin, setMargin] = useState(String(FOX_SCORE_DEFAULTS.marginPercent));
  const [convRate, setConvRate] = useState(String(initialConversion));
  const [investment, setInvestment] = useState("3500");

  const calc = useMemo((): FinancialCalc => {
    const t = parseCurrency(ticket);
    const c = Math.max(0, Number(clients) || 0);
    const m = Math.min(100, Math.max(0, Number(margin) || 0));
    const conv = Math.min(100, Math.max(0, Number(convRate) || 0));
    const inv = parseCurrency(investment);

    const currentRevenue = t * c;
    const currentLeads = monthlyVisitors * (conv / 100);
    const projectedLeads = monthlyVisitors * (benchmarkConversion / 100);
    const extraLeads = Math.max(0, projectedLeads - currentLeads);
    const potentialClients = c + extraLeads;
    const potentialRevenue = t * potentialClients;
    const gain = (potentialRevenue - currentRevenue) * (m / 100);
    const paybackMonths = gain > 0 && inv > 0 ? Math.ceil(inv / gain) : 0;

    return {
      ticket: t,
      clients: c,
      margin: m,
      conversionRate: conv,
      investment: inv,
      currentRevenue,
      potentialRevenue,
      gain,
      currentLeads,
      projectedLeads,
      extraLeads,
      paybackMonths,
    };
  }, [ticket, clients, margin, convRate, investment, monthlyVisitors, benchmarkConversion]);

  useEffect(() => {
    onCalcChange?.(calc);
  }, [calc, onCalcChange]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-[family-name:var(--font-poppins)] text-lg">Simulador financeiro</CardTitle>
        <p className="text-sm text-muted">Valores recalculados automaticamente ao editar os campos.</p>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="ticket">Ticket médio (R$)</Label>
            <Input
              id="ticket"
              inputMode="numeric"
              value={formatCurrencyInput(ticket)}
              onChange={(e) => setTicket(e.target.value.replace(/\D/g, ""))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="clients">Clientes / mês</Label>
            <Input
              id="clients"
              inputMode="numeric"
              value={clients}
              onChange={(e) => setClients(e.target.value.replace(/\D/g, ""))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="margin">Margem (%)</Label>
            <Input id="margin" inputMode="numeric" value={margin} onChange={(e) => setMargin(clampPercent(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="conv">Taxa de conversão (%)</Label>
            <Input id="conv" inputMode="numeric" value={convRate} onChange={(e) => setConvRate(clampPercent(e.target.value))} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="invest">Investimento previsto (R$)</Label>
            <Input
              id="invest"
              inputMode="numeric"
              value={formatCurrencyInput(investment)}
              onChange={(e) => setInvestment(e.target.value.replace(/\D/g, ""))}
            />
          </div>
          <div className="space-y-2">
            <Label>Prazo de retorno</Label>
            <div className="flex h-10 items-center rounded-lg border border-border bg-muted-bg/50 px-3 text-sm font-semibold tabular-nums">
              {calc.paybackMonths > 0 ? `${calc.paybackMonths} meses` : "—"}
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { label: "Faturamento atual", value: brl(calc.currentRevenue), accent: false },
            { label: "Faturamento potencial", value: brl(calc.potentialRevenue), accent: "emerald" },
            { label: "Retorno estimado", value: `+${brl(calc.gain)}/mês`, accent: "fox" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.25 }}
              className={cn(
                "rounded-xl border p-4",
                item.accent === "fox" && "border-fox-500/30 bg-fox-500/10",
                item.accent === "emerald" && "border-emerald-500/30 bg-emerald-500/10",
                !item.accent && "border-border bg-surface-elevated",
              )}
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-subtle">{item.label}</p>
              <p
                className={cn(
                  "mt-2 font-[family-name:var(--font-poppins)] text-xl font-bold sm:text-2xl",
                  item.accent === "emerald" && "text-emerald-600 dark:text-emerald-400",
                  item.accent === "fox" && "text-fox-600 dark:text-fox-400",
                )}
              >
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
