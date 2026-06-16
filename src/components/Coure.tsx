import React from "react";
import { motion } from "framer-motion";
import { FaAws } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiDocker,
  SiFigma,
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiKalilinux,
  SiGooglecloud
} from "react-icons/si";


const technologies = [
  { name: "React", icon: <SiReact size={48} className="text-[#61DAFB]" /> },
  { name: "Node.js", icon: <SiNodedotjs size={48} className="text-[#339933]" /> },
  { name: "Python", icon: <SiPython size={48} className="text-[#3776AB]" /> },
  { name: "JavaScript", icon: <SiJavascript size={48} className="text-[#F7DF1E]" /> },
  { name: "TypeScript", icon: <SiTypescript size={48} className="text-[#3178C6]" /> },
  { name: "MongoDB", icon: <SiMongodb size={48} className="text-[#47A248]" /> },
  { name: "Docker", icon: <SiDocker size={48} className="text-[#2496ED]" /> },
  { name: "AWS", icon: <FaAws size={48} className="text-[#232F3E]" /> },
  { name: "Figma", icon: <SiFigma size={48} className="text-[#F24E1E]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={48} className="text-[#06B6D4]" /> },
  { name: "Next.js", icon: <SiNextdotjs size={48} className="text-black dark:text-gray-200" /> },
  { name: "MySQL", icon: <SiMysql size={48} className="text-[#4479A1]" /> },
  { name: "Kali Linux", icon: <SiKalilinux size={48} className="text-[#557C94]" /> },
  { name: "Google Cloud", icon: <SiGooglecloud size={48} className="text-[#4285F4]" /> },
];

const Coursess = () => {
  // We duplicate the array to create a seamless infinite loop
  const marqueeItems = [...technologies, ...technologies];

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-20 overflow-hidden border-y border-gray-100 flex flex-col justify-center">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-40">
        <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6"
        >
          Tools & Technologies You Will <span className="text-blue-900">Master</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-3xl mx-auto text-lg"
        >
          Our industry-aligned programs ensure you become proficient in the most in-demand technologies used by top companies worldwide.
        </motion.p>
      </div>

      <div className="relative w-full overflow-hidden flex items-center h-48 before:absolute before:left-0 before:top-0 before:z-20 before:h-full before:w-24 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-20 after:h-full after:w-24 after:bg-gradient-to-l after:from-gray-50 after:to-transparent">
        <motion.div
          className="flex whitespace-nowrap gap-16 md:gap-24 items-center px-8 z-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {marqueeItems.map((tech, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center gap-4 transition-all duration-300"
            >
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 group-hover:shadow-lg group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100">
                {tech.icon}
              </div>
              <span className="text-sm md:text-base font-semibold text-gray-400 group-hover:text-gray-800 transition-colors tracking-wide">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Coursess;
