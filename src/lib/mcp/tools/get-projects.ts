import { defineTool } from "@lovable.dev/mcp-js";
import { projects } from "@/data/projects";
import { SITE_URL } from "@/lib/site";

export default defineTool({
  name: "list_projects",
  title: "List Tanzania projects",
  description:
    "List Geofields Tanzania Limited drilling and exploration projects by region, mineral and status.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = projects.map(({ id, name, region, location, mineral, status, partner }) => ({
      id,
      name,
      region,
      location: location ?? `${region}, Tanzania`,
      mineral,
      status,
      partner: partner ?? null,
    }));

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(
            {
              website: `${SITE_URL}/projects`,
              country: "Tanzania",
              projects: payload,
            },
            null,
            2,
          ),
        },
      ],
      structuredContent: { country: "Tanzania", projects: payload },
    };
  },
});
