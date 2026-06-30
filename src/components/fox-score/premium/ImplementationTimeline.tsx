"use client";

import { type ResultContext } from "@/components/fox-score/premium/shared";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/shadcn";
import { Clock } from "lucide-react";

type Props = { ctx: ResultContext };

export function ImplementationTimeline({ ctx }: Props) {
  const timeline = ctx.foxScore.premium?.implementationTimeline ?? [];
  const total = ctx.foxScore.premium?.totalImplementationDays ?? timeline.reduce((s, t) => s + t.days, 0);

  if (timeline.length === 0) return null;

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Clock className="h-5 w-5 text-valgor-500" />
          Quanto tempo leva?
        </CardTitle>
        <p className="text-sm text-muted">Implementação prevista — reduz objeções e acelera decisão.</p>
      </CardHeader>
      <CardContent>
        <ul className="divide-y divide-border-subtle rounded-xl border border-border">
          {timeline.map((item) => (
            <li key={item.title} className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="font-medium">{item.title}</span>
              <span className="tabular-nums text-muted">{item.days} dias</span>
            </li>
          ))}
          <li className="flex items-center justify-between bg-valgor-500/10 px-4 py-3 font-semibold">
            <span>Tempo total estimado</span>
            <span className="text-valgor-600 dark:text-valgor-400">{total} dias</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
