import { createFileRoute, Link } from "@tanstack/react-router";
import {
  HiOutlineAcademicCap,
  HiOutlineHeart,
  HiOutlineLightBulb,
  HiOutlineLocationMarker,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { Layout } from "@/components/Layout";
import { OptimizedImage } from "@/components/OptimizedImage";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import {
  CommunityImpactCard,
  type CommunityImpactStory,
} from "@/components/community/CommunityImpactCard";
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

const impactAreas = [
  {
    title: "Local Employment & Skills",
    description:
      "Supporting pathways for local participation, practical skills development and training connected to project areas.",
    icon: HiOutlineUserGroup,
  },
  {
    title: "Education & Youth",
    description:
      "A framework for educational support, school initiatives, training and youth-focused opportunities.",
    icon: HiOutlineAcademicCap,
  },
  {
    title: "Infrastructure & Access",
    description:
      "Considering community infrastructure, access and facilities in the context of responsible operations.",
    icon: HiOutlineLocationMarker,
  },
  {
    title: "Health & Wellbeing",
    description:
      "A focus area for relevant, evidence-led health and wellbeing initiatives where needs and partnerships align.",
    icon: HiOutlineHeart,
  },
  {
    title: "Community Partnerships",
    description:
      "Working constructively with local authorities, community leaders and established organizations.",
    icon: HiOutlineLightBulb,
  },
] as const;

// Add only approved, verifiable company initiatives here. The reusable story component
// supports dates, multiple impact areas and optional verified statistics.
const communityStories: CommunityImpactStory[] = [];

function CommunityPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Our Projects. Our Communities. Our Impact."
        title="Building Beyond the Project"
        subtitle="At Geofields Tanzania Limited, our responsibility extends beyond exploration, drilling and mining operations. Wherever we operate, we aim to create a positive and lasting contribution to the communities that host our projects."
        image={images.aboutHero}
      />

      <section className="section-y bg-background">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-10 bg-primary" /> Our Approach
            </span>
            <h2 className="mt-5 text-4xl leading-tight md:text-5xl">
              Responsible operations begin with listening.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Geofields seeks to work responsibly with the communities surrounding its operations,
              understand local priorities and contribute positively where practical, relevant and
              sustainable.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <OptimizedImage
                asset={images.drilling}
                alt="Geofields drilling professional working at an operational site"
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="size-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20 md:p-8 md:pt-24">
                <p className="max-w-md font-display text-xl font-bold text-white md:text-2xl">
                  Partnership, respect and long-term value guide our approach.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-surface-muted">
        <div className="container-x">
          <Reveal>
            <div className="max-w-3xl">
              <span className="eyebrow">
                <span className="h-px w-10 bg-primary" /> Community Impact Framework
              </span>
              <h2 className="mt-5 text-4xl md:text-5xl">
                Areas that shape our community approach.
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                These focus areas provide a structure for future verified initiatives and community
                stories. They are not presented as claims of completed activity.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Reveal key={area.title} delay={index * 0.06}>
                  <article className="h-full bg-background p-8 transition-colors duration-300 hover:bg-white md:p-10">
                    <div className="grid size-12 place-items-center bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mt-7 text-2xl">{area.title}</h3>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{area.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {communityStories.length > 0 && (
        <section className="section-y bg-background" aria-labelledby="community-stories-title">
          <div className="container-x">
            <h2 id="community-stories-title" className="sr-only">
              Community impact stories
            </h2>
            <div className="space-y-16">
              {communityStories.map((story, index) => (
                <CommunityImpactCard key={story.name} story={story} imageRight={index % 2 === 1} />
              ))}
            </div>
          </div>
        </section>
      )}

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
    </Layout>
  );
}
