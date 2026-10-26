import type { ReactNode } from "react";
import styles from "./PlaceholderNote.module.css";

type PlaceholderNoteProps = {
  children: ReactNode;
};

// Visible marker for content that is waiting on approved material.
export function PlaceholderNote({ children }: PlaceholderNoteProps) {
  return (
    <p className={styles.note}>
      <span className={styles.tag}>Editorial placeholder</span>
      <span>{children}</span>
    </p>
  );
}
