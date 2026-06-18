import styles from './Vendors.module.css';

const TICKER_ITEMS = [
  'Nutech Automotive',
  'Nutech Solar & Power',
  'Nutech Distribution',
  'Nutech Logistics',
  'Nutech Telecom',
  'Nutech Technologies',
  'Nutech Group',
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