"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./CompaniesBubble.module.css";
import { subCompanies, type SubCompany } from "@/data/companies";


/* ---------------------------------- Types --------------------------------- */

interface PathData {
  d: string;
  sx: number;
  sy: number;
}

/* --------------------------------- Component ------------------------------ */

interface CompaniesBubbleProps {
  companies?: SubCompany[];
  label?: string;
}

export default function CompaniesBubble({
  companies = subCompanies,
  label = "View our companies",
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
    <div className={styles.mainCompaniesBubble}>
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
        <ul className={styles.cardList} ref={listRef} aria-label="Our companies">
          {companies.map(({ id, icon, name, sub, hrefLink }, i) => (
            <li
              key={id}
              className={styles.cardItem}
              role="none"
              style={{ "--chub-delay": `${i * 45}ms` } as React.CSSProperties}
            >
              <Link
                href={hrefLink}
                ref={(el) => { cardRefs.current[i] = el; }}
                className={styles.card}
                onClick={() => setOpen(false)}
              >
                <span className={styles.cardIcon}><Image src={icon} alt="" width={256} height={256} /></span>
                <span className={styles.cardText}>
                  <span className={styles.cardTitle}>Nutech {name}</span>
                  <span className={styles.cardDesc}>{sub}</span>
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
        <Image className={styles.nutechIcon} src="/icon.png" alt="Nutech Group Icon" width={64} height={64} priority />
      </button>
    </div>
  );
}