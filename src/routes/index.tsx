import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  HiOutlineChevronDown,
  HiOutlineArrowRight,
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
  HiOutlineCog,
  HiOutlineGlobeAlt,
  HiOutlineStar,
  HiOutlineDownload,
} from "react-icons/hi";
import { FaHardHat, FaMountain, FaTruckMoving, FaOilCan, FaTools } from "react-icons/fa";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero-mine.jpg";
import drillingImg from "@/assets/drilling.jpg";
import explorationImg from "@/assets/exploration.jpg";
import undergroundImg from "@/assets/underground.jpg";
import suppliesImg from "@/assets/supplies.jpg";
import oilgasImg from "@/assets/oilgas.jpg";
import fleetImg from "@/assets/fleet.jpg";
import safetyImg from "@/assets/safety.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Geofields Tanzania Limited — Engineering the Future of Mining" },
      { name: "description", content: "Integrated drilling, exploration, underground support and mining supplies across Tanzania and Africa. Safety, precision and reliability at scale." },
      { property: "og:image", content: "/og-home.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Geofields Tanzania Limited",
        url: "/",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Mwai Kibaki Road, Mbezi Beach, P.O Box 76387",
          addressLocality: "Dar es Salaam",
          addressCountry: "TZ",
        },
        telephone: ["+255766775255", "+255755284141"],
        email: ["info@geofields.co.tz", "sales@geofields.co.tz"],
      }),
    }],
  }),
  component: HomePage,
});

