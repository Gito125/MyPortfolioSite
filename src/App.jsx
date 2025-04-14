// import components
import { useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Vercel Analytics
import { Analytics } from "@vercel/analytics/react"

// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100,
      // disable: "mobile",
    });
  }, []);
  return (
    <div className="overflow-hidden">
      {/* Vercel Analytics */}
      <Analytics />

      {/* Website Components */}
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Testimonials />
      <Hireme />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
