import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import trabill from "@/public/trabill.jpeg";
import bitdeposit from "@/public/bitdeposit.jpeg";
import projectManager from "@/public/project_task_manager.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated in CSE",
    location: "Dhaka, Bangladesh",
    description:
      "I graduated from Ahsanullah University of Science & Technology.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Banani, Dhaka",
    description:
      "I started with a front-end role then gradually evolved myself into full-stack development. Implemented business logic into several modules in agile work environment.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Backend Engineer",
    location: "Banglamotor, Dhaka",
    description:
      "As a core member in the backend developement team I first refactored some modules in an existing project and then actively participated in designing Microservice-based architecture with team members, Implemented API gateway with NestJS framework.",
    icon: React.createElement(FaReact),
    date: "2023 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Trabill",
    description:
      "I worked as a full-stack developer on this startup project for 1 year. It is a multi-tenant SAAS app for Travel agencies.",
    tags: ["React", "Express.js", "MySQL", "Tailwind", "Prisma"],
    imageUrl: trabill,
  },
  {
    title: "BitDeposit",
    description:
      "Worked as a backend engineer in this team for  almost 1 year, implemented business logic closely collaborated with cross-functional team members.",
    tags: ["Nest.js", "GraphQL", "PostgreSQL", "Radis"],
    imageUrl: bitdeposit,
  },
  {
    title: "Project Task Management",
    description:
      "Full-stack app, Tasks can be assigned to users then filtering, sorting, and pagination are enabled, and a beautiful dashboard to see the recent tasks",
    tags: ["Next.js", "MySQL", "Tailwind", "Radix UI"],
    imageUrl: projectManager,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "Nest.js",
  "GraphQL",
  "Apollo",
  "React",
  "Next.js",
  "Redux",
  "Tailwind",
  "Git",
  "Github Actions",
  "Prisma",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Jest",
] as const;
