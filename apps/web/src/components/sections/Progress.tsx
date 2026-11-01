import { progress } from "@/content/site";
import styles from "./Progress.module.css";

export function Progress() {
  return (
    <section
      id={progress.id}
      className={`container ${styles.section}`}
      aria-labelledby="progress-heading"
    >
      <div className={styles.text}>
        <h2 id="progress-heading">{progress.title}</h2>
        {progress.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className={styles.goal}>
        <strong className={styles.date}>{progress.goal.date}</strong>
        {progress.goal.label}
      </p>
    </section>
  );
}
