import Image from "next/image";
import { progress } from "@/content/site";
import styles from "./Progress.module.css";

export function Progress() {
  const { update } = progress;

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

      <article className={styles.update} aria-labelledby="update-heading">
        <div className={styles.text}>
          <p className={styles.updateDate}>{update.date}</p>
          <h3 id="update-heading">{update.title}</h3>
          {update.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className={styles.figures}>
          {update.images.map((image) => (
            <figure key={image.src} className={styles.figure}>
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
                sizes="(min-width: 60rem) 40vw, 100vw"
              />
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </article>
    </section>
  );
}
