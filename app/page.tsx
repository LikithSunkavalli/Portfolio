import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsMarquee from "@/components/SkillsMarquee";
import ProjectSection from "@/components/ProjectSection";
import Achievements from "@/components/Achievements";
import Dock from "@/components/Dock";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white pb-32">
      {/* 1. Hero */}
      <Hero />

      {/* 2. About Me */}
      <About />

      {/* 3. Projects (Bento Grid) */}
      <ProjectSection />

      {/* 4. Skills Marquee */}
      <div className="my-20">
        <SkillsMarquee />
      </div>

      {/* 5. Achievements Timeline */}
      <Achievements />

      {/* 6. Resume & Contact (Floating globally) */}
      <Dock />
    </main>
  );
}