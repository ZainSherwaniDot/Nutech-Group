import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  Handshake,
  MapPinned,
  PackageCheck,
  Route,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { subCompanies } from "@/data/companies";
import styles from "./NutechLogistics.module.css";

type Feature = { icon: LucideIcon; title: string; text: string };
type Step = { label: string; title: string; text: string };

const logisticsCompany = subCompanies.find(({ id }) => id === "logi") ?? subCompanies[3];

const CAPABILITIES: Feature[] = [
  { icon: Route, title: "Freight coordination", text: "Planned movement across road, air, and sea routes with practical attention to timing, handovers, and communication." },
  { icon: FileCheck2, title: "Export documentation", text: "Clear document preparation and coordination to keep shipments aligned with destination and compliance requirements." },
  { icon: ShieldCheck, title: "Customs support", text: "Experienced guidance around customs processes, shipment details, and the information needed to reduce avoidable delays." },
  { icon: Globe2, title: "Regional reach", text: "A connected approach to moving products across the MEA region, supported by strong local and international relationships." },
];

const DELIVERY_STEPS: Step[] = [
  { label: "01", title: "Map the requirement", text: "We clarify the cargo, origin, destination, timing, documentation, and any handling considerations before movement begins." },
  { label: "02", title: "Plan the route", text: "Transport options, partners, customs needs, and handovers are coordinated around the right balance of control and efficiency." },
  { label: "03", title: "Move with visibility", text: "Communication continues through dispatch, transit, clearance, and delivery so stakeholders know what happens next." },
];

const FOCUS_AREAS = ["International shipping", "Export coordination", "Customs support", "Freight forwarding", "Regional delivery", "Cargo documentation"];

const GROUP_LINKS: Feature[] = [
  { icon: PackageCheck, title: "Distribution connection", text: "Logistics capability supports the movement of products sourced and supplied through Nutech Distribution." },
  { icon: Truck, title: "Operational coordination", text: "The group connects logistics planning with the practical needs of automotive, energy, technology, and consumer goods projects." },
  { icon: Handshake, title: "Experienced relationships", text: "Founder-led relationships help bring clarity to carriers, suppliers, customers, and regional partners." },
];

function FeatureCard({ icon: Icon, title, text }: Feature) {
  return <article className={styles.featureCard}><span className={styles.featureIcon}><Icon aria-hidden="true" size={23} strokeWidth={1.8} /></span><h3>{title}</h3><p>{text}</p></article>;
}

export default function NutechLogistics() {
  return <div className={styles.mainLogistics}>
    <section className={styles.heroSection} aria-labelledby="logistics-title">
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>Nutech Logistics</p>
        <h1 id="logistics-title" className={styles.title}>Moving products across borders with clarity, control, and dependable coordination.</h1>
        <p className={styles.lead}>Nutech Logistics supports businesses that need shipping, exporting, customs, and freight coordination handled with practical regional knowledge and founder-led industry experience.</p>
        <div className={styles.heroActions}><Link href="/contact" className={styles.primaryLink}>Discuss a logistics requirement <ArrowRight aria-hidden="true" size={16} /></Link><Link href="/companies" className={styles.secondaryLink}>View group companies <ArrowRight aria-hidden="true" size={16} /></Link></div>
      </div>
      <aside className={styles.identityCard} aria-label="Nutech Logistics identity">
        <div className={styles.identityTop}><span className={styles.logoWrap}><Image src="/icon.png" alt="Nutech Group icon" width={62} height={62} priority /><span className={styles.logoBadge} aria-hidden="true">{logisticsCompany.icon}</span></span><span className={styles.companyChip}>Logistics</span></div>
        <h2>Reliable movement for a connected Nutech Group.</h2>
        <p>Shipping expertise, customs awareness, and clear coordination shaped by decades of founder experience.</p>
        <dl className={styles.heroStats}><div><dt>Ship</dt><dd>Freight coordination</dd></div><div><dt>Export</dt><dd>Documentation support</dd></div><div><dt>MEA</dt><dd>Regional reach</dd></div></dl>
      </aside>
    </section>

    <section className={styles.capabilitySection} aria-labelledby="capabilities-title"><div className={styles.sectionHeader}><p className={styles.eyebrow}>What We Support</p><h2 id="capabilities-title">Logistics built around fewer surprises and better control.</h2><p>From export preparation to final delivery, Nutech Logistics brings the right conversations together so products can move with confidence.</p></div><div className={styles.featureGrid}>{CAPABILITIES.map((feature) => <FeatureCard key={feature.title} {...feature} />)}</div></section>

    <section className={styles.experienceSection} aria-labelledby="experience-title"><div className={styles.experiencePanel}><p className={styles.eyebrow}>Founder-Led Experience</p><h2 id="experience-title">Good logistics depends on knowing what can happen between the starting point and the destination.</h2><p>Decades of founder experience across business, trade, and regional markets inform how we anticipate requirements, communicate with partners, and keep shipments moving through complex steps.</p></div><div className={styles.proofStack}><article><MapPinned aria-hidden="true" size={24} strokeWidth={1.8} /><h3>Regional understanding</h3><p>Routes, markets, partners, and practical destination requirements are considered together.</p></article><article><ClipboardCheck aria-hidden="true" size={24} strokeWidth={1.8} /><h3>Documentation discipline</h3><p>Clear shipment information helps teams coordinate confidently from booking to clearance.</p></article><article><Handshake aria-hidden="true" size={24} strokeWidth={1.8} /><h3>Partner continuity</h3><p>Trusted relationships support better handovers and more dependable communication.</p></article></div></section>

    <section className={styles.deliverySection} aria-labelledby="delivery-title"><div className={styles.sectionHeader}><p className={styles.eyebrow}>How We Work</p><h2 id="delivery-title">A clear route from cargo requirement to confirmed delivery.</h2></div><div className={styles.stepGrid}>{DELIVERY_STEPS.map(({ label, title, text }) => <article key={title} className={styles.stepCard}><span>{label}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className={styles.focusBand} aria-labelledby="focus-title"><div><p className={styles.eyebrow}>Focus Areas</p><h2 id="focus-title">Practical logistics support for cross-border movement.</h2></div><ul aria-label="Nutech Logistics focus areas">{FOCUS_AREAS.map((area) => <li key={area}>{area}</li>)}</ul></section>

    <section className={styles.groupSection} aria-labelledby="group-title"><div className={styles.groupHeader}><p className={styles.eyebrow}>Part Of Nutech Group</p><h2 id="group-title">A dedicated logistics company connected to the group&apos;s wider capabilities.</h2></div><div className={styles.groupGrid}>{GROUP_LINKS.map((feature) => <FeatureCard key={feature.title} {...feature} />)}</div></section>
  </div>;
}

export { NutechLogistics };
