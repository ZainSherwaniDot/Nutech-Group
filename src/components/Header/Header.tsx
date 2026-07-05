"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };

    handleScroll(); // Check initial position
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.mainHeader} ${
        scrolled ? styles.mainHeaderScrolled : ""
      }`}
    >
      <Link href="/">
        <Image className={styles.logo} src="/logo120.png" alt="Nutech Group Logo" width={120} height={45} priority />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {/* <li><Link href="/">Home</Link></li> */}
          <li className={styles.dropdown}>
            <Link className={styles.linkOfSubmenu} href="/companies">Companies</Link>
            <ul className={styles.submenu}>
              <li><Link href="/companies/nutech-automotive">Nutech Automotive</Link></li>
              <li><Link href="/companies/nutech-solar">Nutech Solar & Power</Link></li>
              <li><Link href="/companies/nutech-distribution">Nutech Distribution</Link></li>
              <li><Link href="/companies/nutech-logistics">Nutech Logistics</Link></li>
              <li><Link href="/companies/nutech-telecom">Nutech Telecom</Link></li>
              <li><Link href="/companies/nutech-technologies">Nutech Technologies</Link></li>
            </ul>
          </li>
          <li><Link href="/vendors">Vendors</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/careers">Careers</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <button className={styles.navCta}>Book an Appointment</button>
    </header>
  );
}