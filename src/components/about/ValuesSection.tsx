import { SectionHeader } from "./SectionHeader";

export function ValuesSection() {
  const valueItems = [
    {
      name: "Unimpeachable Character",
      description:
        "[Character] of such a high standard of honesty and moral goodness that it cannot be doubted or criticized. - Cambridge Dictionary",
    },
    {
      name: "Sincere Candor",
      description:
        "The quality of being honest, sincere, and kind in dealing with other people. - Cambridge Dictionary",
    },
    {
      name: "How To Take Care Of Business",
      description:
        "The quality of figuring it out, getting it done, and doing it right.",
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
