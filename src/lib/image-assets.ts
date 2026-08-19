import type { ImageAsset } from "@/components/OptimizedImage";

const asset = (
  name: string,
  width: number,
  height: number,
  widths: readonly number[],
): ImageAsset => ({ name, width, height, widths });

export const images = {
  heroMine: asset("hero-mine", 1920, 1080, [480, 768, 1280, 1920]),
  drilling: asset("drilling", 1280, 960, [480, 768, 1280]),
  exploration: asset("exploration", 1280, 960, [480, 768, 1280]),
  underground: asset("underground", 1280, 960, [480, 768, 1280]),
  supplies: asset("supplies", 1280, 960, [480, 768, 1280]),
  wireMesh: asset("wire-mesh", 1280, 960, [480, 768, 1280]),
  fleet: asset("fleet", 1600, 900, [480, 768, 1280, 1600]),
  safety: asset("safety", 1280, 960, [480, 768, 1280]),
  safetyPage: asset("safety-page", 1280, 960, [480, 768, 1280]),
  homeHero: asset("home-hero-poster", 1920, 1080, [480, 768, 1280, 1920]),
  contactHero: asset("contact-hero", 1589, 1073, [480, 768, 1280, 1589]),
  aboutHero: asset("about-hero", 1920, 1281, [480, 768, 1280, 1920]),
  aboutPreview: asset("about-preview", 1920, 1281, [480, 768, 1280, 1920]),
  aboutDrillingCrew: asset("about-drilling-crew", 1920, 1281, [480, 768, 1280, 1920]),
  clients: asset("clients-logos", 1245, 677, [480, 768, 1245]),
  partners: asset("partners-affiliates", 1247, 280, [480, 768, 1247]),
} as const;
