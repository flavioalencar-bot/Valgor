"use client";

import { type ResultContext } from "@/components/fox-score/premium/shared";
import { FoxScoreRadar } from "@/components/fox-score/FoxScoreRadar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/shadcn";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

type Props = { ctx: ResultContext };

function Bar({
  label,
  value,
  highlight,
  delay,
}: {
  label: string;
  value: number;
  highlight?: boolean;
  delay: number;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between gap-2 text-sm">
        <span className={cn(highlight && "font-semibold")}>{label}</span>
        <span className={cn("font-bold tabular-nums", highlight && "text-fox-600 dark:text-fox-400")}>
          {value}
        </span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-muted-bg">
        <motion.div
          className={cn("h-full rounded-full", highlight ? "bg-fox-500" : "bg-muted/60")}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.6, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export function CompetitionInsight({ ctx }: Props) {
  const p = ctx.foxScore.premium;
  const bullets = p?.comparisonBullets ?? [];
  const gap = p?.competitionGap ?? Math.max(0, ctx.bestCompetitor - ctx.score);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Diagnóstico Valgor — Comparativo</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8 lg:grid-cols-2">
        <FoxScoreRadar radar={ctx.foxScore.radar} />
        <div className="space-y-5">
          <Bar label="Sua empresa" value={ctx.score} highlight delay={0.05} />
          <Bar label="Cidade" value={ctx.cityAverage} delay={0.1} />
          <Bar label="Segmento" value={ctx.segmentAverage} delay={0.15} />
          <Bar label="Melhor concorrente" value={ctx.bestCompetitor} delay={0.2} />

          <ul className="space-y-2 rounded-xl border border-border bg-surface-elevated p-4">
            {bullets.map((b) => (
              <li key={b.text} className="flex gap-2 text-sm">
                {b.type === "success" ? (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                ) : (
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                )}
                <span className="text-muted">{b.text}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm leading-relaxed text-muted">
            {ctx.comparisonInsight}{" "}
            {gap > 0 && (
              <span className="font-medium text-foreground">
                Faltam apenas {gap} pontos para alcançar o melhor concorrente encontrado.
              </span>
            )}
          </p>
          {p?.comparisonActionHint && (
            <p className="rounded-lg bg-fox-500/10 px-3 py-2 text-sm font-medium text-fox-700 dark:text-fox-300">
              {p.comparisonActionHint}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
