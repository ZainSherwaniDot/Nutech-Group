"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, SquareX } from 'lucide-react';
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <Link href="#final-cta-section" className={styles.navCta}>Book a Call</Link>

      <button className={styles.menuButton} onClick={() => setMenuOpen((open) => !open)} type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} > <Menu /> </button>

      {menuOpen && (
        <nav className={styles.mobileNav}>
          <ul className={styles.mobileNavList}>
            <li className={styles.mobileMenuClose}><Link href="" onClick={() => setMenuOpen(false)}><SquareX /></Link></li>
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/companies" onClick={() => setMenuOpen(false)}>Companies</Link></li>
            <li><Link href="/companies/nutech-automotive" onClick={() => setMenuOpen(false)}>- Nutech Automotive</Link></li>
            <li><Link href="/companies/nutech-solar" onClick={() => setMenuOpen(false)}>- Nutech Solar & Power</Link></li>
            <li><Link href="/companies/nutech-distribution" onClick={() => setMenuOpen(false)}>- Nutech Distribution</Link></li>
            <li><Link href="/companies/nutech-logistics" onClick={() => setMenuOpen(false)}>- Nutech Logistics</Link></li>
            <li><Link href="/companies/nutech-telecom" onClick={() => setMenuOpen(false)}>- Nutech Telecom</Link></li>
            <li><Link href="/companies/nutech-technologies" onClick={() => setMenuOpen(false)}>- Nutech Technologies</Link></li>
            <li><Link href="/vendors" onClick={() => setMenuOpen(false)}>Vendors</Link></li>
            <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
            <li><Link href="/careers" onClick={() => setMenuOpen(false)}>Careers</Link></li>
            <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li><Link href="#final-cta-section" onClick={() => setMenuOpen(false)}>Book a Call</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}