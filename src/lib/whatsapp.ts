import { site } from "@/lib/site";

export const WHATSAPP_PHONE = site.phone;

export const whatsappMessages = {
  hero: "Olá, quero solicitar um orçamento para melhorar a presença digital da minha empresa.",
  quote: "Olá, gostaria de solicitar um orçamento com a VALGOR.",
  diagnostic: "Olá, quero fazer o diagnóstico gratuito Valgor Score da minha empresa.",
  specialist: "Olá, gostaria de falar com um especialista da VALGOR.",
  foxScoreLead: "Olá, quero fazer o diagnóstico Valgor Score da minha empresa.",
} as const;

export type WhatsappMessageKey = keyof typeof whatsappMessages;

export function buildWhatsappLink(message: string, phone: string = site.phone): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function whatsappLinkByKey(key: WhatsappMessageKey): string {
  return buildWhatsappLink(whatsappMessages[key]);
}

export function whatsappPlanLink(planDisplayName: string): string {
  return buildWhatsappLink(
    `Olá, tenho interesse no plano ${planDisplayName} da VALGOR. Gostaria de receber mais informações.`,
  );
}
