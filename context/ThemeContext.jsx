// "use client";
// import { createContext, useEffect, useState } from "react";

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     const stored = localStorage.getItem("theme") || "light";
//     setTheme(stored);
//     document.documentElement.setAttribute("data-theme", stored);
//   }, []);

//   const toggleTheme = () => {
//     const next = theme === "light" ? "dark" : "light";
//     setTheme(next);
//     document.documentElement.setAttribute("data-theme", next);
//     localStorage.setItem("theme", next);
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };


"use client";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefers = stored || "light";
    setTheme(prefers);
    document.documentElement.setAttribute("data-theme", prefers);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
