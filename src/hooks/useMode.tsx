import { useEffect, useState } from "react";

export const useMode = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setMode(
        savedMode === "dark" || savedMode === "light"
          ? savedMode
          : prefersDark
            ? "dark"
            : "light"
      );
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (mode === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      // Guardar el modo en localStorage
      localStorage.setItem("theme", mode);
    }
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return { mode, toggleMode };
};
