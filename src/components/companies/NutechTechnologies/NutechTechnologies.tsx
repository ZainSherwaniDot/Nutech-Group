import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Boxes,
  BrainCircuit,
  ClipboardCheck,
  Cloud,
  Handshake,
  LifeBuoy,
  Network,
  ServerCog,
  SquareCode,
  Workflow,
} from "lucide-react";
import { subCompanies } from "@/data/companies";
import styles from "./NutechTechnologies.module.css";

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

const technologiesCompany = subCompanies.find(({ id }) => id === "tech") ?? subCompanies[5];

const CAPABILITIES: Feature[] = [
  {
    icon: SquareCode,
    title: "Software development",
    text: "Custom digital products and business tools shaped around real workflows, usability, and long-term maintainability.",
  },
  {
    icon: Cloud,
    title: "Cloud solutions",
    text: "Cloud-ready systems that help organizations modernize operations, improve access, and support scalable delivery.",
  },
  {
    icon: BrainCircuit,
    title: "AI products",
    text: "Practical AI features and intelligent tools built around clear use cases, operational value, and responsible adoption.",
  },
  {
    icon: ServerCog,
    title: "Systems support",
    text: "Technical planning and support that keeps digital work grounded in performance, reliability, and business needs.",
  },
];

const DELIVERY_STEPS: Step[] = [
  {
    label: "01",
    title: "Decode the workflow",
    text: "We study the current process, users, data flow, pain points, integrations, and the outcome the system must support.",
  },
  {
    label: "02",
    title: "Design the system",
    text: "The product path is shaped around software architecture, cloud fit, AI opportunities, and usable delivery milestones.",
  },
  {
    label: "03",
    title: "Launch and improve",
    text: "Delivery continues through iteration, support, and refinement so the product can keep improving with the business.",
  },
];

const FOCUS_AREAS = [
  "Software development",
  "Cloud solutions",
  "AI products",
  "Automation",
  "Data systems",
  "Operational tools",
];

const GROUP_LINKS: Feature[] = [
  {
    icon: Boxes,
    title: "Distribution insight",
    text: "Group experience in hardware and channel supply helps digital planning stay practical around devices and deployment.",
  },
  {
    icon: Network,
    title: "Telecom alignment",
    text: "Connectivity understanding from the group helps cloud and platform work consider access, uptime, and network context.",
  },
  {
    icon: Handshake,
    title: "Industry coordination",
    text: "The wider group gives Nutech Technologies exposure to real operating needs across multiple markets.",
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

export default function NutechTechnologies() {
  return (
    <div className={styles.mainTechnologies}>
      <section className={styles.heroSection} aria-labelledby="technologies-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Nutech Technologies</p>
          <h1 id="technologies-title" className={styles.title}>
            Software, cloud, and AI solutions built for operations ready to move smarter.
          </h1>
          <p className={styles.lead}>
            Nutech Technologies serves organizations that need useful software,
            cloud-ready systems, and practical AI products backed by
            founder-led business experience and a clear understanding of how
            technology must work inside real operations.
          </p>

          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryLink}>
              Discuss a technology project
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
            <Link href="/companies" className={styles.secondaryLink}>
              View group companies
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>

        <aside className={styles.identityCard} aria-label="Nutech Technologies identity">
          <div className={styles.identityTop}>
            <span className={styles.logoWrap}>
              <Image src="/icon.png" alt="Nutech Group icon" width={62} height={62} priority />
              <span className={styles.logoBadge} aria-hidden="true">
                <Image src={technologiesCompany.icon} alt="" width={256} height={256} priority />
              </span>
            </span>
            <span className={styles.companyChip}>Technology</span>
          </div>

          <h2>A focused technology company within the Nutech Group ecosystem.</h2>
          <p>
            Distinct software capability, group-backed market understanding,
            and a product mindset shaped by decades of founder experience.
          </p>

          <dl className={styles.heroStats}>
            <div>
              <dt>Build</dt>
              <dd>Software focus</dd>
            </div>
            <div>
              <dt>Cloud</dt>
              <dd>Modern systems</dd>
            </div>
            <div>
              <dt>AI</dt>
              <dd>Practical products</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className={styles.capabilitySection} aria-labelledby="capabilities-title">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>What We Build</p>
          <h2 id="capabilities-title">Built for businesses that need technology to solve actual work.</h2>
          <p>
            From custom software and cloud systems to practical AI products,
            Nutech Technologies keeps the focus on usable delivery, clearer
            operations, and digital products that can grow with the business.
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
            Digital products need technical clarity and commercial judgment.
          </h2>
          <p>
            The company benefits from founders who understand customer
            expectations, vendor coordination, implementation pressure, and the
            cost of systems that do not fit the work. That experience informs
            how we define scope, choose technology, plan delivery, and keep the
            product tied to measurable value.
          </p>
        </div>

        <div className={styles.proofStack}>
          <article>
            <Workflow aria-hidden="true" size={24} strokeWidth={1.8} />
            <h3>Workflow-led thinking</h3>
            <p>Solutions begin with the process, users, and operational outcome instead of technology for its own sake.</p>
          </article>
          <article>
            <ClipboardCheck aria-hidden="true" size={24} strokeWidth={1.8} />
            <h3>Scope clarity</h3>
            <p>Product decisions are guided by requirements, priorities, integration needs, and realistic delivery paths.</p>
          </article>
          <article>
            <LifeBuoy aria-hidden="true" size={24} strokeWidth={1.8} />
            <h3>Support mindset</h3>
            <p>Technical work continues beyond launch through iteration, improvement, and practical product stewardship.</p>
          </article>
        </div>
      </section>

      <section className={styles.deliverySection} aria-labelledby="delivery-title">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>How We Work</p>
          <h2 id="delivery-title">A practical path from business need to digital product.</h2>
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
          <h2 id="focus-title">Technology capability with a clear product lane.</h2>
        </div>
        <ul aria-label="Nutech Technologies focus areas">
          {FOCUS_AREAS.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </section>

      <section className={styles.groupSection} aria-labelledby="group-title">
        <div className={styles.groupHeader}>
          <p className={styles.eyebrow}>Part Of Nutech Group</p>
          <h2 id="group-title">
            A child company with its own technology focus and group-level support.
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