const stats = [
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 2500, suffix: "+", label: "Projects Completed" },
  { value: 18, suffix: "+", label: "Drill Rigs" },
  { value: 500000, suffix: "+", label: "Metres Drilled" },
  { value: 200, suffix: "+", label: "Employees" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const divisions = [
  { icon: FaHardHat, title: "Drilling Services", desc: "Diamond, RC, blast hole, water and core drilling delivered by certified crews and modern rigs.", img: drillingImg, to: "/divisions" },
  { icon: FaMountain, title: "Geological & Exploration", desc: "Mapping, sampling, surveying and resource evaluation for junior and major explorers.", img: explorationImg, to: "/divisions" },
  { icon: FaTruckMoving, title: "Mining Supplies", desc: "Equipment, PPE, consumables and spare parts — sourced globally, delivered on-site.", img: suppliesImg, to: "/divisions" },
  { icon: FaOilCan, title: "Oil & Gas Support", desc: "Industrial support services, equipment supply and specialised field support crews.", img: oilgasImg, to: "/divisions" },
  { icon: FaTools, title: "Geofields Underground Support (GUS)", desc: "Ground support, rock bolting, mine development and underground logistics.", img: undergroundImg, to: "/gus", featured: true },
];

const values = [
  { icon: HiOutlineShieldCheck, title: "Integrity", desc: "Honesty, transparency and accountability in every partnership." },
  { icon: HiOutlineStar, title: "Excellence", desc: "Committed to superior performance and continuous improvement." },
  { icon: HiOutlineLightBulb, title: "Innovation", desc: "New ideas and modern technology to drive efficiency and progress." },
  { icon: HiOutlineCog, title: "Safety", desc: "The well-being of our people, communities and environment first." },
  { icon: HiOutlineGlobeAlt, title: "Customer Focus", desc: "Listening and responding to build lasting partnerships." },
  { icon: FaHardHat, title: "Teamwork", desc: "Collaborating with respect and a shared purpose." },
];

function HomePage() {
  return (
    <Layout>
      <Hero />
      <StatsBar />
      <AboutPreview />
      <Divisions />
      <FleetSection />
      <SafetySection />
      <ValuesSection />
      <ProjectsPreview />
      <Testimonials />
      <DownloadsSection />
      <CTASection />
    </Layout>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Aerial view of an active open-pit mine at golden hour" className="size-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/90" />
      </div>

      <div className="container-x relative py-32">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="eyebrow-light">
          <span className="h-[1px] w-10 bg-primary-glow" /> Geofields Tanzania Limited
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 text-white text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] max-w-5xl"
        >
          Engineering the <span className="text-gradient-primary">Future of Mining</span> Across Africa.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 text-white/75 text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          World-class drilling, exploration, underground support, geological services and integrated
          mining solutions — delivered with safety, precision and unwavering reliability.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="mt-10 flex flex-wrap gap-4">
          <Link to="/contact" className="btn-primary">
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
  return (
    <section ref={ref} className="bg-[oklch(0.14_0.005_60)] text-white">
      <div className="container-x py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-6">
        {stats.map((s, i) => (
          <div key={i} className="text-center md:text-left border-l border-white/10 pl-5">
            <div className="font-display font-extrabold text-4xl md:text-5xl text-primary-glow">
              {inView && <CountUp end={s.value} duration={2.4} separator="," suffix={s.suffix} />}
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
            <img src={explorationImg} alt="Geologist studying rock samples" className="w-full aspect-[4/5] object-cover" width={1280} height={960} loading="lazy" />
            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 max-w-xs shadow-elegant">
              <div className="font-display text-5xl leading-none">12+</div>
              <div className="mt-2 text-xs tracking-[0.2em] uppercase">Years of Engineering Excellence</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <span className="eyebrow"><span className="h-[1px] w-10 bg-primary" /> About Geofields</span>
          <h2 className="mt-5 text-4xl md:text-5xl leading-tight">
            One of Africa's most trusted integrated mining service providers.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            From our headquarters in Dar es Salaam, Geofields delivers the full spectrum of drilling,
            exploration and underground support services to mining companies, exploration ventures and
            government agencies across Tanzania and the continent.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our people, equipment and systems are engineered around one purpose — helping our clients
            find, develop and produce mineral resources safely, efficiently and responsibly.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Our Vision</div>
              <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                Transform Africa's mineral potential into lasting prosperity as the continent's most
                reliable integrated exploration and mining services provider.
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Our Mission</div>
              <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                Empower mining ventures with high-quality, reliable exploration services — driving
                growth through innovation, integrity and responsible practices.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <Link to="/about" className="btn-outline">Discover Our Story <HiOutlineArrowRight /></Link>
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
            <span className="eyebrow"><span className="h-[1px] w-10 bg-primary" /> Business Divisions</span>
            <h2 className="mt-5 text-4xl md:text-5xl leading-tight">Five integrated capabilities. One trusted partner.</h2>
          </Reveal>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08}>
              <Link
                to={d.to}
                className={`group relative block overflow-hidden aspect-[4/5] hover-lift ${d.featured ? "lg:col-span-1 ring-2 ring-primary" : ""}`}
              >
                <img src={d.img} alt={d.title} className="size-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                {d.featured && (
                  <span className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground text-[10px] tracking-[0.25em] font-bold px-3 py-1.5">NEW</span>
                )}
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
  const fleet = [
    { name: "Atlas Copco CS14", type: "Diamond Core Rig", capacity: "1200 m NQ", status: "Active" },
    { name: "Sandvik DE710", type: "Underground Core Rig", capacity: "900 m NQ", status: "Active" },
    { name: "Schramm T685WS", type: "RC / DTH Rig", capacity: "500 m", status: "Active" },
    { name: "Epiroc SmartROC D65", type: "Blast Hole Rig", capacity: "165 mm", status: "Active" },
    { name: "Boart Longyear LF160", type: "Surface Core", capacity: "1500 m HQ", status: "Active" },
  ];
  return (
    <section className="section-y bg-[oklch(0.14_0.005_60)] text-white relative overflow-hidden">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow-light"><span className="h-[1px] w-10 bg-primary-glow" /> Equipment Fleet</span>
              <h2 className="mt-5 text-white text-4xl md:text-5xl leading-tight">A modern, ISO-maintained fleet built for African terrain.</h2>
            </Reveal>
          </div>
          <p className="text-white/60 max-w-md">
            18+ rigs from the world's leading manufacturers, supported by 24/7 maintenance workshops
            and certified operators.
          </p>
        </div>

        <Reveal>
          <div className="relative aspect-[16/8] overflow-hidden mb-10">
            <img src={fleetImg} alt="Fleet of drill rigs" className="size-full object-cover" loading="lazy" width={1600} height={900} />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {fleet.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.05}>
              <div className="border border-white/10 p-6 bg-white/[0.02] backdrop-blur h-full">
                <div className="text-xs uppercase tracking-[0.2em] text-primary-glow">{f.type}</div>
                <h3 className="text-white text-lg mt-3">{f.name}</h3>
                <div className="mt-5 pt-5 border-t border-white/10 space-y-2 text-sm">
                  <div className="flex justify-between text-white/70"><span>Capacity</span><span className="text-white font-semibold">{f.capacity}</span></div>
                  <div className="flex justify-between text-white/70"><span>Status</span><span className="text-green-400 font-semibold flex items-center gap-2"><span className="size-1.5 rounded-full bg-green-400" />{f.status}</span></div>
                </div>
              </div>
            </Reveal>
          ))}
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
          <span className="eyebrow"><span className="h-[1px] w-10 bg-primary" /> Safety & HSE</span>
          <h2 className="mt-5 text-4xl md:text-5xl leading-tight">Zero harm is not a target. It is a standard.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Our HSE management system is engineered around international best practice and audited to
            the ISO 45001 and ISO 14001 standards. Every crew, every site, every shift — safety comes
            first, without compromise.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { v: "1.2M+", l: "LTI-Free Man-hours" },
              { v: "100%", l: "PPE Compliance" },
              { v: "ISO", l: "45001 · 14001" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-primary pl-4">
                <div className="font-display text-3xl">{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/safety" className="btn-outline">Read Safety Policy <HiOutlineArrowRight /></Link>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <img src={safetyImg} alt="Geofields safety team on site" className="w-full aspect-[4/3] object-cover" loading="lazy" width={1280} height={960} />
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
            <span className="eyebrow"><span className="h-[1px] w-10 bg-primary" /> Core Values</span>
            <h2 className="mt-5 text-4xl md:text-5xl leading-tight">The principles that engineer everything we build.</h2>
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

function ProjectsPreview() {
  const projects = [
    { name: "Geita Gold Expansion", commodity: "Gold", depth: "1,200 m", location: "Geita, Tanzania" },
    { name: "North Mara Exploration", commodity: "Gold", depth: "800 m", location: "Mara, Tanzania" },
    { name: "Kabanga Nickel Program", commodity: "Nickel", depth: "1,500 m", location: "Kagera, Tanzania" },
    { name: "Bulyanhulu Underground", commodity: "Gold", depth: "1,100 m", location: "Shinyanga, Tanzania" },
  ];
  return (
    <section className="section-y bg-surface-muted">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow"><span className="h-[1px] w-10 bg-primary" /> Selected Projects</span>
              <h2 className="mt-5 text-4xl md:text-5xl leading-tight">Trusted on Africa's most demanding mine sites.</h2>
            </Reveal>
          </div>
          <Link to="/projects" className="btn-outline w-fit">View All Projects <HiOutlineArrowRight /></Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div className="group bg-background border border-border p-10 hover-lift">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                  <span className="size-1.5 rounded-full bg-primary" /> {p.commodity} · {p.location}
                </div>
                <h3 className="mt-4 text-2xl leading-tight">{p.name}</h3>
                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-sm">
                  <div><span className="text-muted-foreground">Depth: </span><span className="font-semibold">{p.depth}</span></div>
                  <HiOutlineArrowRight className="text-primary transition-transform group-hover:translate-x-1" />
                </div>
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
    { quote: "Geofields delivered on time, on budget and with an exceptional safety record. A true engineering partner.", author: "Operations Director", company: "Leading Gold Producer" },
    { quote: "Their underground support team is among the most disciplined and technically capable we've worked with in East Africa.", author: "Mine Manager", company: "Multinational Miner" },
    { quote: "Reliable equipment, professional crews and transparent reporting — Geofields sets the benchmark.", author: "Exploration Manager", company: "Tanzanian Junior Explorer" },
  ];
  return (
    <section className="section-y bg-background">
      <div className="container-x">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <span className="eyebrow justify-center"><span className="h-[1px] w-10 bg-primary" /> Client Trust</span>
            <h2 className="mt-5 text-4xl md:text-5xl leading-tight">What our partners say.</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="border border-border p-10 h-full flex flex-col">
                <div className="flex text-primary mb-6">
                  {Array.from({ length: 5 }).map((_, j) => <HiOutlineStar key={j} className="size-5 fill-current" />)}
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

function DownloadsSection() {
  const files = ["Company Profile", "Capability Statement", "Service Brochure", "HSE Policy", "Certificates", "Equipment Brochure"];
  return (
    <section className="section-y bg-surface">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow"><span className="h-[1px] w-10 bg-primary" /> Downloads</span>
              <h2 className="mt-5 text-4xl md:text-5xl leading-tight">Everything procurement teams need — in one place.</h2>
            </Reveal>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {files.map((f, i) => (
            <Reveal key={f} delay={i * 0.04}>
              <a href="#" className="flex items-center justify-between p-6 bg-background border border-border hover:border-primary transition group">
                <div className="flex items-center gap-4">
                  <div className="size-12 grid place-items-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                    <HiOutlineDownload className="size-5" />
                  </div>
                  <div>
                    <div className="font-semibold">{f}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest mt-0.5">PDF · 2.4 MB</div>
                  </div>
                </div>
                <HiOutlineArrowRight className="text-primary" />
              </a>
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
        <img src={heroImg} alt="" className="size-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[oklch(0.1_0.005_60)]/85" />
      </div>
      <div className="container-x relative py-28 text-center">
        <Reveal>
          <span className="eyebrow-light justify-center"><span className="h-[1px] w-10 bg-primary-glow" /> Build With Geofields</span>
          <h2 className="mt-5 text-white text-4xl md:text-6xl leading-tight max-w-4xl mx-auto">
            Ready to deliver your next mining project with confidence?
          </h2>
          <p className="mt-6 text-white/70 max-w-2xl mx-auto">
            Our team responds to every enquiry within 24 hours with a scoped, transparent proposal.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">Request Proposal <HiOutlineArrowRight /></Link>
            <a href="tel:+255766775255" className="btn-ghost">Call +255 766 775 255</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
