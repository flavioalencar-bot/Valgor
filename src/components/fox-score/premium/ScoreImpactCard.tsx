"use client";

import { AnimatedScoreRing } from "@/components/fox-score/AnimatedScoreRing";
import { brl, type ResultContext } from "@/components/fox-score/premium/shared";
import { AlertTriangle } from "lucide-react";

type Props = { ctx: ResultContext };

export function ScoreImpactCard({ ctx }: Props) {
  const p = ctx.foxScore.premium;
  const impact = p?.impact ?? {
    tierHeadline: ctx.impactMessage,
    lostContacts: Math.round((ctx.lostLeadsMin + ctx.lostLeadsMax) / 2),
    monthlyOpportunity: ctx.revenueDifference,
  };

  return (
    <div className="border-t border-border-subtle bg-gradient-to-b from-amber-500/8 to-red-500/5 px-6 py-8 text-center sm:px-10">
      <div className="mx-auto mb-4 h-px max-w-xs bg-gradient-to-r from-transparent via-valgor-500/40 to-transparent" />
      <p className="text-sm font-medium text-muted">{impact.tierHeadline}</p>
      <p className="mt-4 font-[family-name:var(--font-poppins)] text-lg font-semibold capitalize text-foreground sm:text-xl">
        {ctx.classification}
      </p>
      <div className="mx-auto my-6 h-px max-w-md bg-border-subtle" />
      <div className="mx-auto flex max-w-lg items-start justify-center gap-2">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
        <p className="text-left text-sm leading-relaxed text-muted sm:text-base">
          Sua empresa pode estar deixando de gerar aproximadamente{" "}
          <strong className="text-foreground">{impact.lostContacts} novos contatos por mês</strong>, o que
          representa um potencial de até{" "}
          <strong className="text-valgor-600 dark:text-valgor-400">{brl(impact.monthlyOpportunity)}/mês</strong> em
          novas oportunidades.
        </p>
      </div>
    </div>
  );
}
