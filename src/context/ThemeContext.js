"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null); // no default, wait for client

  useEffect(() => {
    const stored = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", stored);
    setTheme(stored);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  // Only render children after theme is initialized
  if (theme === null) {
    return null; // Or a loading state if needed
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
