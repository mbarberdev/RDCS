import { intro } from "@/content/site";
import styles from "./Intro.module.css";

export function Intro() {
  return (
    <section id="top" className={`container ${styles.intro}`} aria-labelledby="intro-heading">
      <h1 id="intro-heading" className={styles.heading}>
        {intro.name}
      </h1>
      <p className={styles.summary}>{intro.summary}</p>
      <div className={styles.context}>
        <p>{intro.affiliation}</p>
        <p>{intro.problem}</p>
      </div>
    </section>
  );
}
