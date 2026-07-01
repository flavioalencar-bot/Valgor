import { connection } from "next/server";

/** Meta tag do Google Search Console — lê GOOGLE_SITE_VERIFICATION em runtime (sem rebuild). */
export async function GoogleSiteVerification() {
  await connection();

  const code = process.env.GOOGLE_SITE_VERIFICATION?.trim();
  if (!code) return null;

  return <meta name="google-site-verification" content={code} />;
}
