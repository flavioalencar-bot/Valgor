"use client";

import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { FOX_SCORE_PATH } from "@/lib/conversion";
import { homeFoxScoreLead } from "@/lib/home-content";
import { Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type LeadForm = {
  companyName: string;
  websiteUrl: string;
  instagramUrl: string;
  city: string;
  contact: string;
};

const empty: LeadForm = {
  companyName: "",
  websiteUrl: "",
  instagramUrl: "",
  city: "",
  contact: "",
};

export function FoxScoreLeadSection() {
  const router = useRouter();
  const [form, setForm] = useState<LeadForm>(empty);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!form.companyName.trim() || !form.city.trim() || !form.contact.trim()) {
      setError("Preencha empresa, cidade e WhatsApp ou e-mail.");
      return;
    }

    const params = new URLSearchParams();
    params.set("company", form.companyName.trim());
    params.set("city", form.city.trim());
    if (form.websiteUrl.trim()) params.set("site", form.websiteUrl.trim());
    if (form.instagramUrl.trim()) params.set("instagram", form.instagramUrl.trim());
    params.set("contact", form.contact.trim());

    router.push(`${FOX_SCORE_PATH}?${params.toString()}`);
  }

  return (
    <Section className="border-b border-border-subtle bg-gradient-to-b from-fox-500/10 via-surface to-surface">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-fox-500/25 bg-surface-card shadow-xl">
            <div className="border-b border-border-subtle bg-fox-500/5 px-6 py-8 text-center sm:px-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-fox-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-fox-600 dark:text-fox-400">
                <Sparkles className="h-3.5 w-3.5" />
                Valgor Score · Gratuito
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-poppins)] text-2xl font-bold tracking-tight sm:text-3xl">
                {homeFoxScoreLead.title}
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                {homeFoxScoreLead.subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 px-6 py-8 sm:px-10">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block space-y-1.5 sm:col-span-2">
                  <span className="text-sm font-medium">Nome da empresa *</span>
                  <input
                    required
                    value={form.companyName}
                    onChange={(e) => setForm((p) => ({ ...p, companyName: e.target.value }))}
                    className="flex h-11 w-full rounded-xl border border-border bg-surface px-3 text-sm"
                    placeholder="Sua empresa"
                  />
                </label>
                <label className="block space-y-1.5">
                  <span className="text-sm font-medium">Site</span>
                  <input
                    value={form.websiteUrl}
                    onChange={(e) => setForm((p) => ({ ...p, websiteUrl: e.target.value }))}
                    className="flex h-11 w-full rounded-xl border border-border bg-surface px-3 text-sm"
                    placeholder="https://..."
                  />
                </label>
                <label className="block space-y-1.5">
                  <span className="text-sm font-medium">Instagram</span>
                  <input
                    value={form.instagramUrl}
                    onChange={(e) => setForm((p) => ({ ...p, instagramUrl: e.target.value }))}
                    className="flex h-11 w-full rounded-xl border border-border bg-surface px-3 text-sm"
                    placeholder="@empresa"
                  />
                </label>
                <label className="block space-y-1.5">
                  <span className="text-sm font-medium">Cidade *</span>
                  <input
                    required
                    value={form.city}
                    onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))}
                    className="flex h-11 w-full rounded-xl border border-border bg-surface px-3 text-sm"
                    placeholder="Sua cidade"
                  />
                </label>
                <label className="block space-y-1.5">
                  <span className="text-sm font-medium">WhatsApp ou e-mail *</span>
                  <input
                    required
                    value={form.contact}
                    onChange={(e) => setForm((p) => ({ ...p, contact: e.target.value }))}
                    className="flex h-11 w-full rounded-xl border border-border bg-surface px-3 text-sm"
                    placeholder="(17) 99999-9999"
                  />
                </label>
              </div>

              {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}

              <Button type="submit" className="w-full !rounded-xl sm:w-auto">
                {homeFoxScoreLead.cta}
              </Button>

              <p className="text-xs leading-relaxed text-muted">{homeFoxScoreLead.footnote}</p>
            </form>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
