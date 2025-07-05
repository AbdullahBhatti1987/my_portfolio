// "use client";
// import { useEffect, useState } from "react";
// import { FaMoon, FaSun } from "react-icons/fa";

// export default function ThemeToggle() {
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     const stored = localStorage.getItem("theme");
//     const prefersDark = stored
//       ? stored === "dark"
//       : window.matchMedia("(prefers-color-scheme: dark)").matches;

//     setIsDark(prefersDark);
//     document.documentElement.classList.toggle("dark", prefersDark);
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = isDark ? "light" : "dark";
//     setIsDark(!isDark);
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.classList.toggle("dark", newTheme === "dark");
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="text-xl text-gray-800 dark:text-white hover:text-[var(--color-primary)] transition"
//       aria-label="Toggle Theme"
//     >
//       {isDark ? <FaSun /> : <FaMoon />}
//     </button>
//   );
// }


"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="text-xl transition"
      style={{ color: "var(--color-primary)" }}
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}
