import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import CountUp from "react-countup";
import { ArrowUpRight, ChevronDown, Expand, MapPin, X } from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import heroImg from "@/assets/hero-mine.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects Across Tanzania — Geofields Tanzania Limited" },
      {
        name: "description",
        content:
          "Explore Geofields Tanzania Limited's drilling, exploration and mining project portfolio across Tanzania.",
      },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

type Project = {
  id: string;
  name: string;
  region: string;
  mineral: "Lithium" | "Nickel" | "Gold" | "Limestone";
  status: "Completed" | "Partnership";
  partner?: string;
  x: number;
  y: number;
};

const colors = {
  Lithium: "#f58220",
  Nickel: "#dc4d45",
  Gold: "#f5c44e",
  Limestone: "#4d9fca",
};

const projects: Project[] = [
  {
    id: "kibare",
    name: "Kibare",
    region: "Kagera",
    mineral: "Nickel",
    status: "Completed",
    x: 123,
    y: 117,
  },
  {
    id: "kabanga",
    name: "Kabanga",
    region: "Kagera",
    mineral: "Lithium",
    status: "Partnership",
    x: 102,
    y: 91,
  },
  {
    id: "geita",
    name: "Geita Gold Project",
    region: "Geita",
    mineral: "Gold",
    status: "Completed",
    partner: "African Underground Mining Services (AUMS)",
    x: 176,
    y: 146,
  },
  {
    id: "ikungi",
    name: "Ikungi",
    region: "Singida",
    mineral: "Lithium",
    status: "Completed",
    x: 259,
    y: 228,
  },
  {
    id: "mahonga",
    name: "Mahonga",
    region: "Dodoma",
    mineral: "Lithium",
    status: "Completed",
    x: 313,
    y: 254,
  },
  {
    id: "mkunazi",
    name: "Mkunazi",
    region: "Morogoro",
    mineral: "Limestone",
    status: "Completed",
    x: 362,
    y: 300,
  },
  {
    id: "manga",
    name: "Manga Gold Project",
    region: "Tanga",
    mineral: "Gold",
    status: "Partnership",
    partner: "MSA",
    x: 397,
    y: 197,
  },
];

const legend = [
  { type: "Lithium", text: "Exploration drilling and resource definition programs." },
  { type: "Nickel", text: "Deep-target exploration and technical drilling support." },
  { type: "Gold", text: "Surface and underground gold exploration programs." },
  { type: "Limestone", text: "Industrial mineral exploration and core evaluation." },
] as const;

const partners = [
  { name: "African Underground Mining Services", short: "AUMS", image: "/logos/partner-1.png" },
  { name: "East Africa Metals", short: "EAST AFRICA\nMETALS" },
  { name: "MSA Mining", short: "MSA", image: "/logos/affiliate-1.png" },
  { name: "Barminco Geofields Joint Venture", short: "BARMINCO ×\nGEOFIELDS" },
  { name: "Tanzania Lithium Company Ltd.", short: "TANZANIA\nLITHIUM CO." },
  { name: "EMG Pamoja Royalty", short: "EMG PAMOJA", image: "/logos/partner-2.png" },
];

