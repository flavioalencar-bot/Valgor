"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/** Dispara eventos de conversão ao carregar /obrigado (GA4 + Meta, se consentidos). */
export function ThankYouTracker() {
  useEffect(() => {
    window.gtag?.("event", "generate_lead", {
      event_category: "conversion",
      event_label: "contato_orcamento",
      value: 1,
    });
    window.fbq?.("track", "Lead");
  }, []);

  return null;
}
