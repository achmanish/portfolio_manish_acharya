
import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { experiences } from './experience/experienceData';
import ExperienceTabs from './experience/ExperienceTabs';
import ExperienceContent from './experience/ExperienceContent';
import ExperienceMobile from './experience/ExperienceMobile';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('experience');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const toggleMobileItem = (id: number) => {
    setExpandedMobile(expandedMobile === id ? null : id);
  };

  const activeExperience = experiences.find(exp => exp.id === activeTab);

  return (
    <section id="experience" className={`section-padding px-4 sm:px-6 lg:px-8 bg-card relative pt-16 ${theme === 'dark' ? '' : 'bg-muted/30'}`}>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-10 sm:-top-20 -left-10 sm:-left-20 w-32 h-32 sm:w-64 sm:h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-16 sm:-bottom-32 -right-16 sm:-right-32 w-48 h-48 sm:w-96 sm:h-96 rounded-full bg-primary/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6 sm:mb-8 lg:mb-12 text-center">
          My Experience
        </h2>
        
        {/* Career Journey Summary */}
        <div className="mb-6 sm:mb-8 lg:mb-10 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4">
            My professional journey spans from frontend development to cloud engineering,
            building expertise across modern web technologies, cloud infrastructure, and full-stack development.
          </p>
        </div>
        
        {/* Desktop Experience View */}
        <div className="hidden md:flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
          <ExperienceTabs 
            experiences={experiences}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            isVisible={isVisible}
          />
          
          <div className={`flex-1 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {activeExperience && <ExperienceContent experience={activeExperience} />}
          </div>
        </div>
        
        {/* Mobile Experience View */}
        <ExperienceMobile 
          experiences={experiences}
          expandedMobile={expandedMobile}
          onToggle={toggleMobileItem}
          isVisible={isVisible}
        />
      </div>
    </section>
  );
};

export default Experience;
