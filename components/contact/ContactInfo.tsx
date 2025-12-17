
import React from 'react';
import { Mail, Linkedin, Github, Globe } from 'lucide-react';
import ContactItem from './ContactItem';

const ContactInfo = () => {
  return (
    <div className="bg-card rounded-lg p-6 border border-border shadow-lg mb-6 md:mb-0">
      <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
      
      <div className="space-y-5">
        <ContactItem 
          icon={Mail}
          title="Email"
          value="acharyamanish.np@gmail.com"
          link="mailto:acharyamanish.np@gmail.com"
        />
        
        <ContactItem 
          icon={Globe}
          title="Website"
          value="acharyamanish.com.np"
          link="https://acharyamanish.com.np"
          external
        />
        
        <ContactItem 
          icon={Linkedin}
          title="LinkedIn"
          value="Manish Acharya"
          link="https://www.linkedin.com/in/achmanish/"
          external
        />
        
        <ContactItem 
          icon={Github}
          title="GitHub"
          value="achmanish"
          link="https://github.com/achmanish"
          external
        />
      </div>
      
      <div className="mt-6">
        <h4 className="font-medium text-foreground mb-2">Location</h4>
        <p className="text-slate">Kathmandu, Nepal</p>
      </div>
    </div>
  );
};

export default ContactInfo;
