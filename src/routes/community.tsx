import { createFileRoute, Link } from "@tanstack/react-router";
import { OptimizedImage } from "@/components/OptimizedImage";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CommunityInitiativesGrid } from "@/components/community/CommunityInitiativesGrid";
import { images } from "@/lib/image-assets";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community | Geofields Tanzania Limited" },
      {
        name: "description",
        content:
          "Discover how Geofields Tanzania Limited works alongside communities surrounding its exploration, drilling and mining operations across Tanzania.",
      },
    ],
    links: [{ rel: "canonical", href: "/community" }],
  }),
  component: CommunityPage,
});

function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Projects. Our Communities. Our Impact."
        title="Building Beyond the Project"
        subtitle="At Geofields Tanzania Limited, our responsibility extends beyond exploration, drilling and mining operations. Wherever we operate, we aim to create a positive and lasting contribution to the communities that host our projects."
        image={images.communityHero}
      />

      <section className="section-y bg-background">
        <div className="container-x max-w-3xl">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-10 bg-primary" />
              Community
            </span>
            <h2 className="mt-5 text-4xl leading-[1.05] md:text-5xl">
              Working responsibly.
              <span className="block">Creating lasting value.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Geofields is committed to building strong relationships with communities surrounding
              its operations, understanding local priorities and supporting initiatives that
              contribute to sustainable social and economic development.
            </p>
          </Reveal>
        </div>
      </section>

      <CommunityInitiativesGrid />

      <section className="relative overflow-hidden bg-[oklch(0.14_0.005_60)] py-20 text-white md:py-28">
        <div className="absolute inset-y-0 right-0 hidden w-2/5 opacity-20 lg:block">
          <OptimizedImage
            asset={images.exploration}
            alt=""
            sizes="40vw"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.14_0.005_60)] to-transparent" />
        </div>
        <div className="container-x relative">
          <Reveal>
            <div className="max-w-3xl">
              <span className="eyebrow-light">Building Lasting Value Together</span>
              <h2 className="mt-5 text-4xl text-white md:text-5xl">
                Our commitment goes beyond successful projects.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
                We aim to contribute positively to the communities and regions where we operate,
                guided by responsible engagement and lasting value.
              </p>
              <Link to="/request-quote" className="btn-primary mt-9">
                Start a Conversation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
