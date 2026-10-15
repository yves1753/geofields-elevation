import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { absoluteUrl, NAV_PAGES } from "@/lib/site";

const LASTMOD = "2026-10-15";

const priorities: Record<string, string> = {
  "/": "1.0",
  "/divisions": "0.9",
  "/request-quote": "0.9",
  "/about": "0.8",
  "/gus": "0.8",
  "/fleet": "0.8",
  "/projects": "0.8",
  "/safety": "0.7",
  "/community": "0.7",
};

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = NAV_PAGES.map((page) => {
          const loc = absoluteUrl(page.path);
          const priority = priorities[page.path] ?? "0.6";
          return `  <url>
    <loc>${loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
        }).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
