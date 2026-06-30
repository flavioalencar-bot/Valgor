export const FOX_SCORE_STEPS = [
  { id: "site", label: "Encontrando site", minProgress: 5 },
  { id: "speed", label: "Avaliando velocidade", minProgress: 20 },
  { id: "seo", label: "Analisando SEO", minProgress: 35 },
  { id: "security", label: "Verificando segurança", minProgress: 48 },
  { id: "google", label: "Encontrando Google Business", minProgress: 58 },
  { id: "social", label: "Avaliando redes sociais", minProgress: 68 },
  { id: "competitors", label: "Comparando concorrentes", minProgress: 78 },
  { id: "ai", label: "Gerando recomendações", minProgress: 90 },
] as const;

export function stepFromProgress(progress: number, processingStep?: string | null) {
  if (processingStep) {
    const found = FOX_SCORE_STEPS.find((s) => s.id === processingStep);
    if (found) return found;
  }
  let current: (typeof FOX_SCORE_STEPS)[number] = FOX_SCORE_STEPS[0]!;
  for (const s of FOX_SCORE_STEPS) {
    if (progress >= s.minProgress) current = s;
  }
  return current;
}

export function completedSteps(progress: number, processingStep?: string | null) {
  const current = stepFromProgress(progress, processingStep);
  const idx = FOX_SCORE_STEPS.findIndex((s) => s.id === current.id);
  return FOX_SCORE_STEPS.slice(0, idx);
}
