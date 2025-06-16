import Link from "next/link";

import { ToolList } from "../ToolList";
import { SectionHeader } from "./SectionHeader";
import { ArrowUpRight } from "lucide-react";

import { experiences } from "~/data/experiences";

export function ExperienceSection() {
  return (
    <section className="flex flex-col items-start gap-y-8">
      <SectionHeader header="Experience" />

      {experiences
        .sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
        .map((i, key) => (
          <div className="flex scroll-mt-[100px]" key={key} id={i.id}>
            <span className="min-w-[220px] text-xs text-slate-500 sm:text-sm">
              {i.startDate
                .toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })
                .toUpperCase()}{" "}
              -{" "}
              {(i.endDate instanceof Date
                ? i.endDate.toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })
                : "Present"
              ).toUpperCase()}
            </span>

            <div className="flex flex-col gap-y-2">
              <div className="flex flex-col items-start">
                <Link href={i.companyLink} className="text-slate-200">
                  {i.company}
                </Link>
                <span className="text-sm italic text-slate-300">{i.role}</span>
              </div>

              <ul className="ml-4 flex list-disc flex-col gap-y-2 text-sm font-light">
                {i.bullets.map((i, key) => (
                  <li key={key}>{i}</li>
                ))}
              </ul>

              <ToolList tools={i.tools} />
            </div>
          </div>
        ))}

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
