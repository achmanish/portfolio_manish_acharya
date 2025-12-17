
import React from 'react';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import { useIsMobile } from '@/hooks/use-mobile';

const Contact = () => {
  const isMobile = useIsMobile();

  return (
    <section id="contact" className="section-padding px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6 sm:mb-8 lg:mb-12 text-center">
          Get In Touch
        </h2>
        
        {/* Contact form and information in responsive grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-full">
          {/* Contact Form */}
          <div className="order-2 lg:order-1 w-full min-w-0">
            <ContactForm />
          </div>
          
          {/* Contact Information */}
          <div className="order-1 lg:order-2 w-full min-w-0">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
