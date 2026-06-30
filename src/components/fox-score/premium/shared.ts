import type { FoxScoreViewModel } from "@/lib/fox-score/view-model";

export function brl(n: number) {
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

export function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.28, delay },
  };
}

export type ResultContext = FoxScoreViewModel & {
  city?: string;
  whatsapp?: string;
  diagnosedAt?: string;
};
