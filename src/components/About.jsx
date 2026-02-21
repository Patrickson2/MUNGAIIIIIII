import { useEffect, useRef, useState } from 'react';
import '../stylings/About.css';

const About = () => {
  const sectionRef = useRef(null);
  
  // Tech stack for the slideshow
  const techStack = [
    { name: 'HTML', icon: 'fa-html5' },
    { name: 'CSS', icon: 'fa-css3-alt' },
    { name: 'JavaScript', icon: 'fa-js' },
    { name: 'React', icon: 'fa-react' },
    { name: 'Python', icon: 'fa-python' },
    { name: 'FastAPI', icon: 'fa-bolt' },
    { name: 'Flask', icon: 'fa-flask' },
    { name: 'PostgreSQL', icon: 'fa-database' },
    { name: 'MySQL', icon: 'fa-server' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Auto-scroll tech stack
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % techStack.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [techStack.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Get visible tech items (show 5 at a time)
  const getVisibleTech = () => {
    const items = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % techStack.length;
      items.push(techStack[index]);
    }
    return items;
  };

  return (
    <section id="about" className="about" ref={sectionRef}>
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <div className="hero-badge animate-on-scroll">
            <span className="badge-dot"></span>
            Available for work
          </div>
          
          <h1 className="hero-title animate-on-scroll">
            Hi, I'm <span className="highlight">Patrickson Mungai</span>
          </h1>
          
          <p className="hero-subtitle animate-on-scroll">
            Full Stack Developer crafting exceptional digital experiences
          </p>

          {/* Tech Stack Slideshow */}
          <div className="tech-stack-container animate-on-scroll">
            <div className="tech-stack">
              {getVisibleTech().map((tech, index) => (
                <div 
                  key={`${tech.name}-${index}`} 
                  className={`tech-item ${index === 2 ? 'active' : ''}`}
                >
                  <i className={`fab ${tech.icon}`}></i>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-cta animate-on-scroll">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#services" className="btn btn-outline">Get In Touch</a>
          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator animate-on-scroll">
            <span>Scroll to explore</span>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>

        {/* Hero Visual/Pattern */}
        <div className="hero-visual">
          <div className="code-block">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <pre className="code-content">
              <code>
{`const developer = {
  name: "Patrickson Mungai",
  role: "Full Stack Developer",
  skills: ["React", "Python", "PostgreSQL"],
  passion: "Building great apps"
};

function createMagic() {
  return innovation + creativity;
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* About Details Section */}
      <div className="about-details">
        <div className="container">
          <div className="about-content">
            <div className="about-text animate-on-scroll">
              <h3>About Me</h3>
              <p className="about-description">
               I’m a full-stack software engineer with a strong bias toward the backend. I design and build scalable systems that power modern web applications from the inside out.

My focus is on clean architecture, efficient APIs, and reliable data flows. On the front end, I create responsive, user-focused interfaces that connect seamlessly to the services behind them.

I turn ideas into production-ready applications by writing maintainable code, structuring databases properly, and building backend logic that can scale as the product grows.
              </p>
              <p className="about-description">
                My journey in web development started with curiosity and has evolved 
                into a professional career. I specialize in creating seamless user 
                experiences while ensuring clean, maintainable code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
