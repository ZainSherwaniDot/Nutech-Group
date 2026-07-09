import Image from "next/image";
import Link from "next/link";
import {
  // ArrowUpRight,
  ArrowRight,
  Building2,
  Handshake,
  Network,
  ShieldCheck,
} from "lucide-react";
import styles from "./AboutNutechGroup.module.css";

const PROOF_POINTS = [
  {
    icon: Handshake,
    title: "Founder-led relationships",
    text: "Decades of supplier, customer, and regional operating experience shape the group from day one.",
  },
  {
    icon: Network,
    title: "Connected companies",
    text: "Each business is focused, but the group structure lets teams share knowledge, partners, and execution strength.",
  },
  {
    icon: ShieldCheck,
    title: "Practical delivery",
    text: "Nutech Group is built around dependable sourcing, technical clarity, and long-term service.",
  },
];

const SECTORS = [
  "Automotive",
  "Solar & Power",
  "Distribution",
  "Logistics",
  "Telecom",
  "Technologies",
];

export default function AboutNutechGroup() {
  return (
    <section className={styles.mainANG} aria-labelledby="about-nutech-title">
      <div className={styles.introGrid}>
        <div className={styles.copyColumn}>
          <p className={styles.eyebrow}>About Nutech Group</p>

          <h2 id="about-nutech-title" className={styles.title}>
            A conglomerate built on decades of founder experience.
          </h2>

          <p className={styles.lead}>
            Combining experience, innovation, and ambition across diverse industries.
          </p>

          <p className={styles.bodyCopy}>
            Nutech Group brings specialized companies under one umbrella to serve
            high-growth sectors across the MEA region. Its founders
            bring years of hands-on experience in procurement, distribution,
            technology, logistics, energy, and infrastructure, giving every
            company a clear operating standard from the start.
          </p>

          <div className={styles.actions}>
            <Link href="/about" className={styles.primaryLink}>
              About us
              <ArrowRight aria-hidden="true" size={16} />
            </Link>

            <Link href="/companies" className={styles.secondaryLink}>
              Explore companies
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>

        <aside className={styles.snapshot} aria-label="Nutech Group snapshot">
          <div className={styles.snapshotHeader}>
            <span className={styles.logoMark}>
              <Image
                src="/icon.png"
                alt="Nutech Group icon"
                width={60}
                height={60}
              />
            </span>

            <div>
              <span className={styles.snapshotKicker}>Group focus</span>
              <h3 className={styles.snapshotTitle}>
                Cross-sector execution with founder oversight.
              </h3>
            </div>
          </div>

          <p className={styles.snapshotText}>
            From sourcing and deployment to after-sales support, Nutech Group is
            organized to move ideas into reliable, operating businesses.
          </p>

          <dl className={styles.metrics}>
            <div>
              <dt>6</dt>
              <dd>Focused companies</dd>
            </div>
            <div>
              <dt>MEA</dt>
              <dd>Regional ambition</dd>
            </div>
            <div>
              <dt>360</dt>
              <dd>Delivery mindset</dd>
            </div>
          </dl>
        </aside>
      </div>

      <div className={styles.proofGrid}>
        {PROOF_POINTS.map(({ icon: Icon, title, text }) => (
          <article key={title} className={styles.proofCard}>
            <span className={styles.proofIcon}>
              <Icon aria-hidden="true" size={22} strokeWidth={1.8} />
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>

      <div className={styles.sectorBand}>
        <div className={styles.sectorIntro}>
          <Building2 aria-hidden="true" size={18} />
          <span>Operating across</span>
        </div>

        <ul className={styles.sectorList} aria-label="Nutech Group sectors">
          {SECTORS.map((sector) => (
            <li key={sector}>{sector}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
