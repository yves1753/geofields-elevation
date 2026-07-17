export interface FleetRig {
  id: string;
  name: string;
  fleetNumber: string;
  image: string;
  imageAlt: string;
  rigType: string;
  maximumDrillDepth: string;
  holeSize: string;
  drillingMethod: string;
  enginePower: string;
  pullbackCapacity: string;
  pulldownCapacity: string;
  rotationSpeed: string;
  drillAngle: string;
  dimensions: string;
  status: "Available" | "Deployed" | "Maintenance" | "To be confirmed";
  featured: boolean;
  specificationsComplete: boolean;
  description: string;
  applications: string[];
}

const pending = "To be confirmed";
const diamondApplications = [
  "Mineral exploration",
  "Deep-hole exploration drilling",
  "Geological core recovery",
  "Resource definition drilling",
  "Mine development drilling",
];

const diamondRig = (
  id: string,
  name: string,
  image: string,
  rigType: string,
  depth: string,
  power: string,
  pullback: string,
  pulldown: string,
  rotation: string,
  angle: string,
  featured = true,
): FleetRig => ({
  id,
  name,
  fleetNumber: id,
  image,
  imageAlt: `${name} Geofields drilling rig`,
  rigType,
  maximumDrillDepth: depth,
  holeSize: "PQ, HQ, NQ",
  drillingMethod: "Diamond Core Drilling",
  enginePower: power,
  pullbackCapacity: pullback,
  pulldownCapacity: pulldown,
  rotationSpeed: rotation,
  drillAngle: angle,
  dimensions: pending,
  status: pending,
  featured,
  specificationsComplete: true,
  description: `${name} is a ${rigType.toLowerCase()} diamond core drilling rig in the Geofields fleet.`,
  applications: diamondApplications,
});

const incompleteRig = (
  id: string,
  name: string,
  rigType = pending,
  drillingMethod = pending,
): FleetRig => ({
  id,
  name,
  fleetNumber: id,
  image: `/fleet/${id.toLowerCase().replace(/[ ()]+/g, "-").replace(/-+/g, "-")}.webp`,
  imageAlt: `${name} Geofields drilling rig`,
  rigType,
  maximumDrillDepth: pending,
  holeSize: pending,
  drillingMethod,
  enginePower: pending,
  pullbackCapacity: pending,
  pulldownCapacity: pending,
  rotationSpeed: pending,
  drillAngle: pending,
  dimensions: pending,
  status: pending,
  featured: false,
  specificationsComplete: false,
  description: `${name} is part of the Geofields drilling fleet. Technical specifications are being confirmed.`,
  applications: [],
});

export const fleetData: FleetRig[] = [
  diamondRig("ZQ-1600-006", "ZQ 1600-006", "/fleet/zq-1600-006.webp", "Track Mounted", "1,600 m", "236 HP", "25 tonnes", "13 tonnes", "1,500 RPM", "45°–90°"),
  diamondRig("ZQ-1600-008", "ZQ 1600-008", "/fleet/zq-1600-008.webp", "Track Mounted", "1,600 m", "236 HP", "25 tonnes", "13 tonnes", "1,500 RPM", "45°–90°"),
  diamondRig("ZQ-1600-009", "ZQ 1600-009", "/fleet/zq-1600-009.webp", "Track Mounted", "1,600 m", "236 HP", "25 tonnes", "13 tonnes", "1,500 RPM", "45°–90°"),
  incompleteRig("ZMEX-A5-001", "ZMEX A5-001", "Track Mounted"),
  diamondRig("MP1000-002", "MP1000-002", "/fleet/mp1000-002.webp", "Man Portable", "1,285 m", "132 HP, with the option to add an additional 44 HP engine", "29 tonnes", "15 tonnes", "1,400 RPM", "45°–90°"),
  diamondRig("MP1000-003", "MP1000-003", "/fleet/mp1000-003.webp", "Man Portable", "1,285 m", "132 HP, with the option to add an additional 44 HP engine", "29 tonnes", "15 tonnes", "1,400 RPM", "45°–90°"),
  diamondRig("MP800-ZQ800-004", "MP800 (ZQ800)-004", "/fleet/mp800-zq800-004.webp", "Man Portable", "800 m", "172 HP", "15 tonnes", "8.5 tonnes", "2,000 RPM", "55°–90°"),
  diamondRig("MP600-ZQ600-005", "MP600 (ZQ600)-005", "/fleet/mp600-zq600-005.webp", "Man Portable", "800 m", "172 HP", "15 tonnes", "8.5 tonnes", "2,000 RPM", "55°–90°"),
  incompleteRig("ICL-150-UDR-RC001", "ICL 150-UDR-RC001"),
  incompleteRig("DB25-RC002", "DB25-RC002"),
  incompleteRig("Auger-AU001", "Auger-AU001", "Auger Rig", "Auger Drilling"),
  incompleteRig("RC310-RC003", "RC310-RC003", "Reverse Circulation Rig", "Reverse Circulation Drilling"),
  incompleteRig("ZINEX-A5-MOD-007", "ZINEX A5 MOD-007", "Track Mounted"),
  diamondRig("ZQ-1600C-010", "ZQ 1600C-010", "/fleet/zq-1600c-010.webp", "Track Mounted", "1,600 m", "236 HP", "25 tonnes", "13 tonnes", "1,500 RPM", "45°–90°"),
  diamondRig("ZQ-1600C-011", "ZQ 1600C-011", "/fleet/zq-1600c-011.webp", "Track Mounted", "1,600 m", "236 HP", "25 tonnes", "13 tonnes", "1,500 RPM", "45°–90°", false),
];

export const featuredFleet = fleetData.filter((rig) => rig.featured);
export const fleetImageFallback = "/images/fleet-placeholder.jpg";
