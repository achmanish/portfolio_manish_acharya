
import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { createPortal } from 'react-dom';
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

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (project) {
      setImageLoaded(false);
      setImageError(false);
      // Lock scroll when modal opens
      document.body.style.overflow = 'hidden';
    } else {
      // Unlock scroll when modal closes
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [project, onClose]);

  if (!project) return null;

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageLoaded(true);
    setImageError(true);
  };

  const modalContent = (

    <div className="fixed inset-0 flex items-center justify-center z-[10000] p-2 sm:p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-background/90 backdrop-blur-md"></div>
      <div 
        className="bg-card rounded-lg shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto relative z-10 border border-border/20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-card/98 backdrop-blur-sm p-4 border-b border-border z-20">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground p-2 rounded-full hover:bg-muted/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
          
          <h3 className="text-lg md:text-2xl font-bold text-foreground pr-12">
            {project.title}
          </h3>
          
          <div className="mt-2">
            <span className="inline-block text-xs px-3 py-1 bg-primary/10 rounded-full text-primary border border-primary/20">
              {project.category}
            </span>
          </div>
        </div>
        
        <div className="p-4 md:p-6">
          {/* Project Image - Simplified and reliable */}
          <div className="mb-4 sm:mb-6 w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-muted rounded-lg overflow-hidden relative">
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            )}
            
            {imageError ? (
              <div className="w-full h-full flex items-center justify-center bg-muted border-2 border-dashed border-border">
                <div className="text-center text-muted-foreground">
                  <div className="text-2xl mb-2">🖼️</div>
                  <p className="text-sm">Image not available</p>
                </div>
              </div>
            ) : (
              <img 
                src={project.image}
                alt={`${project.title} project screenshot`}
                className={`w-full h-full object-cover object-top transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
            )}
          </div>
          
          {/* Project Description */}
          <div className="mb-4">
            <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">Project Overview</h4>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">{project.description}</p>
          </div>
          
          {/* Project Details */}
          <div className="mb-4">
            <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">Technical Details</h4>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">{project.details}</p>
          </div>
          
          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-base md:text-lg font-semibold text-foreground mb-3">Technologies Used</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.tech.map((tech, techIdx) => (
                <TechnologyBadge key={techIdx} technology={tech} />
              ))}
            </div>
          </div>
          
          {/* Action Button - GitHub only */}
          <a 
            href={project.githubLink === '#' ? undefined : project.githubLink}
            className={`flex w-full items-center justify-center px-4 py-3 rounded-md transition-colors ${
              project.githubLink === '#' 
                ? 'bg-muted text-muted-foreground cursor-not-allowed border border-border' 
                : 'bg-card text-foreground border border-border hover:bg-muted'
            }`}
            target={project.githubLink === '#' ? undefined : "_blank"}
            rel={project.githubLink === '#' ? undefined : "noopener noreferrer"}
            onClick={project.githubLink === '#' ? (e) => e.preventDefault() : undefined}
          >
            <Github className="mr-2 h-5 w-5" />
            {project.githubLink === '#' ? 'Source Code (Coming Soon)' : 'View Source Code'}
          </a>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ProjectModal;
