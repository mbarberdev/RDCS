import type { ReactNode } from "react";
import type { SectionLink } from "@/content/site";
import styles from "./Section.module.css";

type SectionProps = {
  section: SectionLink;
  title: string;
  // Each section supplies its own layout; this component only provides the
  // anchor, the heading, and the dividing rule.
  className?: string;
  children: ReactNode;
};

export function Section({ section, title, className, children }: SectionProps) {
  const headingId = `${section.id}-heading`;

  return (
    <section
      id={section.id}
      aria-labelledby={headingId}
      className={className ? `${styles.section} ${className}` : styles.section}
    >
      <h2 id={headingId} className={styles.title}>
        {title}
      </h2>
      {children}
    </section>
  );
}
