
import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import NavbarDesktop from './navbar/NavbarDesktop';
import NavbarMobile from './navbar/NavbarMobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, isThemeLoaded } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      // For navbar background
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // For active section highlighting
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight && sectionId) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when escape key is pressed
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  // Scroll lock is now handled in NavbarMobile component

  return (
    <header 
      className={`fixed top-0 w-full z-[9999] transition-all duration-300 ${
        isScrolled 
          ? theme === 'dark' 
            ? 'bg-charcoal/95 backdrop-blur-md py-3 shadow-lg border-b border-border/20' 
            : 'bg-background/95 backdrop-blur-md py-3 shadow-lg border-b border-border/50' 
          : 'bg-transparent py-5'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          className="group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({top: 0, behavior: 'smooth'});
            setActiveSection('home');
          }}
          aria-label="Go to top of page"
        >
          <div className="relative">
            {/* Signature-style MA */}
            <div className="font-signature text-4xl font-bold text-teal transform group-hover:scale-110 transition-all duration-300 relative">
              <span className="relative inline-block tracking-wide">
                M<span className="text-cyan">A</span>
                {/* Signature underline with pen stroke effect */}
                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-teal via-cyan to-teal group-hover:w-full transition-all duration-700 ease-out transform origin-left"></div>
                {/* Signature flourish dot */}
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-teal rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300"></div>
              </span>
            </div>
          </div>
        </a>
        
        <NavbarDesktop activeSection={activeSection} />
        <NavbarMobile 
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen} 
          activeSection={activeSection} 
        />
      </div>
    </header>
  );
};

export default Navbar;
