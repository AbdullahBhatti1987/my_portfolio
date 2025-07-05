"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function HeroSection() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center px-4 md:px-10 pt-32 md:pt-16 transition-colors duration-300"
      style={{
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between gap-16">
        {/* LEFT - Text Content */}
        <div className="w-full md:w-1/2 px-2 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black leading-tight mb-4"
          >
            Hi, I’m{" "}
            <span className="text-[var(--color-primary)]">Abdullah Bhatti</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl font-semibold mb-4"
          >
            I’m a{" "}
            <span className="text-[var(--color-primary)]">
              <Typewriter
                words={[
                  "MERN Stack Developer",
                  "Next.js Developer",
                  "React Native Developer",
                  "Backend Developer",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-xl mx-auto md:mx-0 text-base md:text-lg mb-6"
            style={{ color: "var(--color-text-light)" }}
          >
            I build fast, scalable, and modern web & mobile applications using
            the MERN stack.
          </motion.p>

          <motion.a
  href="#contact"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.8 }}
  whileHover={{ scale: 1.05 }}
  className="inline-block px-6 py-3 font-semibold rounded-md shadow-lg transition-all duration-200 backdrop-blur-md bg-opacity-80 hover:bg-opacity-100"
  style={{
    backgroundColor: "var(--color-primary)",
    color: "#fff",
  }}
>
  Let’s Connect
</motion.a>

        </div>

        {/* RIGHT - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-1/2 flex justify-center px-2"
        >
          <Image
            src="/abdullahbhatti.jpg"
            alt="Abdullah Bhatti"
            width={420}
            height={420}
            className="rounded-2xl object-cover shadow-2xl -scale-x-100"
             priority
          />
        </motion.div>
      </div>
    </section>
  );
}
