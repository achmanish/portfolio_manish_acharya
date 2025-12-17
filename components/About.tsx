
import React from 'react';
import { useTheme } from '@/components/ThemeProvider';
import { Code, Server, Database, Globe } from 'lucide-react';


const About = () => {
  const { theme } = useTheme();
  
  return (
    <section id="about" className="section-padding px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-16">
      {/* Background enhancements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-70 z-0"></div>
      
      <div className="container mx-auto relative z-10 max-w-7xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-8 sm:mb-12 lg:mb-16 text-center">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Content Section */}
          <div className="xl:col-span-3 order-2 xl:order-1 space-y-6 lg:space-y-8">
            <div className="space-y-5 lg:space-y-6">
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-foreground font-light">
                Hello! I'm <span className="font-semibold text-primary">Manish Acharya</span>, a Software Engineer specializing in cloud infrastructure and AWS solutions. 
                Currently working as a Cloud Engineer at <span className="font-medium text-foreground">Core Implus Technology</span>, I focus on designing, provisioning, and managing 
                scalable AWS resources, implementing robust CI/CD pipelines, and optimizing cloud workflows for diverse applications.
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-foreground font-light">
                My expertise spans from automated infrastructure deployment using Infrastructure as Code (IaC) principles 
                to comprehensive database administration with MySQL and RDS. I have extensive experience with migration projects, 
                moving on-premises solutions to AWS while ensuring <span className="font-semibold text-emerald-600 dark:text-emerald-400">99.9% uptime</span>, implementing monitoring solutions, 
                and achieving significant cost optimizations through resource optimization and automation.
              </p>
            </div>
            
            {/* Key expertise areas with enhanced design */}
            <div className="bg-gradient-to-br from-muted/30 via-background to-muted/20 rounded-2xl p-6 lg:p-8 border border-primary/10 shadow-lg">
              <h3 className="text-lg lg:text-xl font-semibold mb-6 text-foreground flex items-center gap-3">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                Core Expertise
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div className="group flex items-start p-4 rounded-xl hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/20">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Code className="h-5 w-5 lg:h-6 lg:w-6 text-blue-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold mb-2 text-base lg:text-lg text-foreground group-hover:text-primary transition-colors">Software Development</h4>
                    <p className="text-foreground/70 text-sm lg:text-base">Python, React, JavaScript</p>
                  </div>
                </div>
                
                <div className="group flex items-start p-4 rounded-xl hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/20">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Server className="h-5 w-5 lg:h-6 lg:w-6 text-emerald-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold mb-2 text-base lg:text-lg text-foreground group-hover:text-primary transition-colors">Cloud Engineering</h4>
                    <p className="text-foreground/70 text-sm lg:text-base">AWS, CI/CD, Infrastructure</p>
                  </div>
                </div>
                
                <div className="group flex items-start p-4 rounded-xl hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/20">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Database className="h-5 w-5 lg:h-6 lg:w-6 text-purple-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold mb-2 text-base lg:text-lg text-foreground group-hover:text-primary transition-colors">Database Administration</h4>
                    <p className="text-foreground/70 text-sm lg:text-base">MySQL, RDS, Backups</p>
                  </div>
                </div>
                
                <div className="group flex items-start p-4 rounded-xl hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/20">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-600/10 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-5 w-5 lg:h-6 lg:w-6 text-orange-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold mb-2 text-base lg:text-lg text-foreground group-hover:text-primary transition-colors">DevOps & Security</h4>
                    <p className="text-foreground/70 text-sm lg:text-base">CodePipeline, IAM, Monitoring</p>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-foreground font-light">
              When I'm not architecting cloud solutions, I enjoy exploring emerging cloud technologies, 
              contributing to automation scripts and infrastructure projects, and continuously expanding 
              my knowledge in <span className="font-medium text-primary">cloud security</span>, <span className="font-medium text-primary">containerization</span>, and modern DevOps practices.
            </p>
          </div>
          
          {/* Image Section - Better positioned and sized */}
          <div className="xl:col-span-2 order-1 xl:order-2 flex justify-center xl:justify-end">
            <div className="relative w-full max-w-sm xl:max-w-md">
              {/* Profile image container with beautiful design */}
              <div className="relative group">
                {/* Animated background elements - contained within bounds */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-secondary/15 to-accent/15 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 scale-95"></div>
                
                {/* Decorative floating elements - better positioned */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-lg animate-pulse"></div>
                <div className="absolute bottom-6 left-4 w-6 h-6 bg-gradient-to-br from-accent/40 to-primary/40 rounded-full blur-md animate-pulse delay-1000"></div>
                
                {/* Main profile container */}
                <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden shadow-2xl ring-2 ring-primary/20 group-hover:shadow-3xl group-hover:ring-primary/40 transition-all duration-500 bg-gradient-to-br from-background to-muted/30">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-background/5 z-10"></div>
                  
                  <img
                    src="/images/profile-manish-acharya.png"
                    alt="Manish Acharya - Software Engineer & Cloud Engineer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 relative z-0"
                    style={{
                      imageRendering: 'auto'
                    }}
                    loading="lazy"
                  />
                  
                  {/* Inner border glow */}
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20"></div>
                </div>
                
                {/* Professional status badge - positioned better */}
                <div className="absolute bottom-4 right-4 bg-background/95 backdrop-blur-sm border border-primary/30 rounded-2xl px-4 py-2 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold text-foreground">Available for Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
