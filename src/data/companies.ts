/* ---------------------------------- Types --------------------------------- */

export interface SubCompany {
  id: string;
  icon: string;
  chip: string;
  name: string;
  sub: string;
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
    cardClass: "cardAuto",
    hrefLink: "/companies/nutech-automotive",
  },
  {
    id: "solar",
    icon: "☀️",
    chip: "Energy",
    name: "Solar & Power",
    sub: "Renewable Energy Solutions",
    cardClass: "cardSolar",
    hrefLink: "/companies/nutech-solar",
  },
  {
    id: "dist",
    icon: "📦",
    chip: "Distribution",
    name: "Distribution",
    sub: "Computer Hardware & Consumer Goods",
    cardClass: "cardDist",
    hrefLink: "/companies/nutech-distribution",
  },
  {
    id: "logi",
    icon: "🚚",
    chip: "Logistics",
    name: "Logistics",
    sub: "Shipping, Exporting & Customs",
    cardClass: "cardLogi",
    hrefLink: "/companies/nutech-logistics",
  },
  {
    id: "tele",
    icon: "📡",
    chip: "Telecom",
    name: "Telecom",
    sub: "Connectivity & Telecommunication Infrastructure",
    cardClass: "cardTele",
    hrefLink: "/companies/nutech-telecom",
  },
  {
    id: "tech",
    icon: "💻",
    chip: "Technology",
    name: "Technologies",
    sub: "Software Development, Cloud Solutions & AI",
    cardClass: "cardTech",
    hrefLink: "/companies/nutech-technologies",
  },
];