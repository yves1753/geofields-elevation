import { defineTool } from "@lovable.dev/mcp-js";
import { SERVICES, SITE_URL } from "@/lib/site";

export default defineTool({
  name: "list_divisions",
  title: "List divisions & services",
  description: "List the operational divisions and services offered by Geofields Tanzania Limited.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const divisions = SERVICES.map((service) => ({
      name: service.name,
      description: service.description,
      url: `${SITE_URL}${service.path}`,
    }));

    return {
      content: [{ type: "text", text: JSON.stringify(divisions, null, 2) }],
      structuredContent: { divisions },
    };
  },
});
