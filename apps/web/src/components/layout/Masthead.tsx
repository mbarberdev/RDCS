import { identity } from "@/content/site";
import { SectionNav } from "./SectionNav";
import styles from "./Masthead.module.css";

export function Masthead() {
  return (
    <header className={styles.masthead}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.brand}>
          <a className={styles.wordmark} href="#top">
            {identity.acronym}
          </a>
          <span className={styles.institution}>{identity.institution}</span>
        </p>
        <SectionNav />
      </div>
    </header>
  );
}
