import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Boxes,
  ClipboardCheck,
  Cloud,
  Handshake,
  LifeBuoy,
  Network,
  ServerCog,
  ShieldCheck,
} from "lucide-react";
import { subCompanies } from "@/data/companies";
import { vendorCategories, vendorCategoryList, vendors, type VendorCategoryId } from "@/data/vendors";
import Vendors from "@/components/home/Vendors/Vendors";
import styles from "./MainSection.module.css";

type ProcessStep = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const CATEGORY_ICONS: Record<VendorCategoryId, LucideIcon> = {
  devices: Boxes,
  networking: Network,
  platforms: ServerCog,
  data: Cloud,
  security: ShieldCheck,
};

const PROCESS_STEPS: ProcessStep[] = [
  {
    icon: ClipboardCheck,
    title: "Map the requirement",
    text: "We clarify the business need, technical context, quantities, timeline, and the environment the solution has to support.",
  },
  {
    icon: Handshake,
    title: "Match the vendor lane",
    text: "The request is aligned with the right product category, brand ecosystem, and group company that can support the work.",
  },
  {
    icon: LifeBuoy,
    title: "Coordinate the outcome",
    text: "From sourcing conversations to delivery support, the focus stays on practical fit, communication, and follow-through.",
  },
];

const GROUP_LANES = [
  {
    companyId: "dist",
    title: "Distribution",
    text: "Hardware, endpoint, platform, and product supply requirements.",
  },
  {
    companyId: "tele",
    title: "Telecom",
    text: "Connectivity, network infrastructure, wireless, and uptime-led needs.",
  },
  {
    companyId: "tech",
    title: "Technologies",
    text: "Software, cloud, AI, data, and platform modernization needs.",
  },
  {
    companyId: "logi",
    title: "Logistics",
    text: "Shipment, export, customs, and movement coordination around vendor supply.",
  },
];

const heroLogos = vendors.slice(0, 10);

export default function MainSection() {
  return (
    <div className={styles.mainVendors}>
      <section className={styles.heroSection} aria-labelledby="vendors-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Vendor Ecosystem</p>
          <h1 id="vendors-title" className={styles.title}>
            Technology brands connected to real business requirements.
          </h1>
          <p className={styles.lead}>
            Nutech Group works across hardware, platforms, cybersecurity,
            networking, cloud, and data protection so customers can move from a
            requirement to a practical vendor-backed solution with less
            guesswork.
          </p>

          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.primaryLink}>
              Discuss a vendor requirement
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
            <Link href="/companies/nutech-distribution" className={styles.secondaryLink}>
              Explore distribution
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>

          <dl className={styles.heroStats} aria-label="Vendor network highlights">
            <div>
              <dt>{vendors.length}+</dt>
              <dd>Vendor brands</dd>
            </div>
            <div>
              <dt>{vendorCategoryList.length}</dt>
              <dd>Solution lanes</dd>
            </div>
            <div>
              <dt>MEA</dt>
              <dd>Regional focus</dd>
            </div>
          </dl>
        </div>

        <aside className={styles.networkVisual} aria-label="Featured vendor logos">
          <div className={styles.visualHeader}>
            <span>
              <Network aria-hidden="true" size={24} strokeWidth={1.8} />
            </span>
            <div>
              <p>Curated access</p>
              <h2>One network, many solution paths.</h2>
            </div>
          </div>

          <div className={styles.logoMosaic}>
            {heroLogos.map((vendor) => (
              <span key={vendor.name} className={styles.logoTile}>
                <Image src={vendor.logo} alt={vendor.name} width={150} height={80} />
              </span>
            ))}
          </div>

          <p className={styles.visualNote}>
            The goal is not to throw a catalog at the customer. It is to
            understand the requirement, choose the right lane, and coordinate
            the next step with clarity.
          </p>
        </aside>
      </section>

      <section className={styles.categorySection} aria-labelledby="category-title">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Solution Lanes</p>
          <h2 id="category-title">Vendor coverage organized around how customers actually buy.</h2>
          <p>
            The same brand can matter differently depending on the project. We
            group the ecosystem by use case so customers can quickly understand
            where each vendor relationship fits.
          </p>
        </div>

        <div className={styles.categoryGrid}>
          {vendorCategoryList.map((category) => {
            const Icon = CATEGORY_ICONS[category.id];
            const count = vendors.filter((vendor) => vendor.category === category.id).length;

            return (
              <article key={category.id} className={styles.categoryCard} data-category={category.id}>
                <span className={styles.categoryIcon}>
                  <Icon aria-hidden="true" size={23} strokeWidth={1.8} />
                </span>
                <span className={styles.categoryCount}>{count} brands</span>
                <h3>{category.label}</h3>
                <p>{category.summary}</p>
                <small>{category.useCase}</small>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.marqueeSection} aria-labelledby="ticker-title">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>At A Glance</p>
          <h2 id="ticker-title">A moving view of the vendor ecosystem.</h2>
          <p>
            The homepage ticker becomes more useful here as a quick scan before
            the full directory below.
          </p>
        </div>

        <Vendors />
      </section>

      <section className={styles.directorySection} aria-labelledby="directory-title">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Vendor Directory</p>
          <h2 id="directory-title">Brands connected to Nutech Group solution lanes.</h2>
          <p>
            Each card shows the practical fit of the brand inside the wider
            Nutech ecosystem, from product supply to security, cloud, data, and
            connectivity projects.
          </p>
        </div>

        <div className={styles.vendorGrid}>
          {vendors.map((vendor) => {
            const category = vendorCategories[vendor.category];

            return (
              <article key={vendor.name} className={styles.vendorCard} data-category={vendor.category}>
                <div className={styles.vendorLogo}>
                  <Image src={vendor.logo} alt={vendor.name} width={180} height={92} />
                </div>
                <p>{category.label}</p>
                <h3>{vendor.name}</h3>
                <span>{vendor.fit}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.processSection} aria-labelledby="process-title">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>How We Coordinate</p>
          <h2 id="process-title">A vendor page should help customers know what happens next.</h2>
          <p>
            This page is not only a logo wall. It explains how a customer moves
            from a requirement to the right brand lane, group company, and
            coordination path.
          </p>
        </div>

        <div className={styles.processGrid}>
          {PROCESS_STEPS.map(({ icon: Icon, title, text }) => (
            <article key={title} className={styles.processCard}>
              <span>
                <Icon aria-hidden="true" size={24} strokeWidth={1.8} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.groupSection} aria-labelledby="group-title">
        <div>
          <p className={styles.eyebrow}>Where Vendors Connect</p>
          <h2 id="group-title">The vendor ecosystem plugs into multiple Nutech companies.</h2>
        </div>

        <div className={styles.groupLinks}>
          {GROUP_LANES.map((lane) => {
            const company = subCompanies.find(({ id }) => id === lane.companyId);

            if (!company) {
              return null;
            }

            return (
              <Link key={lane.companyId} href={company.hrefLink} className={styles.groupLink}>
                <span aria-hidden="true">{company.icon}</span>
                <div>
                  <h3>{lane.title}</h3>
                  <p>{lane.text}</p>
                </div>
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
