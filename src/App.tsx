import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ActivitiesSection } from "./components/ActivitiesSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#05060f] text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.2),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(236,72,153,0.18),transparent_50%)]" />
      </div>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ActivitiesSection />
      </main>
      <Footer />
    </div>
  );
}