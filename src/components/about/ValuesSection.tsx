import { SectionHeader } from "./SectionHeader";

export function ValuesSection() {
  const valueItems = [
    {
      name: "Unimpeachable Character",
      description:
        "The quality of moral goodness that is trusted and relied on.",
    },
    {
      name: "Sincere Candor",
      description:
        "The quality of being honest and direct for the greater good.",
    },
    {
      name: "Ownership",
      description:
        "The quality of figuring it out, getting it done, and doing it right.",
    },
  ];

  return (
    <section className="flex flex-col gap-y-6">
      <SectionHeader header="Values" />
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
