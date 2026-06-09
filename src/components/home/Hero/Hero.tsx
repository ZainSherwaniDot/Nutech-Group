'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

// ── Data ──────────────────────────────────────────────────────────────────────
const STATS = [
  { num: '6', suffix: '+',  label: 'Sectors' },
  { num: '20', suffix: '+', label: 'Years Active' },
  { num: '1',  suffix: 'K+', label: 'Employees' },
];

const COMPANIES = [
  {
    id: 'auto',
    icon: '🚗',
    chip: 'Automotive',
    name: <>Nutech<br />Automotive</>,
    sub: 'Tools, Parts & Service Excellence',
    cardClass: styles.cardAuto,
  },
  {
    id: 'solar',
    icon: '☀️',
    chip: 'Energy',
    name: <>Nutech<br />Solar &amp; Power</>,
    sub: 'Renewable Energy Solutions',
    cardClass: styles.cardSolar,
  },
  {
    id: 'dist',
    icon: '💻',
    chip: 'Distribution',
    name: <>Nutech<br />Distribution</>,
    sub: 'Computer Hardware & Consumer Goods',
    cardClass: styles.cardDist,
  },
  {
    id: 'logi',
    icon: '🚚',
    chip: 'Logistics',
    name: <>Nutech<br />Logistics</>,
    sub: 'Shipping, Exporting & Customs',
    cardClass: styles.cardLogi,
  },
  {
    id: 'tele',
    icon: '📡',
    chip: 'Telecom',
    name: <>Nutech<br />Telecom</>,
    sub: 'Connectivity & Telecommunication Infrastructure',
    cardClass: styles.cardTele,
  },
  {
    id: 'tech',
    icon: '✨',
    chip: 'Technology',
    name: <>Nutech<br />Technologies</>,
    sub: 'Software Development, Cloud Solutions & AI',
    cardClass: styles.cardTech,
  },
];

const TICKER_ITEMS = [
  'Nutech Automotive',
  'Nutech Solar & Power',
  'Nutech Distribution',
  'Nutech Logistics',
  'Nutech Telecom',
  'Nutech Technologies',
  'Nutech Group',
];

// ── Canvas animation constants ────────────────────────────────────────────────
const SPACING        = 55;
const INFLUENCE_RADIUS = 180;
const MAX_PUSH       = 28;
const DOT_BASE_SIZE  = 1.2;
const DOT_MAX_SIZE   = 3.8;
const ACCENT  = { r: 0,   g: 212, b: 255 };
const ACCENT2 = { r: 255, g: 107, b: 53  };

