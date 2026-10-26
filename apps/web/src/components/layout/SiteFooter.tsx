import { footer } from "@/content/site";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>{footer.identification}</p>
        <p className={styles.disclaimer}>{footer.disclaimer}</p>
      </div>
    </footer>
  );
}
