"use client";

import { site } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition hover:scale-105 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
