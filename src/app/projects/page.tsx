"use client";

import Link from "next/link";
import Image from "next/image";

import { PageContainer } from "~/components/PageContainer";
import { PageHeader } from "~/components/PageHeader";
import { ToolList } from "~/components/ToolList";
import { ArrowUpRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { InfoSection } from "../../components/projects/InfoSection";

import TemplePreview from "public/TemplePreview.png";
import MLMPreview from "public/MLMPreview.png";

const projects = [
  {
    id: "temple",
    name: "Temple",
    img: TemplePreview,
    githubLink: "",
    shortSummary: "Fitness app to build and record workouts.",
    description:
      "Fitness app for recording and creating workouts. Build your own workout programs with days with any of our over 4000 exercises (or create your own). Record sets, view history, keep notes, and more.",
    tools: ["React", "Next.js", "PostgreSQL", "Vercel", "Zustand"],
    link: "https://trytemple.com",
    video: "/TempleVideo.mp4",
  },
  {
    id: "mlm",
    name: "Marvelous Light Media",
    img: MLMPreview,
    githubLink: "",
    shortSummary: "Wedding videography website.",
    description:
      "Website for Haley Harris at Marvelous Light Media, a wedding videography company here in Nashville.",
    tools: ["React", "Next.js", "Netlify", "CDN"],
    link: "https://marvelouslightmedia.com",
    video: "",
  },
];

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
                className="relative flex min-h-[350px] text-start sm:aspect-video scroll-mt-[100px]"
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

                <div className="z-10 flex w-full flex-col items-start justify-end gap-y-2 rounded-lg border-4 border-slate-700 bg-gradient-to-b from-transparent to-slate-900 px-2 py-4 sm:p-10 hover:border-slate-600">
                  <Link
                    target="_blank"
                    href={project.link}
                    className="flex text-3xl font-bold text-slate-300 hover:text-slate-100"
                  >
                    {project.name} <ArrowUpRight width={20} />
                  </Link>
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
