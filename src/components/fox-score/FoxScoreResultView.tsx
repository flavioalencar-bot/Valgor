"use client";

import { AnimatedScoreRing } from "@/components/fox-score/AnimatedScoreRing";
import {
  FoxScoreFinancialSimulator,
  type FinancialCalc,
} from "@/components/fox-score/FoxScoreFinancialSimulator";
import { AuthorityBadge } from "@/components/fox-score/premium/AuthorityBadge";
import { CommercialOpportunity } from "@/components/fox-score/premium/CommercialOpportunity";
import { CompetitionInsight } from "@/components/fox-score/premium/CompetitionInsight";
import { CostOfInactionCard } from "@/components/fox-score/premium/CostOfInactionCard";
import { CriteriaSummary } from "@/components/fox-score/premium/CriteriaSummary";
import { ImplementationTimeline } from "@/components/fox-score/premium/ImplementationTimeline";
import { PremiumCTA } from "@/components/fox-score/premium/PremiumCTA";
import { ScoreEvolution } from "@/components/fox-score/premium/ScoreEvolution";
import { ScoreImpactCard } from "@/components/fox-score/premium/ScoreImpactCard";
import { fadeUp, type ResultContext } from "@/components/fox-score/premium/shared";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/shadcn";
import type { FoxScoreViewModel } from "@/lib/fox-score/view-model";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, CheckCircle2, Star } from "lucide-react";
import { useMemo, useState } from "react";

type Props = {
  vm: FoxScoreViewModel;
  commercialMessage: string | null;
  city?: string;
  whatsapp?: string;
  diagnosedAt?: string;
  onReset: () => void;
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex justify-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn("h-5 w-5", i < count ? "fill-amber-400 text-amber-400" : "text-muted/40")}
        />
      ))}
    </div>
  );
}

export function FoxScoreResultView({
  vm,
  commercialMessage,
  city,
  whatsapp,
  diagnosedAt,
  onReset,
}: Props) {
  const fs = vm.foxScore;
  const [financial, setFinancial] = useState<FinancialCalc | null>(null);

  const ctx: ResultContext = useMemo(
    () => ({ ...vm, city, whatsapp, diagnosedAt }),
    [vm, city, whatsapp, diagnosedAt],
  );

  const targetScore = fs.premium?.targetScore ?? fs.projectedScore;
  const fin = financial;

  return (
    <div className="mt-10 space-y-6 pb-8">
      <motion.div {...fadeUp(0)}>
        <Card className="overflow-hidden border-fox-500/25 shadow-xl">
          <CardHeader className="border-b border-border-subtle bg-gradient-to-br from-fox-500/15 via-fox-500/5 to-transparent pb-0 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-fox-600 dark:text-fox-400">
              Valgor Score · Consultoria digital automatizada
            </p>
            <CardTitle className="mt-2 font-[family-name:var(--font-poppins)] text-2xl sm:text-3xl">
              {vm.companyName}
            </CardTitle>
            <div className="mt-8 flex flex-col items-center gap-3 pb-6">
              <div className="w-full max-w-[280px] border-y border-fox-500/20 py-6">
                <AnimatedScoreRing score={vm.score} duration={1100} />
              </div>
              <Stars count={fs.starRating} />
            </div>
          </CardHeader>

          <CriteriaSummary />
          <ScoreImpactCard ctx={ctx} />
        </Card>
      </motion.div>

      <motion.div {...fadeUp(0.06)}>
        <CompetitionInsight ctx={ctx} />
      </motion.div>

      <motion.div {...fadeUp(0.1)}>
        <CommercialOpportunity
          ctx={ctx}
          revenue={fin?.currentRevenue}
          potentialRevenue={fin?.potentialRevenue}
          currentLeads={fin ? Math.round(fin.currentLeads) : undefined}
          projectedLeads={fin ? Math.round(fin.projectedLeads) : undefined}
        />
      </motion.div>

      <motion.div {...fadeUp(0.14)}>
        <FoxScoreFinancialSimulator
          monthlyVisitors={vm.estimatedVisitors}
          conversionRate={vm.currentConversionRate}
          benchmarkConversion={vm.optimizedConversionRate}
          onCalcChange={setFinancial}
        />
      </motion.div>

      <motion.div {...fadeUp(0.18)}>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Parecer inteligente</CardTitle>
            <p className="text-sm text-muted">Análise consultiva premium baseada em 150+ critérios.</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {vm.consultativeOpinion.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-sm leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      <motion.div {...fadeUp(0.22)}>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Plano de evolução</CardTitle>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between text-xs font-medium uppercase tracking-wide text-subtle">
                <span>Hoje · {vm.score}</span>
                <span>Meta · {targetScore}</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-muted-bg">
                <motion.div
                  className="h-full rounded-full bg-fox-500"
                  initial={{ width: `${vm.score}%` }}
                  animate={{ width: `${targetScore}%` }}
                  transition={{ duration: 0.65 }}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {fs.roadmap.map((phase) => (
              <div
                key={phase.phase}
                className="flex flex-col gap-1 rounded-xl border border-border bg-surface-elevated p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-xs font-semibold uppercase text-fox-600 dark:text-fox-400">
                    Fase {phase.phase}
                  </p>
                  <p className="font-medium">{phase.title}</p>
                  <p className="text-sm text-muted">{phase.description}</p>
                </div>
                <span className="shrink-0 rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                  +{phase.points} pts
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      <motion.div {...fadeUp(0.26)}>
        <ScoreEvolution ctx={ctx} />
      </motion.div>

      {vm.priorities.length > 0 && (
        <motion.div {...fadeUp(0.3)}>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-amber-700 dark:text-amber-400">Prioridades</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted">
                {vm.priorities.map((w) => (
                  <li key={w} className="flex gap-2">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    {w}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {vm.strengths.length > 0 && (
        <motion.div {...fadeUp(0.34)}>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-emerald-700 dark:text-emerald-400">Pontos fortes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted">
                {vm.strengths.map((s) => (
                  <li key={s} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {s}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      )}

      <motion.div {...fadeUp(0.38)}>
        <CostOfInactionCard
          ctx={ctx}
          revenue={fin?.currentRevenue}
          potentialRevenue={fin?.potentialRevenue}
          currentLeads={fin ? Math.round(fin.currentLeads) : undefined}
          projectedLeads={fin ? Math.round(fin.projectedLeads) : undefined}
        />
      </motion.div>

      <motion.div {...fadeUp(0.42)}>
        <ImplementationTimeline ctx={ctx} />
      </motion.div>

      <motion.div {...fadeUp(0.46)}>
        <Card className="border-fox-500/20 bg-gradient-to-br from-fox-500/10 to-transparent">
          <CardHeader>
            <CardTitle className="text-lg">Proposta comercial sugerida</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2">
              {vm.suggestedActions.slice(0, 4).map((title) => (
                <li key={title} className="flex items-center gap-2 text-sm font-medium">
                  <ArrowRight className="h-4 w-4 text-fox-500" />
                  {title}
                </li>
              ))}
            </ul>
            {commercialMessage && <p className="text-sm leading-relaxed text-muted">{commercialMessage}</p>}
          </CardContent>
        </Card>
      </motion.div>

      <motion.div {...fadeUp(0.5)}>
        <AuthorityBadge diagnosedAt={diagnosedAt} />
      </motion.div>

      <motion.div {...fadeUp(0.54)}>
        <PremiumCTA
          companyName={vm.companyName}
          score={vm.score}
          targetScore={targetScore}
          city={city}
          whatsapp={whatsapp}
          onReset={onReset}
        />
      </motion.div>
    </div>
  );
}
