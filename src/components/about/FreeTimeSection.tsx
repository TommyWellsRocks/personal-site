import { SectionHeader } from "./SectionHeader";
import { Dot } from "lucide-react";

export function FreeTimeSection() {
  const freeTimeActivities = [
    "Driving country roads.",
    "Spending too many hours at the gym.",
    "Listening to anything but county music.",
  ];

  return (
    <section
      className="flex scroll-mt-[100px] flex-col gap-y-2"
      id="outside-work"
    >
      <SectionHeader header="When I'm Not In The Chair, I'm" />
      <div className="flex flex-col">
        {freeTimeActivities.map((item, index) => (
          <span key={index} className="flex">
            <Dot /> {item}
          </span>
        ))}
      </div>
    </section>
  );
}
