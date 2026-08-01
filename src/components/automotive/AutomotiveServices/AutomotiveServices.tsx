import styles from './AutomotiveServices.module.css';
import { FaTruck, FaTools, FaChartLine, FaLeaf } from 'react-icons/fa';

export default function AutomotiveServices() {
  const services = [
    {
      id: 1,
      icon: FaTruck,
      title: 'Distribution & Logistics',
      description:
        'Comprehensive vehicle distribution across the MEA region with efficient supply chain management and timely delivery solutions.',
    },
    {
      id: 2,
      icon: FaTools,
      title: 'Service & Maintenance',
      description:
        'Professional maintenance and repair services backed by certified technicians and genuine parts for all vehicle types.',
    },
    {
      id: 3,
      icon: FaChartLine,
      title: 'Business Solutions',
      description:
        'Custom automotive business solutions including fleet management, financing options, and corporate programs.',
    },
    {
      id: 4,
      icon: FaLeaf,
      title: 'Green Initiatives',
      description:
        'Sustainable automotive solutions promoting eco-friendly vehicles and environmental responsibility in transportation.',
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        {/* Header */}
        <div className={styles.headerBlock}>
          <div className={styles.eyebrow}>What We Offer</div>
          <h2 className={styles.title}>Comprehensive Automotive Solutions</h2>
          <p className={styles.intro}>
            From distribution to service, we provide end-to-end automotive solutions 
            designed to meet the unique needs of the MEA market.
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className={styles.serviceCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    <Icon size={32} />
                  </div>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                </div>
                <p className={styles.cardDesc}>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
