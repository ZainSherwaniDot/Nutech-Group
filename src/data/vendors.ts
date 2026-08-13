export type VendorCategoryId =
  | "devices"
  | "networking"
  | "platforms"
  | "data"
  | "security";

export type VendorCategory = {
  id: VendorCategoryId;
  label: string;
  summary: string;
  useCase: string;
};

export type Vendor = {
  name: string;
  logo: string;
  category: VendorCategoryId;
  fit: string;
};

export const vendorCategories: Record<VendorCategoryId, VendorCategory> = {
  devices: {
    id: "devices",
    label: "Devices & Infrastructure",
    summary: "Workplace devices, endpoint hardware, power, and infrastructure components.",
    useCase: "For procurement, deployment, workplace readiness, and infrastructure refresh cycles.",
  },
  networking: {
    id: "networking",
    label: "Networking & Connectivity",
    summary: "Connectivity, wireless, routing, application delivery, and network infrastructure.",
    useCase: "For projects where coverage, uptime, access, and network scale matter.",
  },
  platforms: {
    id: "platforms",
    label: "Platforms & Virtualization",
    summary: "Enterprise software, cloud-adjacent platforms, operating systems, and virtualization.",
    useCase: "For modern workplaces, server environments, application platforms, and managed operations.",
  },
  data: {
    id: "data",
    label: "Data Protection",
    summary: "Backup, continuity, recovery, storage management, and resilience planning.",
    useCase: "For organizations that need data availability, continuity, and recovery confidence.",
  },
  security: {
    id: "security",
    label: "Cybersecurity",
    summary: "Endpoint protection, threat visibility, vulnerability management, and perimeter defense.",
    useCase: "For teams protecting users, systems, networks, applications, and digital operations.",
  },
};

export const vendorCategoryList = Object.values(vendorCategories);

export const vendors: Vendor[] = [
  {
    name: "Apple",
    logo: "/vendor-logos/apple.svg",
    category: "devices",
    fit: "Professional devices and workplace ecosystems.",
  },
  {
    name: "HP",
    logo: "/vendor-logos/hp.svg",
    category: "devices",
    fit: "Business endpoints, printers, and workplace hardware.",
  },
  {
    name: "Dell",
    logo: "/vendor-logos/dell.svg",
    category: "devices",
    fit: "Workstations, laptops, displays, and infrastructure hardware.",
  },
  {
    name: "Microsoft",
    logo: "/vendor-logos/microsoft.svg",
    category: "platforms",
    fit: "Productivity, cloud platforms, collaboration, and business systems.",
  },
  {
    name: "Huawei",
    logo: "/vendor-logos/huawei.svg",
    category: "networking",
    fit: "Network infrastructure, connectivity, and enterprise technology.",
  },
  {
    name: "F5",
    logo: "/vendor-logos/f5.svg",
    category: "networking",
    fit: "Application delivery, traffic control, and network protection.",
  },
  {
    name: "Kaspersky",
    logo: "/vendor-logos/kaspersky.svg",
    category: "security",
    fit: "Endpoint security, threat prevention, and digital protection.",
  },
  {
    name: "Red Hat",
    logo: "/vendor-logos/red-hat.svg",
    category: "platforms",
    fit: "Enterprise Linux, open platforms, and hybrid infrastructure.",
  },
  {
    name: "Rapid7",
    logo: "/vendor-logos/rapid7.svg",
    category: "security",
    fit: "Security visibility, vulnerability management, and risk insight.",
  },
  {
    name: "Cambium Networks",
    logo: "/vendor-logos/cambium-networks.svg",
    category: "networking",
    fit: "Wireless broadband, enterprise Wi-Fi, and connectivity projects.",
  },
  {
    name: "Belkin",
    logo: "/vendor-logos/belkin.svg",
    category: "devices",
    fit: "Accessories, connectivity peripherals, and workplace support hardware.",
  },
  {
    name: "VMware",
    logo: "/vendor-logos/vmware.svg",
    category: "platforms",
    fit: "Virtualization, infrastructure modernization, and platform operations.",
  },
  {
    name: "Veritas",
    logo: "/vendor-logos/veritas.svg",
    category: "data",
    fit: "Data protection, backup, compliance, and enterprise resilience.",
  },
  {
    name: "Oracle",
    logo: "/vendor-logos/oracle.svg",
    category: "platforms",
    fit: "Enterprise applications, databases, and business technology platforms.",
  },
  {
    name: "Veeam",
    logo: "/vendor-logos/veeam.svg",
    category: "data",
    fit: "Backup, recovery, data availability, and continuity planning.",
  },
  {
    name: "Citrix",
    logo: "/vendor-logos/citrix.svg",
    category: "platforms",
    fit: "Virtual apps, secure access, and distributed work environments.",
  },
  {
    name: "Strike Ready",
    logo: "/vendor-logos/strike-ready.svg",
    category: "security",
    fit: "Security operations support, threat readiness, and response workflows.",
  },
  {
    name: "Trend Micro",
    logo: "/vendor-logos/trend-micro.svg",
    category: "security",
    fit: "Cloud, endpoint, network, and workload security.",
  },
  {
    name: "Fortinet",
    logo: "/vendor-logos/fortinet.svg",
    category: "security",
    fit: "Network security, perimeter defense, and secure connectivity.",
  },
  {
    name: "APC",
    logo: "/vendor-logos/apc.webp",
    category: "devices",
    fit: "Power protection, UPS systems, and infrastructure resilience.",
  },
  {
    name: "H3C",
    logo: "/vendor-logos/h3c.jpg",
    category: "networking",
    fit: "Enterprise networking, switching, and infrastructure technology.",
  },
  {
    name: "Sophos",
    logo: "/vendor-logos/sophos.png",
    category: "security",
    fit: "Endpoint, firewall, MDR, and cybersecurity protection.",
  },
  {
    name: "HPE",
    logo: "/vendor-logos/hpe.avif",
    category: "devices",
    fit: "Servers, infrastructure, storage, and enterprise hardware.",
  },
];
