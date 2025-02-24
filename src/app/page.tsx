import { PageContainer } from "~/components/PageContainer";
import { TextLink } from "~/components/TextLink";

export default function Home() {
  return (
    <PageContainer>
      <span className="fancy-text-shadow text-5xl font-bold text-slate-200">
        Tommy Wells
      </span>

      <section className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-6 leading-8">
          <span>Howdy, I&apos;m Tommy!</span>

          <span>
            I&apos;ve been blessed with an unconventional journey. Instead of
            college, I went to work in entrepreneurship from{" "}
            <TextLink href="/about#desirem">e-commerce</TextLink> all the way to{" "}
            <TextLink href="/about#buffdup">concrete coatings</TextLink>. I
            learned priceless lessons on resilience, lifelong learning, and the
            power of loving the process.
          </span>

          <span>
            <TextLink href="/about#learning">From the start of 2024</TextLink>,
            I started and fell in love with coding. After trying to code a web
            app with python 🤣, I then learned Javascript, Typescript, React,
            and recently, Go.
          </span>

          <span>
            I love working on frontend and backend. Building, optimizing, and
            simplifying is my obsession. Figuring out ways to make life simpler
            AND more efficient... that, really, really gets me excited.
          </span>

          <span>
            <TextLink href="/about#outside-work">Outside of work</TextLink>,
            you&apos;ll find me at the gym, watching movies, or jamming to the
            Bee Gees on a sunday drive.
          </span>
        </div>
      </section>
    </PageContainer>
  );
}
