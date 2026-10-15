import { communityInitiatives } from "@/data/communityPhotos";
import { Reveal } from "@/components/Reveal";

export function CommunityInitiativesGrid() {
  return (
    <section
      id="community-initiatives"
      className="community-initiatives bg-white py-20 md:py-28"
      aria-labelledby="community-initiatives-title"
    >
      <div className="container-x">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow">
              <span className="h-[1px] w-10 bg-primary" />
              Community initiatives
            </span>
            <h2 id="community-initiatives-title" className="mt-5 text-4xl md:text-5xl">
              Community initiatives
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Our community work is guided by local priorities, practical needs and a commitment to
              creating positive, sustainable impact.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {communityInitiatives.map((initiative, index) => (
            <Reveal key={initiative.photo.id} delay={index * 0.05}>
              <article className="group overflow-hidden rounded-md border border-border bg-white transition-colors duration-300 hover:border-primary/35 hover:shadow-card">
                <div
                  className="overflow-hidden"
                  style={{ aspectRatio: initiative.photo.aspectRatio }}
                >
                  <img
                    src={initiative.photo.src}
                    alt={initiative.photo.alt}
                    width={initiative.photo.width}
                    height={initiative.photo.height}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-6 md:p-7">
                  {initiative.location && (
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      {initiative.location}
                    </p>
                  )}
                  <h3 className="mt-3 text-2xl">{initiative.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {initiative.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
