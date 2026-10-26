import { overview, sections } from "@/content/site";
import { InfoRows } from "@/components/section/InfoRows";
import { Section } from "@/components/section/Section";
import styles from "./ProjectOverview.module.css";

export function ProjectOverview() {
  return (
    <Section section={sections.project} title="Project" className={styles.project}>
      <div className={styles.content}>
        <p className={styles.purpose}>{overview.purpose}</p>
        <InfoRows rows={overview.rows} />
      </div>
    </Section>
  );
}
