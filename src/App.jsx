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
import { Analytics } from "@vercel/analytics/react";

// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import ThemeToggleButton from "./components/miniComponents/ThemeToggleButton";
import useTypingTitle from "./components/customHook/useTypingTitle";
import { useState } from "react";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 100,
      // disable: "mobile",
    });
  }, []);

  // For animations in the document title
  useTypingTitle({
    titles: [
      "Gideon Prime | Full-Stack Wizard 💻",
      "⚡Crafting Web Magic... 🪄",
      "Let’s Build the Future 🛠️",
      "Available for Missions 🛰️",
    ],
    typingSpeed: 100,
    deletingSpeed: 50,
    delayBetween: 1500,
    inactiveTitle: "👋 Hey! You left me here 😢"
  });

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

      {/* Theme Button */}
      <ThemeToggleButton />
    </div>
  );
};

export default App;
