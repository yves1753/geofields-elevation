import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { HiOutlineArrowRight, HiOutlineSearch } from "react-icons/hi";
import { Layout } from "@/components/Layout";
import { FleetImage } from "@/components/fleet/FleetImage";
import { FleetRigModal } from "@/components/fleet/FleetRigModal";
import { fleetData, type FleetRig } from "@/data/fleetData";
import { images } from "@/lib/image-assets";
import { OptimizedImage } from "@/components/OptimizedImage";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Our Drilling Fleet — Geofields Tanzania Limited" },
      {
        name: "description",
        content:
          "Explore Geofields Tanzania Limited's fleet of 15 diamond core, reverse circulation and auger drilling rigs.",
      },
    ],
    links: [{ rel: "canonical", href: "/fleet" }],
  }),
  component: FleetPage,
});

const filters = [
  "All Rigs",
  "Track Mounted",
  "Man Portable",
  "Diamond Core Drilling",
  "Reverse Circulation",
  "Auger Drilling",
  "Fully Detailed",
  "Specifications Pending",
];
const numberValue = (value: string) => Number(value.replace(/[^\d.]/g, "")) || 0;

const categoryOrder = {
  ZQ: 1,
  "Man Portable": 2,
  Zinex: 3,
  RC: 4,
  Auger: 5,
  DB: 6,
  ICL: 7,
} as const;

const getRigCategory = (rig: FleetRig): keyof typeof categoryOrder => {
  if (rig.rigType === "Man Portable") return "Man Portable";
  if (rig.name.startsWith("ZQ")) return "ZQ";
  if (rig.name.startsWith("ZINEX") || rig.name.startsWith("ZMEX")) return "Zinex";
  if (rig.name.startsWith("RC")) return "RC";
  if (rig.name.startsWith("Auger")) return "Auger";
  if (rig.name.startsWith("DB")) return "DB";
  return "ICL";
};

function FleetPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All Rigs");
  const [sort, setSort] = useState("Rig Name");
  const [selected, setSelected] = useState<FleetRig | null>(null);
  const results = useMemo(
    () =>
      fleetData
        .filter((rig) => {
          const haystack =
            `${rig.name} ${rig.fleetNumber} ${rig.rigType} ${rig.drillingMethod}`.toLowerCase();
          const matchesQuery = haystack.includes(query.toLowerCase());
          const matchesFilter =
            filter === "All Rigs" ||
            rig.rigType === filter ||
            rig.drillingMethod === filter ||
            (filter === "Reverse Circulation" &&
              rig.drillingMethod.includes("Reverse Circulation")) ||
            (filter === "Fully Detailed" && rig.specificationsComplete) ||
            (filter === "Specifications Pending" && !rig.specificationsComplete);
          return matchesQuery && matchesFilter;
        })
        .sort((a, b) => {
          const categoryDifference =
            categoryOrder[getRigCategory(a)] - categoryOrder[getRigCategory(b)];

          if (categoryDifference !== 0) return categoryDifference;

          return sort === "Maximum Drill Depth"
            ? numberValue(b.maximumDrillDepth) - numberValue(a.maximumDrillDepth)
            : sort === "Engine Power"
              ? numberValue(b.enginePower) - numberValue(a.enginePower)
              : sort === "Rig Type"
                ? a.rigType.localeCompare(b.rigType)
                : a.name.localeCompare(b.name);
        }),
    [query, filter, sort],
  );
  const featured = results;

  return (
    <Layout>
      <section className="relative min-h-[720px] flex items-end overflow-hidden bg-[#111]">
        <OptimizedImage
          asset={images.fleet}
          alt="Geofields drilling operations"
          priority
          sizes="100vw"
          className="absolute inset-0 size-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/25" />
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          className="container-x relative py-28 md:py-36 text-white"
        >
          <h1 className="mt-5 text-white text-5xl md:text-7xl">Our Drilling Fleet</h1>
          <p className="mt-7 max-w-3xl text-lg text-white/75 leading-relaxed">
            Geofields Tanzania Limited operates a versatile fleet of drilling rigs designed to
            support diamond core drilling, reverse circulation drilling, auger drilling, exploration
            programs and mining operations across Tanzania.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#featured-fleet" className="btn-primary">
              Explore Featured Rigs <HiOutlineArrowRight />
            </a>
            <Link to="/contact" className="btn-ghost">
              Contact Our Team
            </Link>
          </div>
        </motion.div>
      </section>
      <section className="bg-[#111] text-white">
        <div className="container-x py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            ["1,600 m", "Maximum Listed Drilling Depth"],
            ["Multiple", "Drilling Configurations"],
            ["Nationwide", "Operational Capability"],
          ].map(([v, l]) => (
            <div key={l} className="border-l border-primary/50 pl-5">
              <div className="text-3xl md:text-4xl font-display font-extrabold text-primary">
                {v}
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-white/55">{l}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-12 bg-surface sticky top-20 z-20 border-b border-border">
        <div className="container-x grid lg:grid-cols-[1fr_240px_220px] gap-3">
          <label className="relative">
            <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name, ID, type or method"
              className="input pl-11"
              aria-label="Search fleet"
            />
          </label>
          <select
            className="input"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            aria-label="Filter fleet"
          >
            {filters.map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
          <select
            className="input"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort fleet"
          >
            <option>Rig Name</option>
            <option>Maximum Drill Depth</option>
            <option>Engine Power</option>
            <option>Rig Type</option>
          </select>
        </div>
      </section>
      <section id="featured-fleet" className="section-y bg-background scroll-mt-44">
        <div className="container-x">
          <span className="eyebrow">Selected equipment</span>
          <h2 className="mt-4 text-4xl md:text-5xl">Featured Drilling Rigs</h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Explore selected rigs from the Geofields fleet, including deep-hole tracked rigs and
            versatile man-portable diamond drilling systems.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
            {featured.map((rig, i) => (
              <motion.article
                key={rig.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group flex h-full flex-col bg-[#161616] text-white rounded-xl overflow-hidden border border-white/10 shadow-xl hover:-translate-y-1 transition-transform"
              >
                <button
                  className="block w-full overflow-hidden"
                  onClick={() => setSelected(rig)}
                  aria-label={`Preview ${rig.name}`}
                >
                  <FleetImage
                    src={rig.image}
                    alt={rig.imageAlt}
                    priority={i < 4}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </button>
                <div className="flex flex-1 flex-col p-6">
                  <div className="text-primary text-xs uppercase tracking-widest">
                    {rig.rigType}
                  </div>
                  <h3 className="text-white text-2xl mt-2">{rig.name}</h3>
                  <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="block text-white/45 text-xs">Method</span>
                      {rig.drillingMethod}
                    </div>
                    <div>
                      <span className="block text-white/45 text-xs">Maximum depth</span>
                      {rig.maximumDrillDepth}
                    </div>
                    <div>
                      <span className="block text-white/45 text-xs">Engine</span>
                      {rig.enginePower}
                    </div>
                    <div>
                      <span className="block text-white/45 text-xs">Category</span>
                      {rig.rigType}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelected(rig)}
                    className="mt-auto pt-6 w-full btn-primary justify-center"
                  >
                    View Specifications
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
          {featured.length === 0 && (
            <p className="mt-10 text-muted-foreground">No featured rigs match these filters.</p>
          )}
        </div>
      </section>
      <section className="section-y bg-surface">
        <div className="container-x">
          <span className="eyebrow">All equipment</span>
          <h2 className="mt-4 text-4xl">Complete Fleet Inventory</h2>
          <p className="mt-4 text-muted-foreground">
            Geofields Tanzania Limited currently maintains a total fleet of 15 drilling rigs across
            multiple drilling configurations.
          </p>
          <div className="mt-10 overflow-x-auto rounded-xl border border-border bg-background">
            <table className="w-full min-w-[760px] text-sm">
              <thead className="bg-[#111] text-white text-left">
                <tr>
                  <th className="p-4">Rig</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Method</th>
                  <th className="p-4">Maximum depth</th>
                  <th className="p-4">Details</th>
                </tr>
              </thead>
              <tbody>
                {results.map((rig) => (
                  <tr key={rig.id} className="border-b border-border last:border-0">
                    <td className="p-4 font-semibold">
                      {rig.name}
                      <div className="mt-1 flex gap-2">
                        {rig.featured && (
                          <span className="text-[10px] bg-primary text-white px-2 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                        {!rig.specificationsComplete && (
                          <span className="text-[10px] bg-muted px-2 py-1 rounded-full">
                            Specifications pending
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-4">{rig.rigType}</td>
                    <td className="p-4">{rig.drillingMethod}</td>
                    <td className="p-4">{rig.maximumDrillDepth}</td>
                    <td className="p-4">
                      <button
                        className="text-primary font-semibold"
                        onClick={() => setSelected(rig)}
                      >
                        View specifications
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Showing {results.length} of 15 rigs</p>
        </div>
      </section>
      <section className="section-y bg-[#111] text-white">
        <div className="container-x text-center">
          <span className="eyebrow-light">Plan your program</span>
          <h2 className="mt-4 text-white text-4xl md:text-5xl">
            Need the Right Rig for Your Project?
          </h2>
          <p className="mt-5 mx-auto max-w-2xl text-white/65">
            Speak with the Geofields team about your exploration, drilling or mining requirements
            and identify the most suitable equipment configuration for your project.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/255766775255"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Request a Consultation
            </a>
            <Link to="/contact" className="btn-ghost">
              Contact Geofields
            </Link>
          </div>
        </div>
      </section>
      <FleetRigModal rig={selected} onClose={() => setSelected(null)} />
    </Layout>
  );
}