// ── Component ─────────────────────────────────────────────────────────────────
export default function Hero() {
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Canvas + spotlight animation
  useEffect(() => {
    const canvas    = canvasRef.current;
    const spotlight = spotlightRef.current;
    if (!canvas || !spotlight) return;

    const ctx = canvas.getContext('2d')!;

    let W: number, H: number, cols: number, rows: number;

    interface Dot {
      ox: number; oy: number;
      x:  number; y:  number;
      vx: number; vy: number;
      size:  number;
      alpha: number;
    }

    interface Ripple {
      x: number; y: number;
      r: number; maxR: number;
      alpha: number; speed: number;
    }

    let dots: Dot[]     = [];
    const mouse           = { x: -9999, y: -9999 };
    const targetMouse     = { x: -9999, y: -9999 };
    let ripples: Ripple[] = [];
    let rafId: number;

    function resize() {
      W = canvas!.width  = window.innerWidth;
      H = canvas!.height = window.innerHeight;
      buildGrid();
    }

    function buildGrid() {
      dots = [];
      cols = Math.ceil(W / SPACING) + 1;
      rows = Math.ceil(H / SPACING) + 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({
            ox: c * SPACING, oy: r * SPACING,
            x:  c * SPACING, y:  r * SPACING,
            vx: 0, vy: 0,
            size: DOT_BASE_SIZE,
            alpha: 0.18 + Math.random() * 0.12,
          });
        }
      }
    }

    function updateMouse() {
      mouse.x += (targetMouse.x - mouse.x) * 0.1;
      mouse.y += (targetMouse.y - mouse.y) * 0.1;
    }

    function spawnRipple(x: number, y: number) {
      ripples.push({ x, y, r: 0, maxR: INFLUENCE_RADIUS * 1.6, alpha: 0.5, speed: 3.5 });
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      updateMouse();

      // Ripples
      ripples = ripples.filter(rp => rp.alpha > 0.01);
      for (const rp of ripples) {
        rp.r     += rp.speed;
        rp.alpha *= 0.93;
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0,212,255,${rp.alpha * 0.3})`;
        ctx.lineWidth   = 1;
        ctx.stroke();
      }

      // Grid lines (faint, distance-aware)
      for (let r = 0; r < rows - 1; r++) {
        for (let c = 0; c < cols - 1; c++) {
          const d  = dots[r * cols + c];
          const dr = dots[(r + 1) * cols + c];
          const dc = dots[r * cols + c + 1];
          const distH     = Math.hypot(d.x - mouse.x, d.y - mouse.y);
          const lineAlpha = Math.max(0, 0.06 - (distH / INFLUENCE_RADIUS) * 0.04);
          if (lineAlpha > 0.005) {
            ctx.strokeStyle = `rgba(0,212,255,${lineAlpha})`;
            ctx.lineWidth   = 0.5;
            ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(dc.x, dc.y); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(dr.x, dr.y); ctx.stroke();
          }
        }
      }

      // Dots
      for (const d of dots) {
        const dx        = d.ox - mouse.x;
        const dy        = d.oy - mouse.y;
        const dist      = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist / INFLUENCE_RADIUS);
        const push      = influence * MAX_PUSH;

        const txPush = dist > 0 ? d.ox - (dx / dist) * push : d.ox;
        const tyPush = dist > 0 ? d.oy - (dy / dist) * push : d.oy;

        d.vx += (txPush - d.x) * 0.18;
        d.vy += (tyPush - d.y) * 0.18;
        d.vx *= 0.72;
        d.vy *= 0.72;
        d.x  += d.vx;
        d.y  += d.vy;

        d.size = DOT_BASE_SIZE + influence * (DOT_MAX_SIZE - DOT_BASE_SIZE);

        const angle = Math.atan2(dy, dx);
        const blend = (Math.sin(angle) * 0.5 + 0.5) * influence;
        const r2    = Math.round(ACCENT.r + (ACCENT2.r - ACCENT.r) * blend);
        const g2    = Math.round(ACCENT.g + (ACCENT2.g - ACCENT.g) * blend);
        const b2    = Math.round(ACCENT.b + (ACCENT2.b - ACCENT.b) * blend);
        const alpha = d.alpha + influence * 0.65;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r2},${g2},${b2},${alpha})`;
        ctx.fill();

        if (influence > 0.6) {
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.size + 2.5, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${r2},${g2},${b2},${influence * 0.25})`;
          ctx.lineWidth   = 1;
          ctx.stroke();
        }
      }

      rafId = requestAnimationFrame(draw);
    }

    function onMouseMove(e: MouseEvent) {
      targetMouse.x = e.clientX;
      targetMouse.y = e.clientY;
      if (spotlight) {
        spotlight.style.left = e.clientX + 'px';
        spotlight.style.top  = e.clientY + 'px';
      }
    }

    function onClick(e: MouseEvent) {
      spawnRipple(e.clientX, e.clientY);
      for (let i = 0; i < 3; i++) {
        setTimeout(() => spawnRipple(
          e.clientX + (Math.random() - 0.5) * 60,
          e.clientY + (Math.random() - 0.5) * 60,
        ), i * 80);
      }
    }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onClick);
    window.addEventListener('resize', resize);
    resize();
    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onClick);
      window.removeEventListener('resize', resize);
    };
  }, []);


  return (
    <div className={styles.root}>
      <div className={styles.pageWrapper}>

        {/* Interactive background canvas */}
        <canvas ref={canvasRef} className={styles.bgCanvas} />

        {/* Glow blobs */}
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />

        {/* ── Hero ── */}
        <section className={styles.hero}>

          {/* LEFT */}
          <div className={styles.heroLeft}>
            <div className={styles.eyebrow}>Conglomerate of the MEA Region</div>

            <h1 className={styles.heroTitle}>
              {/* Diversified<br />
              <span className={styles.accentLine}>excellence</span> */}
              Empowering<br />
              <span className={styles.accentLine}>Tomorrow&apos;s</span>
              Industries
            </h1>

            <p className={styles.heroDesc}>
              Nutech Group operates six industry-defining companies across automotive,
              energy, distribution, logistics, telecom, and technology — driving growth
              across the MEA region with diversified excellence.
            </p>

            <div className={styles.heroActions}>
              <button className={styles.btnPrimary}>
                Explore Our Group
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              <button className={styles.btnSecondary}>Talk to an Expert →</button>
            </div>

            <div className={styles.stats}>
              {STATS.map(({ num, suffix, label }) => (
                <div key={label}>
                  <div className={styles.statNum}>
                    {num}<span>{suffix}</span>
                  </div>
                  <div className={styles.statLabel}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – Company Cards */}
          <div className={styles.heroRight}>
            {COMPANIES.map(({ id, icon, chip, name, sub, cardClass }) => (
              <Link
                key={id}
                href="#"
                className={`${styles.companyCard} ${cardClass}`}
              >
                <span className={styles.cardIcon}>{icon}</span>
                <div className={styles.chip}>{chip}</div>
                <div className={styles.cardName}>{name}</div>
                <div className={styles.cardSub}>{sub}</div>
                <span className={styles.cardArrow}>↗</span>
              </Link>
            ))}
          </div>

        </section>

        {/* ── Ticker ── */}
        <div className={styles.tickerWrap}>
          <div className={styles.tickerTrack}>
            {/* Render twice for seamless loop */}
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className={styles.tickerItem}>{item}</span>
            ))}
          </div>
        </div>

        {/* Mouse spotlight */}
        <div ref={spotlightRef} className={styles.mouseSpotlight} />

      </div>
    </div>
  );
}
