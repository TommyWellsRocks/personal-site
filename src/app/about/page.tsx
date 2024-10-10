import { PageContainer } from "~/components/PageContainer";
import { PageHeader } from "~/components/PageHeader";
import { ExperienceSection } from "~/components/about/ExperienceSection";
import { ValuesSection } from "~/components/about/ValuesSection";
import { FreeTimeSection } from "~/components/about/FreeTimeSection";

export default function About() {
  return (
    <PageContainer>
      <PageHeader header="About" />

      <ExperienceSection />

      <ValuesSection />

      <FreeTimeSection />
    </PageContainer>
  );
}
