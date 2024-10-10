import React from "react";
import { Sun, Moon } from "lucide-react";
import { useMode } from "../hooks/useMode";

interface ModeToggleProps {
  iconSize?: number;
  strokeWidth?: number;
}

const ModeToggle: React.FC<ModeToggleProps> = ({
  iconSize = 20,
  strokeWidth = 1.8,
}) => {
  const { mode, toggleMode } = useMode();

  return (
    <button
      onClick={toggleMode}
      title="Change theme"
      className="inline-flex items-center space-x-3 justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-700 focus-visible:ring-neutral-500 hover:bg-neutral-300 hover:text-neutral-900 dark:text-neutral-50 h-9 w-9 group opacity-80 transition-opacity duration-150 hover:opacity-100"
    >
      {mode === "dark" ? (
        <Sun
          size={iconSize}
          strokeWidth={strokeWidth}
          className="duration-500 group-hover:rotate-12"
        />
      ) : (
        <Moon
          size={iconSize}
          strokeWidth={strokeWidth}
          className="duration-500 group-hover:-rotate-12"
        />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ModeToggle;
