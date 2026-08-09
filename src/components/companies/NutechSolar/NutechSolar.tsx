import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Boxes,
  ClipboardCheck,
  Gauge,
  Handshake,
  LifeBuoy,
  Network,
  ShieldCheck,
  SolarPanel,
  Truck,
  Zap,
} from "lucide-react";
import { subCompanies } from "@/data/companies";
import styles from "./NutechSolar.module.css";

type Feature = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type Step = {
  label: string;
  title: string;
  text: string;
};

const solarCompany = subCompanies.find(({ id }) => id === "solar") ?? subCompanies[1];

const CAPABILITIES: Feature[] = [
  {
    icon: SolarPanel,
    title: "Solar solutions",
    text: "Practical solar systems for commercial sites, facilities, and organizations looking for cleaner energy control.",
  },
  {
    icon: Zap,
    title: "Backup power",
    text: "Power continuity solutions shaped around operational uptime, load requirements, and real site constraints.",
  },
  {
    icon: Gauge,
    title: "Energy planning",
    text: "Clear guidance on system fit, resilience needs, and long-term value before equipment decisions are made.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable execution",
    text: "Founder-led sourcing discipline keeps the focus on dependable systems, practical specifications, and support.",
  },
];

const DELIVERY_STEPS: Step[] = [
  {
    label: "01",
    title: "Understand the load",
    text: "We look at the site, energy demand, operating hours, backup requirements, and future capacity expectations.",
  },
  {
    label: "02",
    title: "Shape the right system",
    text: "Solutions are selected around fit, performance, availability, resilience, and the economics of ownership.",
  },
  {
    label: "03",
    title: "Support continuity",
    text: "The work continues through coordination, product guidance, and support that helps energy systems stay useful.",
  },
];

const FOCUS_AREAS = [
  "Solar systems",
  "Backup power",
  "Energy resilience",
  "Commercial sites",
  "Facility support",
  "Power continuity",
];

const GROUP_LINKS: Feature[] = [
  {
    icon: Boxes,
    title: "Sourcing strength",
    text: "Group-wide channel awareness supports equipment availability and dependable product coordination.",
  },
  {
    icon: Truck,
    title: "Logistics alignment",
    text: "Solar and power requirements can be coordinated with shipment, export, and customs understanding.",
  },
  {
    icon: Network,
    title: "Connected expertise",
    text: "Nutech Solar & Power carries its own energy focus while staying connected to the wider group.",
  },
];

function FeatureCard({ icon: Icon, title, text }: Feature) {
  return (
    <article className={styles.featureCard}>
      <span className={styles.featureIcon}>
        <Icon aria-hidden="true" size={23} strokeWidth={1.8} />
      </span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default function NutechSolar() {
  return (
    <div className={styles.mainSolar}>
      <section className={styles.heroSection} aria-labelledby="solar-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Nutech Solar & Power</p>
          <h1 id="solar-title" className={styles.title}>
            Renewable energy and backup power solutions built for dependable operations.
          </h1>
          <p className={styles.lead}>
            Nutech Solar & Power serves businesses, facilities, and project
            teams that need practical solar, backup power, and resilient energy
            solutions backed by founder-led industry experience.
          </p>

          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryLink}>
              Discuss a power requirement
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
            <Link href="/companies" className={styles.secondaryLink}>
              View group companies
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>

        <aside className={styles.identityCard} aria-label="Nutech Solar & Power identity">
          <div className={styles.identityTop}>
            <span className={styles.logoWrap}>
              <Image src="/icon.png" alt="Nutech Group icon" width={62} height={62} priority />
              <span className={styles.logoBadge} aria-hidden="true">
                {solarCompany.icon}
              </span>
            </span>
            <span className={styles.companyChip}>Energy</span>
          </div>

          <h2>A focused energy company within the Nutech Group ecosystem.</h2>
          <p>
            Distinct solar and power presence, group-backed execution, and a
            resilience mindset shaped by decades of founder experience.
          </p>

          <dl className={styles.heroStats}>
            <div>
              <dt>Solar</dt>
              <dd>Renewable systems</dd>
            </div>
            <div>
              <dt>Power</dt>
              <dd>Backup continuity</dd>
            </div>
            <div>
              <dt>MEA</dt>
              <dd>Regional focus</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className={styles.capabilitySection} aria-labelledby="capabilities-title">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>What We Support</p>
          <h2 id="capabilities-title">Built for sites that need cleaner, steadier power.</h2>
          <p>
            From solar deployment to backup power decisions, Nutech Solar &
            Power keeps the focus on practical performance, clear system fit,
            and energy solutions that support real operations.
          </p>
        </div>

        <div className={styles.featureGrid}>
          {CAPABILITIES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className={styles.experienceSection} aria-labelledby="experience-title">
        <div className={styles.experiencePanel}>
          <p className={styles.eyebrow}>Founder-Led Experience</p>
          <h2 id="experience-title">
            Power decisions need technical clarity and experienced judgment.
          </h2>
          <p>
            The company benefits from founders who understand supplier
            relationships, customer expectations, and the practical realities of
            infrastructure decisions. That experience informs how we source,
            recommend, coordinate, and support solar and power requirements.
          </p>
        </div>

        <div className={styles.proofStack}>
          <article>
            <Handshake aria-hidden="true" size={24} strokeWidth={1.8} />
            <h3>Relationship-led sourcing</h3>
            <p>Supplier conversations are handled with reliability, availability, and long-term support in mind.</p>
          </article>
          <article>
            <ClipboardCheck aria-hidden="true" size={24} strokeWidth={1.8} />
            <h3>System-fit clarity</h3>
            <p>Power choices are guided by load, site context, backup needs, and ownership value.</p>
          </article>
          <article>
            <LifeBuoy aria-hidden="true" size={24} strokeWidth={1.8} />
            <h3>Support mindset</h3>
            <p>Coordination continues beyond selection so teams can operate with more confidence.</p>
          </article>
        </div>
      </section>

      <section className={styles.deliverySection} aria-labelledby="delivery-title">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>How We Work</p>
          <h2 id="delivery-title">A practical path from energy requirement to site readiness.</h2>
        </div>

        <div className={styles.stepGrid}>
          {DELIVERY_STEPS.map(({ label, title, text }) => (
            <article key={title} className={styles.stepCard}>
              <span>{label}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.focusBand} aria-labelledby="focus-title">
        <div>
          <p className={styles.eyebrow}>Focus Areas</p>
          <h2 id="focus-title">Energy capability with a clear power continuity lane.</h2>
        </div>
        <ul aria-label="Nutech Solar & Power focus areas">
          {FOCUS_AREAS.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </section>

      <section className={styles.groupSection} aria-labelledby="group-title">
        <div className={styles.groupHeader}>
          <p className={styles.eyebrow}>Part Of Nutech Group</p>
          <h2 id="group-title">
            A child company with its own energy focus and group-level support.
          </h2>
        </div>

        <div className={styles.groupGrid}>
          {GROUP_LINKS.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>
    </div>
  );
}
