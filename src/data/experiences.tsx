import { TextLink } from "~/components/TextLink";

export const experiences = [
  {
    id: "learning",
    duration: "Jan 2024 - Present",
    company: "",
    role: "Fulltime Explorer",
    companyLink: null,
    description: (
      <>
        Learning front and backend software development. Through hands- on
        projects like <TextLink href="/projects#temple">Temple</TextLink>,{" "}
        <TextLink href="/projects#inmeasure">InMeasure</TextLink>, a website for{" "}
        <TextLink href="/projects#mlm">Marvelous Light Media</TextLink>, and{" "}
        <TextLink href="/projects#this">this wonderful site</TextLink>,
        I&apos;ve had the opportunity to collaborate with others to design and
        build full stack applications. Along the way, I&apos;ve picked up a few
        languages, and had an opportunity to work with all the go-to tools.
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
          &apos;Hands-on experience with suppliers and execution challenges.&apos;
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
