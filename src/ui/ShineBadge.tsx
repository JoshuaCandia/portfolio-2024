import React from "react";

interface ShineBadgeProps {
  children: React.ReactNode;
}

const ShineBadge: React.FC<ShineBadgeProps> = ({ children }) => {
  return (
    <div className="animate-shine cursor-default inline-flex items-center justify-center rounded-full border border-neutral-300 bg-[linear-gradient(110deg,#f5f5f5,45%,#d4d4d4,55%,#f5f5f5)] dark:bg-[linear-gradient(110deg,#171717,45%,#262626,55%,#171717)] bg-[length:200%_100%] px-2 py-0.5 text-[10px] font-medium text-neutral-700 transition-colors dark:text-neutral-200 dark:border-neutral-800">
      {children}
    </div>
  );
};

export default ShineBadge;
