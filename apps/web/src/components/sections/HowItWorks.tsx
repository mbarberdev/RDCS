import { howItWorks } from "@/content/site";
import { ConceptDiagram } from "./ConceptDiagram";
import styles from "./HowItWorks.module.css";

export function HowItWorks() {
  return (
    <section
      id={howItWorks.id}
      className={`container ${styles.section}`}
      aria-labelledby="how-it-works-heading"
    >
      <h2 id="how-it-works-heading">{howItWorks.title}</h2>

      <figure className={styles.figure}>
        <ConceptDiagram description={howItWorks.diagram.description} />
        <figcaption>{howItWorks.diagram.caption}</figcaption>
      </figure>

      <div className={styles.text}>
        <ol className={styles.steps}>
          {howItWorks.steps.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
        <div className={styles.safety}>
          <h3>{howItWorks.safetyTitle}</h3>
          <p>{howItWorks.safety}</p>
          <p>{howItWorks.stretch}</p>
        </div>
      </div>
    </section>
  );
}
