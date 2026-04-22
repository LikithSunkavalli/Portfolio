import { motion } from "framer-motion";

const projects = [
    { title: "SpendWise", domain: "Full Stack", color: "from-blue-500/20" },
    { title: "Face Recognition", domain: "AI/CV", color: "from-purple-500/20" }
];

export default function ProjectSection() {
    return (
        <section className="py-20 px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Selected Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projects.map((p) => (
                    <motion.div
                        key={p.title}
                        whileHover={{ scale: 0.98 }}
                        className={`h-96 rounded-3xl p-8 border border-white/10 bg-gradient-to-br ${p.color} backdrop-blur-3xl relative overflow-hidden group cursor-pointer`}
                    >
                        <span className="text-xs font-mono uppercase tracking-widest opacity-50">{p.domain}</span>
                        <h3 className="text-3xl font-bold mt-2">{p.title}</h3>
                        <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="bg-white text-black px-6 py-2 rounded-full font-medium">View Details</button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}