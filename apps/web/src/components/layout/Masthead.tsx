import { intro, navItems } from "@/content/site";
import styles from "./Masthead.module.css";

export function Masthead() {
  return (
    <header className={styles.masthead}>
      <div className={`container ${styles.inner}`}>
        <a className={styles.wordmark} href="#top">
          {intro.acronym}
        </a>
        <nav aria-label="Page sections">
          <ul className={styles.list}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a className={styles.link} href={`#${item.id}`}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
