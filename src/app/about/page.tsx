import AboutNutechGroup from "@/components/home/AboutNutechGroup/AboutNutechGroup";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <div className={styles.mainAboutPage}>
      <AboutNutechGroup />
      <FinalCTA />
    </div>
  );
}