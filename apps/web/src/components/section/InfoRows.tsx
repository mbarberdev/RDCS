import styles from "./InfoRows.module.css";

type InfoRowsProps = {
  rows: { label: string; value: string }[];
};

// Label/value rows rendered as a description list, like a spec sheet.
export function InfoRows({ rows }: InfoRowsProps) {
  return (
    <dl className={styles.rows}>
      {rows.map((row) => (
        <div key={row.label} className={styles.row}>
          <dt className={styles.label}>{row.label}</dt>
          <dd className={styles.value}>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
