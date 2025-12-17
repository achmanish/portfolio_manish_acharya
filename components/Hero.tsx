
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ["Problem Solver", "Cloud Engineer", "DevOps Enthusiast"];
  const { theme } = useTheme();
  
  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation effect
    const textInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    
    return () => clearInterval(textInterval);
  }, []);
  
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setCurrentText(titles[currentIndex].substring(0, index));
      index++;
      if (index > titles[currentIndex].length) {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, [currentIndex]);

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center section-padding px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-20"
      role="banner"
      aria-labelledby="hero-name"
    >
      {/* Enhanced background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-teal/5 z-0" aria-hidden="true"></div>
      
      {/* Responsive geometric shape decorations */}
      <div className="absolute top-20 left-4 sm:left-10 w-32 h-32 sm:w-64 sm:h-64 rounded-full bg-teal/5 blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-48 h-48 sm:w-80 sm:h-80 rounded-full bg-teal/10 blur-3xl" aria-hidden="true"></div>
      <div className="absolute top-1/3 right-8 sm:right-20 w-24 h-24 sm:w-40 sm:h-40 rounded-full bg-accent/5 blur-2xl animate-float" aria-hidden="true"></div>
      
      {/* Content with enhanced responsive styling */}
      <div className="container mx-auto z-10">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          
          {/* Content */}
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
          <p 
            className={`text-teal font-nepali text-sm sm:text-base lg:text-lg mb-4 sm:mb-5 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`} 
            style={{ animationDelay: '100ms' }}
            aria-label="Greeting in Nepali"
          >
            नमस्ते 🙏, my name is
          </p>
          
          <h1 
            id="hero-name"
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-foreground mb-3 sm:mb-4 opacity-0 leading-tight ${isVisible ? 'animate-fade-in-up' : ''}`} 
            style={{ animationDelay: '200ms' }}
          >
            Manish Acharya
          </h1>
          
          <h2 
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-teal mb-4 sm:mb-6 opacity-0 leading-tight ${isVisible ? 'animate-fade-in-up' : ''}`} 
            style={{ animationDelay: '300ms' }}
            aria-live="polite"
            aria-label={`Currently displaying: ${currentText}`}
          >
            <span className="inline-block min-h-[2rem] sm:min-h-[2.5rem] lg:min-h-[3.5rem]">{currentText}</span>
            <span className="animate-pulse" aria-hidden="true">|</span>
          </h2>
          
          <p 
            className={`max-w-2xl text-base sm:text-lg lg:text-xl text-foreground/80 mb-6 sm:mb-8 leading-relaxed opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`} 
            style={{ animationDelay: '500ms' }}
          >
            I create robust, scalable solutions for the modern web and cloud infrastructure.
            Passionate about delivering exceptional digital experiences with clean code and optimized systems.
          </p>
          
          <nav 
            className={`flex flex-col sm:flex-row gap-4 sm:gap-6 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`} 
            style={{ animationDelay: '600ms' }}
            aria-label="Primary navigation"
          >
            <a 
              href="#projects" 
              className="group flex items-center justify-center btn-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 w-full sm:w-auto"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
            
            <a 
              href="#contact" 
              className="flex items-center justify-center btn-outline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 w-full sm:w-auto"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </a>
          </nav>
          
          {/* Enhanced professional availability status with responsive design */}
          <div 
            className={`mt-8 sm:mt-10 inline-flex items-center px-3 sm:px-4 py-2 sm:py-2.5 ${theme === 'dark' ? 'bg-primary/10' : 'bg-teal/10'} backdrop-blur-sm border border-primary/30 rounded-md shadow-sm opacity-0 w-full sm:w-auto justify-center sm:justify-start ${isVisible ? 'animate-fade-in-up' : ''}`} 
            style={{ animationDelay: '700ms' }}
            role="status"
            aria-live="polite"
          >
            <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-primary mr-2 sm:mr-3 pulse-animation flex-shrink-0" aria-hidden="true"></div>
            <span className="text-xs sm:text-sm font-medium text-foreground text-center sm:text-left">
              Currently available for freelance projects and consulting
            </span>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
