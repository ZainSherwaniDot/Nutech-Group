import Image from 'next/image';
import { vendors } from '@/data/vendors';
import styles from './Vendors.module.css';

const marqueeVendors = [...vendors, ...vendors];

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
