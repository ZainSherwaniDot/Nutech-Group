import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Boxes,
  CircuitBoard,
  ClipboardCheck,
  Handshake,
  LifeBuoy,
  Network,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { subCompanies } from "@/data/companies";
import styles from "./NutechDistribution.module.css";

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

const distributionCompany = subCompanies.find(({ id }) => id === "dist") ?? subCompanies[2];

const CAPABILITIES: Feature[] = [
  {
    icon: Boxes,
    title: "Channel distribution",
    text: "Computer hardware, consumer goods, and trusted products moved through practical regional supply channels.",
  },
  {
    icon: CircuitBoard,
    title: "Technology products",
    text: "Hardware and IT product availability shaped around business demand, reseller needs, and vendor confidence.",
  },
  {
    icon: Network,
    title: "Vendor alignment",
    text: "Supplier and channel relationships are managed with clarity, consistency, and long-term market value in mind.",
  },
  {
    icon: ShieldCheck,
    title: "Dependable sourcing",
    text: "Founder-led experience keeps the focus on reliable products, clean coordination, and practical fulfillment.",
  },
];

const DELIVERY_STEPS: Step[] = [
  {
    label: "01",
    title: "Understand demand",
    text: "We look at product category, volume expectations, customer channel, timing, and availability requirements.",
  },
  {
    label: "02",
    title: "Coordinate supply",
    text: "Products are matched through vendor relationships, channel awareness, logistics needs, and market fit.",
  },
  {
    label: "03",
    title: "Support fulfillment",
    text: "The work continues through clear communication, product guidance, delivery coordination, and follow-through.",
  },
];

const FOCUS_AREAS = [
  "Computer hardware",
  "Consumer goods",
  "Vendor coordination",
  "Regional channels",
  "Product sourcing",
  "Fulfillment support",
];

const GROUP_LINKS: Feature[] = [
  {
    icon: Truck,
    title: "Logistics alignment",
    text: "Distribution requirements can be supported by shipment, export, and customs coordination across the group.",
  },
  {
    icon: Handshake,
    title: "Vendor relationships",
    text: "The wider group brings supplier conversations and relationship discipline into distribution work.",
  },
  {
    icon: Network,
    title: "Connected expertise",
    text: "Nutech Distribution carries its own channel focus while staying connected to the wider group.",
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

export default function NutechDistribution() {
  return (
    <div className={styles.mainDistribution}>
      <section className={styles.heroSection} aria-labelledby="distribution-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Nutech Distribution</p>
          <h1 id="distribution-title" className={styles.title}>
            Distribution strength for hardware, consumer goods, and regional product channels.
          </h1>
          <p className={styles.lead}>
            Nutech Distribution serves resellers, retail networks, project
            teams, and businesses that need dependable product sourcing,
            channel coordination, and fulfillment backed by founder-led
            industry experience.
          </p>

          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryLink}>
              Discuss a supply requirement
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
            <Link href="/companies" className={styles.secondaryLink}>
              View group companies
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>

        <aside className={styles.identityCard} aria-label="Nutech Distribution identity">
          <div className={styles.identityTop}>
            <span className={styles.logoWrap}>
              <Image src="/icon.png" alt="Nutech Group icon" width={62} height={62} priority />
              <span className={styles.logoBadge} aria-hidden="true">
                {distributionCompany.icon}
              </span>
            </span>
            <span className={styles.companyChip}>Distribution</span>
          </div>

          <h2>A focused distribution company within the Nutech Group ecosystem.</h2>
          <p>
            Distinct channel presence, group-backed execution, and a sourcing
            mindset shaped by decades of founder experience.
          </p>

          <dl className={styles.heroStats}>
            <div>
              <dt>IT</dt>
              <dd>Hardware channels</dd>
            </div>
            <div>
              <dt>Goods</dt>
              <dd>Consumer products</dd>
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
          <h2 id="capabilities-title">Built for channels that need reliable product movement.</h2>
          <p>
            From hardware availability to consumer-goods movement, Nutech
            Distribution keeps the focus on practical sourcing, clear vendor
            coordination, and dependable regional supply.
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
            Distribution decisions need market awareness and experienced relationships.
          </h2>
          <p>
            The company benefits from founders who understand supplier
            relationships, customer expectations, and the pace of product-led
            markets. That experience informs how we source, coordinate, support,
            and move products through regional channels.
          </p>
        </div>

        <div className={styles.proofStack}>
          <article>
            <Handshake aria-hidden="true" size={24} strokeWidth={1.8} />
            <h3>Relationship-led channels</h3>
            <p>Vendor and customer conversations are handled with trust, continuity, and market fit in mind.</p>
          </article>
          <article>
            <ClipboardCheck aria-hidden="true" size={24} strokeWidth={1.8} />
            <h3>Product-fit clarity</h3>
            <p>Supply decisions are guided by product category, channel needs, timing, and customer expectations.</p>
          </article>
          <article>
            <LifeBuoy aria-hidden="true" size={24} strokeWidth={1.8} />
            <h3>Fulfillment mindset</h3>
            <p>Coordination continues beyond sourcing so customers and partners stay aligned.</p>
          </article>
        </div>
      </section>

      <section className={styles.deliverySection} aria-labelledby="delivery-title">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>How We Work</p>
          <h2 id="delivery-title">A practical path from product requirement to channel readiness.</h2>
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
          <h2 id="focus-title">Distribution capability with a clear channel lane.</h2>
        </div>
        <ul aria-label="Nutech Distribution focus areas">
          {FOCUS_AREAS.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </section>

      <section className={styles.groupSection} aria-labelledby="group-title">
        <div className={styles.groupHeader}>
          <p className={styles.eyebrow}>Part Of Nutech Group</p>
          <h2 id="group-title">
            A child company with its own distribution focus and group-level support.
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
