
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';

import Contact from '@/components/Contact';
import Footer from '@/components/Footer';


import { ArrowUp } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const { theme, isThemeLoaded } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Show loading state until theme is ready to prevent flash
  if (!isThemeLoaded) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Render the main content with appropriate theme
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main id="main-content">
        <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
        <Contact />
        <Footer />
      </main>
      
      {/* Scroll to top button with improved styling */}
      <button 
        onClick={scrollToTop} 
        className={`fixed bottom-6 right-6 p-3.5 rounded-full bg-primary shadow-lg transition-all duration-500 hover:shadow-primary/25 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 z-[9997] ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 text-primary-foreground" />
      </button>
    </div>
  );
};

export default Index;
