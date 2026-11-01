import { footer } from "@/content/site";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={`container ${styles.footer}`}>
      <p>{footer.identification}</p>
      <p>{footer.disclaimer}</p>
    </footer>
  );
}
