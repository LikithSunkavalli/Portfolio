// components/Dock.tsx
export default function Dock() {
    return (
        <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex items-center gap-6 z-50">
            <a href="/" className="hover:text-yellow-400 transition-colors">Home</a>
            <a href="/projects" className="hover:text-yellow-400 transition-colors">Projects</a>
            <a
                href="/resume.pdf"
                target="_blank"
                className="bg-white text-black px-4 py-1.5 rounded-full font-medium hover:bg-yellow-400 transition-colors"
            >
                Resume
            </a>
        </nav>
    );
}