"use client";

import { buildDiagnosticWhatsAppUrl } from "@/lib/diagnostics/whatsapp";
import { MODULE_WEIGHTS } from "@/lib/diagnostics/types";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, Input, Label } from "@/components/ui/shadcn";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  BarChart3,
  CheckCircle2,
  Loader2,
  Mail,
  Sparkles,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

const SEGMENTS = [
  "",
  "Advocacia",
  "Saúde / Clínicas",
  "Restaurantes e food",
  "Imobiliário",
  "Contabilidade",
  "Comércio / Varejo",
  "Indústria",
  "Serviços",
  "Tecnologia",
  "Educação",
  "Outro",
];

const MODULE_LABELS: Record<keyof typeof MODULE_WEIGHTS, string> = {
  performance: "Performance",
  seo: "SEO Técnico",
  security: "Segurança",
  responsive: "Responsividade",
  conversion: "Conversão",
  localPresence: "Presença Local",
  social: "Redes Sociais",
  ux: "Experiência (UX)",
  authority: "Autoridade Digital",
};

type FormState = {
  companyName: string;
  city: string;
  responsibleName: string;
  whatsapp: string;
  email: string;
  websiteUrl: string;
  instagramUrl: string;
  googleBusinessUrl: string;
  segment: string;
  consentAccepted: boolean;
};

type ApiResult = {
  id: string;
  score: number;
  classification: string;
  classificationMessage: string;
  comparativeNote: string;
  moduleScores: Record<keyof typeof MODULE_WEIGHTS, number>;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  commercialMessage: string;
  ctaLabel: string;
};

const emptyForm: FormState = {
  companyName: "",
  city: "",
  responsibleName: "",
  whatsapp: "",
  email: "",
  websiteUrl: "",
  instagramUrl: "",
  googleBusinessUrl: "",
  segment: "",
  consentAccepted: false,
};

function ScoreRing({ score }: { score: number }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative mx-auto h-40 w-40">
      <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={radius} fill="none" stroke="currentColor" strokeWidth="10" className="text-muted-bg" />
        <motion.circle
          cx="60" cy="60" r={radius} fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round"
          className="text-valgor-500" strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }} animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-[family-name:var(--font-poppins)] text-4xl font-bold">{score}</span>
        <span className="text-xs text-muted">de 100</span>
      </div>
    </div>
  );
}

