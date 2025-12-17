
import React from 'react';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="section-padding px-4 sm:px-6 lg:px-8 pt-16 border-t border-primary/20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-foreground text-sm">
              © {new Date().getFullYear()} Manish Acharya. All Rights Reserved.
            </p>
          </div>
          
          <div className="flex space-x-6 mr-0 md:mr-16">
            <a 
              href="mailto:acharyamanish.np@gmail.com" 
              className="text-secondary hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/achmanish/" 
              className="text-secondary hover:text-primary transition-colors"
              aria-label="LinkedIn"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/achmanish" 
              className="text-secondary hover:text-primary transition-colors"
              aria-label="GitHub"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
