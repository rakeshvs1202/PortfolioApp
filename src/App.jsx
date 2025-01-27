import Contact from "./components/Contact";
import Experience from "./components/Experience";
import HeroComp from "./components/HeroComp";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technology from "./components/Technology";


export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:text-cyan-900">
      
      <div className="top-0 -z-10 h-full w-full"></div>
      <div className="top-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="container mx-auto px-8">
        <Navbar />
        <HeroComp/>
        <Technology/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  
    </div>
  )
}