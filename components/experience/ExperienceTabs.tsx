
import React from 'react';

interface Experience {
  id: number;
  company: string;
}

interface ExperienceTabsProps {
  experiences: Experience[];
  activeTab: number;
  onTabChange: (id: number) => void;
  isVisible: boolean;
}

const ExperienceTabs = ({ experiences, activeTab, onTabChange, isVisible }: ExperienceTabsProps) => {
  return (
    <div className={`hidden md:block transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
      <div className="flex flex-col border-l border-muted">
        {experiences.map((exp) => (
          <button
            key={exp.id}
            className={`px-6 py-3 text-left transition-colors duration-300 ${
              activeTab === exp.id 
                ? "text-primary border-l-2 border-primary -ml-[2px]" 
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
            onClick={() => onTabChange(exp.id)}
          >
            {exp.company}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTabs;
