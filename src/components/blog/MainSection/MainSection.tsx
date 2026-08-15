import Link from "next/link";
import styles from "./MainSection.module.css";

export default function MainSection() {
  return (
    <section className={styles.mainCareers}>
      <h1 className={styles.title}>
          No blogs yet. But be on the look-out!
      </h1>
      <p>
          You can also follow our{" "}
          <Link className={styles.customLinkStyle} href="https://www.linkedin.com/company/nutechgroup/" target="_blank" rel="noopener noreferrer">LinkedIn page</Link>
          {" "}to keep up.
      </p>
    </section>
  );
}
