'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './AutomotiveHero.module.css';
import { FaInstagram, FaLinkedin, FaFacebook, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function AutomotiveHero() {
  return (
    <section className={styles.heroSection}>
      {/* Background decoration */}
      <div className={styles.bgBlob1} />
      <div className={styles.bgBlob2} />

      <div className={styles.heroContainer}>
        {/* Left Content */}
        <div className={styles.heroLeft}>
          <div className={styles.eyebrow}>Premium Automotive Solutions</div>

          <h1 className={styles.heroTitle}>
            Precision in<br />
            <span className={styles.accentLine}>Motion</span>
          </h1>

          <p className={styles.heroDesc}>
            Nutech Automotive leads innovation in the MEA automotive sector,
            delivering excellence in distribution, service, and technological advancement.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>
              Explore Services
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M1 7h12M7 1l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button className={styles.btnSecondary}>Learn More →</button>
          </div>

          <div className={styles.contactDetails}>
            <div className={styles.emailAndPhone}>
              <Link href="mailto:automotive@nutech-group.com" target="_blank" rel="noopener noreferrer">
                <span>
                  <MdEmail />
                </span>
                automotive@nutech-group.com
              </Link>
            </div>
            <div className={styles.emailAndPhone}>
              <Link href="tel:+971555183349" target="_blank" rel="noopener noreferrer">
                <span>
                  <FaPhoneAlt />
                </span>
                +971555183349
              </Link>
            </div>
            <div className={styles.socials}>
              <Link
                href="https://www.facebook.com/profile.php?id=61573981977505"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={23} />
              </Link>
              <Link href="https://www.instagram.com/nutechgroupllc/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={23} />
              </Link>
              <Link href="https://www.linkedin.com/company/nutechgroup/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={23} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Visual Elements */}
        <div className={styles.heroRight}>
          <div className={styles.heroImage}>
            <Image
              src="/images/car-illustration.png"
              alt="Nutech Automotive - Premium automotive solutions"
              width={500}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
