"use client";

/**
 * CompaniesBubble
 * -----------
 * A fixed bubble, vertically centered on the right edge of the viewport,
 * visible on every page. Clicking it opens a vertical stack of cards (one
 * per sub-company) with a hand-drawn-style brass line connecting each card
 * to the bubble, like jacks patched into a switchboard.
 *
 * USAGE
 *   1. Drop this folder anywhere in your project, e.g. components/CompaniesBubble/
 *   2. Edit sub-companies.js with your real companies, icons, and links.
 *   3. Render <CompaniesBubble /> once, near the bottom of app/layout.js, as a
 *      sibling of {children} — so it persists across every route:
 *
 *        <body>
 *          {children}
 *          <CompaniesBubble />
 *        </body>
 *
 * CUSTOMIZING
 *   - Position/size: edit .bubble / .cardList in CompaniesBubble.module.css
 *     (the breakpoints near the bottom control tablet/mobile sizing).
 *   - Colors: override the --chub-* CSS variables anywhere in your global
 *     CSS (they're declared with defaults at the top of the module file).
 *   - Icons: add new ones to the ICONS map below and reference the key in
 *     sub-companies.js.
 */

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./CompaniesBubble.module.css";

/* ---------------------------------- Icons --------------------------------- */
/* Simple hand-rolled pictograms, no external icon library required. */
// sub-companies.js
// Edit this with your real sub-companies. `icon` must match a key in ICONS
// inside CompanyHub.jsx (chip, leaf, cart, cloud, shield, building) —
// or add your own icon and register it there.

const subCompanies = [
  {
    id: 'auto',
    icon: '🚗',
    chip: 'Automotive',
    name: <>Nutech Automotive</>,
    sub: 'Tools, Equipment & Service Excellence',
    cardClass: styles.cardAuto,
    hrefLink: "/companies/nutech-automotive",
  },
  {
    id: 'solar',
    icon: '☀️',
    chip: 'Energy',
    name: <>Nutech Solar &amp; Power</>,
    sub: 'Renewable Energy Solutions',
    cardClass: styles.cardSolar,
    hrefLink: "/companies/nutech-solar",
  },
  {
    id: 'dist',
    icon: '📦',
    chip: 'Distribution',
    name: <>Nutech Distribution</>,
    sub: 'Computer Hardware & Consumer Goods',
    cardClass: styles.cardDist,
    hrefLink: "/companies/nutech-distribution",
  },
  {
    id: 'logi',
    icon: '🚚',
    chip: 'Logistics',
    name: <>Nutech Logistics</>,
    sub: 'Shipping, Exporting & Customs',
    cardClass: styles.cardLogi,
    hrefLink: "/companies/nutech-logistics",
  },
  {
    id: 'tele',
    icon: '📡',
    chip: 'Telecom',
    name: <>Nutech Telecom</>,
    sub: 'Connectivity & Telecommunication Infrastructure',
    cardClass: styles.cardTele,
    hrefLink: "/companies/nutech-telecom",
  },
  {
    id: 'tech',
    icon: '💻',
    chip: 'Technology',
    name: <>Nutech Technologies</>,
    sub: 'Software Development, Cloud Solutions & AI',
    cardClass: styles.cardTech,
    hrefLink: "/companies/nutech-technologies",
  },
];

/* The glyph shown inside the bubble itself: one hub node with six satellites,
   echoing the six sub-companies it opens onto. */
function HubIcon() {
  const satellites = [0, 60, 120, 180, 240, 300].map((deg) => {
    const rad = (deg * Math.PI) / 180;
    return { x: 24 + Math.cos(rad) * 17, y: 24 + Math.sin(rad) * 17, deg };
  });
  return (
    <svg width="26" height="26" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {satellites.map(({ x, y, deg }) => (
        <g key={deg}>
          <line x1="24" y1="24" x2={x} y2={y} stroke="currentColor" strokeWidth="2" opacity="0.6" />
          <circle cx={x} cy={y} r="3" fill="currentColor" />
        </g>
      ))}
      <circle cx="24" cy="24" r="6.5" fill="currentColor" />
    </svg>
  );
}

/* --------------------------------- Component ------------------------------- */

export default function CompaniesBubble({ companies = subCompanies, label = "Open our companies menu" }) {
  const [open, setOpen] = useState(false);
  const [paths, setPaths] = useState([]);

  const bubbleRef = useRef(null);
  const listRef = useRef(null);
  const cardRefs = useRef([]);

  const computeLines = useCallback(() => {
    if (!bubbleRef.current) return;
    const bubbleRect = bubbleRef.current.getBoundingClientRect();
    const bx = bubbleRect.left + bubbleRect.width / 2;
    const by = bubbleRect.top + bubbleRect.height / 2;

    const next = cardRefs.current.map((el) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      const sx = r.right;
      const sy = r.top + r.height / 2;
      const mx = (sx + bx) / 2;
      return { d: `M ${sx} ${sy} C ${mx} ${sy}, ${mx} ${by}, ${bx} ${by}`, sx, sy };
    });
    setPaths(next);
  }, []);

  // Recompute once layout has settled after opening.
  useLayoutEffect(() => {
    if (!open) return;
    computeLines();
    const raf = requestAnimationFrame(computeLines);
    return () => cancelAnimationFrame(raf);
  }, [open, computeLines]);

  // Keep lines glued to their cards/bubble on resize or internal scroll.
  useEffect(() => {
    if (!open) return;
    const list = listRef.current;
    window.addEventListener("resize", computeLines);
    list?.addEventListener("scroll", computeLines);
    return () => {
      window.removeEventListener("resize", computeLines);
      list?.removeEventListener("scroll", computeLines);
    };
  }, [open, computeLines]);

  // Escape closes and returns focus to the bubble.
  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") {
        setOpen(false);
        bubbleRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Move focus into the menu when it opens.
  useEffect(() => {
    if (open) cardRefs.current[0]?.focus();
  }, [open]);

  return (
    <>
      {open && <div className={styles.backdrop} onClick={() => setOpen(false)} aria-hidden="true" />}

      {open && (
        <svg className={styles.lines} aria-hidden="true">
          {paths.map((p, i) =>
            p ? (
              <g key={companies[i]?.id ?? i} style={{ animationDelay: `${i * 45}ms` }}>
                <path d={p.d} pathLength={1} className={styles.line} style={{ animationDelay: `${i * 45}ms` }} />
                <circle
                  cx={p.sx}
                  cy={p.sy}
                  r="3.5"
                  className={styles.node}
                  style={{ animationDelay: `${i * 45}ms` }}
                />
              </g>
            ) : null
          )}
        </svg>
      )}

      {open && (
        <ul className={styles.cardList} ref={listRef} role="menu" aria-label="Our companies">
          {companies.map((c, i) => (
            <li
              key={c.id}
              className={styles.cardItem}
              role="none"
              style={{ animationDelay: `${i * 45}ms` }}
            >
              <Link
                href={c.hrefLink}
                role="menuitem"
                ref={(el) => (cardRefs.current[i] = el)}
                className={styles.card}
                onClick={() => setOpen(false)}
              >
                <span className={styles.cardIcon}>{c.icon}</span>
                <span className={styles.cardText}>
                  <span className={styles.cardTitle}>{c.name}</span>
                  <span className={styles.cardDesc}>{c.sub}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <button
        type="button"
        ref={bubbleRef}
        className={open ? `${styles.bubble} ${styles.bubbleOpen}` : styles.bubble}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={label}
      >
        <HubIcon />
      </button>
    </>
  );
}
