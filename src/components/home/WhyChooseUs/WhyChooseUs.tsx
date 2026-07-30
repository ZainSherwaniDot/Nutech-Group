import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Handshake,
  Headphones,
  Network,
  ShieldCheck,
} from "lucide-react";
import { subCompanies } from "@/data/companies";
import styles from "./WhyChooseUs.module.css";

type Reason = {
  icon: LucideIcon;
  title: string;
  text: string;
  tone: string;
};

const REASONS: Reason[] = [
  {
    icon: Handshake,
    title: "Founder-led experience",
    text: "The direction of Nutech Group is shaped by founders with decades of industry relationships and operating judgment.",
    tone: "toneFounder",
  },
  {
    icon: Building2,
    title: "Six specialized companies",
    text: "Each business has a clear mandate across automotive, energy, distribution, logistics, telecom, and technology.",
    tone: "toneCompanies",
  },
  {
    icon: Network,
    title: "Connected capabilities",
    text: "The group structure lets focused teams share partners, knowledge, sourcing strength, and execution support.",
    tone: "toneNetwork",
  },
  {
    icon: BadgeCheck,
    title: "Vendor relationships",
    text: "Established supplier and channel relationships help the group source practical solutions with better confidence.",
    tone: "toneVendors",
  },
  {
    icon: ShieldCheck,
    title: "Quality-minded delivery",
    text: "From tools and power systems to software and telecom infrastructure, the priority is dependable fit-for-purpose delivery.",
    tone: "toneQuality",
  },
  {
    icon: Headphones,
    title: "Customer-first support",
    text: "The group is built around long-term service, clear communication, and support after the initial transaction.",
    tone: "toneSupport",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className={`${styles.mainWCU} overlaySection`}
      aria-labelledby="why-choose-us-title"
    >
      <div className={styles.headerGrid}>
        <div>
          <p className={styles.eyebrow}>Why Choose Us</p>
          <h2 id="why-choose-us-title" className={styles.title}>
            New energy,<br />seasoned execution.
          </h2>
        </div>

        <p className={styles.lead}>
          Nutech Group brings six focused companies under one operating vision,
          combining founder experience, partner relationships, and practical
          delivery across the markets its customers rely on.
        </p>
      </div>

      <div className={styles.contentGrid}>
        <aside className={styles.trustPanel} aria-label="Nutech Group credibility summary">
          <span className={styles.panelKicker}>Credibility snapshot</span>
          <h3>Built to earn trust from the first engagement.</h3>
          <p>
            Nutech Group is built on decades of versatile experience. Our strength
            comes from experienced leadership, specialized companies, and the
            discipline to keep execution practical.
          </p>

          <dl className={styles.trustStats}>
            <div>
              <dt>{subCompanies.length}</dt>
              <dd>Focused companies</dd>
            </div>
            <div>
              <dt>MEA</dt>
              <dd>Regional ambition</dd>
            </div>
            <div>
              <dt>1</dt>
              <dd>Unified vision</dd>
            </div>
          </dl>

          <div className={styles.companyRail} aria-label="Nutech Group companies">
            {subCompanies.map(({ id, name, hrefLink }) => (
              <Link key={id} href={hrefLink}>
                {name}
              </Link>
            ))}
          </div>

          <Link href="/contact" className={styles.panelLink}>
            Start a conversation
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </aside>

        <div className={styles.reasonGrid}>
          {REASONS.map(({ icon: Icon, title, text, tone }) => (
            <article key={title} className={`${styles.reasonCard} ${styles[tone]}`}>
              <span className={styles.reasonIcon}>
                <Icon aria-hidden="true" size={23} strokeWidth={1.8} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
