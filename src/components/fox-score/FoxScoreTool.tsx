"use client";

import { FoxScoreResultView } from "@/components/fox-score/FoxScoreResultView";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, Input, Label } from "@/components/ui/shadcn";
import { FOX_SCORE_TRUST } from "@/lib/fox-score/config";
import { FOX_SCORE_STEPS } from "@/lib/fox-score/steps";
import { buildFoxScoreViewModel } from "@/lib/fox-score/view-model";
import type { FoxScorePayload } from "@/lib/fox-score/enrich";
import { MODULE_WEIGHTS } from "@/lib/diagnostics/types";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, Check, Loader2, Sparkles } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

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

type ApiResult = {
  id: string;
  score: number;
  classification: string;
  moduleScores: Record<keyof typeof MODULE_WEIGHTS, number>;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  commercialMessage: string | null;
  ctaLabel: string | null;
  companyName: string;
  city?: string;
  whatsapp?: string;
  completedAt?: string | null;
  foxScore: FoxScorePayload | null;
};

export function FoxScoreTool() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [phase, setPhase] = useState<"form" | "loading" | "result">("form");
  const [error, setError] = useState<string | null>(null);
  const [diagnosticId, setDiagnosticId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [processingStep, setProcessingStep] = useState<string | null>(null);
  const [result, setResult] = useState<ApiResult | null>(null);

  const searchParams = useSearchParams();

  useEffect(() => {
    const company = searchParams.get("company");
    const city = searchParams.get("city");
    const site = searchParams.get("site");
    const instagram = searchParams.get("instagram");
    const contact = searchParams.get("contact");
    if (!company && !city && !contact && !site && !instagram) return;

    setForm((p) => {
      const next = { ...p };
      if (company) next.companyName = company;
      if (city) next.city = city;
      if (site) next.websiteUrl = site;
      if (instagram) next.instagramUrl = instagram;
      if (contact) {
        if (contact.includes("@")) next.email = contact;
        else next.whatsapp = contact;
      }
      return next;
    });
  }, [searchParams]);

  const viewModel = useMemo(
    () => (result ? buildFoxScoreViewModel(result) : null),
    [result],
  );

  const pollStatus = useCallback(async (id: string) => {
    const res = await fetch(`/api/diagnostics/${id}/status`);
    const data = await res.json();
    setProgress(data.progress ?? 0);
    setProcessingStep(data.processingStep ?? null);

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
      if (!done && !cancelled) setTimeout(tick, 1200);
    };
    tick();
    return () => {
      cancelled = true;
    };
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
    setProcessingStep(null);

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
        throw new Error(msg || "Erro ao iniciar análise");
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
    setProcessingStep(null);
  }

  const activeStepIdx = FOX_SCORE_STEPS.findIndex((s) => s.id === processingStep);

  return (
    <div className="relative min-h-[80vh] overflow-hidden bg-gradient-to-b from-valgor-500/5 via-surface to-surface-elevated py-16 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-valgor-500/10 via-transparent to-transparent"
      />
      <div className="relative mx-auto max-w-4xl px-5">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-valgor-500/20 bg-valgor-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-valgor-600 dark:text-valgor-400">
            <Sparkles className="h-3.5 w-3.5" />
            Valgor Score · v1.0
          </div>
          <h1 className="mt-6 font-[family-name:var(--font-poppins)] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Descubra quanto sua empresa pode estar deixando de vender na internet
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Receba uma análise inteligente da sua presença digital, com nota, oportunidades de melhoria, estimativa
            de retorno financeiro e um plano claro para atrair mais clientes.
          </p>
          {phase === "form" && (
            <p className="mx-auto mt-3 max-w-xl text-xs text-subtle">
              {FOX_SCORE_TRUST.companiesAnalyzed} empresas analisadas · {FOX_SCORE_TRUST.accuracyLabel}
            </p>
          )}
        </div>

        <AnimatePresence mode="wait">
          {phase === "form" && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-10"
            >
              <Card className="border-valgor-500/10 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-[family-name:var(--font-poppins)] text-xl">
                    Dados da empresa
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="companyName">Empresa *</Label>
                        <Input
                          id="companyName"
                          required
                          value={form.companyName}
                          onChange={(e) => updateField("companyName", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">Cidade *</Label>
                        <Input
                          id="city"
                          required
                          value={form.city}
                          onChange={(e) => updateField("city", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="segment">Segmento</Label>
                        <select
                          id="segment"
                          value={form.segment}
                          onChange={(e) => updateField("segment", e.target.value)}
                          className="flex h-10 w-full rounded-lg border border-border bg-surface px-3 text-sm"
                        >
                          {SEGMENTS.map((s) => (
                            <option key={s || "e"} value={s}>
                              {s || "Selecione (opcional)"}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="websiteUrl">Site</Label>
                        <Input
                          id="websiteUrl"
                          value={form.websiteUrl}
                          onChange={(e) => updateField("websiteUrl", e.target.value)}
                          placeholder="https://www.suaempresa.com.br"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="instagramUrl">Instagram</Label>
                        <Input
                          id="instagramUrl"
                          value={form.instagramUrl}
                          onChange={(e) => updateField("instagramUrl", e.target.value)}
                          placeholder="@empresa"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="whatsapp">WhatsApp *</Label>
                        <Input
                          id="whatsapp"
                          required
                          value={form.whatsapp}
                          onChange={(e) => updateField("whatsapp", e.target.value)}
                          placeholder="(17) 99999-9999"
                        />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => updateField("email", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="googleBusinessUrl">Google Business / Maps</Label>
                        <Input
                          id="googleBusinessUrl"
                          value={form.googleBusinessUrl}
                          onChange={(e) => updateField("googleBusinessUrl", e.target.value)}
                          placeholder="Link do perfil ou nome no Google"
                        />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="responsibleName">Nome do responsável *</Label>
                        <Input
                          id="responsibleName"
                          required
                          value={form.responsibleName}
                          onChange={(e) => updateField("responsibleName", e.target.value)}
                        />
                      </div>
                    </div>

                    <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-surface-elevated p-4 text-sm">
                      <input
                        type="checkbox"
                        checked={form.consentAccepted}
                        onChange={(e) => updateField("consentAccepted", e.target.checked)}
                        className="mt-1"
                      />
                      <span className="text-muted">
                        Ao enviar, você concorda que a VALGOR utilize seus dados para gerar o Valgor Score e entrar em
                        contato com recomendações (LGPD).
                      </span>
                    </label>

                    {error && (
                      <div className="flex gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-300">
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                        {error}
                      </div>
                    )}

                    <Button type="submit" className="w-full sm:w-auto">
                      Iniciar Valgor Score gratuito
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {phase === "loading" && (
            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-12">
              <Card className="mx-auto max-w-lg border-valgor-500/20 shadow-xl">
                <CardContent className="space-y-6 pt-8">
                  <div className="text-center">
                    <Loader2 className="mx-auto h-10 w-10 animate-spin text-valgor-500" />
                    <p className="mt-4 font-[family-name:var(--font-poppins)] text-lg font-semibold">
                      Estamos analisando mais de 150 critérios da sua presença digital...
                    </p>
                    <p className="mt-1 text-sm text-muted">Tempo estimado: 30 a 90 segundos</p>
                  </div>

                  <ul className="space-y-2.5">
                    {FOX_SCORE_STEPS.map((step, i) => {
                      const done =
                        progress >= step.minProgress ||
                        (activeStepIdx >= 0 && i < activeStepIdx) ||
                        (activeStepIdx >= 0 && i === activeStepIdx && progress >= 100);
                      const active =
                        processingStep === step.id ||
                        (activeStepIdx < 0 &&
                          progress >= step.minProgress &&
                          progress < (FOX_SCORE_STEPS[i + 1]?.minProgress ?? 101));

                      return (
                        <li
                          key={step.id}
                          className={cn(
                            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                            done && "text-emerald-600 dark:text-emerald-400",
                            active && !done && "bg-valgor-500/10 font-medium",
                            !done && !active && "text-muted",
                          )}
                        >
                          {done ? (
                            <Check className="h-4 w-4 shrink-0" />
                          ) : active ? (
                            <Loader2 className="h-4 w-4 shrink-0 animate-spin text-valgor-500" />
                          ) : (
                            <span className="h-4 w-4 shrink-0 rounded-full border border-border" />
                          )}
                          {step.label}
                        </li>
                      );
                    })}
                  </ul>

                  <div className="h-2 overflow-hidden rounded-full bg-muted-bg">
                    <motion.div
                      className="h-full bg-valgor-500"
                      animate={{ width: `${Math.max(progress, 5)}%` }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                  <p className="text-center text-xs text-subtle">{progress}% concluído</p>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {phase === "result" && viewModel && (
            <FoxScoreResultView
              vm={viewModel}
              commercialMessage={result?.commercialMessage ?? null}
              city={result?.city}
              whatsapp={result?.whatsapp ?? form.whatsapp}
              diagnosedAt={
                result?.completedAt
                  ? new Date(result.completedAt).toLocaleDateString("pt-BR")
                  : undefined
              }
              onReset={reset}
            />
          )}

          {phase === "result" && result && !viewModel && (
            <motion.div className="mt-10 text-center">
              <p className="text-muted">Resultado disponível, mas dados Valgor Score incompletos. Refaça a análise.</p>
              <Button type="button" className="mt-4" onClick={reset}>
                Nova análise
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
