import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Analytics } from "@/components/analytics/Analytics";
import { RuntimeAnalyticsConfig } from "@/components/analytics/RuntimeAnalyticsConfig";
import { GoogleSiteVerification } from "@/components/seo/GoogleSiteVerification";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { WhatsAppFloat } from "@/components/conversion/WhatsAppFloat";
import { CookieConsent } from "@/components/legal/CookieConsent";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { buildMetadata, localBusinessJsonLd, webSiteJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import { Montserrat, Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  icons: {
    icon: "/img/valgor-mark.png",
    apple: "/img/valgor-mark.png",
  },
  ...buildMetadata({
    title: `Agência Web em ${site.city} — Sites e SEO`,
    description:
      "Agência web em São José do Rio Preto: criação de sites, landing pages, lojas virtuais e SEO local. Diagnóstico gratuito e orçamento em até 24 horas.",
    path: "/",
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <head>
        <GoogleSiteVerification />
        <RuntimeAnalyticsConfig />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteJsonLd()),
          }}
        />
      </head>
      <body className="min-h-screen bg-surface font-sans text-foreground antialiased">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
          <ChatWidget />
          <CookieConsent />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
