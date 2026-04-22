const achievements = [
    {
        date: "2026",
        title: "GATE 2026 Candidate",
        desc: "Focusing on Engineering Mathematics and Algorithms.",
        tag: "Academic"
    },
    {
        date: "2026",
        title: "HackXAmrita 2.0 Lead",
        desc: "Managed logistics and financial models for a high-traffic event.",
        tag: "Leadership"
    },
    {
        date: "2025",
        title: "Executive Graphic Designer",
        desc: "Microsoft Learn Student Ambassadors (MLSA) - Amrita Campus.",
        tag: "Design"
    },
    {
        date: "2025",
        title: "IJWMT Research Author",
        desc: "Paper on Wireless and Microwave Technologies.",
        tag: "Research"
    }
];
"use client";
export default function Achievements() {
    return (
        <section className="py-20 max-w-4xl mx-auto px-6">
            <h2 className="text-sm font-mono text-yellow-400 mb-8 uppercase tracking-[0.2em]">Achievements & Timeline</h2>
            <div className="space-y-12">
                {achievements.map((item, i) => (
                    <div key={i} className="flex gap-8 group">
                        <div className="text-white/30 font-mono pt-1 text-sm">{item.date}</div>
                        <div className="relative">
                            {/* Dot and Line */}
                            <div className="h-full w-[1px] bg-white/10 absolute left-[-20px] top-4 group-last:hidden" />
                            <div className="w-2 h-2 rounded-full bg-yellow-400 absolute left-[-23.5px] top-2 shadow-[0_0_10px_#facc15]" />

                            <h3 className="text-xl font-semibold group-hover:text-yellow-400 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-white/50 mt-1 leading-relaxed">{item.desc}</p>
                            <span className="inline-block mt-3 text-[10px] uppercase tracking-wider border border-white/20 px-2 py-0.5 rounded text-white/40">
                                {item.tag}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}