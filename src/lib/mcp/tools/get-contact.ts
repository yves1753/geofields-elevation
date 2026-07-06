import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact",
  title: "Get contact details",
  description:
    "Return contact channels for Geofields Tanzania Limited: phone, WhatsApp, and website contact page.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(
          {
            phone: "+255 766 775 255",
            whatsapp: "https://wa.me/255766775255",
            contact_page: "https://geofields.co.tz/contact",
            quote_page: "https://geofields.co.tz/contact",
          },
          null,
          2,
        ),
      },
    ],
  }),
});
