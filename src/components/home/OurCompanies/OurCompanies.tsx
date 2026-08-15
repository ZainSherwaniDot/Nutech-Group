import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { subCompanies } from "@/data/companies";
import styles from "./OurCompanies.module.css";

export default function OurCompanies() {
  return (
    <section className={styles.mainOurCompanies} aria-labelledby="our-companies-title">
      <div className={styles.headerBlock}>
        <p className={styles.eyebrow}>Our Companies</p>
        <h2 id="our-companies-title" className={styles.title}>
          Six focused companies. One group built to execute.
        </h2>
        <p className={styles.intro}>
          Explore the businesses carrying Nutech Group across automotive,
          energy, distribution, logistics, telecom, and technology sectors.
        </p>
      </div>

      <div className={styles.companyGrid} aria-label="Nutech Group companies">
        {subCompanies.map(({ id, icon, chip, name, sub, detail, cardClass, hrefLink }) => (
          <Link
            key={id}
            href={hrefLink}
            className={`${styles.companyCard} ${styles[cardClass]}`}
          >
            <span className={styles.cardSheen} aria-hidden="true" />

            <span className={styles.cardContent}>
              <span className={styles.cardTop}>
                <span className={styles.logoWrap}>
                  <Image
                    src="/icon.png"
                    alt=""
                    width={52}
                    height={52}
                    aria-hidden="true"
                  />
                  <span className={styles.logoBadge} aria-hidden="true">
                    <Image src={icon} alt="" width={256} height={256} />
                  </span>
                </span>
                <span className={styles.industry}>{chip}</span>
              </span>

              <span className={styles.focus}>{sub}</span>

              <span className={styles.cardName}>
                <span>Nutech</span>
                {name}
              </span>

              <span className={styles.shortText}>{detail}</span>

              <span className={styles.cardCta}>
                View company
                <ArrowRight aria-hidden="true" size={16} />
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
