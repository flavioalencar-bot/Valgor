import { connection } from "next/server";

declare global {
  interface Window {
    __VALGOR_ANALYTICS__?: {
      gaId: string;
      metaPixelId: string;
      googleAdsId: string;
    };
  }
}

/** Expõe IDs de analytics no HTML (runtime .env — funciona no Docker sem rebuild). */
export async function RuntimeAnalyticsConfig() {
  await connection();

  const config = {
    gaId: process.env.NEXT_PUBLIC_GA_ID?.trim() ?? "",
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() ?? "",
    googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim() ?? "",
  };

  if (!config.gaId && !config.metaPixelId) return null;

  return (
    <script
      id="valgor-analytics-config"
      dangerouslySetInnerHTML={{
        __html: `window.__VALGOR_ANALYTICS__=${JSON.stringify(config)};`,
      }}
    />
  );
}

export type ValgorAnalyticsConfig = NonNullable<Window["__VALGOR_ANALYTICS__"]>;
