"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./CompaniesBubble.module.css";

/* ---------------------------------- Types --------------------------------- */

interface SubCompany {
  id: string;
  icon: string;
  chip: string;
  name: string;
  sub: string;
  cardClass: string;
  hrefLink: string;
}

interface PathData {
  d: string;
  sx: number;
  sy: number;
}

/* ---------------------------------- Data ---------------------------------- */

const subCompanies: SubCompany[] = [
  {
    id: "auto",
    icon: "🚗",
    chip: "Automotive",
    name: "Nutech Automotive",
    sub: "Tools, Equipment & Service Excellence",
    cardClass: styles.cardAuto,
    hrefLink: "/companies/nutech-automotive",
  },
  {
    id: "solar",
    icon: "☀️",
    chip: "Energy",
    name: "Nutech Solar &amp; Power",
    sub: "Renewable Energy Solutions",
    cardClass: styles.cardSolar,
    hrefLink: "/companies/nutech-solar",
  },
  {
    id: "dist",
    icon: "📦",
    chip: "Distribution",
    name: "Nutech Distribution",
    sub: "Computer Hardware & Consumer Goods",
    cardClass: styles.cardDist,
    hrefLink: "/companies/nutech-distribution",
  },
  {
    id: "logi",
    icon: "🚚",
    chip: "Logistics",
    name: "Nutech Logistics",
    sub: "Shipping, Exporting & Customs",
    cardClass: styles.cardLogi,
    hrefLink: "/companies/nutech-logistics",
  },
  {
    id: "tele",
    icon: "📡",
    chip: "Telecom",
    name: "Nutech Telecom",
    sub: "Connectivity & Telecommunication Infrastructure",
    cardClass: styles.cardTele,
    hrefLink: "/companies/nutech-telecom",
  },
  {
    id: "tech",
    icon: "💻",
    chip: "Technology",
    name: "Nutech Technologies",
    sub: "Software Development, Cloud Solutions & AI",
    cardClass: styles.cardTech,
    hrefLink: "/companies/nutech-technologies",
  },
];

/* ---------------------------------- Icons --------------------------------- */

function HubIcon(): React.ReactElement {
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

/* --------------------------------- Component ------------------------------ */

interface CompaniesBubbleProps {
  companies?: SubCompany[];
  label?: string;
}

export default function CompaniesBubble({
  companies = subCompanies,
  label = "Open our companies menu",
}: CompaniesBubbleProps): React.ReactElement {
  const [open, setOpen] = useState<boolean>(false);
  const [paths, setPaths] = useState<(PathData | null)[]>([]);

  const bubbleRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const computeLines = useCallback(() => {
    if (!bubbleRef.current) return;
    const bubbleRect = bubbleRef.current.getBoundingClientRect();
    const bx = bubbleRect.left + bubbleRect.width / 2;
    const by = bubbleRect.top + bubbleRect.height / 2;

    const next: (PathData | null)[] = cardRefs.current.map((el) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      const sx = r.right;
      const sy = r.top + r.height / 2;
      const mx = (sx + bx) / 2;
      return { d: `M ${sx} ${sy} C ${mx} ${sy}, ${mx} ${by}, ${bx} ${by}`, sx, sy };
    });
    setPaths(next);
  }, []);

  useLayoutEffect(() => {
    if (!open) return;
    computeLines();
    const raf = requestAnimationFrame(computeLines);
    return () => cancelAnimationFrame(raf);
  }, [open, computeLines]);

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

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent): void {
      if (e.key === "Escape") {
        setOpen(false);
        bubbleRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) cardRefs.current[0]?.focus();
  }, [open]);

  return (
    <>
      {open && (
        <div className={styles.backdrop} onClick={() => setOpen(false)} aria-hidden="true" />
      )}

      {open && (
        <svg className={styles.lines} aria-hidden="true">
          {paths.map((p, i) =>
            p ? (
              <g
                key={companies[i]?.id ?? i}
                style={{ "--chub-delay": `${i * 45}ms` } as React.CSSProperties}
              >
                <path d={p.d} pathLength={1} className={styles.line} />
                <circle cx={p.sx} cy={p.sy} r="3.5" className={styles.node} />
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
              style={{ "--chub-delay": `${i * 45}ms` } as React.CSSProperties}
            >
              <Link
                href={c.hrefLink}
                role="menuitem"
                ref={(el) => { cardRefs.current[i] = el; }}
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