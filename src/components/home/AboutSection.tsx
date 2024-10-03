import { Section } from "../Section";
import { SectionHeader } from "../SectionHeader";
import { TextLink } from "../TextLink";

export function AboutSection() {
  return (
    <Section>
      <SectionHeader header="about" />

      <div className="flex flex-col gap-y-4">
        <span>Hi, I&apos;m Tommy!</span>

        <span>
          I&apos;ve been blessed with an unconventional journey. Instead of college,
          I spent several years diving into entrepreneurship—ventures like{" "}
          <TextLink href="#desirem">
            dropshipping, arbitrage, reselling
          </TextLink>
          , and even <TextLink href="#buffdup">concrete coatings</TextLink>, far
          outside my comfort zone. Though they didn&apos;t all succeed, I wouldn&apos;t
          consider them failures. I learned invaluable lessons on resilience,
          the requirement of lifelong learning, and the power of loving the
          process.
        </span>

        <span>
          Since the start of 2024, I&apos;ve immersed myself in{" "}
          <TextLink href="#learning">code 24/7</TextLink>, and yes, even I dream
          about it. From the beginning, I was in love. I started with python,
          but after trying to code a web app with it 🤣, I then learned
          Javascript, Typescript, React, and recently, Go.
        </span>

        <span>
          I love working across both front and back end. Building, optimizing,
          and simplifying is my obsession. Figuring out ways to make life
          simpler AND more efficient... that, really, really gets me excited.
        </span>

        <span>
          Outside of work, you&apos;ll find me at the gym, binging movies, or jamming
          to the Bee Gees on a sunday drive.
        </span>
      </div>
    </Section>
  );
}
