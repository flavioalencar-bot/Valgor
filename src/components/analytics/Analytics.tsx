"use client";

import type { ValgorAnalyticsConfig } from "@/components/analytics/RuntimeAnalyticsConfig";
import Script from "next/script";
import { useEffect, useState } from "react";

const CONSENT_KEY = "fox_cookie_consent";

function readAnalyticsConfig(): ValgorAnalyticsConfig {
  if (typeof window === "undefined") {
    return { gaId: "", metaPixelId: "", googleAdsId: "" };
  }
  return (
    window.__VALGOR_ANALYTICS__ ?? {
      gaId: "",
      metaPixelId: "",
      googleAdsId: "",
    }
  );
}

export function Analytics() {
  const [enabled, setEnabled] = useState(false);
  const [config, setConfig] = useState<ValgorAnalyticsConfig>(() => readAnalyticsConfig());

  useEffect(() => {
    setConfig(readAnalyticsConfig());
    setEnabled(localStorage.getItem(CONSENT_KEY) === "accepted");
    const onAccept = () => setEnabled(true);
    window.addEventListener("valgor-cookies-accepted", onAccept);
    return () => window.removeEventListener("valgor-cookies-accepted", onAccept);
  }, []);

  const { gaId, metaPixelId, googleAdsId } = config;

  if (!enabled) return null;

  return (
    <>
      {gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
              ${googleAdsId ? `gtag('config', '${googleAdsId}');` : ""}
            `}
          </Script>
        </>
      )}
      {metaPixelId && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
