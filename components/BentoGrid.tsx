import { motion } from "framer-motion";

const Card = ({ title, children, className }: any) => (
    <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`bg-card border border-white/10 rounded-2xl p-6 overflow-hidden relative group ${className}`}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <h3 className="text-sm font-medium text-white/50 mb-4">{title}</h3>
        {children}
    </motion.div>
);

export default function BentoGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto p-4">
            {/* Featured Project */}
            <Card title="FEATURED PROJECT" className="md:col-span-2 md:row-span-2 h-[400px]">
                <h2 className="text-3xl font-bold">SpendWise</h2>
                <p className="text-white/60 mt-2">Full-stack financial assistant with subscription tracking.</p>
                {/* Add a subtle visual or code snippet here */}
            </Card>

            {/* Tech Stack */}
            <Card title="CAPABILITIES" className="h-[192px]">
                <div className="flex flex-wrap gap-2">
                    {['NLP', 'CV', 'Next.js', 'Python'].map(skill => (
                        <span key={skill} className="px-2 py-1 bg-white/5 rounded text-xs border border-white/10">{skill}</span>
                    ))}
                </div>
            </Card>

            {/* Research */}
            <Card title="RESEARCH" className="h-[192px]">
                <p className="text-sm">Feature Extraction for Face Recognition (ArcFace/FaceNet)</p>
            </Card>
        </div>
    );
}