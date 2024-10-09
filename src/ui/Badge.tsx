import React from "react";
import { cn } from "../utils/cn";
interface BadgeProps {
  extraClasses?: string;
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ extraClasses = "", children }) => {
  return (
    <span
      className={cn(
        "inline-flex cursor-default items-center space-x-2 rounded-md border border-neutral-300 bg-neutral-200/50 px-2 py-1 font-mono text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-800/60 dark:text-neutral-300",
        extraClasses
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
