/* ---------------------------------- Types --------------------------------- */

export interface SubCompany {
  id: string;
  icon: string;
  chip: string;
  name: string;
  sub: string;
  detail: string;
  cardClass: string;
  hrefLink: string;
}

/* ---------------------------------- Data ---------------------------------- */

export const subCompanies: SubCompany[] = [
  {
    id: "auto",
    icon: "🚗",
    chip: "Automotive",
    name: "Automotive",
    sub: "Tools, Equipment & Service Excellence",
    detail: "Professional automotive tools, service equipment, and dependable support for workshops, fleets, and technical teams.",
    cardClass: "cardAuto",
    hrefLink: "/companies/nutech-automotive",
  },
  {
    id: "solar",
    icon: "☀️",
    chip: "Energy",
    name: "Solar & Power",
    sub: "Renewable Energy Solutions",
    detail: "Solar, backup power, and renewable energy solutions designed for entities that need resilient infrastructure.",
    cardClass: "cardSolar",
    hrefLink: "/companies/nutech-solar",
  },
  {
    id: "dist",
    icon: "📦",
    chip: "Distribution",
    name: "Distribution",
    sub: "Computer Hardware & Consumer Goods",
    detail: "Distribution strength for computer hardware, consumer goods, and trusted technology brands across regional channels.",
    cardClass: "cardDist",
    hrefLink: "/companies/nutech-distribution",
  },
  {
    id: "logi",
    icon: "🚚",
    chip: "Logistics",
    name: "Logistics",
    sub: "Shipping, Exporting & Customs",
    detail: "Shipping, export, customs, and coordination services that help products move with fewer delays and clearer control.",
    cardClass: "cardLogi",
    hrefLink: "/companies/nutech-logistics",
  },
  {
    id: "tele",
    icon: "📡",
    chip: "Telecom",
    name: "Telecom",
    sub: "Connectivity & Telecommunication Infrastructure",
    detail: "Telecommunication infrastructure and connectivity solutions for networks that need uptime, coverage, and scale.",
    cardClass: "cardTele",
    hrefLink: "/companies/nutech-telecom",
  },
  {
    id: "tech",
    icon: "💻",
    chip: "Technology",
    name: "Technologies",
    sub: "Software Development, Cloud Solutions & AI",
    detail: "Software development, cloud solutions, and AI products for organizations ready to modernize their operations.",
    cardClass: "cardTech",
    hrefLink: "/companies/nutech-technologies",
  },
];
