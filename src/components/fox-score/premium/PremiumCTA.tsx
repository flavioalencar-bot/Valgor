"use client";

import { FOX_SCORE_CTA_LABEL, FOX_SCORE_CTA_SUBTITLE } from "@/lib/fox-score/config";
import { buildFoxScoreWhatsAppUrl } from "@/lib/diagnostics/whatsapp";
import { motion } from "framer-motion";

type Props = {
  companyName: string;
  score: number;
  targetScore: number;
  city?: string;
  whatsapp?: string;
  onReset: () => void;
};

export function PremiumCTA({ companyName, score, targetScore, city, whatsapp, onReset }: Props) {
  const url = buildFoxScoreWhatsAppUrl({
    companyName,
    score,
    targetScore,
    city,
    whatsapp,
  });

  return (
    <div className="text-center">
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="inline-flex w-full max-w-lg items-center justify-center rounded-2xl bg-fox-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-fox-500/30 transition hover:bg-fox-600 sm:w-auto sm:min-w-[340px]"
      >
        {FOX_SCORE_CTA_LABEL}
      </motion.a>
      <p className="mt-3 text-sm text-muted">{FOX_SCORE_CTA_SUBTITLE}</p>
      <button
        type="button"
        onClick={onReset}
        className="mt-4 text-sm text-muted underline-offset-4 hover:text-foreground hover:underline"
      >
        Nova análise
      </button>
    </div>
  );
}
