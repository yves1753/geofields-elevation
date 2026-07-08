import { Reveal } from "@/components/Reveal";

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
            {[
              "AngloGold Ashanti", "Barrick", "Shanta Gold", "Petra Diamonds",
              "Government of Tanzania", "Tanzania Geological Drilling Company",
              "TANCOAL", "Sunshine Group Limited", "STAMICO", "TANESCO",
              "East Africa Metals", "TGDC", "Dodoma Gold Group", "Tanzanian Gold Corporation",
              "Yapi Merkezi", "Twiga Cement", "NT", "Strandline Resources",
            ].map((alt, index) => (
              <Reveal key={alt} delay={index * 0.03}>
                <button
                  type="button"
                  aria-label={alt}
                  className="group relative w-full aspect-[229/192] cursor-pointer overflow-hidden rounded-sm border border-transparent bg-white/50 p-3 transition-all duration-500 ease-in-out hover:border-primary/20 hover:bg-white hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <div
                    className="absolute inset-3 bg-[url('/logos-grid.png')] bg-no-repeat grayscale opacity-60 transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 group-focus-visible:scale-105 group-focus-visible:grayscale-0 group-focus-visible:opacity-100"
                    style={{
                      backgroundSize: "600% 400%",
                      backgroundPosition: `-${(index % 6) * 100}% -${Math.floor(index / 6) * 100}%`,
                    }}
                  />
                </button>
              </Reveal>
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
            {[
              "African Underground Mining Services",
              "Eng Pamoja Royalty Limited",
              "MSA Mining Ltd",
            ].map((alt, index) => (
              <Reveal key={alt} delay={index * 0.05}>
                <button
                  type="button"
                  aria-label={alt}
                  className="group relative w-full aspect-[229/192] cursor-pointer overflow-hidden rounded-sm border border-transparent bg-white/50 p-3 transition-all duration-500 ease-in-out hover:border-primary/20 hover:bg-white hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <div
                    className="absolute inset-3 bg-[url('/logos-grid.png')] bg-no-repeat grayscale opacity-60 transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 group-focus-visible:scale-105 group-focus-visible:grayscale-0 group-focus-visible:opacity-100"
                    style={{
                      backgroundSize: "600% 400%",
                      backgroundPosition: `-${[0, 2, 5][index] * 100}% -300%`,
                    }}
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
