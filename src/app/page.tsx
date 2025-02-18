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
            college, I spent several years diving into entrepreneurship—ventures
            like{" "}
            <TextLink href="/about#desirem">
              dropshipping, arbitrage, reselling
            </TextLink>
            , and even{" "}
            <TextLink href="/about#buffdup">concrete coatings</TextLink>, far
            outside my comfort zone. Though they didn&apos;t all succeed, I
            wouldn&apos;t consider them failures. I learned invaluable lessons
            on resilience, the requirement of lifelong learning, and the power
            of loving the process.
          </span>

          <span>
            <TextLink href="/about#learning">Since the start of 2024</TextLink>,
            I&apos;ve immersed myself in code 24/7, and yes, I even dream about
            it. From the beginning, I was in love. I started with python, but
            after trying to code a web app with it 🤣, I then learned
            Javascript, Typescript, React, and recently, Go.
          </span>

          <span>
            I love working across both front and back end. Building, optimizing,
            and simplifying is my obsession. Figuring out ways to make life
            simpler AND more efficient... that, really, really gets me excited.
          </span>

          <span>
            <TextLink href="/about#outside-work">Outside of work</TextLink>,
            you&apos;ll find me at the gym, binging movies, or jamming to the
            Bee Gees on a sunday drive.
          </span>
        </div>
      </section>
    </PageContainer>
  );
}
