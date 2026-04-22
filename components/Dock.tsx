"use client"; // Required for interactivity in Next.js

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Github, Linkedin, Mail, X } from "lucide-react";

export default function Dock() {
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    return (
        <>
            {/* 1. The Floating Dock */}
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
                className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40"
            >
                <div className="flex items-center gap-4 px-6 py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">

                    {/* Social Links */}
                    <a href="https://github.com/yourusername" target="_blank" className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:your.email@example.com" className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all">
                        <Mail size={20} />
                    </a>

                    {/* Divider */}
                    <div className="w-[1px] h-6 bg-white/10 mx-2" />

                    {/* Resume Trigger */}
                    <button
                        onClick={() => setIsResumeOpen(true)}
                        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-yellow-400 transition-colors"
                    >
                        <FileText size={16} />
                        <span>Resume</span>
                    </button>
                </div>
            </motion.div>

            {/* 2. The Animated Resume Modal */}
            <AnimatePresence>
                {isResumeOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="relative w-full max-w-4xl h-[85vh] bg-surface border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                        >
                            {/* Modal Header */}
                            <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-black/50">
                                <h3 className="font-mono text-sm text-white/70 tracking-widest uppercase">likith_resume.pdf</h3>
                                <div className="flex gap-4">
                                    <a href="/resume.pdf" download className="text-sm text-yellow-400 hover:text-yellow-300">Download</a>
                                    <button onClick={() => setIsResumeOpen(false)} className="text-white/50 hover:text-white">
                                        <X size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Modal Body (The PDF Viewer) */}
                            <div className="flex-1 w-full bg-white/5">
                                {/* Make sure you put a file named 'resume.pdf' in your /public folder! 
                  The iframe will display it natively.
                */}
                                <iframe
                                    src="/resume.pdf"
                                    className="w-full h-full border-none"
                                    title="Resume"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}