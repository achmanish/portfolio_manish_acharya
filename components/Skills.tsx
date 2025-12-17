
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SkillCategory from './skills/SkillCategory';

const devopsSkillCategories = [
  {
    title: "Programming Languages",
    description: "Backend development languages",
    color: "from-blue-500 to-blue-600",
    accentColor: "blue",
    skills: [
      { name: "Node.js", level: 90, proficiency: "Expert", certified: false },
      { name: "Python", level: 85, proficiency: "Advanced", certified: false }
    ]
  },
  {
    title: "Cloud Platforms",
    description: "Cloud infrastructure and services",
    color: "from-cyan-500 to-cyan-600",
    accentColor: "cyan",
    skills: [
      { name: "AWS EC2", level: 90, proficiency: "Expert", certified: false },
      { name: "AWS Lambda", level: 88, proficiency: "Expert", certified: false },
      { name: "AWS EKS", level: 85, proficiency: "Advanced", certified: false },
      { name: "AWS Amplify", level: 82, proficiency: "Advanced", certified: false },
      { name: "AWS ALB", level: 80, proficiency: "Advanced", certified: false },
      { name: "AWS S3", level: 92, proficiency: "Expert", certified: false },
      { name: "AWS ECR", level: 85, proficiency: "Advanced", certified: false },
      { name: "AWS VPC", level: 88, proficiency: "Expert", certified: false },
      { name: "AWS IAM", level: 90, proficiency: "Expert", certified: false },
      { name: "AWS Beanstalk", level: 80, proficiency: "Advanced", certified: false },
      { name: "AWS RDS", level: 88, proficiency: "Expert", certified: false },
      { name: "AWS ElastiCache", level: 82, proficiency: "Advanced", certified: false },
      { name: "AWS CloudWatch", level: 85, proficiency: "Advanced", certified: false },
      { name: "AWS ACM", level: 80, proficiency: "Advanced", certified: false },
      { name: "AWS Route53", level: 88, proficiency: "Expert", certified: false },
      { name: "GCP VPC", level: 75, proficiency: "Intermediate", certified: false },
      { name: "GCP Compute Engine", level: 78, proficiency: "Intermediate", certified: false },
      { name: "GCP Cloud Storage", level: 80, proficiency: "Advanced", certified: false },
      { name: "GCP Cloud Function", level: 75, proficiency: "Intermediate", certified: false }
    ]
  },
  {
    title: "Infrastructure as Code",
    description: "Infrastructure automation tools",
    color: "from-orange-500 to-orange-600",
    accentColor: "orange",
    skills: [
      { name: "Terraform", level: 90, proficiency: "Expert", certified: false },
      { name: "Ansible", level: 88, proficiency: "Expert", certified: false }
    ]
  },
  {
    title: "Container & Orchestration",
    description: "Containerization and orchestration",
    color: "from-green-500 to-green-600",
    accentColor: "green",
    skills: [
      { name: "Docker", level: 92, proficiency: "Expert", certified: false },
      { name: "Docker Swarm", level: 85, proficiency: "Advanced", certified: false },
      { name: "Kubernetes", level: 90, proficiency: "Expert", certified: false }
    ]
  },
  {
    title: "CI/CD & Automation",
    description: "Continuous integration and deployment",
    color: "from-purple-500 to-purple-600",
    accentColor: "purple",
    skills: [
      { name: "CircleCI", level: 85, proficiency: "Advanced", certified: false },
      { name: "Fastlane", level: 80, proficiency: "Advanced", certified: false },
      { name: "DroneCI", level: 82, proficiency: "Advanced", certified: false },
      { name: "GitHub Actions", level: 88, proficiency: "Expert", certified: false },
      { name: "ArgoCD", level: 85, proficiency: "Advanced", certified: false }
    ]
  },
  {
    title: "Databases",
    description: "Database management systems",
    color: "from-red-500 to-red-600",
    accentColor: "red",
    skills: [
      { name: "PostgreSQL", level: 88, proficiency: "Expert", certified: false },
      { name: "MySQL", level: 85, proficiency: "Advanced", certified: false }
    ]
  },
  {
    title: "Monitoring & Observability",
    description: "System monitoring and performance",
    color: "from-blue-500 to-blue-600",
    accentColor: "blue",
    skills: [
      { name: "CloudWatch", level: 88, proficiency: "Expert", certified: false },
      { name: "Prometheus", level: 85, proficiency: "Advanced", certified: false },
      { name: "Grafana", level: 88, proficiency: "Expert", certified: false }
    ]
  }
];


const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section id="skills" className="section-padding px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Technical Stack
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Modern technologies and tools I use to build scalable, reliable systems.
          </p>
        </motion.div>
        
        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {devopsSkillCategories.map((category, idx) => (
            <SkillCategory
              key={idx}
              category={category}
              index={idx}
              isVisible={isVisible}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
