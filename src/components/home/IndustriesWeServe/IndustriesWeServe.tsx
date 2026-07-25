import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Boxes,
  CarFront,
  CircuitBoard,
  RadioTower,
  SolarPanel,
  Truck,
} from "lucide-react";
import { subCompanies } from "@/data/companies";
import styles from "./IndustriesWeServe.module.css";

type Industry = {
  market: string;
  audience: string;
  text: string;
  capabilities: string[];
  cardClass: string;
  Icon: LucideIcon;
};

const INDUSTRY_COPY: Record<string, Industry> = {
  auto: {
    market: "Automotive Service",
    audience: "Workshops, fleets & technical teams",
    text: "Nutech Automotive supports the service side of mobility with professional tools, workshop equipment, and dependable technical support.",
    capabilities: ["Tools", "Equipment", "Service"],
    cardClass: "themeAuto",
    Icon: CarFront,
  },
  solar: {
    market: "Energy & Power",
    audience: "Commercial sites, facilities & resilient infrastructure",
    text: "Nutech Solar & Power serves customers that need renewable energy, backup systems, and practical power continuity.",
    capabilities: ["Solar", "Backup", "Resilience"],
    cardClass: "themeSolar",
    Icon: SolarPanel,
  },
  dist: {
    market: "Distribution Channels",
    audience: "IT resellers, retail networks & consumer goods channels",
    text: "Nutech Distribution moves computer hardware, consumer goods, and trusted brands through regional supply channels.",
    capabilities: ["Hardware", "Brands", "Channels"],
    cardClass: "themeDistribution",
    Icon: Boxes,
  },
  logi: {
    market: "Trade & Logistics",
    audience: "Importers, exporters & shipment-driven businesses",
    text: "Nutech Logistics helps products move through shipping, exporting, customs, and coordination with clearer control.",
    capabilities: ["Shipping", "Customs", "Export"],
    cardClass: "themeLogistics",
    Icon: Truck,
  },
  tele: {
    market: "Telecom Infrastructure",
    audience: "Networks, operators & connectivity-led projects",
    text: "Nutech Telecom serves connectivity needs with telecommunication infrastructure built around uptime, coverage, and scale.",
    capabilities: ["Coverage", "Uptime", "Networks"],
    cardClass: "themeTelecom",
    Icon: RadioTower,
  },
  tech: {
    market: "Software, Cloud & AI",
    audience: "Organizations modernizing operations and customer systems",
    text: "Nutech Technologies builds software, cloud solutions, and AI products for teams ready to digitize and scale.",
    capabilities: ["Software", "Cloud", "AI"],
    cardClass: "themeTechnology",
    Icon: CircuitBoard,
  },
};

const INDUSTRIES = subCompanies.map((company) => ({
  ...company,
  ...INDUSTRY_COPY[company.id],
}));

export default function IndustriesWeServe() {
  return (
    <section
      className={`${styles.mainIWS} overlaySection`}
      aria-labelledby="industries-we-serve-title"
    >
      <div className={styles.introGrid}>
        <div className={styles.copyBlock}>
          <p className={styles.eyebrow}>Industries We Serve</p>

          <h2 id="industries-we-serve-title" className={styles.title}>
            Six companies serving six connected markets.
          </h2>
        </div>

        <div className={styles.summaryBlock}>
          <p>
            Nutech Group&apos;s market coverage comes directly from its operating
            companies: automotive service, energy and power, distribution,
            logistics, telecom infrastructure, and software technology.
          </p>

          <Link href="/companies" className={styles.sectionLink}>
            Explore all companies
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </div>

      <div className={styles.marketLayout}>
        <aside className={styles.marketSignal} aria-label="Industry coverage summary">
          <span className={styles.signalKicker}>Company-led coverage</span>
          <strong>6</strong>
          <p>
            Focused companies, each serving a clear market while staying
            connected through one group.
          </p>
        </aside>

        <div className={styles.industryGrid} aria-label="Industries Nutech Group serves">
          {INDUSTRIES.map(({ id, name, market, audience, text, capabilities, cardClass, hrefLink, Icon }, index) => (
            <Link
              key={id}
              href={hrefLink}
              className={`${styles.marketCard} ${styles[cardClass]}`}
              aria-label={`View Nutech ${name}`}
            >
              <div className={styles.cardTop}>
                <span className={styles.iconWrap}>
                  <Icon aria-hidden="true" size={26} strokeWidth={1.7} />
                </span>
                <span className={styles.cardIndex}>0{index + 1}</span>
              </div>

              <h3>{market}</h3>
              <p className={styles.scope}>Nutech {name}</p>
              <p className={styles.audience}>{audience}</p>
              <p className={styles.cardText}>{text}</p>

              <ul className={styles.capabilityList} aria-label={`${market} capabilities`}>
                {capabilities.map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>

              <span className={styles.cardCta}>
                View company
                <ArrowRight aria-hidden="true" size={15} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
