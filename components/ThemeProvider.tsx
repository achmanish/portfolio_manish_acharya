
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  isThemeLoaded: boolean;
};

// Create a context with default values
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  isThemeLoaded: false,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  // Load theme preference once on mount
  useEffect(() => {
    try {
      // Check for user preference in localStorage or system preference
      const savedTheme = localStorage.getItem('theme') as Theme;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
        setTheme(savedTheme);
      } else if (prefersDark) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    } catch (error) {
      // Fallback to light theme if error occurs
      setTheme('light');
    }
    
    setIsThemeLoaded(true);
  }, []);

  // Apply theme to document when it changes
  useEffect(() => {
    if (!isThemeLoaded) return;
    
    try {
      const root = document.documentElement;
      
      // Remove both classes first
      root.classList.remove('dark', 'light');
      
      // Add the current theme class
      root.classList.add(theme);
      
      // Also set data attribute for additional styling if needed
      root.setAttribute('data-theme', theme);
      
      localStorage.setItem('theme', theme);
    } catch (error) {
      // Silent fail - theme will apply on next load
    }
  }, [theme, isThemeLoaded]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isThemeLoaded }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for using the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  
  return context;
}
