"use client";

import { type ResultContext } from "@/components/fox-score/premium/shared";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/shadcn";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

type Props = { ctx: ResultContext };

export function ScoreEvolution({ ctx }: Props) {
  const steps = ctx.foxScore.premium?.scoreEvolution ?? [
    { title: "Hoje", score: ctx.score, pointsGained: 0 },
  ];
  const target = ctx.foxScore.premium?.targetScore ?? ctx.foxScore.projectedScore;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Como sua nota pode evoluir</CardTitle>
        <p className="text-sm text-muted">
          Projeção até <strong className="text-fox-600 dark:text-fox-400">{target} pontos</strong>
        </p>
      </CardHeader>
      <CardContent>
        <div className="mb-6 space-y-2">
          <div className="flex justify-between text-xs font-medium uppercase tracking-wide text-subtle">
            <span>Hoje · {ctx.score}</span>
            <span>Meta · {target}</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-muted-bg">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-fox-500 to-emerald-500"
              initial={{ width: `${ctx.score}%` }}
              animate={{ width: `${target}%` }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          {steps.map((step, i) => (
            <div key={`${step.title}-${i}`} className="flex w-full max-w-md flex-col items-center">
              <div className="flex w-full items-center justify-between rounded-xl border border-border bg-surface-elevated px-4 py-3">
                <div>
                  <p className="font-medium">{step.title}</p>
                  {step.description && i > 0 && (
                    <p className="text-xs text-muted">{step.description}</p>
                  )}
                </div>
                <span className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-fox-600 dark:text-fox-400">
                  {step.score}
                </span>
              </div>
              {i < steps.length - 1 && <ArrowDown className="my-1 h-4 w-4 text-muted" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
