import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Disable scroll during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  return (
    <div className="relative">
      {/* Main Content */}
      <div 
        className="main-content"
        style={{ opacity: isLoading ? 0 : 1 }}
      >
        {/* Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 -z-10" />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Sections */}
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;