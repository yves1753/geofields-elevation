import { Reveal } from "@/components/Reveal";

interface LogoItem {
  row: number;
  col: number;
  alt: string;
}

const clients: LogoItem[] = [
  { row: 0, col: 0, alt: "AngloGold Ashanti" },
  { row: 0, col: 1, alt: "Barrick" },
  { row: 0, col: 2, alt: "Shanta Gold" },
  { row: 0, col: 3, alt: "Petra Diamonds" },
  { row: 0, col: 4, alt: "Government of Tanzania" },
  { row: 0, col: 5, alt: "Tanzania Geological Drilling Company" },
  { row: 1, col: 0, alt: "TANCOAL" },
  { row: 1, col: 1, alt: "Sunshine Group Limited" },
  { row: 1, col: 2, alt: "STAMICO" },
  { row: 1, col: 3, alt: "TANESCO" },
  { row: 1, col: 4, alt: "East Africa Metals" },
  { row: 1, col: 5, alt: "TGDC" },
  { row: 2, col: 0, alt: "Dodoma Gold Group" },
  { row: 2, col: 1, alt: "Tanzanian Gold Corporation" },
  { row: 2, col: 2, alt: "Yapi Merkezi" },
  { row: 2, col: 3, alt: "Twiga Cement" },
  { row: 2, col: 4, alt: "NT" },
  { row: 2, col: 5, alt: "Strandline Resources" },
];

const partners: LogoItem[] = [
  { row: 3, col: 0, alt: "African Underground Mining Services" },
  { row: 3, col: 2, alt: "Eng Pamoja Royalty Limited" },
  { row: 3, col: 5, alt: "MSA Mining Ltd" },
];

function LogoCell({ item, index }: { item: LogoItem; index: number }) {
  const x = item.col * 100;
  const y = item.row * 100;

  return (
    <Reveal delay={index * 0.03}>
      <button
        type="button"
        aria-label={item.alt}
        className="group relative w-full aspect-[229/192] cursor-pointer overflow-hidden rounded-sm border border-transparent bg-white/50 p-3 transition-all duration-500 ease-in-out hover:border-primary/20 hover:bg-white hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <div
          className="absolute inset-3 bg-[url('/logos-grid.png')] bg-no-repeat grayscale opacity-60 transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 group-focus-visible:scale-105 group-focus-visible:grayscale-0 group-focus-visible:opacity-100"
          style={{
            backgroundSize: "600% 400%",
            backgroundPosition: `-${x}% -${y}%`,
          }}
        />
      </button>
    </Reveal>
  );
}

export function ClientsAffiliates() {
  return (
    <section className="section-y bg-surface">
      <div className="container-x">
        <Reveal>
          <div className="max-w-3xl text-center mx-auto">
            <span className="eyebrow justify-center">
              <span className="h-[1px] w-10 bg-primary" /> Trusted By
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl leading-tight">
              Clients, Partners & Affiliates
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We are proud to work alongside industry leaders, government
              agencies and strategic partners who share our commitment to
              responsible mining and exploration across Africa.
            </p>
          </div>
        </Reveal>

        <div className="mt-14">
          <Reveal>
            <h3 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">
              Clients
            </h3>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
            {clients.map((item, index) => (
              <LogoCell key={`client-${item.row}-${item.col}`} item={item} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <Reveal>
            <h3 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">
              Partners & Affiliates
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {partners.map((item, index) => (
              <LogoCell key={`partner-${item.row}-${item.col}`} item={item} index={index + clients.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
