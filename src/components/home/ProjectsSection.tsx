import Image from "next/image";
import Link from "next/link";
import { Section } from "../Section";
import { SectionHeader } from "../SectionHeader";
import { ToolList } from "../ToolList";
import { ArrowUpRight } from "lucide-react";

import TemplePreview from "public/TemplePreview.png";
import MLMPreview from "public/MLMPreview.png";

export function ProjectsSection() {
  const projects = [
    {
      name: "Temple",
      img: TemplePreview,
      description:
        "Fitness app for recording and creating workouts. Build your own workout programs with days with any of our over 4000 exercises (or create your own). Record sets, view history, keep notes, and more.",
      tools: ["React", "Next.js", "PostgreSQL", "Vercel"],
      link: "https://trytemple.com",
    },
    {
      name: "Marvelous Light Media",
      img: MLMPreview,
      description:
        "Website for Haley Harris at Marvelous Light Media, a wedding videography company here in Nashville.",
      tools: ["React", "Next.js", "Netlify"],
      link: "https://marvelouslightmedia.com",
    },
  ];

  return (
    <Section refId="projects">
      <SectionHeader header="Projects" />

      <div className="flex flex-col gap-y-8">
        {projects.map((project, index) => (
          <div key={index} className="group flex items-center gap-x-4">
            <Link href={project.link}>
              <Image
                src={project.img}
                alt={`${project.name} Preview`}
                className="max-h-[150px] max-w-[230px] rounded-md border-4 border-slate-700 object-cover object-top group-hover:border-slate-600"
              />
            </Link>
            <div className="flex flex-col items-start gap-y-2">
              <Link
                href={project.link}
                className="flex text-slate-300 hover:text-slate-100"
                target="_blank"
              >
                {project.name}
                <ArrowUpRight width={20} />
              </Link>
              <span className="text-sm font-light">{project.description}</span>
              <ToolList tools={project.tools} />
            </div>
          </div>
        ))}
      </div>

      {/* <LinkTo label="Project Archive" href="" /> */}
    </Section>
  );
}
