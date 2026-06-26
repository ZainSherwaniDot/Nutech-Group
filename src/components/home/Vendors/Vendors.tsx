import styles from './Vendors.module.css';

const TICKER_ITEMS = [
  'Apple',
  'hp',
  'dell',
  'huawei',
  'HPE',
  'kaspersky',
  'red hat',
  'microsoft',
  'rapid7',
  'cambium networks',
  'belkin',
  'vmware',
  'veritas',
  'oracle',
  'apc',
  'h3c',
  'veeam',
  'sophos',
  'f5',
  'citrix',
  'strike ready',
  'trend micro',
  'fortinet',
];

export default function Vendors() {
  return (
    <>
      {/* ── Ticker ── */}
        <div className={styles.tickerWrap}>
          <div className={styles.tickerTrack}>
            {/* Render twice for seamless loop */}
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className={styles.tickerItem}>{item}</span>
            ))}
          </div>
        </div>
    </>
  );
}