"use client";

import { FOX_SCORE_CRITERIA_COUNT, FOX_SCORE_TRUST } from "@/lib/fox-score/config";
import { Shield } from "lucide-react";

type Props = { diagnosedAt?: string };

export function AuthorityBadge({ diagnosedAt }: Props) {
  const date =
    diagnosedAt ??
    new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-border bg-surface-elevated/60 px-6 py-4 text-center text-xs text-muted sm:gap-10">
      <div className="flex items-center gap-2">
        <Shield className="h-4 w-4 text-fox-500" />
        <span>
          Diagnóstico realizado <strong className="text-foreground">{date}</strong>
        </span>
      </div>
      <span>{FOX_SCORE_TRUST.accuracyLabel.replace(" estimada", "")}</span>
      <span>
        Baseado em <strong className="text-foreground">{FOX_SCORE_CRITERIA_COUNT} critérios técnicos</strong>
      </span>
    </div>
  );
}
