import { defineTool } from "@lovable.dev/mcp-js";
import { SITE, SITE_URL } from "@/lib/site";

export default defineTool({
  name: "get_contact",
  title: "Get contact details",
  description:
    "Return contact channels for Geofields Tanzania Limited: phone, WhatsApp, email, office address, and quote page.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(
          {
            phone: SITE.phone.primary,
            phone_alt: SITE.phone.secondary,
            whatsapp: SITE.whatsapp,
            email_info: SITE.email.info,
            email_sales: SITE.email.sales,
            address: `${SITE.address.street}, ${SITE.address.poBox}, ${SITE.address.locality}, ${SITE.address.country}`,
            hours: SITE.hours.display,
            quote_page: `${SITE_URL}/request-quote`,
            contact_page: `${SITE_URL}/request-quote`,
          },
          null,
          2,
        ),
      },
    ],
  }),
});
