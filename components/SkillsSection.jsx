// "use client";
// import { motion } from "framer-motion";
// import { skills } from "@/data/skills";

// const containerVariants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0 },
// };

// export default function SkillsSection() {
//   return (
//     <section
//       id="skills"
//       className="min-h-screen flex items-center justify-center px-6 py-20 bg-white dark:bg-black"
//     >
//       <div className="max-w-5xl w-full mx-auto text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-10"
//         >
//           My Skills
//         </motion.h2>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
//         >
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               className="bg-gray-100 dark:bg-gray-800 px-6 py-4 rounded-xl shadow-sm hover:scale-105 transition-transform duration-300 text-center text-sm font-medium text-gray-700 dark:text-gray-200"
//             >
//               {skill.name}
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function SkillsSection() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 py-24 transition-colors duration-300"
      style={{
        backgroundColor: "var(--color-secondary)",
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
          My Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {skills.map(({ name, icon: Icon }, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="skill-card relative overflow-hidden rounded-xl px-6 py-6 text-sm font-medium shadow-md transition-all duration-300 hover:scale-[1.05] flex flex-col items-center"
              style={{
                backgroundColor: "var(--color-skill-card-bg)",
                color: "var(--color-text)",
                border: "1px solid var(--color-border)",
              }}
            >
              {/* Animated Border Layer */}
              <div className="skill-card-border pointer-events-none"></div>

              {/* Card Content */}
              <Icon
                className="text-3xl mb-2 z-10"
                style={{ color: "var(--color-primary)" }}
              />
              <p className="z-10">{name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
