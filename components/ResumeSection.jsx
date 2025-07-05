"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";

export default function ResumeSection() {
  const { theme } = useContext(ThemeContext);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume Abdullah Bhatti (full Stack Developer).pdf"; // Make sure this is inside the `/public` folder
    link.download = "Resume Abdullah Bhatti (full Stack Developer).pdf";
    link.click();
  };

  return (
    <section
      id="resume"
      className="py-24 flex items-center justify-center transition-colors duration-300"
      style={{
        backgroundColor: "var(--color-secondary)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-6"
          style={{ color: "var(--color-primary)" }}
        >
          Want to see more?
        </h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownload}
          className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-md transition"
        >
          Download Resume
        </motion.button>

        {/* <p className="mt-4 text-sm text-[var(--color-text)]">
          If it doesn't download,{" "}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[var(--color-accent)]"
          >
            click here to open
          </a>{" "}
          and then right-click to save.
        </p> */}
      </motion.div>
    </section>
  );
}
