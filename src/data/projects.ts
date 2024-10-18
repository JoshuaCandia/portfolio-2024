import Astro from "@/icons/react-icons/Astro";
import D3JS from "@/icons/react-icons/D3JS";
import NestJS from "@/icons/react-icons/NestJS";
import NextJS from "@/icons/react-icons/NextJS";
import React from "@/icons/react-icons/React";
import type { iProjects } from "@/types";

import { MessageCircle } from "lucide-react";

export const featuredProjects: iProjects[] = [
  {
    title: "Portfolio",
    description: "✨ Un portafolio moderno y dinámico desarrollado con Astro.",
    tags: ["Astro", "React", "Tailwind"],
    url: "https://joshuacandia.dev",
    githubUrl: "https://github.com/JoshuaCandia/portfolio-2024",
    icon: "https://raw.githubusercontent.com/pheralb/toast/main/docs/public/images/logo_svg.svg",
    techIcon: MessageCircle,
    latest: true,
    mainTech: {
      title: "Astro",
      url: "https://astro.build",
      techIcon: Astro,
    },
  },
  {
    title: "Apple",
    description: "🍎 Un clon de la página de inicio del iPhone 15.",
    tags: ["F. Motion", "Tailwind", "D3.js", "React"],
    url: "https://apple-clone.joshuacandia.dev",
    githubUrl: "https://github.com/JoshuaCandia/apple_website",
    icon: "https://raw.githubusercontent.com/pheralb/toast/main/docs/public/images/logo_svg.svg",
    techIcon: MessageCircle,
    progress: true,
    latest: false,
    mainTech: {
      title: "Astro",
      url: "https://d",
      techIcon: D3JS,
    },
  },
  {
    title: "Portfolio v2",
    description: "🚀 Segundo portfolio desarrollado con React.",
    tags: ["Astro", "React", "Tailwind"],
    url: "https://portfolio-v2.joshuacandia.dev",
    githubUrl: "https://github.com/JoshuaCandia/Portfoliov2",
    icon: "https://raw.githubusercontent.com/pheralb/toast/main/docs/public/images/logo_svg.svg",
    techIcon: MessageCircle,
    latest: false,
    mainTech: {
      title: "Astro",
      url: "https://nextjs.org",
      techIcon: NextJS,
    },
  },
  {
    title: "Clean course",
    description: "🧹 Un curso de React con Clean Code y SOLID.",
    tags: ["React"],
    url: "",
    githubUrl: "https://github.com/JoshuaCandia/clean-course",
    icon: "https://raw.githubusercontent.com/pheralb/toast/main/docs/public/images/logo_svg.svg",
    techIcon: MessageCircle,
    latest: false,
    mainTech: {
      title: "React",
      url: "https://reactjs.org",
      techIcon: React,
    },
  },
  {
    title: "NestJS API Rest",
    description: "🚀 Una API Rest desarrollada con NestJS.",
    tags: ["NestJS"],
    url: "",
    githubUrl: "https://github.com/JoshuaCandia/nestjs-api-rest",
    icon: "https://raw.githubusercontent.com/pheralb/toast/main/docs/public/images/logo_svg.svg",
    techIcon: MessageCircle,
    latest: false,
    mainTech: {
      title: "NestJS",
      url: "https://nestjs.com",
      techIcon: NestJS,
    },
  },
];
