"use client";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { projects } from "@/data/projects";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function ProjectsSection() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="projects"
      className="min-h-screen px-4 md:px-8 py-16  transition-colors duration-300"
      style={{
        backgroundColor: "var(--color-surface)",
        color: "var(--color-text)",
      }}
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          style={{ color: "var(--color-primary)" }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="group flex flex-col rounded-xl overflow-hidden border shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-96"
              style={{
                backgroundColor:
                  theme === "dark"
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(255, 255, 255, 0.6)",
                borderColor: "var(--color-border)",
                color: "var(--color-text)",
              }}
            >
              {/* Image: 50% of card */}
              <div className="relative w-full h-1/2 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content: remaining 50% */}
              <div className="p-4 flex flex-col h-1/2">
                <h3
                  className="text-lg font-semibold mb-1"
                  style={{ color: "var(--color-primary)" }}
                >
                  {project.title}
                </h3>

                <p className="text-xs leading-snug line-clamp-3 mb-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 text-xs mb-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 rounded"
                      style={{
                        backgroundColor:
                          theme === "dark"
                            ? "rgba(255,255,255,0.08)"
                            : "rgba(0,0,0,0.05)",
                        color: "var(--color-text)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-2">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium px-3 py-1 transition"
                    style={{
                      backgroundColor: "var(--color-primary)",
                      color: "#fff",
                      borderRadius: "6px",
                    }}
                  >
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium px-3 py-1 border transition"
                    style={{
                      borderColor: "var(--color-primary)",
                      color: "var(--color-primary)",
                      borderRadius: "6px",
                    }}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
