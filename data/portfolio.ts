
import { Experience, Skill, Education, Certification } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Cloud Engineer",
    company: "Core Implus Technology",
    location: "Kathmandu, Nepal",
    duration: "Aug 2024 – Present",
    description: [
      "Cloud Operations & Management: Proficient in provisioning and managing AWS resources to support diverse operational needs",
      "Website Deployment & Hosting: Deployed and hosted websites using a variety of AWS services including EC2, Elastic Beanstalk, and Lightsail",
      "Security & Configuration: Secured websites by configuring HTTPS using tools like Certbot and managed secure FTP, SFTP, and FTPS servers on EC2 instances",
      "Database Administration: Set up and managed MySQL databases, including performing regular backups and recovery operations",
      "CI/CD Pipeline Management: Established and troubleshooted CI/CD pipelines with AWS CodePipeline for applications built on diverse tech stacks (Java, TypeScript, React, .NET), ensuring seamless integration, testing, and deployment",
      "Migration & Optimization: Migrated on-premises websites (e.g., WordPress) to AWS and optimized CI/CD workflows to enhance efficiency and reliability",
      "Identity & Access Management: Managed AWS resource access by creating and administering IAM users, roles, policies, and AWS CLI access keys",
      "Monitoring & Auditing: Monitored and audited system performance and costs using tools such as CloudWatch and Nagios"
    ],
    achievements: "Successfully migrated 10+ websites to AWS with 99.9% uptime and 30% cost optimization through efficient resource management.",
    technologies: ["AWS", "EC2", "S3", "CloudFormation", "VPC", "RDS", "Lambda", "Elastic Beanstalk", "CodePipeline", "CloudWatch", "MySQL", "WordPress"]
  },
  {
    id: 2,
    role: "Jr. Cloud Engineer",
    company: "TanviTech Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    duration: "Jan 2024 – Jul 2024",
    description: [
      "Demonstrated Expertise in AWS: Gained a solid understanding of cloud computing fundamentals and successfully completed a series of challenging tasks using key AWS services",
      "Extensive AWS Service Proficiency: Proficient in a wide range of AWS services including EC2, S3, CloudFormation, VPC, RDS, SNS, Lambda, Elastic Beanstalk, Lightsail, API Gateway, CodePipeline, DynamoDB, and Route53",
      "Practical Application and Documentation: Applied knowledge to complete progressively challenging tasks, documenting each project in detail for clarity and future reference"
    ],
    achievements: "Successfully completed 20+ AWS projects with comprehensive documentation, demonstrating proficiency across multiple AWS services.",
    technologies: ["AWS", "EC2", "S3", "CloudFormation", "VPC", "RDS", "SNS", "Lambda", "Elastic Beanstalk", "Lightsail", "API Gateway", "CodePipeline", "DynamoDB", "Route53"]
  },
  {
    id: 3,
    role: "Frontend Developer Intern",
    company: "Prodigy InfoTech",
    location: "Remote",
    duration: "Jul 2023 – Sep 2023",
    description: [
      "Developed responsive user interfaces for web applications using React and JavaScript",
      "Implemented UI designs from Figma mockups with attention to detail and pixel-perfect execution",
      "Collaborated with backend developers to integrate APIs and ensure data consistency",
      "Participated in code reviews to improve code quality and learn from senior developers",
      "Created reusable UI components to improve development efficiency"
    ],
    achievements: "Successfully completed 3 client projects with positive feedback on UI implementation.",
    technologies: ["React", "JavaScript", "HTML/CSS", "Bootstrap", "Git", "Figma", "RESTful APIs"]
  }
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Vue.js"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Python", "PostgreSQL", "MongoDB", "RESTful APIs", "GraphQL"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Azure", "GCP"]
  },
  {
    category: "Tools & Others",
    items: ["Git", "Webpack", "Jest", "Figma", "Postman", "Linux", "Agile/Scrum"]
  }
];

export const education: Education[] = [
  {
    degree: "Full Stack Web Development",
    institution: "freeCodeCamp",
    year: "2024",
    location: "Online"
  }
];

export const certifications: Certification[] = [
  // Certificates will be added when obtained
];