export function DigitalDiagnosticTool() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [phase, setPhase] = useState<"form" | "loading" | "result">("form");
  const [error, setError] = useState<string | null>(null);
  const [diagnosticId, setDiagnosticId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<ApiResult | null>(null);

  const whatsappUrl = useMemo(
    () => (result ? buildDiagnosticWhatsAppUrl(result.score) : ""),
    [result],
  );

  const pollStatus = useCallback(async (id: string) => {
    const res = await fetch(`/api/diagnostics/${id}/status`);
    const data = await res.json();
    setProgress(data.progress ?? 0);

    if (data.status === "completed") {
      const full = await fetch(`/api/diagnostics/${id}`);
      if (full.ok) {
        setResult(await full.json());
        setPhase("result");
      } else {
        setError("Erro ao carregar resultado.");
        setPhase("form");
      }
      return true;
    }
    if (data.status === "failed") {
      setError(data.errorMessage ?? "Análise falhou. Tente novamente.");
      setPhase("form");
      return true;
    }
    return false;
  }, []);

  useEffect(() => {
    if (phase !== "loading" || !diagnosticId) return;

    let cancelled = false;
    const tick = async () => {
      if (cancelled) return;
      const done = await pollStatus(diagnosticId);
      if (!done && !cancelled) setTimeout(tick, 1500);
    };
    tick();
    return () => { cancelled = true; };
  }, [phase, diagnosticId, pollStatus]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((p) => ({ ...p, [key]: value }));
    setError(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!form.consentAccepted) {
      setError("Aceite o uso dos dados (LGPD) para continuar.");
      return;
    }

    setPhase("loading");
    setProgress(0);

    try {
      const res = await fetch("/api/diagnostics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          websiteUrl: form.websiteUrl.trim() || undefined,
          instagramUrl: form.instagramUrl.trim() || undefined,
          googleBusinessUrl: form.googleBusinessUrl.trim() || undefined,
          segment: form.segment || undefined,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        const msg = [json.error, json.detail].filter(Boolean).join(" — ");
        throw new Error(msg || "Erro ao iniciar diagnóstico");
      }
      setDiagnosticId(json.id);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao enviar formulário.");
      setPhase("form");
    }
  }

  function reset() {
    setForm(emptyForm);
    setResult(null);
    setDiagnosticId(null);
    setPhase("form");
    setError(null);
    setProgress(0);
  }

  return (
    <div className="relative min-h-[80vh] overflow-hidden bg-gradient-to-b from-valgor-500/5 via-surface to-surface-elevated py-16 sm:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-valgor-500/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-3xl px-5">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-valgor-500/20 bg-valgor-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-valgor-600 dark:text-valgor-400">
            <Sparkles className="h-3.5 w-3.5" />
            Análise real · Fase 2
          </div>
          <h1 className="mt-6 font-[family-name:var(--font-poppins)] text-3xl font-bold tracking-tight sm:text-4xl">
            Descubra como está a presença digital da sua empresa
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Avaliamos performance, SEO, segurança, conversão e presença local com análise automática do seu site.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {phase === "form" && (
            <motion.div key="form" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-10">
              <Card className="border-valgor-500/10 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-[family-name:var(--font-poppins)] text-xl">Dados da empresa</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="companyName">Nome da empresa *</Label>
                        <Input id="companyName" required value={form.companyName} onChange={(e) => updateField("companyName", e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">Cidade *</Label>
                        <Input id="city" required value={form.city} onChange={(e) => updateField("city", e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="segment">Segmento</Label>
                        <select id="segment" value={form.segment} onChange={(e) => updateField("segment", e.target.value)}
                          className="flex h-10 w-full rounded-lg border border-border bg-surface px-3 text-sm">
                          {SEGMENTS.map((s) => (
                            <option key={s || "e"} value={s}>{s || "Selecione (opcional)"}</option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="responsibleName">Nome do responsável *</Label>
                        <Input id="responsibleName" required value={form.responsibleName} onChange={(e) => updateField("responsibleName", e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="whatsapp">WhatsApp *</Label>
                        <Input id="whatsapp" required value={form.whatsapp} onChange={(e) => updateField("whatsapp", e.target.value)} placeholder="(17) 99999-9999" />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="email">E-mail *</Label>
                        <Input id="email" type="email" required value={form.email} onChange={(e) => updateField("email", e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="websiteUrl">Site da empresa</Label>
                        <Input id="websiteUrl" value={form.websiteUrl} onChange={(e) => updateField("websiteUrl", e.target.value)} placeholder="https://www.suaempresa.com.br" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="instagramUrl">Instagram</Label>
                        <Input id="instagramUrl" value={form.instagramUrl} onChange={(e) => updateField("instagramUrl", e.target.value)} placeholder="@empresa" />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="googleBusinessUrl">Google Business / Maps</Label>
                        <Input id="googleBusinessUrl" value={form.googleBusinessUrl} onChange={(e) => updateField("googleBusinessUrl", e.target.value)} placeholder="Link do perfil ou nome no Google" />
                      </div>
                    </div>

                    <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-surface-elevated p-4 text-sm">
                      <input type="checkbox" checked={form.consentAccepted} onChange={(e) => updateField("consentAccepted", e.target.checked)} className="mt-1" />
                      <span className="text-muted">
                        Ao enviar, você concorda que a VALGOR utilize seus dados para gerar o diagnóstico e entrar em contato com recomendações relacionadas à sua presença digital.
                      </span>
                    </label>

                    {error && (
                      <div className="flex gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-300">
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />{error}
                      </div>
                    )}

                    <Button type="submit" className="w-full sm:w-auto">Gerar diagnóstico gratuito</Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {phase === "loading" && (
            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-16 space-y-6 text-center">
              <Loader2 className="mx-auto h-10 w-10 animate-spin text-valgor-500" />
              <p className="font-[family-name:var(--font-poppins)] text-lg font-semibold">Analisando sua presença digital...</p>
              <p className="text-sm text-muted">Performance · SEO · Segurança · Conversão</p>
              <div className="mx-auto h-2 max-w-md overflow-hidden rounded-full bg-muted-bg">
                <motion.div className="h-full bg-valgor-500" animate={{ width: `${Math.max(progress, 8)}%` }} transition={{ duration: 0.4 }} />
              </div>
              <p className="text-xs text-subtle">{progress}% concluído</p>
            </motion.div>
          )}

          {phase === "result" && result && (
            <motion.div key="result" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mt-10 space-y-6">
              <Card className="overflow-hidden border-valgor-500/20 shadow-xl">
                <CardHeader className="border-b border-border-subtle bg-gradient-to-r from-valgor-500/10 to-transparent text-center">
                  <CardTitle className="font-[family-name:var(--font-poppins)] text-xl">Resultado do Diagnóstico Digital</CardTitle>
                  <p className="mt-4 text-lg text-muted">Sua empresa recebeu nota <strong className="text-foreground">{result.score}/100</strong></p>
                  <p className="mt-2 text-sm font-semibold text-valgor-600 dark:text-valgor-400">Classificação: {result.classification}</p>
                </CardHeader>
                <CardContent className="space-y-8 pt-8">
                  <ScoreRing score={result.score} />
                  <p className="text-center text-sm leading-relaxed text-muted">{result.classificationMessage}</p>
                  <p className="rounded-xl border border-border bg-muted-bg/50 px-4 py-3 text-center text-sm text-muted">
                    <BarChart3 className="mb-1 inline h-4 w-4 text-valgor-500" /> {result.comparativeNote}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle className="text-lg">Nota por módulo</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  {(Object.keys(MODULE_WEIGHTS) as (keyof typeof MODULE_WEIGHTS)[]).map((key) => {
                    const val = result.moduleScores[key] ?? 0;
                    const max = MODULE_WEIGHTS[key];
                    const pct = max > 0 ? (val / max) * 100 : 0;
                    return (
                      <div key={key}>
                        <div className="mb-1 flex justify-between text-sm">
                          <span>{MODULE_LABELS[key]}</span>
                          <span className="tabular-nums text-muted">{val}/{max}</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-muted-bg">
                          <motion.div className={cn("h-full rounded-full", pct >= 70 ? "bg-emerald-500" : pct >= 40 ? "bg-amber-500" : "bg-red-400")}
                            initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 0.8 }} />
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {result.strengths.length > 0 && (
                <Card>
                  <CardHeader><CardTitle className="text-lg text-emerald-700 dark:text-emerald-400">Pontos fortes</CardTitle></CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted">
                      {result.strengths.map((s) => (
                        <li key={s} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />{s}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {result.weaknesses.length > 0 && (
                <Card>
                  <CardHeader><CardTitle className="text-lg text-amber-700 dark:text-amber-400">Pontos de melhoria</CardTitle></CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted">
                      {result.weaknesses.map((w) => (
                        <li key={w} className="flex gap-2"><AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />{w}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {result.recommendations.length > 0 && (
                <Card>
                  <CardHeader><CardTitle className="text-lg">Recomendações</CardTitle></CardHeader>
                  <CardContent>
                    <ul className="list-inside list-disc space-y-2 text-sm text-muted">
                      {result.recommendations.map((r) => <li key={r}>{r}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              )}

              <Card className="border-valgor-500/20 bg-valgor-500/5">
                <CardContent className="space-y-4 pt-6">
                  <p className="text-sm leading-relaxed text-muted">{result.commercialMessage}</p>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex rounded-xl bg-valgor-500 px-6 py-3 text-sm font-semibold text-white hover:bg-valgor-600">
                    {result.ctaLabel}
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="space-y-4 pt-6">
                  <p className="text-sm text-muted">
                    Sua presença digital pode ser muito mais forte. A VALGOR pode ajudar sua empresa a aparecer melhor no Google, transmitir mais confiança e gerar mais contatos todos os dias.
                  </p>
                  <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
                      Falar com a VALGOR no WhatsApp
                    </a>
                    <Button type="button" variant="secondary" onClick={() => alert("Relatório por e-mail — em breve na Fase 3.")}>
                      <Mail className="h-4 w-4" /> Receber relatório por e-mail
                    </Button>
                    <Button type="button" variant="ghost" onClick={reset}>Novo diagnóstico</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