function TanzaniaMap({
  active,
  onSelect,
  expanded = false,
}: {
  active: string | null;
  onSelect: (p: Project) => void;
  expanded?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 520 520"
      role="img"
      aria-labelledby={`map-title-${expanded}`}
      className="h-full w-full"
    >
      <title id={`map-title-${expanded}`}>Map of Geofields projects across Tanzania</title>
      <defs>
        <linearGradient id={`land-${expanded}`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#292929" />
          <stop offset="1" stopColor="#171717" />
        </linearGradient>
        <filter id={`glow-${expanded}`}>
          <feGaussianBlur stdDeviation="8" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern id={`grid-${expanded}`} width="26" height="26" patternUnits="userSpaceOnUse">
          <path d="M26 0H0V26" fill="none" stroke="#fff" strokeOpacity=".035" />
        </pattern>
      </defs>
      <rect width="520" height="520" fill={`url(#grid-${expanded})`} />
      <path
        d="M99 51 166 66l56-21 34 24 67-2 28 31 70 13 21 49-17 43 20 46-23 27 10 42-32 22-5 49-41 14-31 48-53 8-30-31-50-4-18-44-58-23-2-48-34-36 18-47-22-37 31-43-19-48Z"
        fill={`url(#land-${expanded})`}
        stroke="#555"
        strokeWidth="2"
      />
      <path
        d="M115 146c73 25 132 4 192 43s80 93 98 178M176 68c20 71 47 131 129 185s74 119 70 162M81 273c104-5 207 5 340-108M132 369c70-61 172-72 288-83"
        fill="none"
        stroke="#fff"
        strokeOpacity=".055"
        strokeWidth="1.5"
      />
      <text
        x="257"
        y="179"
        textAnchor="middle"
        fill="#fff"
        fillOpacity=".07"
        fontSize="32"
        fontWeight="800"
        letterSpacing="8"
      >
        TANZANIA
      </text>
      {projects.map((p) => {
        const selected = active === p.id;
        return (
          <g
            key={p.id}
            role="button"
            tabIndex={0}
            aria-label={`${p.name}, ${p.mineral} project in ${p.region}`}
            onClick={() => onSelect(p)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") onSelect(p);
            }}
            className="cursor-pointer outline-none"
          >
            <circle
              cx={p.x}
              cy={p.y}
              r={selected ? 25 : 18}
              fill={colors[p.mineral]}
              opacity={selected ? 0.18 : 0.08}
              className="transition-all duration-300"
            />
            <circle
              cx={p.x}
              cy={p.y}
              r={selected ? 9 : 7}
              fill={colors[p.mineral]}
              stroke="#111"
              strokeWidth="4"
              filter={selected ? `url(#glow-${expanded})` : undefined}
              className="transition-all duration-300"
            />
            <text
              x={p.x + (p.x > 350 ? -13 : 13)}
              y={p.y - 12}
              textAnchor={p.x > 350 ? "end" : "start"}
              fill={selected ? "#fff" : "#bdbdbd"}
              fontSize="11"
              fontWeight="700"
            >
              {p.name}
            </text>
          </g>
        );
      })}
      <g transform="translate(35 460)">
        <path d="M0 18V0h95" fill="none" stroke="#f58220" strokeWidth="2" />
        <text y="38" fill="#858585" fontSize="10" letterSpacing="2">
          PROJECT FOOTPRINT · TANZANIA
        </text>
      </g>
    </svg>
  );
}

