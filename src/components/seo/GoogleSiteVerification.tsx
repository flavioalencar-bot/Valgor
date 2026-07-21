/** Meta tag do Google Search Console — GOOGLE_SITE_VERIFICATION lida no build (ver args do Dockerfile). */
export function GoogleSiteVerification() {
  const code = process.env.GOOGLE_SITE_VERIFICATION?.trim();
  if (!code) return null;

  return <meta name="google-site-verification" content={code} />;
}
