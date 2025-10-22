import React from 'react';
import { Github, Linkedin, Twitter, ExternalLink, Mail, Briefcase, Code, MapPin, Calendar, Award } from 'lucide-react';

// =======================================================================
// EDIT THIS OBJECT TO PERSONALIZE YOUR PORTFOLIO
// =======================================================================

const portfolioData = {
  name: "Your Name Here",
  headline: "Aspiring Innovator | Full-Stack Developer | AI Enthusiast",
  bio: "A results-driven computer science student at [Your University] with a passion for building disruptive, scalable, and user-centric applications. Eager to leverage modern technologies to solve real-world problems and drive impactful change. Currently seeking high-growth internship opportunities for Summer 202X.",
  
  // Your contact email
  email: "hello@yourdomain.com",

  // Add your links here
  // Supported icons: 'GitHub', 'LinkedIn', 'Twitter', 'Blog'
  links: [
    { name: "GitHub", url: "https" },
    { name: "LinkedIn", url: "https" },
    { name: "Twitter", url: "https" },
    // { name: "Blog", url: "https://yourblog.com" },
  ],

  // Add your skills here
  skills: [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
    "Python", "Go", "Tailwind CSS", "Firebase", "AWS", "Docker", "Kubernetes"
  ],

  // Add your projects here
  projects: [
    {
      title: "Project 'Synergy'",
      description: "A decentralized, AI-powered platform to streamline cross-functional team collaboration using a novel blockchain consensus algorithm. Built with a microservices architecture.",
      stack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Vercel"],
      githubLink: "https",
      liveLink: "https",
    },
    {
      title: "VibeCheck",
      description: "A mobile-first social app that uses sentiment analysis to curate positive news feeds. Leveraged serverless functions for infinite scalability and low-cost operation.",
      stack: ["React Native", "Firebase", "Google Cloud Functions", "NLP.js"],
      githubLink: "https",
      liveLink: "https",
    },
    {
      title: "AlgoVisualizer",
      description: "A web-based tool for visualizing complex data structures and algorithms, built to help students (like me) understand core CS concepts in an interactive way.",
      stack: ["TypeScript", "React", "D3.js"],
      githubLink: "https",
      liveLink: "https",
    },
  ],

  // Add your experience here
  experience: [
    {
      role: "Software Engineer Intern (Incoming)",
      company: "Big Tech Co / FAANG",
      date: "Summer 202X",
      location: "Menlo Park, CA (Remote)",
      description: "Selected for a highly competitive internship program. Will be joining the [Cloud/AI/Growth] team to work on high-impact, customer-facing features."
    },
    {
      role: "Club President / Co-Founder",
      company: "[Your Vibe-Coding Club Name]",
      date: "Aug 202X - Present",
      location: "[Your University]",
      description: "Grew the organization from 5 to 200+ members by fostering a culture of innovation and 'vibecoding.' Organized tech talks with industry leaders from Google, Meta, and hot startups."
    },
    {
      role: "Teaching Assistant - Intro to CS",
      company: "[Your University]",
      date: "Jan 202X - May 202X",
      location: "[Your University]",
      description: "Mentored 50+ students, held office hours, and graded assignments for foundational computer science concepts. Received a 95% positive feedback rating from students."
    }
  ],

  // Add any education or awards
  education: [
     {
      degree: "B.S. in Computer Science",
      institution: "[Your University]",
      date: "Expected May 202X",
      note: "Minor in [e.g., Business, Data Science]"
     },
     {
      degree: "Best 'Vibe' Hack",
      institution: "[Some Hackathon]",
      date: "Fall 202X",
      note: "Awarded for the project with the slickest UI and best pitch."
     }
  ]
};

// =======================================================================
// REACT COMPONENT CODE
// You shouldn't need to edit below this line
// =======================================================================

// Icon mapping
const IconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Blog: Code,
};

