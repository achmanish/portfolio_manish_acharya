
import React from 'react';
import { ChevronRight, MapPin } from 'lucide-react';
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

interface ExperienceMobileProps {
  experiences: Experience[];
  expandedMobile: number | null;
  onToggle: (id: number) => void;
  isVisible: boolean;
}

const ExperienceMobile = ({ experiences, expandedMobile, onToggle, isVisible }: ExperienceMobileProps) => {
  const { theme } = useTheme();
  const accentTechs = ['Node.js', 'React', 'JavaScript', 'TypeScript'];

  return (
    <div className="md:hidden space-y-4 px-2">
      {experiences.map((exp) => (
        <div 
          key={exp.id}
          id={`experience-mobile-${exp.id}`}
          className={`${theme === 'dark' ? 'bg-card/30' : 'bg-background'} backdrop-blur-sm border border-border rounded-lg overflow-hidden transition-all duration-300 scroll-mt-24 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: `${exp.id * 100}ms` }}
        >
          <button 
            className="w-full p-4 flex justify-between items-center text-left"
            onClick={() => {
              const willExpand = expandedMobile !== exp.id;
              onToggle(exp.id);
              const element = document.getElementById(`experience-mobile-${exp.id}`);
              if (!element) return;
              const doScroll = () => {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              };
              // Scroll immediately
              doScroll();
              // And after expansion animation completes
              if (willExpand) {
                window.setTimeout(doScroll, 360);
              }
            }}
          >
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-foreground truncate">{exp.role}</h3>
              <p className="text-sm text-muted-foreground truncate">{exp.company} • {exp.duration}</p>
            </div>
            <ChevronRight 
              className={`h-5 w-5 text-muted-foreground transition-transform flex-shrink-0 ml-2 ${
                expandedMobile === exp.id ? 'rotate-90' : ''
              }`} 
            />
          </button>
          
          <div 
            className={`px-4 pb-4 transition-all duration-300 ${
              expandedMobile === exp.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <p className="flex items-center text-sm text-foreground/80 mb-3">
              <MapPin className="mr-2 h-3 w-3 text-primary flex-shrink-0" />
              {exp.location}
            </p>
            
            <ul className="space-y-2 mb-4">
              {exp.description.map((point, idx) => (
                <li key={idx} className="flex text-foreground/80 text-sm">
                  <span className="text-primary mr-2 flex-shrink-0">▹</span>
                  <span className="flex-1">{point}</span>
                </li>
              ))}
            </ul>
            
            {exp.achievements && (
              <div className="mb-4 bg-primary/5 p-3 border-l-2 border-primary rounded">
                <h4 className="text-foreground text-xs font-semibold mb-1">Key Achievement:</h4>
                <p className="text-foreground/80 text-sm italic">{exp.achievements}</p>
              </div>
            )}
            
            <div className="p-4 rounded-lg bg-gradient-to-br from-muted/20 to-card/50 backdrop-blur-sm border border-border/50">
              <h4 className="text-foreground text-base font-bold mb-3 flex items-center gap-2">
                <span className="text-primary">⚡</span>
                Technologies used:
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {exp.technologies.map((tech, idx) => (
                  <TechnologyBadge 
                    key={idx} 
                    technology={tech} 
                    variant="compact" 
                    isAccent={accentTechs.includes(tech)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceMobile;
