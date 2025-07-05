
"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className="py-6 px-4 transition-colors duration-300"
      style={{
        backgroundColor: "var(--color-surface)",
        color: "var(--color-text)",
        fontFamily: "'Poppins', sans-serif",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>&copy; {new Date().getFullYear()} Abdullah Bhatti. All rights reserved.</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/AbdullahBhatti1987/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-accent)]"
          >
            GitHub
          </a>
          <a
            href="mailto:abdullah.bhatti345@email.com"
            className="hover:text-[var(--color-accent)]"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
