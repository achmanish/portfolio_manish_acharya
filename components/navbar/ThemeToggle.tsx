
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme, isThemeLoaded } = useTheme();
  
  // Don't render until theme is loaded to prevent flash
  if (!isThemeLoaded) {
    return (
      <div className="p-2 w-[42px] h-[42px] rounded-full" aria-hidden="true">
        <div className="w-[18px] h-[18px] bg-muted animate-pulse rounded"></div>
      </div>
    );
  }
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-muted transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun size={18} className="text-primary transition-transform duration-300 hover:rotate-12" />
      ) : (
        <Moon size={18} className="text-primary transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;
