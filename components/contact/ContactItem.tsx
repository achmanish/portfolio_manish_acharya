
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactItemProps {
  icon: LucideIcon;
  title: string;
  value: string;
  link?: string;
  external?: boolean;
}

const ContactItem = ({ icon: Icon, title, value, link, external = false }: ContactItemProps) => {
  return (
    <div className="flex items-start">
      <Icon className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
      <div className="overflow-hidden">
        <h4 className="font-medium text-foreground mb-0.5">{title}</h4>
        {link ? (
          <a 
            href={link} 
            target={external ? "_blank" : undefined} 
            rel={external ? "noopener noreferrer" : undefined}
            className="text-slate hover:text-primary transition-colors text-sm break-all"
          >
            {value}
          </a>
        ) : (
          <p className="text-slate text-sm break-all">{value}</p>
        )}
      </div>
    </div>
  );
};

export default ContactItem;
