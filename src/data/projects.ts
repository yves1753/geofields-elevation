export type Project = {
  id: string;
  name: string;
  region: string;
  location?: string;
  mineral: "Lithium" | "Nickel" | "Gold" | "Limestone";
  status: "Completed" | "Partnership";
  partner?: string;
  x: number;
  y: number;
};

export const projects: Project[] = [
  {
    id: "kibare",
    name: "Kibare",
    region: "Kagera",
    mineral: "Nickel",
    status: "Completed",
    x: 140,
    y: 77,
  },
  {
    id: "kabanga",
    name: "Kabanga",
    region: "Kagera",
    mineral: "Lithium",
    status: "Partnership",
    x: 108,
    y: 121,
  },
  {
    id: "geita",
    name: "Geita Gold Project",
    region: "Geita",
    mineral: "Gold",
    status: "Completed",
    partner: "African Underground Mining Services (AUMS)",
    x: 165,
    y: 121,
  },
  {
    id: "ikungi",
    name: "Ikungi",
    region: "Singida",
    mineral: "Lithium",
    status: "Completed",
    partner: "Tanzania Lithium",
    x: 257,
    y: 203,
  },
  {
    id: "mahonga",
    name: "Mahonga",
    region: "Dodoma",
    mineral: "Lithium",
    status: "Completed",
    x: 291,
    y: 240,
  },
  {
    id: "mkunazi",
    name: "Mkunazi",
    region: "Morogoro",
    mineral: "Limestone",
    status: "Completed",
    partner: "Seeking Strategic Partner – Developing Limestone Project",
    x: 361,
    y: 266,
  },
  {
    id: "manga",
    name: "Manga Gold Project",
    region: "Tanga",
    mineral: "Gold",
    status: "Partnership",
    partner: "MSA",
    x: 399,
    y: 195,
  },
  {
    id: "handeni",
    name: "Handeni Gold Project",
    region: "Tanga",
    location: "Handeni, Tanga",
    mineral: "Gold",
    status: "Partnership",
    partner: "EMG Pamoja Royalty",
    x: 375,
    y: 216,
  },
];
