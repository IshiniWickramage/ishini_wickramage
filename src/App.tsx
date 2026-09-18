import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

import Extracurricular from "./components/Extracurricular";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education/>
        <Extracurricular />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;