"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-32 px-6 max-w-4xl mx-auto">
            <h2 className="text-sm font-mono text-yellow-400 mb-12 uppercase tracking-[0.2em]">
        // Background
            </h2>

            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl md:text-5xl font-medium leading-tight text-white/60"
            >
                I am a 3rd-year AI engineering student at Amrita Vishwa Vidyapeetham. My work operates at the intersection of <span className="text-white">deep metric learning</span> and <span className="text-white">full-stack development</span>.
            </motion.h3>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-xl md:text-2xl text-white/40 mt-8 max-w-2xl leading-relaxed"
            >
                Whether I am optimizing feature extraction models like ArcFace or building database-driven financial tools like SpendWise, my focus remains constant: building efficient, real-world solutions that refuse to compromise on design or performance.
            </motion.p>
        </section>
    );
}