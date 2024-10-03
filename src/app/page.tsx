import { IntroSection } from "~/components/home/IntroSection";
import { AboutSection } from "~/components/home/AboutSection";
import { ExperienceSection } from "~/components/home/ExperienceSection";
import { ProjectsSection } from "~/components/home/ProjectsSection";

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-[600px] flex-col gap-y-24">
      <IntroSection />

      <AboutSection />

      <ExperienceSection />

      <ProjectsSection />
    </main>
  );
}
