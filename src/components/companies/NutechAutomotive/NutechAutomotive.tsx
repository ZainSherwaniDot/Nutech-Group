import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Boxes,
  CarFront,
  ClipboardCheck,
  Gauge,
  Handshake,
  LifeBuoy,
  Network,
  Settings2,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import styles from "./NutechAutomotive.module.css";

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

const CAPABILITIES: Feature[] = [
  {
    icon: Wrench,
    title: "Professional tools",
    text: "Workshop-grade hand tools, service tools, and specialty equipment selected for daily automotive work.",
  },
  {
    icon: Settings2,
    title: "Service equipment",
    text: "Practical garage and service-bay equipment for teams that need reliability, fit, and clear support.",
  },
  {
    icon: Gauge,
    title: "Diagnostic readiness",
    text: "Equipment and support that help technicians work with more confidence across modern vehicle service needs.",
  },
  {
    icon: ShieldCheck,
    title: "Quality assurance",
    text: "Founder-led sourcing discipline keeps the focus on dependable products, useful specifications, and long-term value.",
  },
];

const DELIVERY_STEPS: Step[] = [
  {
    label: "01",
    title: "Understand the workshop",
    text: "We start with the vehicle mix, technician workflow, service volume, and the tools already in use.",
  },
  {
    label: "02",
    title: "Match the right equipment",
    text: "Recommendations are shaped around practical fit, availability, training needs, and after-sales support.",
  },
  {
    label: "03",
    title: "Support the operation",
    text: "The relationship continues through coordination, product guidance, and dependable follow-through.",
  },
];

const FOCUS_AREAS = [
  "Workshop tools",
  "Garage equipment",
  "Service-bay setup",
  "Fleet support",
  "Technical sourcing",
  "After-sales coordination",
];

const GROUP_LINKS: Feature[] = [
  {
    icon: Boxes,
    title: "Distribution strength",
    text: "Group-wide channel awareness supports product availability and regional supply coordination.",
  },
  {
    icon: Truck,
    title: "Logistics alignment",
    text: "Automotive requirements can be coordinated with shipment, export, and customs understanding.",
  },
  {
    icon: Network,
    title: "Connected expertise",
    text: "Nutech Automotive operates with its own focus while staying connected to the wider group.",
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

export default function NutechAutomotive() {
  return (
    <div className={styles.mainAutomotive}>
      <section className={styles.heroSection} aria-labelledby="automotive-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Nutech Automotive</p>
          <h1 id="automotive-title" className={styles.title}>
            Automotive tools, equipment, and service support built around real workshop needs.
          </h1>
          <p className={styles.lead}>
            Nutech Automotive serves workshops, fleets, service centers, and
            technical teams with practical automotive solutions backed by
            founder-led industry experience.
          </p>

          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryLink}>
              Discuss a requirement
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
            <Link href="/companies" className={styles.secondaryLink}>
              View group companies
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>

        <aside className={styles.identityCard} aria-label="Nutech Automotive identity">
          <div className={styles.identityTop}>
            <span className={styles.logoWrap}>
              <Image src="/icon.png" alt="Nutech Group icon" width={62} height={62} priority />
              <span className={styles.logoBadge} aria-hidden="true">
                <CarFront size={18} strokeWidth={2} />
              </span>
            </span>
            <span className={styles.companyChip}>Automotive</span>
          </div>

          <h2>
            A focused company within the Nutech Group ecosystem.
          </h2>
          <p>
            Distinct automotive presence, group-backed execution, and a service
            mindset shaped by decades of founder experience.
          </p>

          <dl className={styles.heroStats}>
            <div>
              <dt>Tools</dt>
              <dd>Workshop ready</dd>
            </div>
            <div>
              <dt>Fleet</dt>
              <dd>Operational support</dd>
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
          <h2 id="capabilities-title">Built for service teams that need dependable equipment.</h2>
          <p>
            From daily-use tools to workshop setup decisions, Nutech Automotive
            keeps the focus on practical performance, clear specifications, and
            products that make sense for the job.
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
            Automotive decisions are better when they are grounded in experience.
          </h2>
          <p>
            The company benefits from founders who understand supplier
            relationships, customer expectations, and the operational pressure
            inside automotive service environments. That experience informs how
            we source, recommend, coordinate, and support every engagement.
          </p>
        </div>

        <div className={styles.proofStack}>
          <article>
            <Handshake aria-hidden="true" size={24} strokeWidth={1.8} />
            <h3>Relationship-led sourcing</h3>
            <p>Supplier and customer conversations are handled with long-term trust in mind.</p>
          </article>
          <article>
            <ClipboardCheck aria-hidden="true" size={24} strokeWidth={1.8} />
            <h3>Specification clarity</h3>
            <p>Equipment choices are guided by fit, use case, and practical service requirements.</p>
          </article>
          <article>
            <LifeBuoy aria-hidden="true" size={24} strokeWidth={1.8} />
            <h3>After-sales mindset</h3>
            <p>Support continues beyond selection so teams can keep work moving.</p>
          </article>
        </div>
      </section>

      <section className={styles.deliverySection} aria-labelledby="delivery-title">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>How We Work</p>
          <h2 id="delivery-title">A practical path from requirement to workshop readiness.</h2>
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
          <h2 id="focus-title">Automotive capability with a clear service lane.</h2>
        </div>
        <ul aria-label="Nutech Automotive focus areas">
          {FOCUS_AREAS.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </section>

      <section className={styles.groupSection} aria-labelledby="group-title">
        <div className={styles.groupHeader}>
          <p className={styles.eyebrow}>Part Of Nutech Group</p>
          <h2 id="group-title">
            A child company with its own automotive focus and group-level support.
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
