"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const CONSENT_KEY = "fox_cookie_consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(CONSENT_KEY) !== "accepted") {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    window.dispatchEvent(new Event("valgor-cookies-accepted"));
    setVisible(false);
  }

  function reject() {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentimento de cookies"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-surface-card p-4 shadow-lg sm:bottom-4 sm:mx-auto sm:max-w-2xl sm:rounded-2xl sm:border"
    >
      <p className="text-sm leading-relaxed text-muted">
        Utilizamos cookies para analytics, melhorar sua experiência e medir campanhas. Ao
        continuar, você concorda com nossa{" "}
        <Link href="/empresa-de-criacao-de-site" className="text-valgor-500 hover:underline">
          política de privacidade
        </Link>
        . Conforme LGPD, você pode recusar cookies não essenciais.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={accept}
          className="rounded-lg bg-valgor-500 px-4 py-2 text-sm font-semibold text-white hover:bg-valgor-600"
        >
          Aceitar
        </button>
        <button
          type="button"
          onClick={reject}
          className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted hover:text-foreground"
        >
          Recusar
        </button>
      </div>
    </div>
  );
}

export { CONSENT_KEY };
