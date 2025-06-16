import NullImage from "public/NullImage.png";
import VideoblyPreview from "public/VideoblyPreview.png";
import InMeasurePreview from "public/InMeasurePreview.png";
import TemplePreview from "public/TemplePreview.png";
import ThisPreview from "public/ThisPreview.png";

export const projects = [
  {
    id: "staticplate",
    name: "StaticPlate",
    img: NullImage,
    githubLink: "",
    shortSummary: "Cloud file storage platform.",
    description:
      "Store folders and subfolders of files to and from applcation with ease. What S3 should have been.",
    tools: [
      "TypeScript",
      "React",
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Next-Auth",
      "AWS S3",
      "Vercel",
    ],
    link: "",
    video: "",
  },
  {
    id: "videobly",
    name: "Videobly",
    img: VideoblyPreview,
    githubLink: "https://github.com/TommyWellsRocks/videobly",
    shortSummary: "YouTube video platform.",
    description:
      "A simple platform to download YouTube videos selecting resolution or crisp audio only.",
    tools: ["TypeScript", "React", "Next.js", "Python", "FastAPI"],
    link: "",
    video: "",
  },
  {
    id: "inmeasure",
    name: "InMeasure",
    img: InMeasurePreview,
    githubLink: "",
    shortSummary: "Website analytics platform.",
    description:
      "Web/Product analytics tool to track and monitor real-time site analytics data.",
    tools: [
      "TypeScript",
      "React",
      "Next.js",
      "PostgreSQL",
      "Drizzle ORM",
      "Auth.js",
      "Vercel",
    ],
    link: "https://www.inmeasure.com",
    video: "/InMeasureVideo.mp4",
  },
  {
    id: "temple",
    name: "Temple",
    img: TemplePreview,
    githubLink: "",
    shortSummary: "Fitness tracking platform.",
    description:
      "Fitness app for recording and creating workouts. Customize workouts, record sets, view history, keep notes, and more.",
    tools: [
      "TypeScript",
      "React",
      "Next.js",
      "PostgreSQL",
      "Python",
      "Go",
      "Drizzle ORM",
      "Auth.js",
      "Vercel",
    ],
    link: "https://www.trytemple.com",
    video: "/TempleVideo.mp4",
  },
  {
    id: "this",
    name: "TommyWells.me",
    img: ThisPreview,
    githubLink: "",
    shortSummary: "This wonderful site.",
    description: "A portfolio / resume site to show off some of my work.",
    tools: ["React", "Next.js", "Vercel"],
    link: "https://www.tommywells.me",
    video: "",
  },
];
