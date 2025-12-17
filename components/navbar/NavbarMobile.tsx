
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import ThemeToggle from '@/components/navbar/ThemeToggle';
import NavLinks from '@/components/navbar/NavLinks';


interface NavbarMobileProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  activeSection: string;
}

const NavbarMobile = ({ mobileMenuOpen, setMobileMenuOpen, activeSection }: NavbarMobileProps) => {
  const { theme } = useTheme();
  
  // iOS-safe scroll lock
  useEffect(() => {
    if (mobileMenuOpen) {
      // Store original styles
      const originalStyle = window.getComputedStyle(document.body);
      const originalOverflow = originalStyle.overflow;
      const originalHeight = originalStyle.height;
      
      // Lock scroll
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      document.body.style.touchAction = 'none';
      
      // Disable pointer events on main content
      const main = document.querySelector('main');
      if (main) {
        main.style.pointerEvents = 'none';
        main.setAttribute('aria-hidden', 'true');
      }
      
      return () => {
        // Restore original styles
        document.body.style.overflow = originalOverflow;
        document.body.style.height = originalHeight;
        document.body.style.touchAction = 'auto';
        
        // Re-enable pointer events on main content
        if (main) {
          main.style.pointerEvents = 'auto';
          main.removeAttribute('aria-hidden');
        }
      };
    }
  }, [mobileMenuOpen]);
  
  const MobileMenuPortal = () => {
    if (typeof window === 'undefined') return null;
    
    return createPortal(
      <div 
        className={`fixed inset-0 bg-background/98 backdrop-blur-xl z-[99999] md:hidden flex flex-col transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
        style={{
          backgroundColor: theme === 'dark' ? 'hsl(var(--charcoal) / 0.98)' : 'hsl(var(--background) / 0.98)',
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Close button in top right */}
        <div className="absolute top-6 right-6 z-10">
          <button 
            className={`p-2 rounded-full transition-colors duration-200 ${
              theme === 'dark' 
                ? 'text-soft-white hover:bg-white/10' 
                : 'text-text-dark hover:bg-black/10'
            }`}
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Navigation content */}
        <div className="flex-1 flex flex-col justify-center items-center px-6">
          <nav className="flex flex-col items-center space-y-8">
            <NavLinks 
              activeSection={activeSection} 
              theme={theme} 
              isMobile={true} 
              onClick={() => setMobileMenuOpen(false)} 
            />
          </nav>
        </div>
      </div>,
      document.body
    );
  };
  
  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center space-x-4">
        <ThemeToggle />
        <button 
          className={`p-2 transition-colors duration-200 ${
            theme === 'dark' 
              ? 'text-soft-white hover:text-teal' 
              : 'text-text-dark hover:text-teal'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu Portal */}
      <MobileMenuPortal />
    </>
  );
};

export default NavbarMobile;
