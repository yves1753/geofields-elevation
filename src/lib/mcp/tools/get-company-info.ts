import { defineTool } from "@lovable.dev/mcp-js";
import { SITE, SITE_URL, SERVICES } from "@/lib/site";

export default defineTool({
  name: "get_company_info",
  title: "Get company info",
  description:
    "Return an overview of Geofields Tanzania Limited: what the company does, headquarters, services, and primary contact channels.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(
          {
            name: SITE.name,
            summary: SITE.description,
            tagline: SITE.tagline,
            headquarters: SITE.foundingLocation,
            address: {
              street: SITE.address.street,
              poBox: SITE.address.poBox,
              city: SITE.address.locality,
              country: SITE.address.country,
            },
            geo: SITE.geo,
            areaServed: SITE.areaServed,
            phone: [SITE.phone.primary, SITE.phone.secondary],
            email: [SITE.email.info, SITE.email.sales],
            whatsapp: SITE.whatsapp,
            linkedin: SITE.linkedin,
            instagram: SITE.instagram,
            website: SITE_URL,
            hours: SITE.hours.display,
            services: SERVICES.map((service) => service.name),
          },
          null,
          2,
        ),
      },
    ],
  }),
});
