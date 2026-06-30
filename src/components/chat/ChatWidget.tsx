"use client";

import { site } from "@/lib/site";
import { MessageCircle, Send, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const quickReplies = [
  { q: "Quanto custa um site?", a: "Planos a partir de R$ 199,90/mês com desenvolvimento incluso. Solicite orçamento para proposta personalizada." },
  { q: "Qual o prazo de entrega?", a: "Sites institucionais: 15 a 30 dias úteis. Loja virtual: 30 a 60 dias." },
  { q: "Atendem minha cidade?", a: `Sim! Base em ${site.city} e atendimento online para todo o Brasil.` },
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-[min(100vw-2.5rem,22rem)] overflow-hidden rounded-2xl border border-border bg-surface-card shadow-xl">
          <div className="flex items-center justify-between bg-gradient-to-r from-fox-500 to-fox-600 px-4 py-3 text-white">
            <div>
              <p className="text-sm font-semibold">Assistente {site.brand}</p>
              <p className="text-xs text-white/80">Respostas rápidas · Orçamento</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Fechar chat">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="max-h-72 space-y-3 overflow-y-auto p-4">
            <p className="rounded-xl bg-muted-bg p-3 text-sm text-muted">
              Olá! Sou o assistente virtual da VALGOR. Escolha uma pergunta ou fale conosco
              diretamente.
            </p>
            {quickReplies.map((item) => (
              <details key={item.q} className="rounded-xl border border-border-subtle p-3">
                <summary className="cursor-pointer text-sm font-medium text-foreground">
                  {item.q}
                </summary>
                <p className="mt-2 text-sm text-muted">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="border-t border-border-subtle p-3 space-y-2">
            <Link
              href="/solicitar-orcamento"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-fox-500 py-2 text-sm font-semibold text-white hover:bg-fox-600"
            >
              <Send className="h-4 w-4" />
              Solicitar orçamento
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-border py-2 text-sm font-medium text-foreground hover:bg-muted-bg"
            >
              WhatsApp humano
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-20 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-fox-500 text-white shadow-lg transition hover:bg-fox-600 sm:right-24"
        aria-label="Abrir assistente virtual"
      >
        <MessageCircle className="h-7 w-7" />
      </button>
    </>
  );
}
