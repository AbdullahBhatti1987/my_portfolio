"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const experience = [
  {
    role: "MERN Stack Developer",
    company: "BawdicSoft Pvt Ltd",
    duration: "Apr 2025 – Present",
    description:
      "Built full-stack web applications using React, Node.js, Express, and MongoDB. Developed RESTful APIs, implemented authentication and authorization, and integrated frontend with backend services. Improved performance and UX across multiple features. Collaborated with UI/UX designers and deployed projects using cloud platforms like Vercel and Render.",
  },
];

export default function ExperienceSection() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center px-6 py-24 transition-colors duration-300"
      style={{
        backgroundColor: "var(--color-surface)",
        color: "var(--color-text)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="max-w-5xl w-full mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10"
          style={{ color: "var(--color-primary)" }}
        >
          Experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6 text-left"
        >
          {experience.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-xl shadow-md border border-[var(--color-border)] bg-[var(--color-bg)]"
            >
              <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                {item.role}
              </h3>
              <p className="text-sm text-[var(--color-accent)]">
                {item.company} — {item.duration}
              </p>
              <p className="mt-2 text-[var(--color-text)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
