import Link from "next/link";
import { Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { subCompanies } from "@/data/companies";
import styles from "./FinalCTA.module.css";

const CONTACT_EMAIL = "info@nutech-group.com";
const CONTACT_PHONE = "+971555183349";

const finalCtaThemes = {
  main: "main",
  automotive: "automotive",
  auto: "automotive",
  solar: "solar",
  distribution: "distribution",
  dist: "distribution",
  logistics: "logistics",
  logi: "logistics",
  telecom: "telecom",
  tele: "telecom",
  technology: "tech",
  tech: "tech",
  technologies: "tech",
} as const;

export type FinalCTATheme = keyof typeof finalCtaThemes;
type FinalCTAThemeInput = FinalCTATheme | (string & {});

interface FinalCTAProps {
  theme?: FinalCTAThemeInput;
}

export default function FinalCTA({ theme = "main" }: FinalCTAProps) {
  const activeTheme = finalCtaThemes[theme as FinalCTATheme] ?? "main";

  return (
    <section
      className={styles.mainCTA}
      data-theme={activeTheme}
      aria-labelledby="final-cta-title"
    >
      <div className={styles.copyColumn}>
        <p className={styles.eyebrow}>Start The Conversation</p>

        <h2 id="final-cta-title" className={styles.title}>
          Let&apos;s build the future together.
        </h2>

        <p className={styles.lead}>
          Whether you are exploring a partnership, sourcing a solution, or
          planning a project across one of our markets, Nutech Group is ready to
          connect the right company, team, and expertise around your next move.
        </p>

        <div className={styles.contactStack} aria-label="Direct contact details">
          <a href={`mailto:${CONTACT_EMAIL}`} className={styles.contactItem}>
            <span>
              <Mail aria-hidden="true" size={18} />
            </span>
            {CONTACT_EMAIL}
          </a>
          <a href={`tel:${CONTACT_PHONE}`} className={styles.contactItem}>
            <span>
              <Phone aria-hidden="true" size={18} />
            </span>
            {CONTACT_PHONE}
          </a>
          <span className={styles.contactItem}>
            <span>
              <MapPin aria-hidden="true" size={18} />
            </span>
            Serving the MEA region
          </span>
        </div>

        <div className={styles.companyStrip} aria-label="Nutech Group companies">
          {subCompanies.map(({ id, name, hrefLink }) => (
            <Link key={id} href={hrefLink}>
              {name}
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.formShell}>
        <form
          className={styles.formCard}
          action={`mailto:${CONTACT_EMAIL}`}
          method="post"
          encType="text/plain"
        >
          <div className={styles.formHeader}>
            <span className={styles.formIcon}>
              <Sparkles aria-hidden="true" size={22} />
            </span>
            <div>
              <p>Project inquiry</p>
              <h3>Tell us where you want to go next.</h3>
            </div>
          </div>

          <div className={styles.fieldGrid}>
            <label className={styles.field}>
              <span>Name</span>
              <input name="name" type="text" autoComplete="name" required />
            </label>

            <label className={styles.field}>
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
          </div>

          <label className={styles.field}>
            <span>Company</span>
            <input name="company" type="text" autoComplete="organization" />
          </label>

          <label className={styles.field}>
            <span>Area of interest</span>
            <select name="area" defaultValue="">
              <option value="" disabled>
                Choose a focus
              </option>
              {subCompanies.map(({ id, name }) => (
                <option key={id} value={name}>
                  Nutech {name}
                </option>
              ))}
              <option value="Group partnership">Group partnership</option>
            </select>
          </label>

          <label className={styles.field}>
            <span>Message</span>
            <textarea
              name="message"
              rows={5}
              placeholder="Share a few details about your project, requirement, or partnership idea."
              required
            />
          </label>

          <button className={styles.submitButton} type="submit">
            Send inquiry
            <Send aria-hidden="true" size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}
