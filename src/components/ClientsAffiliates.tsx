import { Reveal } from "@/components/Reveal";
import clientsLogos from "@/assets/clients-logos.png.asset.json";
import partnersAffiliates from "@/assets/partners-affiliates.png.asset.json";

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
          <div className="group overflow-hidden rounded-sm bg-white p-4 md:p-8 transition-all duration-500 ease-in-out hover:shadow-card focus-within:shadow-card">
            <img
              src={clientsLogos.url}
              alt="Geofields clients including AngloGold Ashanti, Shanta Gold, Barrick, TanzGraphite, Helium One, Twiga Cement, Strandline Resources, Panafrican Energy, Marula Mining, Yapi Merkezi, Mantra Resources, East Africa Metals, Geological Survey of Tanzania, Petra Diamonds, TANESCO, TANCOAL, DGG Eco, NT Marble, Sunshine Group and Advent"
              className="w-full h-auto grayscale opacity-60 transition-all duration-500 ease-in-out group-hover:scale-[1.02] group-hover:grayscale-0 group-hover:opacity-100 group-focus-within:scale-[1.02] group-focus-within:grayscale-0 group-focus-within:opacity-100"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-16">
          <Reveal>
            <h3 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">
              Partners & Affiliates
            </h3>
          </Reveal>
          <div className="group overflow-hidden rounded-sm bg-white p-4 md:p-8 transition-all duration-500 ease-in-out hover:shadow-card focus-within:shadow-card max-w-4xl mx-auto">
            <img
              src={partnersAffiliates.url}
              alt="Geofields partners and affiliates: African Underground Mining Services, EMG Pamoja Royalty Limited and MSA Mining Limited"
              className="w-full h-auto grayscale opacity-60 transition-all duration-500 ease-in-out group-hover:scale-[1.02] group-hover:grayscale-0 group-hover:opacity-100 group-focus-within:scale-[1.02] group-focus-within:grayscale-0 group-focus-within:opacity-100"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
