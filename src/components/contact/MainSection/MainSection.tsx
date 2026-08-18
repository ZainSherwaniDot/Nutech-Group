import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  Clock,
  Handshake,
  Mail,
  MapPin,
  Network,
  Phone,
} from "lucide-react";
import { subCompanies } from "@/data/companies";
import styles from "./MainSection.module.css";

const CONTACT_EMAIL = "info@nutech-group.com";
const CONTACT_PHONE = "+971555183349";

type ContactCard = {
  icon: LucideIcon;
  title: string;
  value: string;
  text: string;
  href?: string;
  action?: string;
};

const CONTACT_CARDS: ContactCard[] = [
  {
    icon: Mail,
    title: "Email",
    value: CONTACT_EMAIL,
    text: "For partnerships, project inquiries, supplier conversations, and general group questions.",
    href: `mailto:${CONTACT_EMAIL}`,
    action: "Send email",
  },
  {
    icon: Phone,
    title: "Phone",
    value: CONTACT_PHONE,
    text: "For direct coordination when you already know what you need or who you need to reach.",
    href: `tel:${CONTACT_PHONE}`,
    action: "Call now",
  },
  {
    icon: MapPin,
    title: "Region",
    value: "MEA markets",
    text: "Nutech Group is focused on business opportunities across the Middle East and Africa region.",
  },
];

const ROUTING_STEPS = [
  {
    icon: Handshake,
    title: "Share the opportunity",
    text: "Tell us whether you are looking for a product, service, partnership, or group-level conversation.",
  },
  {
    icon: Network,
    title: "Get a clear route",
    text: "Get aligned with the appropriate company and an adequate team for your specific needs.",
  },
  {
    icon: Clock,
    title: "Expect regular updates",
    text: "The goal is practical next steps, clear communication, and timely deliveries.",
  },
];

export default function MainSection() {
  return (
    <section className={styles.mainContact} aria-labelledby="contact-title">
      <div className={styles.heroGrid}>
        <div className={styles.copyColumn}>
          <p className={styles.eyebrow}>Contact Nutech Group</p>
          <h1 id="contact-title" className={styles.title}>
            Reach the right team without the runaround.
          </h1>
          <p className={styles.lead}>
            Whether your inquiry belongs with Automotive, Solar & Power,
            Distribution, Logistics, Telecom, Technologies, or the group office,
            we will help route it to the right place.
          </p>

          <div className={styles.primaryActions}>
            <a href={`mailto:${CONTACT_EMAIL}`} className={styles.primaryLink}>
              Email us
              <ArrowRight aria-hidden="true" size={16} />
            </a>
            <a href={`tel:${CONTACT_PHONE}`} className={styles.secondaryLink}>
              Call Nutech Group
              <Phone aria-hidden="true" size={16} />
            </a>
          </div>
        </div>

        <aside className={styles.routePanel} aria-label="Contact routing summary">
          <span className={styles.panelIcon}>
            <Building2 aria-hidden="true" size={24} strokeWidth={1.7} />
          </span>
          <p className={styles.panelKicker}>Group routing</p>
          <h2>One inquiry can reach all six companies.</h2>
          <p>
            Send the context once and we will connect it to the relevant
            company, market, or partnership conversation.
          </p>
        </aside>
      </div>

      <div className={styles.contactGrid} aria-label="Contact methods">
        {CONTACT_CARDS.map(({ icon: Icon, title, value, text, href, action }) =>
          href ? (
            <a key={title} href={href} className={styles.contactCard}>
              <span className={styles.cardIcon}>
                <Icon aria-hidden="true" size={22} strokeWidth={1.7} />
              </span>
              <span className={styles.cardLabel}>{title}</span>
              <strong>{value}</strong>
              <span className={styles.cardText}>{text}</span>
              <span className={styles.cardAction}>
                {action}
                <ArrowRight aria-hidden="true" size={14} />
              </span>
            </a>
          ) : (
            <article key={title} className={styles.contactCard}>
              <span className={styles.cardIcon}>
                <Icon aria-hidden="true" size={22} strokeWidth={1.7} />
              </span>
              <span className={styles.cardLabel}>{title}</span>
              <strong>{value}</strong>
              <span className={styles.cardText}>{text}</span>
            </article>
          )
        )}
      </div>

      <div className={styles.bottomGrid}>
        <div className={styles.processBlock}>
          <p className={styles.blockKicker}>Next steps</p>
          <div className={styles.stepList}>
            {ROUTING_STEPS.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className={styles.stepItem}>
                <span className={styles.stepNumber}>0{index + 1}</span>
                <span className={styles.stepIcon}>
                  <Icon aria-hidden="true" size={19} strokeWidth={1.7} />
                </span>
                <div>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className={styles.companyBlock} aria-labelledby="company-contact-title">
          <p className={styles.blockKicker}>Company-specific inquiry</p>
          <h2 id="company-contact-title">Looking for a specific Nutech company?</h2>
          <p>
            Choose the relevant company if your requirement is already tied to
            one business area.
          </p>
          <div className={styles.companyLinks}>
            {subCompanies.map(({ id, name, hrefLink }) => (
              <Link key={id} href={hrefLink}>
                Nutech {name}
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
