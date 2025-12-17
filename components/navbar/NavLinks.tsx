
import React from 'react';

interface NavLinksProps {
  activeSection: string;
  theme: string;
  isMobile?: boolean;
  onClick?: () => void;
}

const NavLinks = ({ activeSection, theme, isMobile = false, onClick }: NavLinksProps) => {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Close mobile menu if applicable
    if (onClick) {
      onClick();
    }
    
    // Smooth scroll to section with navbar offset
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navbarHeight = 80; // Account for fixed navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (isMobile) {
    return (
      <>
        {navLinks.map((link, i) => {
          const isActive = activeSection === link.href.substring(1);
          return (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative text-xl font-heading font-medium transition-colors duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation ${
                isActive 
                  ? 'text-teal' 
                  : theme === 'dark'
                    ? 'text-soft-white hover:text-teal'
                    : 'text-text-dark hover:text-teal'
              }`}
              style={{ 
                transitionDelay: `${i * 100}ms`,
                transform: 'translateY(0)',
                opacity: 1,
                transition: 'transform 0.3s ease, opacity 0.3s ease, color 0.3s ease'
              }}
              aria-label={`Navigate to ${link.name} section`}
            >
              {link.name}
            </a>
          );
        })}
      </>
    );
  }

  return (
    <>
      {navLinks.map((link, i) => {
        const isActive = activeSection === link.href.substring(1);
        return (
          <a 
            key={link.name} 
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className={`relative text-sm font-medium font-heading transition-colors duration-300 min-h-[44px] flex items-center px-2 touch-manipulation ${
              isActive 
                ? 'text-teal' 
                : theme === 'dark' 
                  ? 'text-soft-white hover:text-teal' 
                  : 'text-text-dark hover:text-teal'
            }`}
            style={{ animationDelay: `${i * 100}ms` }}
            aria-label={`Navigate to ${link.name} section`}
          >
            {link.name}
            <span className={`absolute -bottom-1 left-2 right-2 h-0.5 bg-teal transition-all duration-300 ${
              isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
            }`}></span>
          </a>
        );
      })}
    </>
  );
};

export default NavLinks;
