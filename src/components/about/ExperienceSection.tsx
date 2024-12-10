import { ToolList } from "../ToolList";
import { SectionHeader } from "./SectionHeader";

import { experiences } from "~/data/experiences";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ExperienceSection() {
  return (
    <section className="flex flex-col items-start gap-y-8">
      <SectionHeader header="Experience" />
      <div className="flex flex-col gap-y-10">
        {experiences.map((position, index) => (
          <div
            key={index}
            className="flex scroll-mt-[100px] flex-col sm:flex-row"
            id={position.id}
          >
            <span className="min-w-[200px] text-xs text-slate-500 sm:text-sm">
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
      <Link
        target="_blank"
        href="/resume.pdf"
        className="text-slate-300 hover:text-slate-100"
      >
        <span className="flex">
          Full Résumé <ArrowUpRight size={15} />
        </span>
      </Link>
    </section>
  );
}
