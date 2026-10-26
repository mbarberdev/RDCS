import { navItems } from "@/content/site";
import styles from "./SectionNav.module.css";

// In-page section links. Plain anchors, so no client-side JavaScript.
export function SectionNav() {
  return (
    <nav aria-label="Page sections">
      <ul className={styles.list}>
        {navItems.map((item) => (
          <li key={item.id}>
            <a className={styles.link} href={`#${item.id}`}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
