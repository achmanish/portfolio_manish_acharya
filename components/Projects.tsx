
import React, { useState, useEffect } from 'react';
import ProjectCard from './projects/ProjectCard';
import ProjectModal from './projects/ProjectModal';
import ProjectFilters from './projects/ProjectFilters';

const projects = [
  {
    id: 1,
    title: "Elegance",
    description: "A modern beauty and cosmetics e-commerce web application designed specifically for the Nepalese market with local payment and shipping solutions.",
    details: "Built a comprehensive e-commerce platform tailored for Nepal's beauty market. Features include user authentication, product catalog with advanced search and filters, shopping cart with checkout, cash on delivery payment, local shipping zones with standard/express/premium options, and a complete admin panel for order and inventory management. The application supports both English and Nepali languages, uses Nepalese Rupee currency, and includes real-time updates for inventory and orders.",
    tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL", "shadcn/ui", "React Hook Form"],
    githubLink: "#",
    image: "/images/project-elegance.png",
    category: "E-commerce"
  },
  {
    id: 2,
    title: "Inception",
    description: "A recruitment and job application management system built as a web application with React, TypeScript, and modern UI libraries.",
    details: "Developed a comprehensive job portal with public job listings and an admin dashboard for candidate management. Implemented responsive design with dark/light mode using Shadcn UI and Tailwind CSS. Built with React Context API for authentication and TanStack React Query for data fetching. The system is designed to be connected to Supabase for production use with authentication services, database storage, and file management.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "React Query"],
    githubLink: "#",
    image: "/images/project-inception.png",
    category: "Frontend"
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showAllTech, setShowAllTech] = useState({});
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  const toggleShowAllTech = (projectId) => {
    setShowAllTech(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const filters = ["All", "E-commerce", "Frontend"];

  return (
    <section id="projects" className="section-padding px-4 sm:px-6 lg:px-8 pt-20 pb-16 bg-gradient-to-b from-background to-primary/5 relative isolation-auto">
      <div className="container mx-auto">
        {/* Responsive section heading with better spacing */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-2 sm:px-4 leading-relaxed">
            Showcasing innovative solutions and technical expertise
          </p>
        </div>
        
        <div className="mb-8 sm:mb-10">
          <ProjectFilters 
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>
        
        {/* Responsive projects grid with proper spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              isVisible={isVisible}
              showAllTech={showAllTech}
              onToggleShowAllTech={toggleShowAllTech}
              onSelectProject={setSelectedProject}
            />
          ))}
        </div>
        
        <ProjectModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;
