"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";

export default function AboutSection() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="about"
      className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 py-24 transition-colors duration-300"
      style={{
        backgroundColor: "var(--color-surface)",
        color: "var(--color-text)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* === Auto-Moving Background Blob === */}
      <motion.div
        className="pointer-events-none fixed z-0 w-[200px] h-[200px] rounded-full"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(circle, #60a5fa88, transparent 70%)"
              : "radial-gradient(circle, #1e40af88, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 100, 200, 100, 0, -100, -200, -100, 0],
          y: [0, 50, 100, 50, 0, -50, -100, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* === Text Content === */}
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
          style={{ color: "var(--color-primary)" }}
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-text-light)" }}
          >
            I’m a passionate{" "}
            <strong className="text-[var(--color-primary)]">
              Full-Stack Developer
            </strong>{" "}
            specializing in{" "}
            <strong className="text-[var(--color-primary)]">
              MERN Stack (MongoDB, Express, React, Node)
            </strong>
            . I focus on building scalable, responsive, and elegant applications
            using{" "}
            <strong className="text-[var(--color-primary)]">Next.js</strong> for
            web and{" "}
            <strong className="text-[var(--color-primary)]">
              React Native
            </strong>{" "}
            for mobile.
          </p>

          <p
            className="text-lg leading-relaxed mt-4"
            style={{ color: "var(--color-text-light)" }}
          >
            My goal is to craft experiences that are not only visually
            appealing, but also fast, accessible, and easy to use — following
            the latest
            <strong className="text-[var(--color-primary)] ml-1">
              UI/UX practices
            </strong>{" "}
            and{" "}
            <strong className="text-[var(--color-primary)]">
              industry standards
            </strong>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
