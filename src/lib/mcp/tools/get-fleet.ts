import { defineTool } from "@lovable.dev/mcp-js";
import { fleetData } from "@/data/fleetData";
import { SITE_URL } from "@/lib/site";

export default defineTool({
  name: "get_fleet",
  title: "Get drilling fleet",
  description:
    "Summarise the Geofields Tanzania Limited drilling fleet: rig names, types, methods and listed depths.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const rigs = fleetData.map((rig) => ({
      id: rig.id,
      name: rig.name,
      rigType: rig.rigType,
      drillingMethod: rig.drillingMethod,
      maximumDrillDepth: rig.maximumDrillDepth,
      holeSize: rig.holeSize,
      status: rig.status,
    }));

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(
            {
              website: `${SITE_URL}/fleet`,
              count: rigs.length,
              methods: [...new Set(fleetData.map((rig) => rig.drillingMethod))],
              maximumListedDepth: "1,600 m",
              rigs,
            },
            null,
            2,
          ),
        },
      ],
      structuredContent: { count: rigs.length, rigs },
    };
  },
});
