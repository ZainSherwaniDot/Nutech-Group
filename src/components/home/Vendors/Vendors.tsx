import styles from './Vendors.module.css';

const TICKER_ITEMS = [
  'Apple',
  'hp',
  'Dell',
  'Huawei',
  'HPE',
  'Kaspersky',
  'Red hat',
  'Microsoft',
  'Rapid7',
  'Cambium Networks',
  'Belkin',
  'Vmware',
  'Veritas',
  'Oracle',
  'APC',
  'H3C',
  'Veeam',
  'Sophos',
  'f5',
  'Citrix',
  'Strike Ready',
  'Trend Micro',
  'Fortinet',
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