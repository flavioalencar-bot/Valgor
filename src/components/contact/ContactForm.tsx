"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-2xl border border-border bg-surface-card px-4 py-3 text-sm text-foreground placeholder:text-subtle focus:border-fox-500/50 focus:outline-none focus:ring-2 focus:ring-fox-500/20";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome" name="name" required inputClass={inputClass} />
        <Field label="E-mail" name="email" type="email" required inputClass={inputClass} />
      </div>
      <Field label="Telefone" name="phone" type="tel" inputClass={inputClass} />
      <Field label="Assunto" name="subject" required inputClass={inputClass} />
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-muted">
          Mensagem *
        </label>
        <textarea id="message" name="message" required rows={5} className={inputClass} />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex rounded-full bg-fox-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-fox-400 disabled:opacity-60"
      >
        {status === "loading" ? "Enviando…" : "Enviar mensagem"}
      </button>
      {status === "ok" && (
        <p className="text-sm text-emerald-600 dark:text-emerald-400">
          Mensagem enviada! Retornaremos em breve.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-500">
          Erro ao enviar. Tente o WhatsApp: {site.phoneDisplay}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  inputClass,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  inputClass: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-muted">
        {label} {required && "*"}
      </label>
      <input id={name} name={name} type={type} required={required} className={inputClass} />
    </div>
  );
}
