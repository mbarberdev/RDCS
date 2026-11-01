import { team } from "@/content/site";
import styles from "./Team.module.css";

export function Team() {
  return (
    <section id={team.id} className={styles.band} aria-labelledby="team-heading">
      <div className={`container ${styles.inner}`}>
        <h2 id="team-heading">{team.title}</h2>
        <div>
          <ul className={styles.list}>
            {team.members.map((member) => (
              <li key={member.name} className={styles.member}>
                <div>
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={styles.discipline}>{member.discipline}</p>
                </div>
                <p>{member.bio}</p>
              </li>
            ))}
          </ul>
          <p className={styles.advisor}>{team.advisor}</p>
        </div>
      </div>
    </section>
  );
}
