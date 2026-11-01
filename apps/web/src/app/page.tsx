import { Masthead } from "@/components/layout/Masthead";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Intro } from "@/components/sections/Intro";
import { Progress } from "@/components/sections/Progress";
import { Team } from "@/components/sections/Team";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Masthead />
      <main id="main" tabIndex={-1} className={styles.main}>
        <Intro />
        <HowItWorks />
        <Team />
        <Progress />
      </main>
      <SiteFooter />
    </>
  );
}
