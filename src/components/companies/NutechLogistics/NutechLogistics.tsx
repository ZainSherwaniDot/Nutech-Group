import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Boxes,
  ClipboardCheck,
  FileCheck2,
  Handshake,
  LifeBuoy,
  Network,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { subCompanies } from "@/data/companies";
import styles from "./NutechLogistics.module.css";

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

const logisticsCompany = subCompanies.find(({ id }) => id === "logi") ?? subCompanies[3];

const CAPABILITIES: Feature[] = [
  {
    icon: Truck,
    title: "Shipment coordination",
    text: "Practical movement support for businesses that need goods shipped with clearer timing, routing, and communication.",
  },
  {
    icon: FileCheck2,
    title: "Export handling",
    text: "Export-focused coordination shaped around documentation, supplier alignment, and destination requirements.",
  },
  {
    icon: ClipboardCheck,
    title: "Customs support",
    text: "Customs-aware follow-through that helps reduce confusion, delays, and avoidable friction in product movement.",
  },
  {
    icon: ShieldCheck,
    title: "Controlled delivery",
    text: "Founder-led operating discipline keeps logistics work focused on dependable coordination and practical visibility.",
  },
];

const DELIVERY_STEPS: Step[] = [
  {
    label: "01",
    title: "Map the movement",
    text: "We look at the shipment type, origin, destination, documents, timing, and handling requirements.",
  },
  {
    label: "02",
    title: "Coordinate the route",
    text: "Movement is shaped around supplier readiness, carrier coordination, export needs, and customs expectations.",
  },
  {
    label: "03",
    title: "Keep teams aligned",
    text: "The work continues through updates, follow-through, and clear coordination until goods reach the next milestone.",
  },
];

const FOCUS_AREAS = [
  "Shipping",
  "Export coordination",
  "Customs support",
  "Supplier alignment",
  "Regional movement",
  "Delivery control",
];

const GROUP_LINKS: Feature[] = [
  {
    icon: Boxes,
    title: "Distribution alignment",
    text: "Logistics work can connect with product sourcing, channel supply, and distribution requirements across the group.",
  },
  {
    icon: Handshake,
    title: "Vendor coordination",
    text: "The wider group brings supplier relationships and communication discipline into movement planning.",
  },
  {
    icon: Network,
    title: "Connected expertise",
    text: "Nutech Logistics carries its own movement focus while staying connected to the wider group.",
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

export default function NutechLogistics() {
  return (
    <div className={styles.mainLogistics}>
      <section className={styles.heroSection} aria-labelledby="logistics-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Nutech Logistics</p>
          <h1 id="logistics-title" className={styles.title}>
            Shipping, export, and customs coordination built for clearer product movement.
          </h1>
          <p className={styles.lead}>
            Nutech Logistics serves importers, exporters, suppliers, and
            shipment-driven businesses that need practical coordination,
            movement control, and follow-through backed by founder-led industry
            experience.
          </p>

          <div className={styles.heroActions}>
            <Link href="#final-cta-section" className={styles.primaryLink}>
              Discuss a requirement
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
            <Link href="/companies" className={styles.secondaryLink}>
              View all companies
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>

        <aside className={styles.identityCard} aria-label="Nutech Logistics identity">
          <div className={styles.identityTop}>
            <span className={styles.logoWrap}>
              <Image src="/icon.png" alt="Nutech Group icon" width={62} height={62} priority />
              <span className={styles.logoBadge} aria-hidden="true">
                <Image src={logisticsCompany.icon} alt="" width={256} height={256} priority />
              </span>
            </span>
            <span className={styles.companyChip}>Logistics</span>
          </div>

          <h2>A focused logistics company within the Nutech Group ecosystem.</h2>
          <p>
            Distinct movement capability, group-backed execution, and a
            coordination mindset shaped by decades of founder experience.
          </p>

          <dl className={styles.heroStats}>
            <div>
              <dt>Ship</dt>
              <dd>Movement support</dd>
            </div>
            <div>
              <dt>Export</dt>
              <dd>Document control</dd>
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
          <h2 id="capabilities-title">Built for businesses that need goods to move with fewer blind spots.</h2>
          <p>
            From shipment coordination to export and customs support, Nutech
            Logistics keeps the focus on practical movement, clearer control,
            and dependable communication between the teams involved.
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
            Logistics decisions need calm coordination and experienced judgment.
          </h2>
          <p>
            The company benefits from founders who understand supplier
            relationships, customer expectations, and the pressure of
            time-sensitive movement. That experience informs how we coordinate,
            communicate, support, and keep shipments moving with clearer control.
          </p>
        </div>

        <div className={styles.proofStack}>
          <article>
            <Handshake aria-hidden="true" size={24} strokeWidth={1.8} />
            <h3>Relationship-led coordination</h3>
            <p>Supplier, carrier, and customer conversations are handled with trust and practical follow-through.</p>
          </article>
          <article>
            <ClipboardCheck aria-hidden="true" size={24} strokeWidth={1.8} />
            <h3>Document clarity</h3>
            <p>Movement decisions are guided by shipment details, export requirements, and customs expectations.</p>
          </article>
          <article>
            <LifeBuoy aria-hidden="true" size={24} strokeWidth={1.8} />
            <h3>Control mindset</h3>
            <p>Coordination continues beyond dispatch so teams stay informed as shipments progress.</p>
          </article>
        </div>
      </section>

      <section className={styles.deliverySection} aria-labelledby="delivery-title">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>How We Work</p>
          <h2 id="delivery-title">A practical path from shipment requirement to movement control.</h2>
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
          <h2 id="focus-title">Logistics capability with a clear movement lane.</h2>
        </div>
        <ul aria-label="Nutech Logistics focus areas">
          {FOCUS_AREAS.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </section>

      <section className={styles.groupSection} aria-labelledby="group-title">
        <div className={styles.groupHeader}>
          <p className={styles.eyebrow}>Part Of Nutech Group</p>
          <h2 id="group-title">
            A child company with its own logistics focus and group-level support.
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
