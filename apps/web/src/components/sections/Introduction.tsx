import { identity, introduction } from "@/content/site";
import styles from "./Introduction.module.css";

export function Introduction() {
  return (
    <section id="top" className={styles.intro} aria-labelledby="intro-heading">
      <h1 id="intro-heading" className={styles.heading}>
        {identity.name}
      </h1>
      <div className={styles.details}>
        <p className={styles.sponsorship}>{introduction.sponsorship}</p>
        <p className={styles.description}>{introduction.description}</p>
      </div>
    </section>
  );
}
