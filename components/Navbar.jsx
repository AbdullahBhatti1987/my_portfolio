"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // ✅ Updated: navItems with id + label
  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Achievements", id: "achievements" },
    { label: "Experience", id: "experience" },
    // { label: "Download Resume", id: "resume" },
    { label: "Contact", id: "contact" },
  ];

  // ✅ ScrollSpy logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.getElementById(item.id)
      );

      let current = "home";
      for (let section of sections) {
        if (
          section &&
          section.getBoundingClientRect().top <= 100 &&
          section.getBoundingClientRect().bottom >= 100
        ) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full fixed top-0 left-0 z-50 backdrop-blur-md shadow-md"
      style={{
        backgroundColor: "var(--color-nav-bg)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-[var(--color-primary)]">
          Abdullah Bhatti
        </h1>

        <div className="flex items-center gap-6">
          {/* ✅ Desktop Nav */}
          <ul
            className="hidden md:flex gap-6 text-[15px] font-medium"
            style={{ color: "var(--color-text)" }}
          >
            {navItems.map(({ label, id }) => {
              const isActive = activeSection === id;

              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="relative group pb-1"
                    style={{ color: "inherit" }}
                  >
                    {label}
                    <span
                      className={`absolute left-0 -bottom-[1px] transition-all duration-300 origin-left ${
                        isActive
                          ? "w-full h-[1px]"
                          : "w-0 h-[2px] group-hover:w-full group-hover:origin-left group-hover:scale-x-100"
                      }`}
                      style={{
                        backgroundColor: "var(--color-primary)",
                      }}
                    ></span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* 🔘 Theme Switcher */}
          <ThemeToggle />

          {/* 📱 Mobile Hamburger */}
          <button
            className="md:hidden text-3xl focus:outline-none"
            style={{ color: "var(--color-text)" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* 📱 Mobile Dropdown Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: "var(--color-nav-dropdown)",
              color: "var(--color-text)",
              borderTop: "1px solid var(--color-border)",
            }}
            className="md:hidden px-6 pt-2 pb-4 space-y-2"
          >
            {navItems.map(({ label, id }) => {
              const isActive = activeSection === id;

              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 px-2 rounded-md transition ${
                      isActive ? "border-b-2 border-[var(--color-primary)]" : ""
                    }`}
                    style={{
                      color: "inherit",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--color-primary)";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "var(--color-text)";
                    }}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
