import GitHub from "@/icons/react-icons/Github";
import Badge from "@/ui/Badge";
import ShineBadge from "@/ui/ShineBadge";
import { cn } from "@/utils/cn";
import { ArrowUpRight } from "lucide-react";
import React, { useRef, useState } from "react";

interface CardWithHoverProps {
  title: string;
  description: string;
  icon?: string;
  websiteUrl?: string;
  githubUrl?: string;
  mainTechIcon?: React.ComponentType<any>;
  mainTechUrl?: string;
  mainTechName?: string;
  tags: string[];
  latest?: boolean;
  progress?: boolean;
  stars?: number;
  isProjectPath?: boolean;
}

const CardWithHover: React.FC<CardWithHoverProps> = ({
  title,
  description,
  icon,
  websiteUrl,
  githubUrl,
  mainTechIcon: MainTechIcon,
  mainTechUrl,
  mainTechName,
  tags,
  latest,
  progress,
  isProjectPath,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [focused, setFocused] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!divRef.current || focused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);
  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  const finalTags = isProjectPath ? tags : tags.slice(0, 3);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col rounded-md border-[1px] border-neutral-300 px-3 py-4 shadow-sm dark:border-neutral-800"
    >
      <input
        aria-hidden="true"
        className={`pointer-events-none absolute left-0 top-0 z-10 h-full w-full cursor-default rounded-[0.310rem] border transition-opacity duration-500 ${
          focused ? "border-white/50" : "border-black/50"
        } dark:border-white/50`}
        style={{
          opacity,
          WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
          backgroundColor: "transparent",
        }}
      />
      <div
        className="pointer-events-none absolute -inset-px rounded-md opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(97, 97, 97, 0.1), transparent 60%)`,
        }}
      />
      <div className="flex flex-col space-y-3">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-[10px]">
            {icon && <img src={icon} alt={title} className="h-6 w-6" />}
            {websiteUrl ? (
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener"
                className="group flex items-center gap-[6px] font-medium decoration-neutral-500 decoration-dotted underline-offset-[5px] hover:underline dark:text-white dark:hover:text-white"
              >
                <span>{title}</span>
                <ArrowUpRight width={19} height={13} />
              </a>
            ) : (
              <p className="font-medium dark:text-white dark:hover:text-whit">
                {title}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            {latest && <ShineBadge>latest</ShineBadge>}
            {progress && <ShineBadge>progress</ShineBadge>}
            {githubUrl && (
              <a
                href={githubUrl}
                title={`View ${title} repository on GitHub`}
                target="_blank"
                rel="noopener"
                className="opacity-75 transition-opacity duration-100 hover:opacity-100 dark:text-neutral-400"
              >
                <GitHub width={19} height={19} />
              </a>
            )}
          </div>
        </div>
        <p
          className={cn(
            "text-sm dark:text-neutral-400",
            !isProjectPath && "truncate"
          )}
        >
          {description}
        </p>
        <div className="hidden items-center space-x-2 overflow-x-auto md:flex">
          {MainTechIcon && (
            <a
              href={mainTechUrl}
              target="_blank"
              rel="noopener"
              className="mr-1"
              title={mainTechName}
            >
              <MainTechIcon height={17} />
            </a>
          )}
          <div className="flex items-center space-x-1">
            {finalTags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithHover;
