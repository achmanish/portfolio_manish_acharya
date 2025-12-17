
import React from 'react';

interface ProjectFiltersProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const ProjectFilters = ({ filters, activeFilter, onFilterChange }: ProjectFiltersProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 min-h-[44px] min-w-[44px] touch-manipulation ${
            activeFilter === filter
              ? "bg-primary text-primary-foreground shadow-md scale-105"
              : "bg-card text-foreground hover:bg-card/80 border border-border"
          }`}
          aria-pressed={activeFilter === filter}
          aria-label={`Filter projects by ${filter}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilters;
