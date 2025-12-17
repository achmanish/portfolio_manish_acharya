
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { getTechnologyIcon } from '@/utils/iconMapping';
import { Badge } from '@/components/ui/badge';

interface SkillItemProps {
  skill: {
    name: string;
    level: number;
    proficiency: string;
    certified: boolean;
  };
  isVisible: boolean;
  animationDelay: number;
  accentColor: string;
}

const SkillItem = ({ skill, isVisible, animationDelay, accentColor }: SkillItemProps) => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0
    }
  };

  const getProficiencyColor = (proficiency: string) => {
    const colorMap = {
      'Expert': 'bg-green-500',
      'Advanced': 'bg-blue-500',
      'Intermediate': 'bg-orange-500',
      'Beginner': 'bg-gray-500',
    };
    return colorMap[proficiency as keyof typeof colorMap] || 'bg-gray-500';
  };

  const getProficiencyDots = (proficiency: string) => {
    const levelMap = {
      'Expert': 4,
      'Advanced': 3,
      'Intermediate': 2,
      'Beginner': 1,
    };
    return levelMap[proficiency as keyof typeof levelMap] || 1;
  };

  const getAccentHoverColor = (color: string) => {
    const colorMap = {
      blue: 'hover:bg-blue-500/10',
      cyan: 'hover:bg-cyan-500/10',
      orange: 'hover:bg-orange-500/10',
      green: 'hover:bg-green-500/10',
      purple: 'hover:bg-purple-500/10',
      red: 'hover:bg-red-500/10',
    };
    return colorMap[color as keyof typeof colorMap] || 'hover:bg-primary/10';
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{
        duration: 0.4,
        delay: animationDelay / 1000
      }}
      className="group relative p-3 rounded-lg transition-all duration-200 cursor-default hover:bg-muted/50"
    >
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-8 h-8 text-muted-foreground">
          {getTechnologyIcon(skill.name)}
        </div>
        <span className="font-medium text-foreground">
          {skill.name}
        </span>
        {skill.certified && (
          <Badge variant="secondary" className="text-xs px-1.5 py-0.5 ml-auto">
            Certified
          </Badge>
        )}
      </div>
    </motion.div>
  );
};

export default SkillItem;
