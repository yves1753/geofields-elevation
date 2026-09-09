import { communityInitiatives } from "@/data/communityPhotos";
import { Reveal } from "@/components/Reveal";

export function CommunityInitiativesGrid() {
  return (
    <section
      id="community-initiatives"
      className="community-initiatives relative bg-[oklch(0.14_0.005_60)] py-20 text-white md:py-28"
      aria-labelledby="community-initiatives-title"
    >
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
      <div className="container-x relative">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow-light">Community initiatives</span>
            <h2 id="community-initiatives-title" className="mt-5 text-4xl text-white md:text-5xl">
              Community initiatives
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Our community work is guided by local priorities, practical needs and a commitment to
              creating positive, sustainable impact.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {communityInitiatives.map((initiative, index) => (
            <Reveal key={initiative.photo.id} delay={index * 0.05}>
              <article className="group overflow-hidden rounded-md border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-primary/35 hover:bg-white/[0.05]">
                <div className="overflow-hidden" style={{ aspectRatio: initiative.photo.aspectRatio }}>
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
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/45">
                      {initiative.location}
                    </p>
                  )}
                  <h3 className="mt-3 text-2xl text-white">{initiative.title}</h3>
                  <p className="mt-4 leading-relaxed text-white/68">{initiative.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
