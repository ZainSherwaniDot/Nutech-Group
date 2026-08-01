import styles from './AutomotiveWhyChoose.module.css';
import { FaCheckCircle } from 'react-icons/fa';

export default function AutomotiveWhyChoose() {
  const reasons = [
    {
      id: 1,
      title: 'Industry Expertise',
      description: 'Over 20 years of automotive excellence in the MEA region with deep market knowledge.',
    },
    {
      id: 2,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensuring premium standards across all services.',
    },
    {
      id: 3,
      title: 'Customer Support',
      description: '24/7 dedicated support team ready to assist with any automotive needs.',
    },
    {
      id: 4,
      title: 'Competitive Pricing',
      description: 'Transparent pricing models with flexible options tailored to your budget.',
    },
    {
      id: 5,
      title: 'Innovation First',
      description: 'Continuous investment in latest technology and methodologies for better service delivery.',
    },
    {
      id: 6,
      title: 'Sustainability Focus',
      description: 'Commitment to environmentally responsible practices in all operations.',
    },
  ];

  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.whyChooseContainer}>
        {/* Header */}
        <div className={styles.headerBlock}>
          <div className={styles.eyebrow}>Why Choose Us</div>
          <h2 className={styles.title}>Trusted Partnership for Automotive Excellence</h2>
          <p className={styles.intro}>
            We combine reliability, innovation, and customer commitment to deliver 
            automotive solutions that exceed expectations.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className={styles.reasonsGrid}>
          {reasons.map((reason) => (
            <div key={reason.id} className={styles.reasonCard}>
              <div className={styles.checkIcon}>
                <FaCheckCircle size={24} />
              </div>
              <h3 className={styles.reasonTitle}>{reason.title}</h3>
              <p className={styles.reasonDesc}>{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.ctaBlock}>
          <p className={styles.ctaText}>
            Ready to experience premium automotive services? 
            <span className={styles.ctaHighlight}> Get in touch with our team today.</span>
          </p>
          <button className={styles.ctaButton}>
            Request a Consultation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M1 8h14M9 1l7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
