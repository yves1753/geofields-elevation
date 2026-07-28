import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { ClientsAffiliates } from "@/components/ClientsAffiliates";
import { images } from "@/lib/image-assets";
import { OptimizedImage } from "@/components/OptimizedImage";
import {
  HiOutlineShieldCheck,
  HiOutlineStar,
  HiOutlineLightBulb,
  HiOutlineCog,
  HiOutlineGlobeAlt,
} from "react-icons/hi";
import { FaHardHat } from "react-icons/fa";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Geofields Tanzania Limited" },
      {
        name: "description",
        content:
          "The story, vision, mission and values behind one of Africa's leading integrated mining service companies.",
      },
      { property: "og:title", content: "About Geofields Tanzania Limited" },
      {
        property: "og:description",
        content: "Discover the people, purpose and principles behind Geofields Tanzania Limited.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: HiOutlineShieldCheck,
    title: "Integrity",
    desc: "We act with honesty, transparency and accountability in all that we do.",
  },
  {
    icon: HiOutlineStar,
    title: "Excellence",
    desc: "Committed to superior performance and continuous improvement.",
  },
  {
    icon: HiOutlineLightBulb,
    title: "Innovation",
    desc: "Embracing new ideas and technology to drive efficiency and progress.",
  },
  {
    icon: HiOutlineCog,
    title: "Safety",
    desc: "Protecting the well-being of our people, communities and environment.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Customer Focus",
    desc: "Listening and responding to deliver exceptional value and lasting partnerships.",
  },
  {
    icon: FaHardHat,
    title: "Teamwork",
    desc: "Achieving more by collaborating with respect and shared purpose.",
  },
];

function AboutPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Our Story"
        title="Africa's mineral wealth deserves world-class engineering."
        subtitle="For more than a decade, Geofields Tanzania Limited has been engineering the systems, crews and equipment that turn Africa's geological potential into responsible, long-term prosperity."
        image={images.aboutHero}
      />

      <section className="section-y bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <OptimizedImage
              asset={images.exploration}
              alt="Geofields exploration team"
              className="w-full aspect-[4/5] object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <span className="eyebrow">
              <span className="h-[1px] w-10 bg-primary" /> Who We Are
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl leading-tight">
              Built by geologists. Trusted by miners. Chosen by Africa's operators.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Founded in Dar es Salaam, Geofields Tanzania Limited was created to close the gap
              between international mining standards and locally-delivered service excellence. From
              our first drill rig to a fleet of 18+, our growth has been driven by long-term
              partnerships with multinational miners and government agencies who demand precision,
              safety and integrity.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today, we deliver five integrated service lines across drilling, exploration, mining
              supplies, mining support and underground services — anchored by more than 200 skilled
              Tanzanian and international professionals.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x grid lg:grid-cols-2 gap-10">
          {[
            {
              label: "Our Vision",
              body: "To transform Africa's mineral potential into lasting prosperity by being the leading, most reliable provider of integrated exploration and mining services.",
            },
            {
              label: "Our Mission",
              body: "To empower mining ventures across Tanzania and Africa with high-quality, reliable exploration services — driving economic growth and creating shared value through innovation, integrity and responsible practices.",
            },
          ].map((b) => (
            <Reveal key={b.label}>
              <div className="bg-background border-l-4 border-primary p-10 h-full">
                <div className="eyebrow">{b.label}</div>
                <p className="mt-5 text-2xl md:text-3xl font-display leading-snug">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="container-x">
          <Reveal>
            <div className="max-w-3xl">
              <span className="eyebrow">
                <span className="h-[1px] w-10 bg-primary" /> Core Values
              </span>
              <h2 className="mt-5 text-4xl md:text-5xl leading-tight">
                Six principles that guide every decision.
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {values.map((v) => (
              <div key={v.title} className="bg-background p-10 hover-lift">
                <div className="size-14 grid place-items-center bg-primary/10 text-primary">
                  <v.icon className="size-7" />
                </div>
                <h3 className="mt-6 text-xl">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientsAffiliates />
    </Layout>
  );
}
