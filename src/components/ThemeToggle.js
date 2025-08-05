"use client";

import { useTheme } from "../context/ThemeContext";
import styles from "./themeToggle.module.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={styles.toggleButton}>
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
