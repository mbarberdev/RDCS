import { Masthead } from "@/components/layout/Masthead";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Introduction } from "@/components/sections/Introduction";
import { ProjectOverview } from "@/components/sections/ProjectOverview";
import { SystemOverview } from "@/components/sections/SystemOverview";
import styles from "./page.module.css";

// Team and Milestones components exist in components/sections but are not
// rendered until approved content is available.
export default function Home() {
  return (
    <>
      <Masthead />
      <main id="main" tabIndex={-1} className={`container ${styles.main}`}>
        <Introduction />
        <ProjectOverview />
        <SystemOverview />
      </main>
      <SiteFooter />
    </>
  );
}
