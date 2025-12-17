
import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Github, AlertCircle } from 'lucide-react';
import TechnologyBadge from '@/components/ui/TechnologyBadge';

interface Project {
  id: number;
  title: string;
  description: string;
  details: string;
  tech: string[];
  githubLink: string;
  image: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
  showAllTech: { [key: number]: boolean };
  onToggleShowAllTech: (projectId: number) => void;
  onSelectProject: (project: Project) => void;
}

const ProjectCard = ({ 
  project, 
  index, 
  isVisible, 
  showAllTech, 
  onToggleShowAllTech, 
  onSelectProject 
}: ProjectCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    
    if (url === '#' || !url) {
      alert('GitHub Repository coming soon! This is a portfolio demonstration.');
      return;
    }
    
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <div 
      className={`project-card bg-card overflow-hidden group cursor-pointer rounded-lg shadow-lg border border-border transition-all duration-500 hover:shadow-xl hover:scale-[1.02] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={() => onSelectProject(project)}
    >
      {/* Project Image - Responsive aspect ratio */}
      <div className="image-container relative bg-muted w-full aspect-[4/3] sm:aspect-[16/9]">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-primary"></div>
          </div>
        )}
        
        {imageError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted text-muted-foreground">
            <AlertCircle className="h-8 w-8 sm:h-12 sm:w-12 mb-2" />
            <span className="text-xs sm:text-sm">Image unavailable</span>
          </div>
        ) : (
          <img 
            src={project.image || "/placeholder.svg"}
            alt={`${project.title} project screenshot`} 
            className={`w-full h-full object-cover object-top transform group-hover:scale-105 transition-all duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setImageLoaded(true);
            }}
          />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category badge - Responsive */}
        <span className="absolute top-2 sm:top-3 right-2 sm:right-3 text-xs px-2 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground rounded-md shadow-sm">
          {project.category}
        </span>
      </div>
      
      <div className="p-3 sm:p-4 lg:p-6">
        {/* Project Title - Responsive typography */}
        <h3 className="text-foreground font-bold text-base sm:text-lg lg:text-xl xl:text-2xl mb-2 sm:mb-3 group-hover:text-primary transition-colors leading-tight">
          {project.title}
        </h3>
        
        {/* Project Description - Responsive */}
        <p className="text-foreground/70 mb-3 sm:mb-4 lg:mb-5 text-sm sm:text-base leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        {/* Tech Stack - Responsive grid */}
        <div className="mb-3 sm:mb-4 lg:mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
            {(showAllTech[project.id] ? project.tech : project.tech.slice(0, 4)).map((tech, techIdx) => (
              <TechnologyBadge key={techIdx} technology={tech} variant="compact" />
            ))}
          </div>
          {project.tech.length > 4 && (
            <div className="mt-3 text-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleShowAllTech(project.id);
                }}
                className="text-xs sm:text-sm px-3 sm:px-4 py-2 bg-primary/10 rounded-full text-primary border border-primary/20 font-medium hover:bg-primary/20 transition-colors min-h-[44px] min-w-[44px] touch-manipulation"
                aria-label={showAllTech[project.id] ? 'Show fewer technologies' : `Show ${project.tech.length - 4} more technologies`}
              >
                {showAllTech[project.id] 
                  ? 'Show Less' 
                  : `+${project.tech.length - 4} more`
                }
              </button>
            </div>
          )}
        </div>
        
        {/* Action Button - GitHub only */}
        <button 
          onClick={(e) => handleLinkClick(e, project.githubLink)}
          className="w-full flex items-center justify-center px-3 sm:px-4 py-2.5 sm:py-3 bg-card text-xs sm:text-sm font-medium text-primary rounded-md border border-primary/30 hover:bg-primary/10 transition-colors min-h-[44px] touch-manipulation"
          aria-label={`View source code of ${project.title} on GitHub`}
        >
          <Github className="mr-2 h-4 w-4" aria-hidden="true" />
          Source Code
        </button>
        
        {/* Details Button - Responsive */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onSelectProject(project);
          }}
          className="w-full mt-2 sm:mt-3 flex items-center justify-center px-3 sm:px-4 py-2.5 sm:py-3 bg-muted text-xs sm:text-sm font-medium text-foreground rounded-md hover:bg-muted/80 transition-colors min-h-[44px] touch-manipulation"
          aria-label={`View detailed information about ${project.title}`}
        >
          <ArrowRight className="mr-2 h-4 w-4" aria-hidden="true" />
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
