import { defineTool } from "@lovable.dev/mcp-js";

const DIVISIONS = [
  {
    slug: "drilling",
    name: "Drilling Services",
    description:
      "Diamond core, RC, grade control and water-well drilling for exploration and production programs.",
  },
  {
    slug: "exploration",
    name: "Exploration & Geology",
    description: "Geological mapping, sampling, logging and resource-definition support.",
  },
  {
    slug: "underground",
    name: "Ground Support (GUS)",
    description: "Underground ground-support installation, shotcrete, bolting and mesh.",
  },
  {
    slug: "fleet",
    name: "Fleet & Equipment",
    description: "Rigs, LHDs, trucks, drills and specialized mining equipment.",
  },
  {
    slug: "supplies",
    name: "Mining Supplies",
    description: "Consumables, spares and industrial supplies for mines and contractors.",
  },
  {
    slug: "oilgas",
    name: "Oil & Gas Services",
    description: "Support services for oil, gas and energy sector projects.",
  },
  {
    slug: "safety",
    name: "Safety & HSE",
    description: "Health, safety, environment and community programs across all sites.",
  },
];

export default defineTool({
  name: "list_divisions",
  title: "List divisions & services",
  description: "List the operational divisions and services offered by Geofields Tanzania Limited.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(DIVISIONS, null, 2) }],
    structuredContent: { divisions: DIVISIONS },
  }),
});
