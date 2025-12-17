
import React from 'react';

interface TechnologyBadgeProps {
  technology: string;
  variant?: 'default' | 'compact';
  isAccent?: boolean;
}

const TechnologyBadge = ({ technology, variant = 'default', isAccent = false }: TechnologyBadgeProps) => {
  const getTechIcon = (tech: string) => {
    const techLower = tech.toLowerCase();
    
    // Frontend Technologies
    if (techLower.includes('react')) return '⚛️';
    if (techLower.includes('javascript')) return '📜';
    if (techLower.includes('typescript')) return '📘';
    if (techLower.includes('html')) return '🌐';
    if (techLower.includes('css')) return '🎨';
    if (techLower.includes('tailwind')) return '💨';
    if (techLower.includes('vue')) return '💚';
    if (techLower.includes('angular')) return '🅰️';
    
    // Backend Technologies
    if (techLower.includes('node')) return '🟢';
    if (techLower.includes('express')) return '⚡';
    if (techLower.includes('python')) return '🐍';
    if (techLower.includes('java')) return '☕';
    if (techLower.includes('php')) return '🐘';
    if (techLower.includes('.net')) return '🔷';
    
    // Databases
    if (techLower.includes('mongo')) return '🍃';
    if (techLower.includes('mysql')) return '🐬';
    if (techLower.includes('postgres')) return '🐘';
    if (techLower.includes('redis')) return '🔴';
    
    // Tools & Others
    if (techLower.includes('git')) return '📊';
    if (techLower.includes('docker')) return '🐳';
    if (techLower.includes('aws')) return '☁️';
    if (techLower.includes('firebase')) return '🔥';
    if (techLower.includes('graphql')) return '📈';
    if (techLower.includes('rest')) return '🔗';
    if (techLower.includes('api')) return '🔗';
    if (techLower.includes('ci/cd')) return '🔄';
    if (techLower.includes('jenkins')) return '🔧';
    if (techLower.includes('material')) return '📐';
    if (techLower.includes('redux')) return '🗃️';
    if (techLower.includes('jest')) return '🧪';
    if (techLower.includes('postman')) return '📬';
    if (techLower.includes('jira')) return '📋';
    if (techLower.includes('github')) return '🐱';
    if (techLower.includes('vs code')) return '💻';
    if (techLower.includes('kubernetes')) return '⚙️';
    if (techLower.includes('linux')) return '🐧';
    
    // Default icon
    return '⚙️';
  };

  const isCompact = variant === 'compact';
  const shouldBeAccent = isAccent;

  return (
    <div className={`
      group flex items-center gap-1.5 sm:gap-2
      ${isCompact ? 'px-2 sm:px-3 py-1.5 sm:py-2' : 'px-3 sm:px-4 py-2 sm:py-2.5'} 
      bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg
      hover:shadow-md hover:shadow-primary/10 hover:bg-card hover:border-primary/30
      transition-all duration-300 ease-out
      min-w-0 flex-1 cursor-default
      ${shouldBeAccent ? 'border-primary/50 bg-primary/5 shadow-sm' : ''}
    `}>
      <span className="text-xs sm:text-sm flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
        {getTechIcon(technology)}
      </span>
      <span className={`
        font-medium text-foreground/90 group-hover:text-foreground
        transition-colors duration-300 truncate flex-1 min-w-0
        ${isCompact ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'}
        ${shouldBeAccent ? 'text-primary font-semibold' : ''}
      `}>
        {technology}
      </span>
    </div>
  );
};

export default TechnologyBadge;
