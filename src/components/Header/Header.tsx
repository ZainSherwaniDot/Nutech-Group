import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.mainHeader}>
      <nav className={styles.nav}>
        <Link href="/">
          <Image className={styles.logo} src="/logo120.png" alt="Logo" width={120} height={45} />
        </Link>
        <ul className={styles.navList}>
          <li><Link href="/companies">Companies</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/careers">Careers</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <button className={styles.navCta}>Investor Relations</button>
      </nav>
    </header>
  );
}