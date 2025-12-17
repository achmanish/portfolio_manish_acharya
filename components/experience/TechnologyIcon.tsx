
import React from 'react';
import { 
  Code2, 
  Database, 
  GitBranch, 
  Globe, 
  Server, 
  Palette,
  Zap,
  Cloud,
  Lock,
  Cpu,
  Monitor,
  Smartphone,
  Settings,
  FileCode,
  Layout,
  Package
} from 'lucide-react';

interface TechnologyIconProps {
  technology: string;
}

const TechnologyIcon = ({ technology }: TechnologyIconProps) => {
  const getIcon = (tech: string) => {
    const techLower = tech.toLowerCase();
    
    // Frontend Technologies
    if (techLower.includes('react')) return <Code2 className="h-4 w-4 text-blue-500" />;
    if (techLower.includes('typescript')) return <FileCode className="h-4 w-4 text-blue-600" />;
    if (techLower.includes('javascript')) return <FileCode className="h-4 w-4 text-yellow-500" />;
    if (techLower.includes('vite')) return <Zap className="h-4 w-4 text-purple-500" />;
    if (techLower.includes('tailwind') || techLower.includes('css')) return <Palette className="h-4 w-4 text-cyan-500" />;
    if (techLower.includes('shadcn') || techLower.includes('ui')) return <Layout className="h-4 w-4 text-gray-600" />;
    if (techLower.includes('hook form') || techLower.includes('form')) return <Settings className="h-4 w-4 text-pink-500" />;
    
    // Backend Technologies
    if (techLower.includes('node') || techLower.includes('express')) return <Server className="h-4 w-4 text-green-600" />;
    if (techLower.includes('supabase')) return <Database className="h-4 w-4 text-green-500" />;
    if (techLower.includes('mongodb')) return <Database className="h-4 w-4 text-green-700" />;
    if (techLower.includes('postgresql') || techLower.includes('mysql')) return <Database className="h-4 w-4 text-blue-700" />;
    
    // Tools & Services
    if (techLower.includes('git') || techLower.includes('github')) return <GitBranch className="h-4 w-4 text-orange-600" />;
    if (techLower.includes('api') || techLower.includes('rest')) return <Globe className="h-4 w-4 text-indigo-500" />;
    if (techLower.includes('aws') || techLower.includes('cloud')) return <Cloud className="h-4 w-4 text-orange-500" />;
    if (techLower.includes('ci/cd') || techLower.includes('docker')) return <Package className="h-4 w-4 text-blue-800" />;
    if (techLower.includes('query')) return <Settings className="h-4 w-4 text-red-500" />;
    
    // Programming Languages
    if (techLower.includes('python')) return <Cpu className="h-4 w-4 text-blue-400" />;
    if (techLower.includes('java')) return <Cpu className="h-4 w-4 text-red-600" />;
    
    // Responsive/Mobile
    if (techLower.includes('responsive') || techLower.includes('mobile')) return <Smartphone className="h-4 w-4 text-gray-500" />;
    
    return <Monitor className="h-4 w-4 text-gray-400" />;
  };

  const getIconColor = (tech: string) => {
    const techLower = tech.toLowerCase();
    
    if (techLower.includes('react')) return 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950/30';
    if (techLower.includes('typescript')) return 'border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-950/30';
    if (techLower.includes('javascript')) return 'border-yellow-200 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-950/30';
    if (techLower.includes('vite')) return 'border-purple-200 bg-purple-50 dark:border-purple-700 dark:bg-purple-950/30';
    if (techLower.includes('tailwind')) return 'border-cyan-200 bg-cyan-50 dark:border-cyan-700 dark:bg-cyan-950/30';
    if (techLower.includes('node')) return 'border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-950/30';
    if (techLower.includes('supabase')) return 'border-green-200 bg-green-50 dark:border-green-700 dark:bg-green-950/30';
    if (techLower.includes('mongodb')) return 'border-green-400 bg-green-50 dark:border-green-600 dark:bg-green-950/30';
    if (techLower.includes('git')) return 'border-orange-300 bg-orange-50 dark:border-orange-700 dark:bg-orange-950/30';
    
    return 'border-primary/20 bg-primary/5 dark:border-primary/30 dark:bg-primary/10';
  };

  return (
    <div className={`flex items-center gap-2 p-3 rounded-lg hover:scale-105 transition-all duration-200 border ${getIconColor(technology)} group min-w-0 flex-1`}>
      <span className="group-hover:scale-110 transition-transform flex-shrink-0">
        {getIcon(technology)}
      </span>
      <span className="text-xs font-medium text-foreground truncate flex-1 min-w-0 leading-relaxed">
        {technology}
      </span>
    </div>
  );
};

export default TechnologyIcon;
