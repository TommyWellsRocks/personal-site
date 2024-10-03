import { Section } from "../Section";
import { SectionHeader } from "../SectionHeader";
import { ToolList } from "../ToolList";

export function ExperienceSection() {
  const experiences = [
    {
      id: "learning",
      duration: "Jan 2024 - Present",
      company: "",
      role: "Fulltime Explorer",
      companyLink: null,
      description:
        "Learning front and backend software development. Through hands-on projects like Temple and website for Marvelous Light Media, I've had the opportunity to collaborate with others to design and build full stack applications. Along the way, I've worked with version control, containerization, SQL databases, testing frameworks, production deployments, web scraping, design tools, and various popular libraries.",
      tools: [
        "Python",
        "Javascript",
        "TypeScript",
        "React",
        "Go",
        "HTML & CSS",
        "SQL",
        "Next.js",
      ],
    },
    {
      id: "buffdup",
      duration: "Jul 2023 - Dec 2023",
      company: "Buff'd Up Coatings",
      role: "Founder",
      companyLink: null,
      description:
        "Dedicated six months to launching a concrete coatings company, focusing on market research, business strategy, and branding. Gained hands-on experience in business development, supplier relations, and the value of thorough preparation.",
      tools: null,
    },
    {
      id: "desirem",
      duration: "Jan 2020 - May 2023",
      company: "Desirem",
      role: "Founder",
      companyLink: null,
      description:
        "Launched and managed all aspects of an online retail business, achieving 125% annual growth over 3 years. Optimized product selection and inventory management, reducing fulfillment costs by 10%. Enhanced customer experience with data-driven landing page and funnel optimizations. Led successful ad campaigns across Facebook, Instagram, and TikTok, maintaining a 95% customer satisfaction rating.",
      tools: null,
    },
  ];

  return (
    <Section refId="experience">
      <SectionHeader header="Experience" />

      <div className="flex flex-col gap-y-10">
        {experiences.map((position, index) => (
          <div key={index} className="flex scroll-mt-[100px]" id={position.id}>
            <span className="min-w-[200px] text-sm text-slate-500">
              {position.duration.toUpperCase()}
            </span>

            <div className="flex flex-col gap-y-2">
              <span className="text-slate-200">
                {position.role}
                {position.company ? ` @ ${position.company}` : ""}
              </span>
              <span className="text-sm font-light">{position.description}</span>
              {position.tools?.length ? (
                <ToolList tools={position.tools} />
              ) : null}
            </div>
          </div>
        ))}
      </div>
      {/* <LinkTo label="Full Résumé" href="" /> */}
    </Section>
  );
}
