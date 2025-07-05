"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";
import { IoRibbonSharp } from "react-icons/io5";
import { FaCertificate } from "react-icons/fa";

export default function AchievementsSection() {
  const { theme } = useContext(ThemeContext);

  const achievements = [
    {
      type: "badge",
      image: "/certificates/javascript-essentials-1.png",
    },
    {
      type: "certificate",
      image:
        "/certificates/JavaScriptEssentials1Update20250705-29-sovita_page-0001.jpg",
    },
    {
      type: "certificate",
      image:
        "/certificates/JavaScript_Essentials_1_certificate_abdullah-bhatti345-gmail-com_49c9e5f0-ef1b-44cc-9d53-ff716d3697e0_page-0001.jpg",
    },
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen flex items-center justify-center px-6 py-24 transition-colors duration-300"
      style={{
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="max-w-6xl w-full mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16"
          style={{ color: "var(--color-primary)" }}
        >
          My Achievements
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-4 shadow-md"
            >
              {/* Icon in top-left outside */}
              <div className="absolute -top-4 -left-4 bg-[var(--color-bg)] p-2 rounded-full shadow-md text-[var(--color-primary)] z-10">
                {item.type === "badge" ? (
                  <IoRibbonSharp className="text-6xl" />
                ) : (
                  <FaCertificate className="text-6xl" />
                )}
              </div>

              {/* Image */}
              <div className="relative w-full h-60 rounded-md overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.type}
                  fill
                  className={`rounded-md ${
                    item.type === "badge"
                      ? "object-contain p-4"
                      : "object-cover"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
