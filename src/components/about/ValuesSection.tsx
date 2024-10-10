import { SectionHeader } from "./SectionHeader";

export function ValuesSection() {
  const valueItems = [
    {
      name: "Unimpeachable Character",
      description:
        "Be someone you are proud to associate with, personally and professionally. Someone you can fully trust to be honest and reliable.",
      myNote:
        "I'm not perfect by any means, but I do everything in my power try to be. I only want to associate with those who try to be as-well.",
    },
    {
      name: "Sincere Candor",
      description:
        "Be someone that says what needs to be said, WITH GOOD, AND SINCERE INTENTION.",
      myNote:
        "Wrongly used as an excuse to be negative. My meaning, give it to 'em straight. Honestly, openly, and without an agenda, share the good AND the bad.",
    },
    {
      name: "How To Take Care Of Business",
      description:
        "Someone you know CAN get the job done, or WILL FIGURE OUT A WAY to get it done, RIGHT.",
      myNote:
        "I don't know everything, that's for sure. But I'm confident if it's possible, I can figure it out and get the job done, the right way.",
    },
  ];

  return (
    <section className="flex flex-col gap-y-6">
      <div className="flex items-center gap-x-6">
        <SectionHeader header="Values" />
        <span className="text-xs text-slate-600">
          - Inspired by Alex Hormozi.
        </span>
      </div>
      <span>Be and be around people that demonstrate:</span>
      <div className="flex scroll-mt-[100px] flex-col justify-center gap-y-4">
        {valueItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-2 rounded-md border border-slate-600 px-4 py-2 text-xs font-light text-slate-500 sm:text-sm"
          >
            <span className="text-base font-semibold text-slate-300">
              {item.name}
            </span>
            <span className="text-slate-400">{item.description}</span>
            <span className="rounded-md bg-slate-800 px-4 py-2">
              &ldquo;{item.myNote}&rdquo;
            </span>
          </div>
        ))}
      </div>
      <span>
        All of which can be summed up with a simple, yet sometimes difficult
        word. <span className="font-semibold text-slate-300">Love</span>.
      </span>
    </section>
  );
}
