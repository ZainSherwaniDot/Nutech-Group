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
  RadioTower,
  ShieldCheck,
} from "lucide-react";
import { subCompanies } from "@/data/companies";
import styles from "./NutechTelecom.module.css";

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

const telecomCompany = subCompanies.find(({ id }) => id === "tele") ?? subCompanies[4];

const CAPABILITIES: Feature[] = [
  {
    icon: RadioTower,
    title: "Telecom infrastructure",
    text: "Infrastructure support for connectivity projects that need coverage, stability, and practical deployment thinking.",
  },
  {
    icon: Network,
    title: "Connectivity planning",
    text: "Clear coordination around network needs, site context, equipment fit, and long-term operating expectations.",
  },
  {
    icon: Gauge,
    title: "Uptime focus",
    text: "Solutions shaped around reliability, performance, and the operational importance of always-on connectivity.",
  },
  {
    icon: ShieldCheck,
    title: "Dependable execution",
    text: "Founder-led operating discipline keeps telecom work focused on practical specifications and support.",
  },
];

const DELIVERY_STEPS: Step[] = [
  {
    label: "01",
    title: "Understand the network",
    text: "We look at coverage needs, uptime expectations, user demand, site conditions, and deployment constraints.",
  },
  {
    label: "02",
    title: "Shape the infrastructure",
    text: "The solution is coordinated around equipment fit, partner readiness, site requirements, and performance goals.",
  },
  {
    label: "03",
    title: "Support continuity",
    text: "Communication and follow-through continue so connectivity projects stay aligned beyond the first installation step.",
  },
];

const FOCUS_AREAS = [
  "Telecom infrastructure",
  "Connectivity projects",
  "Network coverage",
  "Uptime support",
  "Site coordination",
  "Regional scale",
];

const GROUP_LINKS: Feature[] = [
  {
    icon: Boxes,
    title: "Distribution alignment",
    text: "Telecom infrastructure can connect with hardware movement, channel supply, and regional availability planning.",
  },
  {
    icon: Network,
    title: "Technology alignment",
    text: "The wider group brings digital and technical understanding into connectivity-led requirements.",
  },
  {
    icon: Handshake,
    title: "Vendor coordination",
    text: "Supplier relationships and communication discipline help keep telecom projects practical and accountable.",
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

export default function NutechTelecom() {
  return (
    <div className={styles.mainTelecom}>
      <section className={styles.heroSection} aria-labelledby="telecom-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Nutech Telecom</p>
          <h1 id="telecom-title" className={styles.title}>
            Telecom infrastructure and connectivity support built for networks that need scale.
          </h1>
          <p className={styles.lead}>
            Nutech Telecom serves operators, enterprises, project teams, and
            connectivity-led organizations that need practical telecom
            infrastructure, network coordination, and dependable support backed
            by founder-led industry experience.
          </p>

          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryLink}>
              Discuss a telecom project
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
            <Link href="/companies" className={styles.secondaryLink}>
              View group companies
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>

        <aside className={styles.identityCard} aria-label="Nutech Telecom identity">
          <div className={styles.identityTop}>
            <span className={styles.logoWrap}>
              <Image src="/icon.png" alt="Nutech Group icon" width={62} height={62} priority />
              <span className={styles.logoBadge} aria-hidden="true">
                {telecomCompany.icon}
              </span>
            </span>
            <span className={styles.companyChip}>Telecom</span>
          </div>

          <h2>A focused telecom company within the Nutech Group ecosystem.</h2>
          <p>
            Distinct connectivity capability, group-backed coordination, and a
            network mindset shaped by decades of founder experience.
          </p>

          <dl className={styles.heroStats}>
            <div>
              <dt>Uptime</dt>
              <dd>Network focus</dd>
            </div>
            <div>
              <dt>Reach</dt>
              <dd>Coverage mindset</dd>
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
          <h2 id="capabilities-title">Built for organizations that rely on stable connectivity.</h2>
          <p>
            From network infrastructure to connectivity planning, Nutech
            Telecom keeps the focus on practical deployment, clearer
            coordination, and reliable support for communication-led operations.
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
            Connectivity decisions need technical clarity and experienced judgment.
          </h2>
          <p>
            The company benefits from founders who understand supplier
            relationships, customer expectations, and the operational pressure
            behind network uptime. That experience informs how we coordinate
            equipment choices, support conversations, site requirements, and
            continuity planning.
          </p>
        </div>

        <div className={styles.proofStack}>
          <article>
            <Handshake aria-hidden="true" size={24} strokeWidth={1.8} />
            <h3>Relationship-led coordination</h3>
            <p>Supplier, project, and customer conversations are handled with trust and practical follow-through.</p>
          </article>
          <article>
            <ClipboardCheck aria-hidden="true" size={24} strokeWidth={1.8} />
            <h3>Specification clarity</h3>
            <p>Connectivity work is guided by site details, performance needs, equipment fit, and operating goals.</p>
          </article>
          <article>
            <LifeBuoy aria-hidden="true" size={24} strokeWidth={1.8} />
            <h3>Continuity mindset</h3>
            <p>Support continues beyond setup so teams can keep telecom work aligned with changing network needs.</p>
          </article>
        </div>
      </section>

      <section className={styles.deliverySection} aria-labelledby="delivery-title">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>How We Work</p>
          <h2 id="delivery-title">A practical path from connectivity need to network-ready support.</h2>
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
          <h2 id="focus-title">Telecom capability with a clear connectivity lane.</h2>
        </div>
        <ul aria-label="Nutech Telecom focus areas">
          {FOCUS_AREAS.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </section>

      <section className={styles.groupSection} aria-labelledby="group-title">
        <div className={styles.groupHeader}>
          <p className={styles.eyebrow}>Part Of Nutech Group</p>
          <h2 id="group-title">
            A child company with its own telecom focus and group-level support.
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
