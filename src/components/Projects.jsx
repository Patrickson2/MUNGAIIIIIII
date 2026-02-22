import { useEffect, useRef } from 'react';
import '../stylings/Projects.css';

const Projects = () => {
  const sectionRef = useRef(null);

  // Your actual projects with live demo links and images
  const projects = [
    {
      id: 1,
      title: 'EventMate - Event Management Backend API',
      description: 'A RESTful backend system for managing events, users, and event participation with JWT authentication and full CRUD functionality.',
      technologies: ['Flask', 'Python', 'JWT', 'REST APIs'],
      icon: 'fa-calendar-event',
      demoLink: 'https://phase-4-project-event-mate.onrender.com/docs',
      githubLink: null,
      image: '/Pics/Screenshot from 2026-02-22 22-07-44.png'
    },
    {
      id: 2,
      title: 'MyDuka – Business & Inventory Management API',
      description: 'Backend system to help small businesses manage inventory, users, and operations with SendGrid email integration.',
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'SendGrid'],
      icon: 'fa-store',
      demoLink: 'https://my-duka-system.onrender.com/api/docs',
      githubLink: null,
      image: '/Pics/Screenshot from 2026-02-22 22-05-13.png'
    },
    {
      id: 3,
      title: 'Youth Employment Platform',
      description: 'A digital platform addressing youth unemployment in Kenya by providing structured access to opportunities and engagement.',
      technologies: ['React', 'JavaScript', 'Vercel'],
      icon: 'fa-briefcase',
      demoLink: 'https://hacker-thon-mg8o.vercel.app/',
      githubLink: null,
      image: '/Pics/Screenshot from 2026-02-22 00-28-02.png'
    },
    {
      id: 4,
      title: 'CLI Multi-User Authentication System (OTP-Based)',
      description: 'Secure multi-user authentication system with OTP-based two-factor authentication via command-line interface.',
      technologies: ['Python', 'Bcrypt', 'OTP', 'SQL'],
      icon: 'fa-terminal',
      demoLink: 'https://github.com/Patrickson2/BACKEND-AUTHENTICATION--OTP-.git',
      githubLink: 'https://github.com/Patrickson2/BACKEND-AUTHENTICATION--OTP-.git',
      isGitHub: true,
      isCLI: true
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">
          <span>My Projects</span>
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image or Icon */}
              {project.isCLI ? (
                <div className="project-icon">
                  <i className={`fas ${project.icon}`}></i>
                </div>
              ) : (
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              )}
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-overlay">
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn project-btn"
                >
                  {project.isGitHub ? <><i className="fab fa-github"></i> View Code</> : <><i className="fas fa-external-link-alt"></i> View Demo</>}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
