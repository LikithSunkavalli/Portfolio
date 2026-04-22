import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center px-6 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-yellow-400 font-mono text-sm mb-4 uppercase tracking-widest">
                    Sunkavalli Likith Sai
                </h2>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter mb-6">
                    Full Stack Developer <br className="hidden md:block" />
                    <span className="text-white/40">& AI Enthusiast.</span>
                </h1>
                <p className="text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
                    Bridging the gap between intelligent systems and scalable web applications. Currently a 3rd-year AI engineering student building real-world solutions.
                </p>

                <div className="flex gap-4">
                    <a href="#projects" className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform">
                        View Projects
                    </a>
                    <a href="mailto:your.email@example.com" className="bg-white/10 text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-colors border border-white/5">
                        Contact Me
                    </a>
                </div>
            </motion.div>
        </section>
    );
}