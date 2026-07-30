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
                A stylized regional map with highlighted Africa and Middle East
                areas and markers for representative MEA countries.
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
                d="M192 88C226 56 302 48 350 72C378 86 390 112 372 132C336 172 244 164 200 136C178 122 174 106 192 88Z"
              />
              <path
                className={styles.landMuted}
                d="M392 64C454 40 528 58 570 104C592 128 584 156 546 168C492 184 418 162 390 122C374 98 376 76 392 64Z"
              />

              <path
                className={styles.landHighlight}
                d="M244 108C280 91 323 100 346 129C366 154 369 193 352 226L329 271C313 303 274 316 246 292C225 274 222 240 202 221C181 201 147 194 143 162C139 132 178 112 210 119C225 122 231 114 244 108Z"
              />
              <path
                className={styles.landHighlight}
                d="M371 126C398 116 431 125 448 148L482 193C491 205 486 222 472 228L433 244C416 251 397 241 392 223L382 186C376 166 355 154 360 139C362 133 366 129 371 126Z"
              />
              <path
                className={styles.landHighlight}
                d="M337 103C359 94 387 99 402 118C415 134 409 154 388 160C366 166 337 155 329 136C323 122 326 108 337 103Z"
              />

              <path
                className={styles.routeLine}
                d="M440 178C398 164 358 159 317 171C276 183 242 213 214 250"
              />
              <path
                className={styles.routeLine}
                d="M440 178C399 138 352 122 291 126"
              />

              <g className={styles.mapPin} transform="translate(438 178)">
                <circle className={styles.pinHalo} r="13" />
                <circle className={styles.pinDot} r="4" />
                <text x="17" y="4">UAE</text>
              </g>
              <g className={styles.mapPin} transform="translate(405 180)">
                <circle className={styles.pinDot} r="4" />
                <text x="10" y="19">KSA</text>
              </g>
              <g className={styles.mapPin} transform="translate(386 139)">
                <circle className={styles.pinDot} r="4" />
                <text x="10" y="-7">Jordan</text>
              </g>
              <g className={styles.mapPin} transform="translate(326 145)">
                <circle className={styles.pinDot} r="4" />
                <text x="-45" y="-8">Egypt</text>
              </g>
              <g className={styles.mapPin} transform="translate(219 137)">
                <circle className={styles.pinDot} r="4" />
                <text x="-58" y="-2">Morocco</text>
              </g>
              <g className={styles.mapPin} transform="translate(242 219)">
                <circle className={styles.pinDot} r="4" />
                <text x="-50" y="18">Nigeria</text>
              </g>
              <g className={styles.mapPin} transform="translate(315 238)">
                <circle className={styles.pinDot} r="4" />
                <text x="11" y="5">Kenya</text>
              </g>
              <g className={styles.mapPin} transform="translate(291 300)">
                <circle className={styles.pinDot} r="4" />
                <text x="12" y="5">South Africa</text>
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
          <Link href="/contact">Contact</Link>
          <Link href="/companies">Companies</Link>
        </div>
      </div>
    </footer>
  );
}
