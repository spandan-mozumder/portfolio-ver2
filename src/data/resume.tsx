import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import type { StaticImageData } from "next/image";

import gitwitImg from "./gitwit.png";
import mindmaprImg from "./mindmapr.png";
import sociolinqImg from "./sociolinq.png";
import tiuImg from "./tiu.png";
import profile from "./profile.jpg";

export type ResumeData = {
  name?: string;
  initials?: string;
  url?: string;
  location?: string;
  locationLink?: string;
  description?: string;
  summary?: string;
  avatarUrl?: string | StaticImageData;
  skills?: string[];
  navbar?: { href: string; icon?: any; label?: string }[];
  contact?: {
    email?: string;
    tel?: string;
    social?: Record<
      string,
      { name?: string; url?: string; icon?: any; navbar?: boolean }
    >;
  };
  work?: {
    company: string;
    href?: string;
    location?: string;
    title?: string;
    logoUrl?: string | StaticImageData;
    start?: string;
    end?: string;
    description?: string;
    badges?: string[];
  }[];
  education?: {
    school: string;
    href?: string;
    degree?: string;
    logoUrl?: string | StaticImageData;
    start?: string;
    end?: string;
  }[];
  projects?: {
    title: string;
    href?: string;
    active?: boolean;
    description?: string;
    technologies?: string[];
    links?: { type: string; href: string; icon?: any }[];
    image?: string | StaticImageData;
    video?: string;
    dates?: string;
  }[];
  hackathons?: {
    title: string;
    description?: string;
    dates?: string;
    location?: string;
    image?: string | StaticImageData;
    links?: { icon?: any; title?: string; href?: string }[];
  }[];
};

export const DATA: ResumeData = {
  name: "Spandan Mozumder",
  initials: "SM",
  url: "https://portfolio-snowy-beta-66.vercel.app/",
  location: "Kolkata, West Bengal, India",
  locationLink: "https://www.google.com/maps/place/kolkata",
  description:
    "Full Stack Developer, Open Source Contributor, Web3 Developer(Solana and Ethereum)",
  summary:
    "I am a undergraduate student from Kolkata, India. I have a passion and a dream for creating experiences that a multitude of users will use. Beyond my professional life, my dream is to travel the world, eat a lot of food and be a human being you want to remember. I actively love to take part in multitude of sports. I love challenges and progress in something in my life is the best dopamine run I have ever felt.",
  avatarUrl: profile,
  skills: [
    "HTML",
    "CSS",
    "TailwindCSS",
    "Shadcn UI",
    "Magic UI",
    "React",
    "Next.js",
    "JavaScript",
    "Typescript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PrismaORM",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "Kafka",
    "Prometheus",
    "Grafana",
    "Rust",
    "Solidity",
    "Web3.js",
    "Ethers.js",
    "Python",
    "PyTorch",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/resume", icon: Icons.resume, label: "Resume" },
  ],
  contact: {
    email: "mozumder.spandan.professional@gmail.com",
    tel: "+919836155495",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/spandan-mozumder",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/spandan-mozumder/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/spandanmozumder",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "SociolinQ Technologies Private Limited",
      href: "https://www.sociolinq.com/",
      location: "Remote",
      title: "Frontend Intern",
      logoUrl: sociolinqImg,
      start: "August 2024",
      end: "October 2024",
      description:
        "Worked as part of a freelance agency team developing front-ends of websites. Transformed designs into interactive user experiences while collaborating with the team and integrating API endpoints. Actively collaborated with the team to deliver products and address issues within deadlines, while simultaneously managing two different projects.",
    },
  ],
  education: [
    {
      school: "Techno India University",
      href: "https://www.technoindiauniversity.ac.in/",
      degree:
        "Bachelor of Technology in Computer Science and Engineering (Artificial Intelligence)",
      logoUrl: tiuImg,
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "GitWit",
      href: "https://gitwit-two.vercel.app/",
      active: true,
      description:
        "An AI-based agent that helps young developers understand codebases easily. It fetches the entire codebase, summarizes files, summarizes commits, and provides a chatbot to answer questions about the repository.",
      technologies: [
        "NextJS",
        "TypeScript",
        "Prisma",
        "tRPC",
        "Gemini",
        "Assembly AI",
        "PostgreSQL",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://gitwit-two.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: gitwitImg,
      video: "",
    },
    {
      title: "MindMapr",
      href: "https://mindmapr-topaz.vercel.app/",
      active: true,
      description:
        "An AI-powered career consultant that helps you with your complete interview preparation. It gives you industry insights, helps you generate resumes, write AI-generated cover letters, generate quizzes, create courses, and conduct live mock interviews with an AI bot.",
      technologies: [
        "NextJS",
        "JavaScript",
        "Prisma",
        "Inngest",
        "Gemini",
        "PostgreSQL",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://mindmapr-topaz.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: mindmaprImg,
      video: "",
    },
  ],
};
