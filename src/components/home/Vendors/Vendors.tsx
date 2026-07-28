import Image from 'next/image';
import styles from './Vendors.module.css';

type Vendor = {
  name: string;
  logo: string;
  width: number;
  height: number;
};

const VENDORS: Vendor[] = [
  { name: 'Apple',            logo: '/vendor-logos/apple.svg',            width: 640,     height: 640 },
  { name: 'HP',               logo: '/vendor-logos/hp.svg',               width: 24,      height: 24 },
  { name: 'Dell',             logo: '/vendor-logos/dell.svg',             width: 24,      height: 24 },
  { name: 'Huawei',           logo: '/vendor-logos/huawei.png',           width: 266,     height: 60 },
  { name: 'HPE',              logo: '/vendor-logos/hpe.avif',             width: 1200,    height: 630 },
  { name: 'Kaspersky',        logo: '/vendor-logos/kaspersky.svg',        width: 1024,    height: 210 },
  { name: 'Red Hat',          logo: '/vendor-logos/red-hat.svg',          width: 555,     height: 175 },
  { name: 'Microsoft',        logo: '/vendor-logos/microsoft.svg',        width: 256,     height: 256.002 },
  { name: 'Rapid7',           logo: '/vendor-logos/rapid7.svg',           width: 841.1,   height: 141.3 },
  { name: 'Cambium Networks', logo: '/vendor-logos/cambium-networks.svg', width: 287.33,  height: 223.54 },
  { name: 'Belkin',           logo: '/vendor-logos/belkin.svg',           width: 101.604, height: 28.77 },
  { name: 'VMware',           logo: '/vendor-logos/vmware.svg',           width: 302,     height: 90 },
  { name: 'Veritas',          logo: '/vendor-logos/veritas.png',          width: 695,     height: 295 },
  { name: 'Oracle',           logo: '/vendor-logos/oracle.svg',           width: 136,     height: 18 },
  { name: 'APC',              logo: '/vendor-logos/apc.webp',             width: 400,     height: 400 },
  { name: 'H3C',              logo: '/vendor-logos/h3c.jpg',              width: 554,     height: 554 },
  { name: 'Veeam',            logo: '/vendor-logos/veeam.svg',            width: 158,     height: 48 },
  { name: 'Sophos',           logo: '/vendor-logos/sophos.png',           width: 1920,    height: 1080 },
  { name: 'F5',               logo: '/vendor-logos/f5.svg',               width: 40,      height: 40 },
  { name: 'Citrix',           logo: '/vendor-logos/citrix.svg',           width: 302.287, height: 94.588 },
  { name: 'Strike Ready',     logo: '/vendor-logos/strike-ready.svg',     width: 288,     height: 29 },
  { name: 'Trend Micro',      logo: '/vendor-logos/trend-micro.svg',      width: 144.704, height: 30.5 },
  { name: 'Fortinet',         logo: '/vendor-logos/fortinet.svg',         width: 487.6,   height: 55 },
];

const marqueeVendors = [...VENDORS, ...VENDORS];

export default function Vendors() {
  return (
    <section className={styles.tickerWrap}>
      <div className={styles.tickerTrack}>
        {marqueeVendors.map((vendor, index) => (
          <div
            key={`${vendor.name}-${index}`}
            className={styles.tickerItem}
          >
            <Image
              src={vendor.logo}
              alt={vendor.name}
              width={vendor.width}
              height={vendor.height}
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </section>
  );
}