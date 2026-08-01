import styles from './AutomotiveAbout.module.css';

export default function AutomotiveAbout() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        {/* Header */}
        <div className={styles.headerBlock}>
          <div className={styles.eyebrow}>About Nutech Automotive</div>
          <h2 className={styles.title}>
            Driving Excellence Across the MEA
          </h2>
          <p className={styles.intro}>
            As a cornerstone of Nutech Group, Nutech Automotive combines cutting-edge technology 
            with regional expertise to deliver comprehensive automotive solutions tailored to the MEA market.
          </p>
        </div>

        {/* About Grid */}
        <div className={styles.aboutGrid}>
          {/* Mission */}
          <div className={styles.aboutCard}>
            <div className={styles.cardTop}>
              <h3 className={styles.cardTitle}>Our Mission</h3>
              <div className={styles.cardIcon}>🎯</div>
            </div>
            <p className={styles.cardText}>
              To provide world-class automotive distribution, services, and innovative solutions 
              that empower businesses and individuals across the MEA region with reliable, 
              sustainable, and technology-driven transportation solutions.
            </p>
          </div>

          {/* Vision */}
          <div className={styles.aboutCard}>
            <div className={styles.cardTop}>
              <h3 className={styles.cardTitle}>Our Vision</h3>
              <div className={styles.cardIcon}>🚀</div>
            </div>
            <p className={styles.cardText}>
              To become the leading automotive partner in the MEA region, recognized for innovation, 
              quality, and customer-centric excellence in every aspect of our operations.
            </p>
          </div>

          {/* Values */}
          <div className={styles.aboutCard}>
            <div className={styles.cardTop}>
              <h3 className={styles.cardTitle}>Our Values</h3>
              <div className={styles.cardIcon}>⭐</div>
            </div>
            <p className={styles.cardText}>
              Excellence, integrity, innovation, and customer focus guide every decision. 
              We are committed to sustainability and driving positive change in the automotive industry.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>500+</div>
            <div className={styles.statLabel}>Active Clients</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>20+</div>
            <div className={styles.statLabel}>Years Experience</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Customer Satisfaction</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>15+</div>
            <div className={styles.statLabel}>Regional Locations</div>
          </div>
        </div>
      </div>
    </section>
  );
}
