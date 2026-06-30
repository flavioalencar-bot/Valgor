import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Analytics } from "@/components/analytics/Analytics";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { WhatsAppFloat } from "@/components/conversion/WhatsAppFloat";
import { CookieConsent } from "@/components/legal/CookieConsent";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { buildMetadata, localBusinessJsonLd } from "@/lib/seo";
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
    icon: "/img/logo-icon.png",
    apple: "/img/logo-icon.png",
  },
  ...buildMetadata({
    title: `Criação de Sites Profissionais em ${site.city} | ${site.brand}`,
    description:
      "Criação de sites, landing pages, SEO, hospedagem e automações para empresas que querem gerar mais clientes pela internet.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
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
