"use client";

import Link from "next/link";
import Image from "next/image";

import { PageContainer } from "~/components/PageContainer";
import { PageHeader } from "~/components/PageHeader";
import { ToolList } from "~/components/ToolList";
import { ArrowUpRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { InfoSection } from "../../components/projects/InfoSection";

import { projects } from "~/data/projects";

export type Project = (typeof projects)[0];

const ProjectImage = ({ project }: { project: Project }) => {
  return (
    <Image
      src={project.img}
      alt={`${project.name} Preview`}
      className="absolute h-full w-full rounded-xl object-cover object-top"
    />
  );
};

export default function Projects() {
  return (
    <PageContainer>
      <PageHeader header="Projects" />

      <div className="flex flex-col gap-y-8">
        {projects.map((project, index) => (
          <Sheet key={index}>
            <SheetTrigger>
              <div
                className="relative flex min-h-[350px] scroll-mt-[100px] text-start sm:aspect-video"
                id={project.id}
              >
                {project.video ? (
                  <video
                    src={project.video}
                    muted
                    autoPlay
                    loop
                    className="absolute h-full w-full rounded-xl object-cover object-top"
                  >
                    <ProjectImage project={project} />
                  </video>
                ) : (
                  <ProjectImage project={project} />
                )}

                <div className="z-10 flex w-full flex-col items-start justify-end gap-y-2 rounded-lg border-4 border-slate-700 bg-gradient-to-b from-transparent to-slate-900 px-2 py-4 hover:border-slate-600 sm:p-10">
                  {project.link ? (
                    <Link
                      target="_blank"
                      href={project.link}
                      className="flex text-3xl font-bold text-slate-300 hover:text-slate-100"
                    >
                      {project.name} <ArrowUpRight size={20} />
                    </Link>
                  ) : (
                    <span className="flex text-3xl font-bold text-slate-300">
                      {project.name}
                    </span>
                  )}
                  <span className="font-light">{project.shortSummary}</span>
                  <ToolList tools={project.tools} />
                </div>
              </div>
            </SheetTrigger>
            <SheetContent>
              <InfoSection project={project} />
            </SheetContent>
          </Sheet>
        ))}
      </div>
    </PageContainer>
  );
}
