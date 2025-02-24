import TemplePreview from "public/TemplePreview.png";
import MLMPreview from "public/MLMPreview.png";
import ThisPreview from "public/ThisPreview.jpg";
import InMeasurePreview from "public/InMeasurePreview.png";

export const projects = [
  {
    id: "temple",
    name: "Temple",
    img: TemplePreview,
    githubLink: "https://github.com/TommyWellsRocks/temple",
    shortSummary: "Fitness app to build and record workouts.",
    description:
      "Fitness app for recording and creating workouts. Customize workouts, record sets, view history, keep notes, and more.",
    tools: ["React", "Next.js", "PostgreSQL", "Vercel", "Zustand", "Node.js"],
    link: "https://www.trytemple.com",
    video: "/TempleVideo.mp4",
  },
  {
    id: "mlm",
    name: "Marvelous Light Media",
    img: MLMPreview,
    githubLink: "",
    shortSummary: "Wedding videography website.",
    description:
      "Website for Marvelous Light Media, a wedding videography company.",
    tools: ["React", "Next.js", "Netlify", "CDN"],
    link: "https://www.marvelouslightmedia.com",
    video: "",
  },
  {
    id: "this",
    name: "TommyWells.me",
    img: ThisPreview,
    githubLink: "https://github.com/TommyWellsRocks/tommywells.me",
    shortSummary: "This wonderful site.",
    description: "A portfolio / resume site to show off some of my work.",
    tools: ["React", "Next.js"],
    link: "https://www.tommywells.me",
    video: "",
  },
  {
    id: "inmeasure",
    name: "InMeasure",
    img: InMeasurePreview,
    githubLink: "",
    shortSummary: "Website analytics tool.",
    description:
      "Web/Product analytics tool to track and monitor real-time site analytics data.",
    tools: [
      "React",
      "Next.js",
      "Vercel",
      "REST APIs",
      "Zustand",
      "PostgreSQL",
      "Node.js",
    ],
    link: "https://www.inmeasure.com",
    video: "/InMeasureVideo.mp4",
  },
  // {
  //   id: "CMPD12",
  //   name: "CMPD12 Capital",
  //   img: MLMPreview,
  //   githubLink: "",
  //   shortSummary: "Financial management website.",
  //   description:
  //     "Website for CMPD12 Capital, a financial advisory and asset management company.",
  //   tools: ["React", "Next.js", "Vercel", "PostgreSQL", "AWS S3", "Node.js"],
  //   link: "https://www.cmpd12.com",
  //   video: "",
  // },
];
