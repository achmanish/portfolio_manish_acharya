
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import TechnologyBadge from '@/components/ui/TechnologyBadge';

interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  achievements: string;
  technologies: string[];
}

interface ExperienceContentProps {
  experience: Experience;
}

const ExperienceContent = ({ experience }: ExperienceContentProps) => {
  const { theme } = useTheme();

  const accentTechs = ['Node.js', 'React', 'JavaScript', 'TypeScript'];

  return (
    <div>
      <h3 className="text-xl font-semibold text-foreground mb-1">
        {experience.role} <span className="text-primary">@ {experience.company}</span>
      </h3>
      
      <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground mb-4 gap-2 sm:gap-4">
        <p className="flex items-center">
          <Calendar className="mr-2 h-4 w-4 text-primary" />
          {experience.duration}
        </p>
        <p className="flex items-center">
          <MapPin className="mr-2 h-4 w-4 text-primary" />
          {experience.location}
        </p>
      </div>
      
      <ul className="space-y-3 mb-6">
        {experience.description.map((point, idx) => (
          <li key={idx} className="flex text-foreground/80 group">
            <span className="text-primary mr-3 transform group-hover:translate-x-1 transition-transform">▹</span>
            <span className="group-hover:text-foreground transition-colors">{point}</span>
          </li>
        ))}
      </ul>
      
      {experience.achievements && (
        <div className="mb-6 bg-muted/30 p-4 border-l-2 border-primary rounded">
          <h4 className="text-foreground text-sm font-semibold mb-2">Key Achievement:</h4>
          <p className="text-muted-foreground italic">{experience.achievements}</p>
        </div>
      )}
      
      <div className="mt-6 p-6 rounded-lg bg-gradient-to-br from-muted/20 to-card/50 backdrop-blur-sm border border-border/50 shadow-lg">
        <h4 className="text-foreground text-lg font-bold mb-4 flex items-center gap-2">
          <span className="text-primary">⚡</span>
          Technologies used:
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {experience.technologies.map((tech, idx) => (
            <TechnologyBadge 
              key={idx} 
              technology={tech} 
              isAccent={accentTechs.includes(tech)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceContent;
