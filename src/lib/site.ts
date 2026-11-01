/** Canonical public origin. Override with VITE_PUBLIC_SITE_URL when needed. */
export const SITE_URL = (
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_PUBLIC_SITE_URL) ||
  "https://geofields.co.tz"
).replace(/\/$/, "");

export const SITE = {
  name: "Geofields Tanzania Limited",
  legalName: "Geofields Tanzania Limited",
  tagline: "Engineering the Future of Mining",
  shortName: "Geofields",
  description:
    "Geofields Tanzania Limited delivers integrated diamond core, reverse circulation and auger drilling, geological exploration, underground support, mining supplies and mining services across Tanzania and Africa.",
  foundingLocation: "Dar es Salaam, Tanzania",
  areaServed: ["Tanzania", "East Africa", "Africa"],
  url: SITE_URL,
  logo: "/logos/geofields-logo.webp",
  ogImage: "/images/home-hero-poster.jpg",
  ogImageWidth: 1920,
  ogImageHeight: 1080,
  email: {
    info: "info@geofields.co.tz",
    sales: "sales@geofields.co.tz",
  },
  phone: {
    primary: "+255 766 775 255",
    primaryTel: "+255766775255",
    secondary: "+255 755 284 141",
    secondaryTel: "+255755284141",
  },
  whatsapp: "https://wa.me/255766775255",
  linkedin: "https://www.linkedin.com/company/geofields-tanzania-limited/",
  instagram: "https://www.instagram.com/geofieldstanzanialtd/",
  address: {
    street: "Mwai Kibaki Road, Mbezi Beach",
    poBox: "P.O Box 76387",
    locality: "Dar es Salaam",
    region: "Dar es Salaam",
    postalCode: "76387",
    country: "Tanzania",
    countryCode: "TZ",
    geoRegion: "TZ-02",
  },
  geo: {
    latitude: -6.7308,
    longitude: 39.2286,
  },
  hours: {
    weekdays: "Mo-Fr 08:00-17:00",
    saturday: "Sa 09:00-13:00",
    display: "Mon – Fri · 08:00 – 17:00 EAT · Sat · 09:00 – 13:00",
    timeZone: "Africa/Dar_es_Salaam",
  },
  mapEmbedQuery: "Mbezi Beach Mwai Kibaki Road Dar es Salaam",
  languages: ["en"],
} as const;

export const NAV_PAGES = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/divisions", name: "Services" },
  { path: "/gus", name: "Underground Support" },
  { path: "/fleet", name: "Drilling Fleet" },
  { path: "/projects", name: "Projects" },
  { path: "/safety", name: "Safety & HSE" },
  { path: "/community", name: "Community" },
  { path: "/request-quote", name: "Request a Quote" },
] as const;

export const SERVICES = [
  {
    name: "Drilling Services",
    path: "/divisions",
    description:
      "Diamond core, reverse circulation, blast hole, grade control and water-well drilling delivered by certified crews and a modern Tanzanian fleet.",
  },
  {
    name: "Geological & Exploration Services",
    path: "/divisions",
    description:
      "Geological mapping, mineral exploration, sampling, surveying and resource evaluation across Tanzania.",
  },
  {
    name: "Mining Services",
    path: "/divisions",
    description:
      "Production drilling, grade control and mine-support services that keep exploration and production programmes on schedule.",
  },
  {
    name: "Geofields Underground Support (GUS)",
    path: "/gus",
    description:
      "Ground support, rock bolting, mine development, underground logistics and emergency response for African underground mines.",
  },
  {
    name: "Mining Supplies",
    path: "/divisions",
    description:
      "Wire mesh, ground support consumables, ventilation, piping and specialised underground mining supplies.",
  },
] as const;

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
