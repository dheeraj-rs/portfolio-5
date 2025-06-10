'use client';

import { useEffect, useState } from 'react';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ArrowRight, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail,
  Code,
  Database,
  Smartphone,
  Globe,
  Send,
  Download,
  Star,
  Zap,
  Layers
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // Create particle system
    const createParticles = () => {
      const particleContainer = document.createElement('div');
      particleContainer.className = 'particle-system';
      document.body.appendChild(particleContainer);

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        particleContainer.appendChild(particle);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    createParticles();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
  };

  const skills = [
    { name: 'Frontend Development', icon: <Code />, progress: 95, description: 'React, Next.js, TypeScript, CSS3' },
    { name: 'Backend Development', icon: <Database />, progress: 90, description: 'Node.js, Python, PostgreSQL, MongoDB' },
    { name: 'Mobile Development', icon: <Smartphone />, progress: 85, description: 'React Native, Flutter, iOS, Android' },
    { name: 'Web Technologies', icon: <Globe />, progress: 92, description: 'AWS, Docker, GraphQL, REST APIs' }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, file sharing, and team communication.',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'WebSocket'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Machine learning powered analytics platform with predictive insights and data visualization.',
      tech: ['Python', 'TensorFlow', 'React', 'D3.js'],
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      live: '#'
    }
  ];

  return (
    <div>
      {/* Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="nav">
          <a href="#" className="logo">JohnDoe</a>
          
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button className="theme-toggle" onClick={toggleTheme}>
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title" data-text="John Doe">John Doe</h1>
            <p className="hero-subtitle">Full Stack Developer & UI/UX Designer</p>
            <p className="hero-description">
              I create beautiful, functional, and user-centered digital experiences that solve real-world problems with cutting-edge 3D animations and interactive design.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                View My Work <ArrowRight size={20} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        <div className="floating-elements">
          <div className="floating-element" style={{ '--z-depth': '100px' } as React.CSSProperties}>
            <div className="geometric-shape"></div>
          </div>
          <div className="floating-element" style={{ '--z-depth': '150px' } as React.CSSProperties}>
            <div className="circle"></div>
          </div>
          <div className="floating-element" style={{ '--z-depth': '80px' } as React.CSSProperties}>
            <div className="triangle"></div>
          </div>
          <div className="floating-element" style={{ '--z-depth': '120px' } as React.CSSProperties}>
            <div className="hexagon"></div>
          </div>
          <div className="floating-element" style={{ '--z-depth': '90px' } as React.CSSProperties}>
            <div className="diamond"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section">
        <div className="container">
          <div className="about-content">
            <div className="about-text animate-on-scroll">
              <h2 data-text="About Me">About Me</h2>
              <p>
                I&apos;m a passionate full-stack developer with over 5 years of experience creating 
                digital solutions that combine beautiful design with robust functionality. 
                I specialize in modern web technologies and love turning complex problems 
                into simple, elegant solutions with stunning 3D visual experiences.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in continuous learning and staying at the forefront of technology trends, especially 
                in 3D web development and interactive design.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                <a href="/resume.pdf" className="btn btn-primary">
                  <Download size={20} /> Download Resume
                </a>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Star size={16} style={{ color: 'var(--accent-color)' }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>5+ Years Experience</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Zap size={16} style={{ color: 'var(--primary-color)' }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>50+ Projects</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-image animate-on-scroll">
              <div className="about-image-container">
                <div className="about-image-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="animate-on-scroll" data-text="Skills & Expertise">Skills & Expertise</h2>
            <p className="animate-on-scroll">
              Technologies and tools I work with to bring ideas to life with stunning 3D experiences
            </p>
          </div>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={skill.name} className="skill-card animate-on-scroll card-3d glass" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="skill-card-content">
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                  <h3>{skill.name}</h3>
                  <p>{skill.description}</p>
                  <div className="skill-progress">
                    <div 
                      className="skill-progress-bar" 
                      style={{ '--progress-width': `${skill.progress}%`, width: `${skill.progress}%` } as React.CSSProperties}
                    ></div>
                  </div>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem', display: 'block' }}>
                    {skill.progress}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="animate-on-scroll" data-text="Featured Projects">Featured Projects</h2>
            <p className="animate-on-scroll">
              A selection of my recent work that showcases my skills in 3D design and interactive development
            </p>
          </div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={project.title} className="project-card animate-on-scroll card-3d glass" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="project-image" style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div style={{ 
                    position: 'absolute', 
                    top: '1rem', 
                    right: '1rem', 
                    background: 'rgba(255, 255, 255, 0.9)', 
                    borderRadius: '50%', 
                    padding: '0.5rem',
                    transform: 'translateZ(20px)'
                  }}>
                    <Layers size={16} style={{ color: 'var(--primary-color)' }} />
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} className="project-link">
                      <Github size={16} /> Code
                    </a>
                    <a href={project.live} className="project-link">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container">
          <div className="contact-content">
            <h2 className="animate-on-scroll" data-text="Let&apos;s Work Together">Let&apos;s Work Together</h2>
            <p className="animate-on-scroll">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s create something amazing together with cutting-edge 3D technology.
            </p>
            
            <form className="contact-form animate-on-scroll">
              <div className="form-group">
                <input type="text" className="form-input" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-input" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" className="form-input" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea className="form-textarea" placeholder="Tell me about your project and how we can bring it to life with 3D magic..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-submit">
                <Send size={20} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="social-links">
            <a href="#" className="social-link">
              <Github size={24} />
            </a>
            <a href="#" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="#" className="social-link">
              <Mail size={24} />
            </a>
          </div>
          <p style={{ color: 'var(--text-secondary)' }}>
            © 2024 John Doe. All rights reserved. Built with Next.js, 3D CSS transforms, and lots of ❤️
          </p>
        </div>
      </footer>
    </div>
  );
}