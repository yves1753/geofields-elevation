import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import CountUpImport from "react-countup";
import { useEffect, useRef, useState } from "react";

// Vite prebundles react-countup (CJS) with a double-wrapped default export
// (`{ default: { default: CountUp, useCountUp } }`), so the bare import is an
// object, not a component. Unwrap to the actual component.
const CountUp = ((CountUpImport as unknown as { default?: unknown }).default ??
  CountUpImport) as typeof CountUpImport;
import {
  HiOutlineChevronDown,
  HiOutlineArrowRight,
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
  HiOutlineCog,
  HiOutlineGlobeAlt,
  HiOutlineStar,
} from "react-icons/hi";
import { FaHardHat, FaMountain } from "react-icons/fa";
import { Reveal } from "@/components/Reveal";
import { HeroVideo } from "@/components/HeroVideo";
import { fleetData } from "@/data/fleetData";
import { faqs } from "@/data/faqs";
import { images } from "@/lib/image-assets";
import { OptimizedImage } from "@/components/OptimizedImage";
import { FaqSection } from "@/components/FaqSection";
import { breadcrumbSchema, faqSchema, pageHead } from "@/lib/seo";

const homeSeo = pageHead({
  title: "Geofields Tanzania Limited — Engineering the Future of Mining",
  description:
    "Diamond core, RC and auger drilling, geological exploration, underground support and mining services from Dar es Salaam across Tanzania and Africa.",
  path: "/",
  image: "/images/home-hero-poster.jpg",
  imageAlt: "Geofields Tanzania Limited drilling operations in Tanzania",
  jsonLd: [breadcrumbSchema([{ name: "Home", path: "/" }]), faqSchema([...faqs])],
});

