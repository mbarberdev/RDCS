import { roster, sections } from "@/content/site";
import { PlaceholderNote } from "@/components/section/PlaceholderNote";
import { Section } from "@/components/section/Section";
import styles from "./Team.module.css";

// Not rendered yet: add to app/page.tsx and `navItems` once approved names
// and roles replace the placeholder roster.
export function Team() {
  return (
    <Section section={sections.team} title="Team" className={styles.team}>
      <PlaceholderNote>
        Team names and roles will be added once approved. The number of rows
        below does not reflect team size.
      </PlaceholderNote>
      <table className={styles.roster}>
        <caption className="visually-hidden">Project team roster</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Role</th>
            <th scope="col">Focus area</th>
          </tr>
        </thead>
        <tbody>
          {roster.map((member, index) => (
            <tr key={index}>
              <th scope="row" data-label="Name">
                {member.name}
              </th>
              <td data-label="Role">{member.role}</td>
              <td data-label="Focus area">{member.focus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  );
}
