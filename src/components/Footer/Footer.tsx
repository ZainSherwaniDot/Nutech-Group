import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { subCompanies } from "@/data/companies";
import styles from "./Footer.module.css";

const QUICK_LINKS = [
  { label: "Vendors", href: "/vendors" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const MEA_MARKETS = [
  "UAE",
  "Saudi Arabia",
  "Qatar",
  "Oman",
  "Kuwait",
  "Bahrain",
  "Egypt",
  "Jordan",
  "Morocco",
  "Nigeria",
  "Kenya",
  "South Africa",
];

export default function Footer() {
  return (
    <footer className={`${styles.mainFooter} overlaySection`}>
      <div className={styles.footerTop}>
        <div className={styles.brandColumn}>
          <Link href="/" className={styles.logoLink} aria-label="Nutech Group home">
            <Image src="/logo.png" alt="Nutech Group" width={166} height={48} />
          </Link>

          <p className={styles.brandText}>
            Nutech Group brings focused companies together across automotive,
            energy, distribution, logistics, telecom, and technology to serve
            practical business needs across the MEA region.
          </p>

          <div className={styles.contactList} aria-label="Nutech Group contact details">
            <a href="mailto:info@nutech-group.com">
              <Mail aria-hidden="true" size={17} />
              info@nutech-group.com
            </a>
            <a href="tel:+971555183349">
              <Phone aria-hidden="true" size={17} />
              +971555183349
            </a>
            <span>
              <MapPin aria-hidden="true" size={17} />
              Serving the MEA region
            </span>
          </div>
        </div>

        <nav className={styles.linkColumns} aria-label="Footer navigation">
          <div>
            <h2>Companies</h2>
            <ul>
              {subCompanies.map(({ id, name, hrefLink }) => (
                <li key={id}>
                  <Link href={hrefLink}>Nutech {name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Group</h2>
            <ul>
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <section className={styles.mapCard} aria-labelledby="footer-map-title">
          <div className={styles.mapHeader}>
            <p>MEA Coverage</p>
            <h2 id="footer-map-title">Markets we are built to serve.</h2>
          </div>

          <div className={styles.mapFrame}>
            <svg
              className={styles.regionMap}
              viewBox="0 0 640 360"
              role="img"
              aria-labelledby="mea-map-title mea-map-desc"
            >
              <title id="mea-map-title">Map highlighting Middle East and Africa focus markets</title>
              <desc id="mea-map-desc">
                A stylized outline map of Africa and the Middle East with
                markers for representative MEA countries.
              </desc>

              <path
                className={styles.gridLine}
                d="M70 72H560M70 144H560M70 216H560M70 288H560"
              />
              <path
                className={styles.gridLine}
                d="M130 38V320M230 38V320M330 38V320M430 38V320M530 38V320"
              />

              <path
                className={styles.landMuted}
                d="M82 58C140 30 224 32 295 50C327 58 348 76 342 94C300 101 256 94 219 103C172 115 126 105 91 88C72 79 66 66 82 58Z"
              />
              <path
                className={styles.landMuted}
                d="M374 62C435 38 520 54 580 94C604 110 599 137 570 151C520 176 456 159 424 130C401 109 368 94 356 76C352 70 359 66 374 62Z"
              />

              <path
                className={styles.landHighlight}
                d="M111 91C139 70 178 61 223 61C256 61 286 67 309 80C332 93 345 111 343 132C342 144 335 151 330 158C352 153 377 159 398 171C376 183 358 194 350 216C340 243 321 266 302 290C288 309 279 332 248 330C218 328 198 306 191 279C184 256 168 245 145 242C117 238 93 221 84 194C76 170 83 145 95 123C101 112 101 99 111 91Z"
              />
              <path
                className={styles.landHighlight}
                d="M357 101C374 91 395 93 408 108L437 115C464 123 487 147 493 171C500 194 486 216 458 225L414 235C392 240 371 221 372 198L377 178C369 163 350 151 344 132C339 118 342 107 357 101Z"
              />
              <path
                className={styles.landHighlight}
                d="M386 129L432 123C453 128 474 147 482 169L465 214L417 225L379 180L369 153L386 129Z"
              />
              <path
                className={styles.landHighlight}
                d="M385 247C397 263 404 286 395 307C388 324 371 318 372 297C373 276 377 258 385 247Z"
              />
              <path
                className={styles.boundaryLine}
                d="M338 128C345 150 362 164 377 178"
              />
              <path
                className={styles.boundaryLine}
                d="M344 132C330 140 313 139 296 132"
              />

              <path
                className={styles.routeLine}
                d="M456 166C398 165 331 178 257 205C224 217 202 224 181 204"
              />
              <path
                className={styles.routeLine}
                d="M456 166C405 207 352 244 252 312"
              />
              <path
                className={styles.routeLine}
                d="M456 166C395 130 350 116 317 125"
              />

              <g className={styles.mapPin} transform="translate(456 166)">
                <circle className={styles.pinHalo} r="13" />
                <circle className={styles.pinDot} r="4" />
                <line className={styles.pinLeader} x1="0" y1="0" x2="34" y2="24" />
                <text x="40" y="29">UAE</text>
              </g>
              <g className={styles.mapPin} transform="translate(407 169)">
                <circle className={styles.pinDot} r="4" />
                <line className={styles.pinLeader} x1="0" y1="0" x2="-44" y2="10" />
                <text x="-50" y="14" textAnchor="end">Saudi Arabia</text>
              </g>
              <g className={styles.mapPin} transform="translate(440 157)">
                <circle className={styles.pinDot} r="4" />
                <line className={styles.pinLeader} x1="0" y1="0" x2="46" y2="6" />
                <text x="52" y="10">Qatar</text>
              </g>
              <g className={styles.mapPin} transform="translate(462 194)">
                <circle className={styles.pinDot} r="4" />
                <line className={styles.pinLeader} x1="0" y1="0" x2="40" y2="30" />
                <text x="46" y="35">Oman</text>
              </g>
              <g className={styles.mapPin} transform="translate(423 134)">
                <circle className={styles.pinDot} r="4" />
                <line className={styles.pinLeader} x1="0" y1="0" x2="42" y2="-20" />
                <text x="48" y="-18">Kuwait</text>
              </g>
              <g className={styles.mapPin} transform="translate(435 146)">
                <circle className={styles.pinDot} r="4" />
                <line className={styles.pinLeader} x1="0" y1="0" x2="48" y2="-7" />
                <text x="54" y="-4">Bahrain</text>
              </g>
              <g className={styles.mapPin} transform="translate(363 118)">
                <circle className={styles.pinDot} r="4" />
                <line className={styles.pinLeader} x1="0" y1="0" x2="22" y2="-22" />
                <text x="28" y="-23">Jordan</text>
              </g>
              <g className={styles.mapPin} transform="translate(317 125)">
                <circle className={styles.pinDot} r="4" />
                <line className={styles.pinLeader} x1="0" y1="0" x2="-34" y2="-20" />
                <text x="-40" y="-21" textAnchor="end">Egypt</text>
              </g>
              <g className={styles.mapPin} transform="translate(128 102)">
                <circle className={styles.pinDot} r="4" />
                <line className={styles.pinLeader} x1="0" y1="0" x2="-26" y2="-18" />
                <text x="-32" y="-19" textAnchor="end">Morocco</text>
              </g>
              <g className={styles.mapPin} transform="translate(181 204)">
                <circle className={styles.pinDot} r="4" />
                <line className={styles.pinLeader} x1="0" y1="0" x2="-30" y2="22" />
                <text x="-36" y="27" textAnchor="end">Nigeria</text>
              </g>
              <g className={styles.mapPin} transform="translate(330 230)">
                <circle className={styles.pinDot} r="4" />
                <line className={styles.pinLeader} x1="0" y1="0" x2="28" y2="18" />
                <text x="34" y="23">Kenya</text>
              </g>
              <g className={styles.mapPin} transform="translate(252 312)">
                <circle className={styles.pinDot} r="4" />
                <line className={styles.pinLeader} x1="0" y1="0" x2="28" y2="18" />
                <text x="34" y="23">South Africa</text>
              </g>
            </svg>
          </div>

          <div className={styles.marketChips} aria-label="Representative MEA markets">
            {MEA_MARKETS.map((market) => (
              <span key={market}>{market}</span>
            ))}
          </div>
        </section>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2026 Nutech Group. All rights reserved.</p>
        <div>
          <Link href="https://ZainSherwani.com" target="_blank" rel="noopener" >Developed by ZainSherwani.com</Link>
        </div>
      </div>
    </footer>
  );
}
