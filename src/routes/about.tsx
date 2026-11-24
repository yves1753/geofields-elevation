import { createFileRoute } from "@tanstack/react-router";
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
import { breadcrumbSchema, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About Geofields Tanzania Limited | Mining Services in Dar es Salaam",
      description:
        "Meet Geofields Tanzania Limited: a Dar es Salaam mining services company delivering drilling, exploration and underground support across Tanzania, with a zero-harm culture.",
      path: "/about",
      image: "/images/about-hero.jpg",
      imageAlt: "Geofields Tanzania Limited exploration and drilling team",
      jsonLd: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]),
      ],
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
    <>
      <PageHero
        eyebrow="Our Story"
        title="Africa's mineral wealth deserves world-class engineering."
        subtitle="For more than a decade, Geofields Tanzania Limited has been engineering the systems, crews and equipment that turn Africa's geological potential into responsible, long-term prosperity."
        image={images.aboutHero}
        imageAlt="Geofields Tanzania Limited drilling and exploration operations"
      />

      <section className="section-y bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <OptimizedImage
              asset={images.aboutDrillingCrew}
              alt="Geofields drilling crew at sunset"
              className="w-full aspect-[4/5] object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <span className="eyebrow">
              <span className="h-[1px] w-10 bg-primary" /> Who We Are
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl leading-tight">
              Built by geologists & mining engineers.
              <br />
              Trusted by miners & exploration.
              <br />
              Chosen by world's operators.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Founded in 2008, Geofields Tanzania Limited (GTL) is a multidisciplinary strategic
              service provider company for the exploration and mining industry. Geofields is
              Tanzania's leading exploration and mining service company, with an integrated and
              comprehensive service portfolio of drilling services, ground exploration survey works,
              exploration and mining equipment supply, and mining ventures.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With more than 50 years of combined local and international experience from the team of
              geologists and drillers, GTL has established itself as one of the successful mining
              industry services and consultancy providers in Tanzania through its brand name “GTL”.
              We particularly enjoy helping our clients including small to large scale mining
              companies, Government, engineering firms and individuals in the industry.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you are a miner or a prospector with one property or several properties, GTL
              will provide you with quality services within the mining industries.
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
    </>
  );
}
