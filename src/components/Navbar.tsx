import React from "react";
import { X, Linkedin, Github } from "../icons/";
import ToggleMode from "./ToggleMode";

const SocialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/candiajoshua",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/candiajoshua_",
    icon: X,
  },
  {
    name: "GitHub",
    url: "https://github.com/joshuacandia",
    icon: Github,
  },
];

const Navbar = () => {
  return (
    <nav className="container sticky top-0 z-50 mb-1 flex w-full max-w-4xl items-center justify-between bg-neutral-100/80 py-4 backdrop-blur-md dark:bg-neutral-900/80">
      <a
        href="/"
        className="text-md flex items-center space-x-2 font-medium tracking-tight opacity-80 transition-opacity duration-150 hover:opacity-100 dark:text-white"
      >
        <span>joshuacandia</span>
      </a>
      <div className="flex items-center space-x-1">
        {SocialLinks.map(({ name, url, icon: Icon }, i) => (
          <a
            key={i}
            href={url}
            title={name}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-700 focus-visible:ring-neutral-500 hover:bg-neutral-300 hover:text-neutral-900 dark:text-neutral-50 h-9 w-9 group opacity-80 transition-opacity duration-150 hover:opacity-100"
          >
            <Icon height={18} />
          </a>
        ))}
        <ToggleMode />
      </div>
    </nav>
  );
};

export default Navbar;
