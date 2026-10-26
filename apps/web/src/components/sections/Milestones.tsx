import { milestones, sections } from "@/content/site";
import { PlaceholderNote } from "@/components/section/PlaceholderNote";
import { Section } from "@/components/section/Section";
import styles from "./Milestones.module.css";

// Not rendered yet: add to app/page.tsx and `navItems` once confirmed
// milestones, dates, and status replace the placeholders.
export function Milestones() {
  return (
    <Section section={sections.milestones} title="Milestones" className={styles.milestones}>
      <PlaceholderNote>
        Milestone names, dates, and status are pending confirmation. The stages
        listed are generic placeholders, not a published schedule.
      </PlaceholderNote>
      <ol className={styles.list}>
        {milestones.map((milestone) => (
          <li key={milestone.title} className={styles.item}>
            <h3 className={styles.title}>{milestone.title}</h3>
            <dl className={styles.meta}>
              <div>
                <dt>Date</dt>
                <dd>{milestone.date}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{milestone.status}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ol>
    </Section>
  );
}
