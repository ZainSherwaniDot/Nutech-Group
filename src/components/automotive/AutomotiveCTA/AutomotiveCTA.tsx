import Link from 'next/link';
import styles from './AutomotiveCTA.module.css';

export default function AutomotiveCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        {/* Background decoration */}
        <div className={styles.bgAccent1} />
        <div className={styles.bgAccent2} />

        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Ready to Transform Your <span className={styles.accentText}>Automotive Needs</span>?
          </h2>

          <p className={styles.ctaDescription}>
            Partner with Nutech Automotive for cutting-edge solutions, expert guidance, 
            and unwavering commitment to your success. Let&apos;s drive excellence together.
          </p>

          <div className={styles.ctaActions}>
            <button className={styles.btnPrimary}>
              Get Started
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M1 8h14M9 1l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <Link href="/contact" className={styles.btnSecondary}>
              Contact Sales
            </Link>
          </div>
        </div>

        {/* Footer info */}
        <div className={styles.footerInfo}>
          <div className={styles.infoItem}>
            <div className={styles.infoLabel}>Email</div>
            <Link href="mailto:automotive@nutech-group.com">automotive@nutech-group.com</Link>
          </div>
          <div className={styles.divider} />
          <div className={styles.infoItem}>
            <div className={styles.infoLabel}>Phone</div>
            <Link href="tel:+971555183349">+971 555 183 349</Link>
          </div>
          <div className={styles.divider} />
          <div className={styles.infoItem}>
            <div className={styles.infoLabel}>Location</div>
            <span>MEA Region</span>
          </div>
        </div>
      </div>
    </section>
  );
}
