import { TextLink } from "~/components/TextLink";

export const experiences = [
  {
    id: "learning",
    duration: "Jan 2024 - Present",
    company: "YetWise",
    role: "Full Stack Developer",
    companyLink: null,
    description: (
      <>
        Freelance developer, building fullstack projects. Worked with designers,
        clients, and all the fancy tools to develop projects like{" "}
        <TextLink href="/projects#temple">Temple</TextLink>,{" "}
        <TextLink href="/projects#inmeasure">InMeasure</TextLink>,{" "}
        <TextLink href="/projects#mlm">Marvelous Light Media</TextLink>, and{" "}
        <TextLink href="/projects#this">this wonderful site</TextLink>.
      </>
    ),
    tools: [
      "Python",
      "Javascript",
      "TypeScript",
      "Go",
      "HTML & CSS",
      "SQL",
      "React",
      "Next.js",
      "AWS",
    ],
  },
  {
    id: "buffdup",
    duration: "Jul 2023 - Dec 2023",
    company: "Buff'd Up Coatings",
    role: "Founder",
    companyLink: null,
    description: (
      <>
        Dedicated six months to launching a concrete coatings company, learning
        all the ins and outs, planning the whole marketing scheme, and investing
        a lot of money. But it&apos;s best summarized as:{" "}
        <span className="italic">
          Hands-on experience with suppliers and execution challenges.
        </span>
      </>
    ),
    tools: null,
  },
  {
    id: "desirem",
    duration: "Jan 2020 - May 2023",
    company: "Desirem",
    role: "Founder",
    companyLink: null,
    description:
      "Launched an e-commerce venture that danced on the tightrope of financial equilibrium for three glorious years. Along the way learning the hard way: pricing, advertising, marketing, and what makes a business valuable in the first place.",
    tools: null,
  },
];
