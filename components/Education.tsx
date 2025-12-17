
import React, { useEffect, useState } from 'react';
import { GraduationCap, MapPin } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";

const educations = [
  {
    degree: "Full Stack Web Development",
    institution: "freeCodeCamp",
    location: "Online",
    period: "",
    description: "Completed comprehensive full-stack web development curriculum focusing on modern JavaScript frameworks, responsive design, and best practices in software engineering. Gained hands-on experience through practical projects and coding challenges.",
    courses: ["HTML5", "Cascading Style Sheets (CSS)", "Vanilla JavaScript", "jQuery", "React.js", "Redux", "Clean code", "Test-Driven Development", "API Development"],
  }
];

const Education = () => {
  const [activeEdu, setActiveEdu] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('education');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="education" className="section-padding px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative isolation-auto">
      {/* Modern background with subtle pattern */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 right-20 w-64 h-64 rounded-full bg-primary/5 blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-primary/10 blur-xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Education
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-2 sm:px-4 leading-relaxed">
            Academic background and continuous learning journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {/* Timeline - improved for mobile */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="relative border-l border-border pl-6 py-2 space-y-8 md:border-none md:pl-0">
              {educations.map((edu, idx) => (
                <div 
                  key={idx} 
                  className={`relative cursor-pointer group ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${idx * 200}ms` }}
                  onClick={() => setActiveEdu(idx)}
                >
                  {/* Circle indicator for mobile */}
                  <div className="md:hidden absolute -left-9 top-1 w-3 h-3 rounded-full bg-primary border-4 border-background"></div>
                  
                  <div className={`p-4 rounded-lg transition-all duration-300 ${
                    activeEdu === idx 
                      ? 'bg-card shadow-md border border-primary/20' 
                      : 'hover:bg-card/50'
                  }`}>
                    <h3 className={`font-medium transition-colors duration-300 ${
                      activeEdu === idx ? 'text-primary' : 'text-foreground group-hover:text-primary'
                    }`}>{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education details */}
          <div 
            className={`md:col-span-8 lg:col-span-9 bg-card border border-border rounded-lg p-6 shadow-lg transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {educations[activeEdu] && (
              <div>
                {/* Education header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {educations[activeEdu].degree}
                    </h3>
                    <p className="text-muted-foreground">
                      {educations[activeEdu].institution}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="mr-1 h-4 w-4" />
                      {educations[activeEdu].location}
                    </div>
                  </div>
                </div>
                
                {/* Tabs */}
                <div className="border-b border-border mb-4">
                  <div className="flex space-x-4">
                    <button 
                      className={`px-4 py-2 text-sm font-medium ${
                        activeTab === "description" 
                          ? "text-primary border-b-2 border-primary" 
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      onClick={() => setActiveTab("description")}
                    >
                      Overview
                    </button>
                    <button 
                      className={`px-4 py-2 text-sm font-medium ${
                        activeTab === "courses" 
                          ? "text-primary border-b-2 border-primary" 
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      onClick={() => setActiveTab("courses")}
                    >
                      {activeEdu === 1 ? 'Skills' : 'Courses'}
                    </button>
                  </div>
                </div>
                
                {/* Tab content */}
                <ScrollArea className="h-[200px] pr-4">
                  {activeTab === "description" && (
                    <p className="text-foreground leading-relaxed">
                      {educations[activeEdu].description}
                    </p>
                  )}
                  
                  {activeTab === "courses" && (
                    <ul className="space-y-2">
                      {educations[activeEdu].courses.map((course, idx) => (
                        <li key={idx} className="flex items-start bg-primary/5 p-2 rounded-md">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-foreground">{course}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </ScrollArea>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
