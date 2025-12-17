
import React from 'react';
import { useTheme } from '@/components/ThemeProvider';
import ThemeToggle from '@/components/navbar/ThemeToggle';
import NavLinks from '@/components/navbar/NavLinks';


const NavbarDesktop = ({ activeSection }: { activeSection: string }) => {
  const { theme } = useTheme();
  
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <NavLinks activeSection={activeSection} theme={theme} />
      
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        
      </div>
    </nav>
  );
};

export default NavbarDesktop;
