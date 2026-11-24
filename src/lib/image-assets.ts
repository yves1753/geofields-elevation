import type { ImageAsset } from "@/components/OptimizedImage";

const asset = (
  name: string,
  width: number,
  height: number,
  widths: readonly number[],
  fallback?: string,
): ImageAsset => ({ name, width, height, widths, fallback });

export const images = {
  heroMine: asset("hero-mine", 1920, 1080, [480, 768, 1280, 1920]),
  drilling: asset("drilling", 1280, 960, [480, 768, 1280]),
  communityApproach: asset("community-approach", 736, 414, [480, 736]),
  exploration: asset("exploration", 1920, 1280, [480, 768, 1280, 1920]),
  underground: asset("underground", 1280, 960, [480, 768, 1280]),
  gusHero: asset("gus-hero", 499, 233, [480, 499]),
  supplies: asset("supplies", 1280, 960, [480, 768, 1280]),
  wireMesh: asset("wire-mesh", 1280, 960, [480, 768, 1280]),
  wireMeshManufacturing: asset("wire-mesh-manufacturing", 264, 324, [264, 480, 768]),
  fleet: asset("fleet", 2048, 1152, [480, 768, 1280, 1600, 1920, 2048]),
  safety: asset("safety", 1280, 960, [480, 768, 1280]),
  safetyPage: asset("safety-page", 1280, 960, [480, 768, 1280]),
  homeHero: asset("home-hero-poster", 1920, 1080, [480, 768, 1280, 1920]),
  contactHero: asset("contact-hero", 1589, 1073, [480, 768, 1280, 1589]),
  aboutHero: asset("about-hero", 1920, 1281, [480, 768, 1280, 1920]),
  aboutPreview: asset("about-preview", 1920, 1281, [480, 768, 1280, 1920]),
  aboutDrillingCrew: asset("about-drilling-crew", 1920, 1281, [480, 768, 1280, 1920]),
  clients: asset("clients-logos", 1245, 677, [480, 768, 1245]),
  partners: asset("affiliates-five", 993, 343, [480, 768, 993]),
  communityHero: asset(
    "community-hero",
    1200,
    900,
    [480, 768, 1200],
    "/images/community/community-hero.jpg",
  ),
} as const;
