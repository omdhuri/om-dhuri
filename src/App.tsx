import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useScrollReveal } from "./hooks/useScrollReveal";

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-canvas text-ink">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
