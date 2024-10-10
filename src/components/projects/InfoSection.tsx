import Image from "next/image";
import { PopoverSectionTitle } from "./PopoverSectionTitle";
import { ProjectLink } from "./ProjectLink";
import { ToolList } from "~/components/ToolList";
import { LinkIcon } from "lucide-react";

import GitHubLogo from "public/GitHub.svg";

import type { Project } from "~/app/projects/page";

export function InfoSection({ project }: { project: Project }) {
  const sectionInfos = [
    <>
      <PopoverSectionTitle title="About" />
      <span className="text-sm font-light">{project.description}</span>
    </>,
    <>
      <PopoverSectionTitle title="Technologies" />
      <ToolList tools={project.tools} />
    </>,
    <>
      <div className="flex items-center gap-x-2">
        <LinkIcon width={15} />
        <PopoverSectionTitle title="Website" />
      </div>
      <ProjectLink href={project.link} label={project.link} />
    </>,
  ];

  if (project.githubLink)
    sectionInfos.push(
      <>
        <div className="flex items-center gap-x-2">
          <Image src={GitHubLogo as string} alt="GitHub Logo" width={20} />
          <PopoverSectionTitle title="GitHub" />
        </div>
        <ProjectLink href={project.githubLink} label={project.githubLink} />
      </>,
    );

  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-2">
        <span className="text-2xl font-semibold text-slate-200">
          {project.name}
        </span>
        <span className="text-sm font-light">{project.shortSummary}</span>
      </div>

      {project.video ? (
        <video
          src={project.video}
          muted
          autoPlay
          loop
          controls
          className="aspect-video rounded-xl object-cover object-top"
        >
          Your browser does not support this video {" :("}. That&apos;s too bad!
          It&apos;s a really good video!
        </video>
      ) : (
        <Image
          src={project.img}
          alt={`${project.name} Preview`}
          className="aspect-video rounded-xl object-cover object-top"
        />
      )}

      {sectionInfos.map((info, index) => (
        <div key={index} className="flex flex-col gap-y-2">
          {info}
        </div>
      ))}
    </div>
  );
}
