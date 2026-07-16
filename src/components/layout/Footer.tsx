import { FooterThemeToggle } from "@/components/layout/FooterThemeToggle";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { QUOTE_LABEL, QUOTE_PATH } from "@/lib/conversion";
import { navigation } from "@/data/navigation";
import { siteSegments } from "@/lib/keywords";
import { site } from "@/lib/site";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

const footerSegments = [
  {
    title: "Criação de sites em SJRP",
    href: "/criacao-de-sites-em-sao-jose-do-rio-preto",
  },
  ...siteSegments.slice(0, 5),
];

export function Footer() {
  const links = navigation.flatMap((item) =>
    "items" in item ? item.items : [item],
  );

  return (
    <footer
      className="border-t border-border-subtle"
      style={{ backgroundColor: "var(--footer-bg)" }}
    >
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          <div className="min-w-0 shrink-0 lg:max-w-sm xl:max-w-md">
            <Link href="/" className="inline-flex items-center">
              <Logo placement="footer" className="mb-4" />
            </Link>
            <p className="text-sm leading-relaxed text-muted">
              {site.tagline}. Soluções digitais em{" "}
              <strong className="font-medium text-foreground">{site.city}</strong>.
              Criamos sites, lojas virtuais e portais que geram resultado no Noroeste
              Paulista.
            </p>
            <div className="mt-5 flex items-start gap-2 text-sm text-muted">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-valgor-500 dark:text-valgor-400" />
              <span>
                {site.city}, {site.state}
                <br />
                {site.hours}
              </span>
            </div>
          </div>

          <div className="grid min-w-0 flex-1 grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 lg:gap-8 xl:gap-10">
            <div className="min-w-0">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-valgor-500 dark:text-valgor-400">
                Navegação
              </p>
              <ul className="space-y-2">
                {links.slice(0, 6).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-valgor-500 dark:text-valgor-400">
                Segmentos
              </p>
              <ul className="space-y-2">
                {footerSegments.map((seg) => (
                  <li key={seg.href}>
                    <Link
                      href={seg.href}
                      className="text-sm text-muted transition hover:text-foreground"
                    >
                      {seg.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/segmentos"
                    className="text-sm font-medium text-valgor-600 hover:underline dark:text-valgor-400"
                  >
                    Ver todos →
                  </Link>
                </li>
              </ul>
            </div>

            <div className="min-w-0 lg:min-w-[12rem]">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-valgor-500 dark:text-valgor-400">
                Contato
              </p>
              <ul className="space-y-2 text-sm text-muted">
                <li>
                  <a href={`tel:+${site.phone}`} className="hover:text-foreground">
                    {site.phoneDisplay}
                  </a>
                </li>
                <li className="break-all">
                  <a href={`mailto:${site.email}`} className="hover:text-foreground">
                    {site.email}
                  </a>
                </li>
                <li className="text-subtle text-xs">
                  <span className="block uppercase tracking-wide">CNPJ</span>
                  <span className="whitespace-nowrap">{site.cnpj}</span>
                </li>
              </ul>
            </div>

            <div className="min-w-0 sm:col-span-2 lg:col-span-1 lg:min-w-[14rem]">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-valgor-500 dark:text-valgor-400">
                Vamos conversar?
              </p>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                Conte seu projeto e receba proposta sem compromisso.
              </p>
              <div className="flex max-w-[14rem] flex-col gap-2">
              <Button
                href={QUOTE_PATH}
                className="w-full justify-center !rounded-lg !px-3 !py-2 !text-sm"
              >
                {QUOTE_LABEL}
              </Button>
                <Button
                  href={site.whatsapp}
                  variant="secondary"
                  className="inline-flex w-full items-center justify-center gap-1.5 !rounded-lg !px-3 !py-2 !text-sm"
                >
                  <Phone className="h-3.5 w-3.5" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border-subtle pt-6 sm:gap-6">
          <FooterThemeToggle />
          <div className="flex flex-col gap-3 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.brand} · {site.legalName}. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/politica-de-privacidade" className="hover:text-foreground">
              Privacidade
            </Link>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              Facebook
            </a>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
