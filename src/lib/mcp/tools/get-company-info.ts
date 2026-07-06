import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_company_info",
  title: "Get company info",
  description:
    "Return an overview of Geofields Tanzania Limited: what the company does, headquarters, and primary contact channels.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(
          {
            name: "Geofields Tanzania Limited",
            summary:
              "Integrated drilling, exploration, underground support, fleet and mining supplies services across Tanzania and Africa.",
            headquarters: "Tanzania",
            phone: "+255 766 775 255",
            whatsapp: "https://wa.me/255766775255",
            website: "https://geofields.co.tz",
          },
          null,
          2,
        ),
      },
    ],
  }),
});
