import { sections, systemEntries } from "@/content/site";
import { Section } from "@/components/section/Section";
import styles from "./SystemOverview.module.css";

export function SystemOverview() {
  return (
    <Section section={sections.system} title="System" className={styles.system}>
      <ul className={styles.entries}>
        {systemEntries.map((entry) => (
          <li key={entry.name} className={styles.entry}>
            <h3 className={styles.name}>{entry.name}</h3>
            <p>{entry.function}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