// Main App Component
export default function App() {
  return (
    <div className="font-inter antialiased bg-gray-950 text-gray-200 min-h-screen">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* Header/Nav */}
        <header className="flex justify-between items-center py-6">
          <div className="text-2xl font-bold text-white">
            {portfolioData.name.split(' ').map(n => n[0]).join('')}
          </div>
          <nav className="flex items-center space-x-4">
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a>
            <a 
              href={`mailto:${portfolioData.email}`} 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Contact Me
            </a>
          </nav>
        </header>

        <main className="space-y-20 mt-10">
          
          {/* Hero Section */}
          <section id="home" className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              {portfolioData.name}
            </h1>
            <p className="mt-4 text-2xl sm:text-3xl text-blue-400 font-medium">
              {portfolioData.headline}
            </p>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
              {portfolioData.bio}
            </p>
            <div className="mt-8 flex justify-center space-x-5">
              {portfolioData.links.map((link) => {
                const Icon = IconMap[link.name];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
              <a
                href={`mailto:${portfolioData.email}`}
                aria-label="Email"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills">
            <h2 className="text-3xl font-bold text-white text-center">
              Core Competencies
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {portfolioData.skills.map((skill) => (
                <span 
                  key={skill}
                  className="bg-gray-800 text-blue-300 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
          
          {/* Projects Section */}
          <section id="projects">
            <h2 className="text-3xl font-bold text-white text-center">
              Projects
            </h2>
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              {portfolioData.projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience">
            <h2 className="text-3xl font-bold text-white text-center">
              Experience
            </h2>
            <div className="mt-8 space-y-10">
              {portfolioData.experience.map((exp) => (
                <ExperienceItem key={exp.company + exp.role} exp={exp} />
              ))}
            </div>
          </section>

          {/* Education Section */}
           <section id="education">
            <h2 className="text-3xl font-bold text-white text-center">
              Education & Awards
            </h2>
            <div className="mt-8 space-y-8">
              {portfolioData.education.map((edu) => (
                <EducationItem key={edu.degree} edu={edu} />
              ))}
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="text-center text-gray-500 py-12 mt-12">
          © {new Date().getFullYear()} {portfolioData.name}. 
          Built with React & Tailwind.
        </footer>
      </div>
    </div>
  );
}

// Sub-component for Project Cards
function ProjectCard({ project }) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 transition-all hover:shadow-blue-900/20 hover:border-gray-700">
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-3 text-gray-300 text-base">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span 
              key={tech} 
              className="bg-gray-800 text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center space-x-4">
          {project.githubLink && (
            <a 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5 mr-1" />
              Code
            </a>
          )}
          {project.liveLink && (
            <a 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <ExternalLink className="w-5 h-5 mr-1" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Sub-component for Experience Items
function ExperienceItem({ exp }) {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-4">
        <span className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 border border-gray-700">
          <Briefcase className="w-5 h-5 text-blue-400" />
        </span>
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-white">{exp.role}</h3>
        <p className="text-blue-300 font-medium">{exp.company}</p>
        <div className="flex flex-wrap text-sm text-gray-400 mt-1 space-x-4">
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-1.5" />
            {exp.date}
          </span>
          <span className="flex items-center">
            <MapPin className="w-4 h-4 mr-1.5" />
            {exp.location}
          </span>
        </div>
        <p className="mt-3 text-gray-300">
          {exp.description}
        </p>
      </div>
    </div>
  );
}

// Sub-component for Education Items
function EducationItem({ edu }) {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-4">
        <span className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 border border-gray-700">
          <Award className="w-5 h-5 text-blue-400" />
        </span>
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
        <p className="text-blue-300 font-medium">{edu.institution}</p>
        <p className="text-sm text-gray-400 mt-1">{edu.date}</p>
        {edu.note && <p className="mt-2 text-gray-300">{edu.note}</p>}
      </div>
    </div>
  );
}

