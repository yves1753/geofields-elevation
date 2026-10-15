import { absoluteUrl, SITE, SERVICES } from "./site";

export type SeoLink = Record<string, string>;

export type SeoMeta =
  | { title: string }
  | { charSet: string }
  | { name: string; content: string }
  | { property: string; content: string };

export type JsonLd = Record<string, unknown>;

type Crumb = { name: string; path: string };

type PageHeadOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
  jsonLd?: JsonLd[];
  extraMeta?: SeoMeta[];
  extraLinks?: SeoLink[];
};

export function jsonLdScript(data: JsonLd) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify(data),
  };
}

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${absoluteUrl("/")}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: absoluteUrl("/"),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(SITE.logo),
    },
    image: absoluteUrl(SITE.ogImage),
    description: SITE.description,
    email: [SITE.email.info, SITE.email.sales],
    telephone: [SITE.phone.primary, SITE.phone.secondary],
    sameAs: [SITE.linkedin],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE.address.street}, ${SITE.address.poBox}`,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: SITE.areaServed.map((name) => ({ "@type": "AdministrativeArea", name })),
    foundingLocation: {
      "@type": "Place",
      name: SITE.foundingLocation,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: SITE.phone.primary,
        email: SITE.email.sales,
        areaServed: "TZ",
        availableLanguage: ["English", "Swahili"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: SITE.phone.secondary,
        email: SITE.email.info,
        areaServed: "TZ",
        availableLanguage: ["English", "Swahili"],
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mining and exploration services",
      itemListElement: SERVICES.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          url: absoluteUrl(service.path),
          provider: { "@id": `${absoluteUrl("/")}/#organization` },
          areaServed: "TZ",
        },
      })),
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${absoluteUrl("/")}/#website`,
    name: SITE.name,
    url: absoluteUrl("/"),
    description: SITE.description,
    inLanguage: "en-TZ",
    publisher: { "@id": `${absoluteUrl("/")}/#organization` },
  };
}

export function breadcrumbSchema(crumbs: Crumb[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  path: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: absoluteUrl(service.path),
    provider: { "@id": `${absoluteUrl("/")}/#organization` },
    areaServed: {
      "@type": "Country",
      name: "Tanzania",
    },
    serviceType: service.name,
  };
}

export function itemListSchema(
  name: string,
  items: { name: string; url?: string; description?: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url ? absoluteUrl(item.url) : undefined,
      description: item.description,
    })),
  };
}

function webPageSchema(
  title: string,
  description: string,
  path: string,
  image: string,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
    inLanguage: "en-TZ",
    isPartOf: { "@id": `${absoluteUrl("/")}/#website` },
    about: { "@id": `${absoluteUrl("/")}/#organization` },
    primaryImageOfPage: absoluteUrl(image),
  };
}

export function pageHead({
  title,
  description,
  path,
  image = SITE.ogImage,
  imageAlt,
  noindex = false,
  jsonLd = [],
  extraMeta = [],
  extraLinks = [],
}: PageHeadOptions) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const alt = imageAlt ?? title;
  const structured = noindex
    ? jsonLd
    : [webPageSchema(title, description, path, image), ...jsonLd];

  return {
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "robots",
        content: noindex
          ? "noindex, nofollow"
          : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "author", content: SITE.name },
      { name: "geo.region", content: SITE.address.geoRegion },
      { name: "geo.placename", content: SITE.address.locality },
      { name: "geo.position", content: `${SITE.geo.latitude};${SITE.geo.longitude}` },
      { name: "ICBM", content: `${SITE.geo.latitude}, ${SITE.geo.longitude}` },
      { property: "og:site_name", content: SITE.name },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: imageUrl },
      { property: "og:image:width", content: String(SITE.ogImageWidth) },
      { property: "og:image:height", content: String(SITE.ogImageHeight) },
      { property: "og:image:alt", content: alt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
      { name: "twitter:image:alt", content: alt },
      ...extraMeta,
    ] satisfies SeoMeta[],
    links: [{ rel: "canonical", href: url }, ...extraLinks] satisfies SeoLink[],
    scripts: structured.map(jsonLdScript),
  };
}
