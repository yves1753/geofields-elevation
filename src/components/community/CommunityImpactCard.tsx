import { OptimizedImage, type ImageAsset } from "@/components/OptimizedImage";
import { Reveal } from "@/components/Reveal";

export type CommunityImpactStory = {
  name: string;
  location: string;
  community: string;
  categories: string[];
  description: string;
  image: ImageAsset;
  imageAlt: string;
  year?: string;
  statistics?: { label: string; value: string }[];
};

export function CommunityImpactCard({
  story,
  imageRight = false,
}: {
  story: CommunityImpactStory;
  imageRight?: boolean;
}) {
  return (
    <Reveal>
      <article className="grid overflow-hidden bg-white shadow-card lg:grid-cols-2">
        <div className={`relative min-h-72 lg:min-h-[30rem] ${imageRight ? "lg:order-2" : ""}`}>
          <OptimizedImage
            asset={story.image}
            alt={story.imageAlt}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
          <span className="eyebrow">{story.location}</span>
          <h2 className="mt-4 text-3xl md:text-4xl">{story.name}</h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/55">
            {story.community}
            {story.year ? ` · ${story.year}` : ""}
          </p>
          <p className="mt-6 leading-relaxed text-muted-foreground">{story.description}</p>
          <div className="mt-8 flex flex-wrap gap-2" aria-label="Impact areas">
            {story.categories.map((category) => (
              <span
                key={category}
                className="border border-primary/30 bg-primary/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary"
              >
                {category}
              </span>
            ))}
          </div>
          {story.statistics && (
            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-8">
              {story.statistics.map((statistic) => (
                <div key={statistic.label}>
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {statistic.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-extrabold">{statistic.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </article>
    </Reveal>
  );
}
