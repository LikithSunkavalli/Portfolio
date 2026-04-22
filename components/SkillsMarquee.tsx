"use client";
import { motion } from "framer-motion";

const skills = [
  "Natural Language Processing", "Computer Vision", "Next.js", "Python",
  "PyTorch", "Flask", "MySQL", "Tailwind CSS", "Word2Vec", "ArcFace",
  "Deep Learning", "Competitive Programming", "Git"
];

export default function SkillsMarquee() {
  return (
    <div className="relative flex overflow-x-hidden border-y border-white/5 py-10 bg-black">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex whitespace-nowrap"
      >
        {/* Duplicate the array to create a seamless loop */}
        {[...skills, ...skills].map((skill, index) => (
          <span
            key={index}
            className="mx-8 text-4xl md:text-6xl font-bold text-white/20 hover:text-white transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}