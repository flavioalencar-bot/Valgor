import type { Metadata } from "next";
import { keywordsForPath } from "./keywords";
import { site } from "./site";

const OG_IMAGE = "/img/visuals/hero-visual.png";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

function resolveTitle(title: string, path: string): string {
  const stripped = title
    .replace(new RegExp(`\\s*\\|\\s*${site.brand}\\s*$`, "i"), "")
    .replace(/\s*\|\s*Blog\s+VALGOR\s*$/i, "")
    .trim();
  if (path === "" || path === "/") return stripped;
  return `${stripped} | ${site.brand}`;
}

export function buildMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: SeoInput): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle = resolveTitle(title, path);

  const allKeywords = [
    ...new Set([
      "valgor",
      site.city.toLowerCase(),
      "sjrp",
      ...keywordsForPath(path),
      ...keywords,
    ]),
  ];

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url,
      siteName: site.brand,
      title: fullTitle,
      description,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: site.brand }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    other: {
      "geo.region": "BR-SP",
      "geo.placename": site.city,
      ICBM: "-20.8197, -49.3794",
    },
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.brand,
    alternateName: site.legalName,
    url: site.url,
    inLanguage: "pt-BR",
    publisher: {
      "@type": "Organization",
      name: site.legalName,
      url: site.url,
      logo: `${site.url}/img/valgor-logo.png`,
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${site.tagline} ${site.brand}`,
    description:
      "Empresa de criação de sites, desenvolvimento web, loja virtual, SEO e marketing digital em São José do Rio Preto.",
    url: site.url,
    logo: `${site.url}/img/valgor-logo.png`,
    image: `${site.url}/img/visuals/hero-visual.png`,
    telephone: `+${site.phone}`,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.state,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -20.8197,
      longitude: -49.3794,
    },
    areaServed: {
      "@type": "City",
      name: site.city,
      containedInPlace: { "@type": "State", name: site.state },
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "18:00",
      },
    ],
    sameAs: [site.social.facebook, site.social.linkedin, site.social.twitter],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Serviços digitais ${site.brand}`,
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Criação de Sites" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Desenvolvimento de Sites" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Loja Virtual e E-commerce" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO para Sites" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads e Marketing Digital" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hospedagem de Sites" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Portal Web e Sistema Web" } },
      ],
    },
  };
}

export function faqJsonLd(
  items: readonly { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: input.url,
    serviceType: input.name,
    provider: {
      "@type": "ProfessionalService",
      name: site.brand,
      url: site.url,
      telephone: `+${site.phone}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.city,
        addressRegion: site.state,
        addressCountry: "BR",
      },
    },
    areaServed: {
      "@type": "City",
      name: site.city,
      containedInPlace: { "@type": "State", name: site.state },
    },
  };
}

export function webPageJsonLd(input: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.name,
    description: input.description,
    url: input.url,
    isPartOf: { "@type": "WebSite", name: site.brand, url: site.url },
    about: {
      "@type": "Service",
      name: input.name,
      provider: { "@type": "Organization", name: site.brand },
    },
  };
}

export function blogPostingJsonLd(input: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    url: input.url,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      "@type": "Organization",
      name: site.brand,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.legalName,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/img/valgor-logo.png`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": input.url },
    inLanguage: "pt-BR",
  };
}
