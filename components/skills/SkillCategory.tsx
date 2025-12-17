
import React from 'react';
import { motion, Variants } from 'framer-motion';
import SkillItem from './SkillItem';

interface SkillCategoryProps {
  category: {
    title: string;
    description: string;
    color: string;
    accentColor: string;
    skills: Array<{
      name: string;
      level: number;
      proficiency: string;
      certified: boolean;
    }>;
  };
  index: number;
  isVisible: boolean;
}

const SkillCategory = ({ category, index, isVisible }: SkillCategoryProps) => {
  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  };

  const getAccentColorClasses = (color: string) => {
    const colorMap = {
      blue: 'border-blue-500/20 hover:border-blue-500/40',
      cyan: 'border-cyan-500/20 hover:border-cyan-500/40',
      orange: 'border-orange-500/20 hover:border-orange-500/40',
      green: 'border-green-500/20 hover:border-green-500/40',
      purple: 'border-purple-500/20 hover:border-purple-500/40',
      red: 'border-red-500/20 hover:border-red-500/40',
    };
    return colorMap[color as keyof typeof colorMap] || 'border-primary/20 hover:border-primary/40';
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.1
      }}
      className="group"
    >
      {/* Simple Card */}
      <div className="relative rounded-xl bg-card border border-border hover:border-border/60 transition-all duration-300 hover:shadow-lg">
        
        {/* Content */}
        <div className="p-6">
          
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {category.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {category.description}
            </p>
          </div>

          {/* Skills List */}
          <div className="space-y-2">
            {category.skills.map((skill, skillIdx) => (
              <SkillItem
                key={skillIdx}
                skill={skill}
                isVisible={isVisible}
                animationDelay={(index * 150) + (skillIdx * 100)}
                accentColor={category.accentColor}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCategory;