function ProjectsPage() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [lightbox, setLightbox] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const chooseProject = (project: Project, scroll = false) => {
    setSelected(project);
    if (scroll)
      mapRef.current?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "center",
      });
  };

  return (
    <Layout>
      <PageHero
        eyebrow="National Project Portfolio"
        title="Experience mapped across Tanzania."
        subtitle="Explore the locations, minerals and partnerships behind Geofields' nationwide project experience."
        image={heroImg}
      />
      <main className="relative overflow-hidden bg-[#111] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_20%_20%,rgba(245,130,32,.14),transparent_28%),radial-gradient(circle_at_85%_55%,rgba(245,130,32,.08),transparent_25%)]"
        />
        <div aria-hidden="true" className="projects-contours absolute inset-0 opacity-20" />

        <section
          className="container-x relative py-20 md:py-28"
          aria-labelledby="projects-map-title"
        >
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <span className="eyebrow-light">Our national footprint</span>
            <h2 id="projects-map-title" className="mt-5 text-4xl text-white md:text-6xl">
              Projects Across Tanzania
            </h2>
            <p className="mt-6 text-base leading-8 text-white/60 md:text-lg">
              Over the years, Geofields Tanzania Limited has successfully supported mineral
              exploration and drilling programs across Tanzania, working with leading mining
              companies and exploration partners in multiple regions.
            </p>
          </motion.div>

          <div className="mt-14 grid items-start gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(310px,.55fr)]">
            <div
              ref={mapRef}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[.035] shadow-[0_30px_100px_rgba(0,0,0,.45)] backdrop-blur-sm"
            >
              <div className="group relative aspect-[1.1/1] w-full overflow-hidden p-3 md:p-7">
                <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.025]">
                  <TanzaniaMap active={selected?.id ?? null} onSelect={(p) => chooseProject(p)} />
                </div>
                <button
                  type="button"
                  onClick={() => setLightbox(true)}
                  className="absolute right-5 top-5 grid size-11 place-items-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-md transition hover:border-[#f58220] hover:text-[#f58220]"
                  aria-label="Expand Tanzania projects map"
                >
                  <Expand size={17} />
                </button>
              </div>
              <AnimatePresence>
                {selected && (
                  <motion.aside
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute inset-x-3 bottom-3 rounded-xl border border-white/10 bg-[#151515]/95 p-5 shadow-2xl backdrop-blur-xl md:inset-x-auto md:bottom-6 md:left-6 md:w-[340px]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div
                          className="text-[10px] font-bold uppercase tracking-[.22em]"
                          style={{ color: colors[selected.mineral] }}
                        >
                          {selected.mineral} project
                        </div>
                        <h3 className="mt-2 text-xl text-white">{selected.name}</h3>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelected(null);
                        }}
                        aria-label="Close project details"
                        className="p-1 text-white/50 hover:text-white"
                      >
                        <X size={18} />
                      </button>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="block text-white/40">Region</span>
                        {selected.region}
                      </div>
                      <div>
                        <span className="block text-white/40">Status</span>
                        {selected.status}
                      </div>
                    </div>
                    {selected.partner && (
                      <p className="mt-4 border-t border-white/10 pt-3 text-xs text-white/60">
                        <span className="text-white/35">Strategic partner · </span>
                        {selected.partner}
                      </p>
                    )}
                  </motion.aside>
                )}
              </AnimatePresence>
            </div>

            <aside
              className="rounded-2xl border border-white/10 bg-white/[.035] p-3 backdrop-blur-sm md:p-6"
              aria-label="Project type legend"
            >
              <div className="mb-3 flex items-center justify-between px-2">
                <h3 className="text-lg text-white">Project Types</h3>
                <span className="text-[10px] uppercase tracking-[.2em] text-white/35">Legend</span>
              </div>
              <div className="space-y-2">
                {legend.map((item) => (
                  <details
                    key={item.type}
                    className="group rounded-xl border border-white/[.07] bg-black/20 open:bg-white/[.04] md:pointer-events-none md:open:bg-transparent"
                    open
                  >
                    <summary className="flex cursor-pointer list-none items-center gap-3 p-4">
                      <span
                        className="size-2.5 rounded-full shadow-[0_0_14px_currentColor]"
                        style={{ backgroundColor: colors[item.type], color: colors[item.type] }}
                      />
                      <span className="flex-1 text-sm font-semibold">{item.type} Projects</span>
                      <ChevronDown
                        size={15}
                        className="text-white/35 transition group-open:rotate-180 md:hidden"
                      />
                    </summary>
                    <p className="px-4 pb-4 pl-[3.25rem] text-xs leading-5 text-white/45">
                      {item.text}
                    </p>
                  </details>
                ))}
              </div>
              <div className="mt-6 border-t border-white/10 px-2 pt-6">
                <p className="text-xs leading-5 text-white/35">
                  <MapPin className="mr-2 inline text-[#f58220]" size={14} />
                  Select a location below to highlight it on the map.
                </p>
              </div>
            </aside>
          </div>

          <div className="mt-20 flex items-end justify-between gap-6">
            <div>
              <span className="eyebrow-light">Portfolio</span>
              <h2 className="mt-3 text-3xl text-white md:text-4xl">Project Locations</h2>
            </div>
            <span className="hidden text-xs uppercase tracking-[.2em] text-white/30 md:block">
              7 sites · 6 regions
            </span>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map((p, i) => (
              <motion.button
                key={p.id}
                type="button"
                onClick={() => chooseProject(p, true)}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.045 }}
                viewport={{ once: true, margin: "-40px" }}
                className={`group relative min-h-52 overflow-hidden rounded-xl border bg-white/[.035] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-[#f58220]/70 hover:shadow-[0_18px_50px_rgba(245,130,32,.12)] ${selected?.id === p.id ? "border-[#f58220] shadow-[0_0_35px_rgba(245,130,32,.12)]" : "border-white/10"}`}
              >
                <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#f58220] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-center justify-between">
                  <span
                    className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black"
                    style={{ backgroundColor: colors[p.mineral] }}
                  >
                    {p.mineral}
                  </span>
                  <ArrowUpRight
                    size={17}
                    className="text-white/25 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#f58220]"
                  />
                </div>
                <h3 className="mt-7 text-xl text-white">{p.name}</h3>
                <p className="mt-2 text-sm text-white/45">{p.region} Region</p>
                <div className="mt-6 flex translate-y-2 items-center justify-between border-t border-white/10 pt-4 text-xs opacity-70 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-white/35">Status</span>
                  <span className="font-semibold text-white/80">{p.status}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        <section
          className="relative border-y border-white/10 bg-black/25 py-12"
          aria-label="Project statistics"
        >
          <div className="container-x grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 lg:grid-cols-4">
            {[
              { n: 7, suffix: "+", label: "Project Sites" },
              { n: 4, suffix: "", label: "Mineral Categories" },
              { n: 5, suffix: "+", label: "Strategic Partners" },
              { n: 6, suffix: "+", label: "Regions Covered" },
            ].map((s) => (
              <div key={s.label} className="bg-[#151515] px-5 py-8 text-center md:py-10">
                <div className="text-3xl font-extrabold text-white md:text-5xl">
                  <CountUp end={s.n} suffix={s.suffix} enableScrollSpy scrollSpyOnce duration={2} />
                </div>
                <div className="mt-2 text-[10px] font-semibold uppercase tracking-[.16em] text-white/40 md:text-xs">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container-x relative py-20 md:py-28" aria-labelledby="partners-title">
          <span className="eyebrow-light">Built on trust</span>
          <h2 id="partners-title" className="mt-4 text-3xl text-white md:text-5xl">
            Strategic Partners
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-white/50">
            Working alongside respected operators, consultants and exploration partners to deliver
            safer, stronger project outcomes.
          </p>
          <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 lg:grid-cols-6">
            {partners.map((p) => (
              <div
                key={p.name}
                className="group flex min-h-36 min-w-[72vw] snap-center items-center justify-center rounded-xl border border-white/10 bg-white/[.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[.07] md:min-w-0"
                title={p.name}
              >
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="max-h-14 max-w-full object-contain grayscale opacity-60 transition duration-500 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                ) : (
                  <span className="whitespace-pre-line text-center text-sm font-black tracking-tight text-white/45 grayscale transition group-hover:scale-105 group-hover:text-white group-hover:grayscale-0">
                    {p.short}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Expanded Tanzania project map"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
            className="fixed inset-0 z-[100] grid place-items-center bg-black/90 p-4 backdrop-blur-md md:p-10"
          >
            <motion.div
              initial={{ scale: reduceMotion ? 1 : 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: reduceMotion ? 1 : 0.98 }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-[min(88vh,900px)] w-full max-w-5xl rounded-2xl border border-white/10 bg-[#111] p-2 shadow-2xl md:p-6"
            >
              <button
                autoFocus
                onClick={() => setLightbox(false)}
                className="absolute right-4 top-4 z-10 grid size-11 place-items-center rounded-full border border-white/15 bg-black/70 text-white hover:border-[#f58220] hover:text-[#f58220]"
                aria-label="Close expanded map"
              >
                <X size={19} />
              </button>
              <TanzaniaMap
                expanded
                active={selected?.id ?? null}
                onSelect={(p) => chooseProject(p)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