export const Route = createFileRoute("/")({
  head: () => ({
    ...homeSeo,
    links: [
      ...homeSeo.links,
      {
        rel: "preload",
        as: "image",
        href: "/optimized/home-hero-poster-1280.avif",
        type: "image/avif",
        fetchpriority: "high",
        imageSrcSet:
          "/optimized/home-hero-poster-480.avif 480w, /optimized/home-hero-poster-768.avif 768w, /optimized/home-hero-poster-1280.avif 1280w, /optimized/home-hero-poster-1920.avif 1920w",
        imageSizes: "100vw",
      },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: 18, suffix: "+", label: "Years Experience" },
  { value: 2500, suffix: "+", label: "Projects Completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const divisions = [
  {
    icon: FaHardHat,
    title: "Drilling Services",
    desc: "Exploration, Diamond drilling, RC drilling delivered by certified crews and modern rigs.",
    img: images.drilling,
    to: "/divisions",
  },
  {
    icon: FaMountain,
    title: "Underground Mining Solutions",
    desc: "Underground support tools, Wire mesh, Friction bolts, and specialised consumables for safe underground operations.",
    img: images.wireMesh,
    to: "/divisions",
  },
  {
    icon: FaHardHat,
    title: "Contract Mining",
    desc: "Production, grade control, blast hole and exploration drilling with integrated field support.",
    img: images.heroMine,
    to: "/divisions",
  },
  {
    icon: FaMountain,
    title: "Wire Mesh Manufacturing",
    desc: "Manufacturing of specialized galvanized wire mesh for underground reinforcement to enhance mine safety.",
    img: images.wireMeshManufacturing,
    to: "/gus",
  },
];

const values = [
  {
    icon: HiOutlineShieldCheck,
    title: "Integrity",
    desc: "Honesty, transparency and accountability in every partnership.",
  },
  {
    icon: HiOutlineStar,
    title: "Excellence",
    desc: "Committed to superior performance and continuous improvement.",
  },
  {
    icon: HiOutlineLightBulb,
    title: "Innovation",
    desc: "New ideas and modern technology to drive efficiency and progress.",
  },
  {
    icon: HiOutlineCog,
    title: "Safety",
    desc: "The well-being of our people, communities and environment first.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Customer Focus",
    desc: "Listening and responding to build lasting partnerships.",
  },
  { icon: FaHardHat, title: "Teamwork", desc: "Collaborating with respect and a shared purpose." },
];

function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutPreview />
      <PartnersSection />
      <Divisions />
      <FleetSection />
      <SafetySection />
      <ValuesSection />
      <Testimonials />
      <FaqSection />
      <CTASection />
    </>
  );
}

function PartnersSection() {
  return (
    <section className="section-y bg-surface">
      <div className="container-x">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <span className="eyebrow !text-2xl justify-center">
              <span className="h-[1px] w-12 bg-primary" /> Trusted By
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl leading-tight">Affiliates</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We collaborate with leading mining and exploration organisations across Africa to
              deliver safe, reliable and world-class drilling services.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="group mt-12 max-w-4xl mx-auto overflow-hidden rounded-sm bg-white p-4 md:p-8 transition-all duration-500 hover:shadow-card focus-within:shadow-card">
            <OptimizedImage
              asset={images.partners}
              alt="Geofields affiliates: African Underground Mining Services, EMG Pamoja Royalty Limited, MSA Mining Ltd, Xtrata Mining and Zhiqiang"
              className="w-full h-auto grayscale opacity-60 transition-all duration-500 group-hover:scale-[1.02] group-hover:grayscale-0 group-hover:opacity-100 group-focus-within:scale-[1.02] group-focus-within:grayscale-0 group-focus-within:opacity-100"
              sizes="(min-width: 1024px) 896px, calc(100vw - 72px)"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <HeroVideo />

      <div className="container-x relative py-32">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="eyebrow-light"
        >
          <span className="h-[1px] w-10 bg-primary-glow" /> Geofields Tanzania Limited
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 text-white text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] max-w-5xl"
        >
          Engineering the <span className="text-gradient-primary">Future of Mining</span> Across
          Africa.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 text-white/75 text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          World class exploration, drilling, mining services and underground support solutions
          delivered with safety, precision and unwavering reliability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link to="/request-quote" className="btn-primary">
            Request Proposal <HiOutlineArrowRight />
          </Link>
          <Link to="/divisions" className="btn-ghost">
            Explore Services
          </Link>
        </motion.div>

        <div className="absolute left-0 right-0 bottom-10 flex flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
            <HiOutlineChevronDown className="size-5" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setTick((t) => t + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section ref={ref} className="bg-[oklch(0.14_0.005_60)] text-white">
      <div className="container-x py-16 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        {stats.map((s, i) => (
          <div
            key={i}
            className="text-center md:border-l md:border-white/10 md:pl-6 first:md:border-l-0 first:md:pl-0"
          >
            <div className="font-display font-extrabold text-3xl md:text-4xl text-primary-glow">
              {inView && (
                <CountUp
                  key={tick}
                  end={s.value}
                  duration={2.4}
                  separator=","
                  suffix={s.suffix}
                />
              )}
            </div>
            <div className="mt-2 text-xs tracking-[0.2em] uppercase text-white/60">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="section-y bg-surface">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <OptimizedImage
              asset={images.aboutPreview}
              alt="Geofields drilling crew at work at sunset"
              className="w-full aspect-[4/5] object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 max-w-sm shadow-elegant">
              <div className="font-display text-5xl leading-none">18+</div>
              <div className="mt-2 text-xs tracking-[0.12em] uppercase leading-snug">
                Years of Exploration Drilling and Mining Excellence
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <span className="eyebrow">
            <span className="h-[1px] w-10 bg-primary" /> About Geofields
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl leading-tight">
            One of the most trusted integrated mining service providers.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            From our headquarters in Dar es Salaam, Geofields delivers the full spectrum of
            drilling, exploration and underground support services to mining companies, exploration
            ventures and government agencies across Tanzania and the continent.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our people, equipment and systems are engineered around one purpose — helping our
            clients find, develop and produce mineral resources safely, efficiently and responsibly.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                Our Vision
              </div>
              <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                Transform Africa's mineral potential into lasting prosperity as the continent's most
                reliable integrated exploration and mining services provider.
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                Our Mission
              </div>
              <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                Empower mining ventures with high-quality, reliable exploration services — driving
                growth through innovation, integrity and responsible practices.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <Link to="/about" className="btn-outline">
              Discover Our Story <HiOutlineArrowRight />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Divisions() {
  return (
    <section className="section-y bg-background">
      <div className="container-x">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow">
              <span className="h-[1px] w-10 bg-primary" /> Business Divisions
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl leading-tight">
              Integrated mining capabilities across mining value chain
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {divisions.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08}>
              <Link
                to={d.to}
                className="group relative block overflow-hidden aspect-[4/5] hover-lift"
              >
                <OptimizedImage
                  asset={d.img}
                  alt={d.title}
                  className="size-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-7 text-white">
                  <d.icon className="size-8 text-primary-glow mb-4" />
                  <h3 className="text-white text-2xl leading-tight">{d.title}</h3>
                  <p className="mt-3 text-sm text-white/70 leading-relaxed">{d.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-primary-glow font-semibold">
                    Learn More <HiOutlineArrowRight />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FleetSection() {
  return (
    <section className="section-y bg-[oklch(0.14_0.005_60)] text-white relative overflow-hidden">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1fr_0.7fr] lg:items-end gap-8 mb-14">
          <div className="max-w-3xl">
            <Reveal>
              <span className="eyebrow-light">
                <span className="h-[1px] w-10 bg-primary-glow" /> Our Fleet
              </span>
              <h2 className="mt-5 text-white text-4xl md:text-5xl leading-tight">
                Drilling Equipment Built for Demanding Projects
              </h2>
            </Reveal>
          </div>
          <p className="text-white/60 max-w-xl leading-relaxed">
            Geofields Tanzania Limited operates a fleet of {fleetData.length} drilling units,
            supporting deep diamond core drilling across challenging ground conditions.
          </p>
        </div>

        <Reveal>
          <div className="relative aspect-[16/8] md:aspect-[16/7] overflow-hidden rounded-xl">
            <OptimizedImage
              asset={images.fleet}
              alt="Geofields mixed drilling fleet lined up on site"
              className="size-full object-cover object-[center_42%]"
              sizes="(min-width: 1360px) 1264px, (min-width: 768px) calc(100vw - 64px), calc(100vw - 40px)"
            />
          </div>
        </Reveal>

        <div className="mt-12 text-center">
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/55">
            Explore the complete Geofields fleet and review detailed technical specifications for
            available drilling configurations.
          </p>
          <Link to="/fleet" className="btn-primary mt-6">
            Explore All {fleetData.length} Rigs <HiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SafetySection() {
  return (
    <section className="section-y bg-surface">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <span className="eyebrow !text-2xl">
            <span className="h-[1px] w-12 bg-primary" /> HSE
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl leading-tight">
            Zero harm is not a target. It is a standard.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Our HSE management system is engineered around international best practice and audited
            to the ISO 9001, ISO 45001 and ISO 14001 standards. Every crew, every site, every shift —
            safety comes first, without compromise.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6">
            {[
              { v: "100%", l: "PPE Compliance" },
              { v: "ISO", l: "9001 · 45001 · 14001" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-primary pl-4">
                <div className="font-display text-3xl">{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/safety" className="btn-outline">
              Read Safety Policy <HiOutlineArrowRight />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <OptimizedImage
            asset={images.safetyPage}
            alt="Geofields safety team on site"
            className="w-full aspect-[4/3] object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </Reveal>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="section-y bg-background">
      <div className="container-x">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow">
              <span className="h-[1px] w-10 bg-primary" /> Core Values
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl leading-tight">
              The principles that engineer everything we build.
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <div className="bg-background p-10 h-full hover-lift">
                <div className="size-14 grid place-items-center bg-primary/10 text-primary">
                  <v.icon className="size-7" />
                </div>
                <h3 className="mt-6 text-xl">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote:
        "Geofields delivered on time, on budget and with an exceptional safety record. A true engineering partner.",
      author: "Operations Director",
      company: "Leading Gold Producer",
    },
    {
      quote:
        "Their underground support team is among the most disciplined and technically capable we've worked with in East Africa.",
      author: "Mine Manager",
      company: "Multinational Miner",
    },
    {
      quote:
        "Reliable equipment, professional crews and transparent reporting — Geofields sets the benchmark.",
      author: "Exploration Manager",
      company: "Tanzanian Junior Explorer",
    },
  ];
  return (
    <section className="section-y bg-background">
      <div className="container-x">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <span className="eyebrow justify-center">
              <span className="h-[1px] w-10 bg-primary" /> Client Trust
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl leading-tight">What our partners say.</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="border border-border p-10 h-full flex flex-col">
                <div className="flex text-primary mb-6">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <HiOutlineStar key={j} className="size-5 fill-current" />
                  ))}
                </div>
                <p className="text-foreground/85 leading-relaxed">"{t.quote}"</p>
                <div className="mt-auto pt-8">
                  <div className="font-semibold">{t.author}</div>
                  <div className="text-sm text-muted-foreground">{t.company}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage
          asset={images.heroMine}
          alt=""
          className="size-full object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[oklch(0.1_0.005_60)]/85" />
      </div>
      <div className="container-x relative py-28 text-center">
        <Reveal>
          <span className="eyebrow-light justify-center">
            <span className="h-[1px] w-10 bg-primary-glow" /> Build With Geofields
          </span>
          <h2 className="mt-5 text-white text-4xl md:text-6xl leading-tight max-w-4xl mx-auto">
            Ready to deliver your next mining project with confidence?
          </h2>
          <p className="mt-6 text-white/70 max-w-2xl mx-auto">
            Our team responds to every enquiry within 24 hours with a scoped, transparent proposal.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/request-quote" className="btn-primary">
              Request Proposal <HiOutlineArrowRight />
            </Link>
            <a href="tel:+255766775255" className="btn-ghost">
              Call +255 766 775 255
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
