"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const ThemeComp = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeMode = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {mounted && themeMode === "dark" ? (
        <MdOutlineDarkMode
          onClick={() => setTheme("light")}
          className="cursor-pointer"
          size={25}
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme("dark")}
          className="cursor-pointer"
          size={25}
        />
      )}
    </div>
  );
};

export default ThemeComp;
