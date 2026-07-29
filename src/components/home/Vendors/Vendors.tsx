import Image from 'next/image';
import styles from './Vendors.module.css';

type Vendor = {
  name: string;
  logo: string;
};

const VENDORS: Vendor[] = [
  { name: 'Apple',            logo: '/vendor-logos/apple.svg',            },
  { name: 'HP',               logo: '/vendor-logos/hp.svg',               },
  { name: 'Dell',             logo: '/vendor-logos/dell.svg',             },
  { name: 'Microsoft',        logo: '/vendor-logos/microsoft.svg',        },
  { name: 'Huawei',           logo: '/vendor-logos/huawei.svg',           },
  { name: 'F5',               logo: '/vendor-logos/f5.svg',               },
  { name: 'Kaspersky',        logo: '/vendor-logos/kaspersky.svg',        },
  { name: 'Red Hat',          logo: '/vendor-logos/red-hat.svg',          },
  { name: 'Rapid7',           logo: '/vendor-logos/rapid7.svg',           },
  { name: 'Cambium Networks', logo: '/vendor-logos/cambium-networks.svg', },
  { name: 'Belkin',           logo: '/vendor-logos/belkin.svg',           },
  { name: 'VMware',           logo: '/vendor-logos/vmware.svg',           },
  { name: 'Veritas',          logo: '/vendor-logos/veritas.svg',          },
  { name: 'Oracle',           logo: '/vendor-logos/oracle.svg',           },
  { name: 'Veeam',            logo: '/vendor-logos/veeam.svg',            },
  { name: 'Citrix',           logo: '/vendor-logos/citrix.svg',           },
  { name: 'Strike Ready',     logo: '/vendor-logos/strike-ready.svg',     },
  { name: 'Trend Micro',      logo: '/vendor-logos/trend-micro.svg',      },
  { name: 'Fortinet',         logo: '/vendor-logos/fortinet.svg',         },
  { name: 'APC',              logo: '/vendor-logos/apc.webp',             },
  { name: 'H3C',              logo: '/vendor-logos/h3c.jpg',              },
  { name: 'Sophos',           logo: '/vendor-logos/sophos.png',           },
  { name: 'HPE',              logo: '/vendor-logos/hpe.avif',             },
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
              width={200}
              height={200}
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </section>
  );
}