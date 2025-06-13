'use client';

import { useEffect, useState, useCallback } from 'react';
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

  // Ultra-smooth scroll handler with RAF optimization
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 50;
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled);
    }
  }, [isScrolled]);

  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.style.scrollBehavior = 'smooth';

    // Ultra-smooth scroll with RAF
    let ticking = false;
    const smoothScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Enhanced intersection observer with better performance
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // Optimized particle system
    const createParticles = () => {
      const particleContainer = document.createElement('div');
      particleContainer.className = 'particle-system';
      document.body.appendChild(particleContainer);

      const particleCount = window.innerWidth < 768 ? 8 : 15;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 25 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 20) + 's';
        particleContainer.appendChild(particle);
      }
    };

    // Enhanced bubble system
    const createBubbles = () => {
      const bubbleContainer = document.createElement('div');
      bubbleContainer.className = 'bubble-container';
      document.body.appendChild(bubbleContainer);

      const bubbleCount = window.innerWidth < 768 ? 3 : 8;
      
      for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        const size = Math.random() * 15 + 8;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.animationDelay = Math.random() * 15 + 's';
        bubble.style.animationDuration = (Math.random() * 5 + 12) + 's';
        bubbleContainer.appendChild(bubble);
      }
    };

    // Passive scroll listener for better performance
    window.addEventListener('scroll', smoothScroll, { passive: true });
    
    // Create effects only on larger screens for performance
    if (window.innerWidth >= 768) {
      createParticles();
      createBubbles();
    }
    
    return () => {
      window.removeEventListener('scroll', smoothScroll);
      observer.disconnect();
      // Clean up effects
      const particleSystem = document.querySelector('.particle-system');
      const bubbleSystem = document.querySelector('.bubble-container');
      if (particleSystem) particleSystem.remove();
      if (bubbleSystem) bubbleSystem.remove();
    };
  }, [handleScroll]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
    closeMenu();
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
    <div className="smooth-scroll">
      {/* Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="nav">
          <a href="#" className="logo">Dheeraj</a>
          
          <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            <li><button onClick={() => scrollToSection('home')} className="nav-link">Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className="nav-link">About</button></li>
            <li><button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button></li>
            <li><button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button></li>
          </ul>

          <div className="nav-controls">
            <button className="theme-toggle" onClick={toggleTheme}>
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button 
              className="mobile-menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && <div className="mobile-menu-overlay" onClick={closeMenu}></div>}
      </header>

      {/* Hero Section */}
      <section id="home" className="hero liquid-bg">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge animate-on-scroll">
              <Zap size={16} />
              <span>Available for new projects</span>
            </div>
            <h1 className="hero-title" data-text="Dheeraj">Dheeraj</h1>
            <p className="hero-subtitle">Full Stack Developer & UI/UX Designer</p>
            <p className="hero-description">
              I create beautiful, functional, and user-centered digital experiences that solve real-world problems with cutting-edge 3D animations and interactive design.
            </p>
            <div className="hero-cta">
              <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
                <span>View My Work</span>
                <ArrowRight size={20} />
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
                <span>Get In Touch</span>
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat-item glass">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item glass">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item glass">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        <div className="floating-elements">
          <div className="floating-element floating-element-1">
            <div className="geometric-shape shape-cube"></div>
          </div>
          <div className="floating-element floating-element-2">
            <div className="geometric-shape shape-sphere"></div>
          </div>
          <div className="floating-element floating-element-3">
            <div className="geometric-shape shape-pyramid"></div>
          </div>
          <div className="floating-element floating-element-4">
            <div className="geometric-shape shape-torus"></div>
          </div>
          <div className="floating-element floating-element-5">
            <div className="geometric-shape shape-octahedron"></div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section liquid-bg">
        <div className="container">
          <div className="about-content">
            <div className="about-text animate-on-scroll">
              <div className="section-badge">
                <Star size={16} />
                <span>About Me</span>
              </div>
              <h2 data-text="Crafting Digital Excellence">Crafting Digital Excellence</h2>
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
              <div className="about-features">
                <div className="feature-item glass">
                  <div className="feature-icon">
                    <Code size={20} />
                  </div>
                  <div className="feature-content">
                    <h4>Clean Code</h4>
                    <p>Writing maintainable, scalable code</p>
                  </div>
                </div>
                <div className="feature-item glass">
                  <div className="feature-icon">
                    <Layers size={20} />
                  </div>
                  <div className="feature-content">
                    <h4>3D Design</h4>
                    <p>Creating immersive experiences</p>
                  </div>
                </div>
              </div>
              <div className="about-actions">
                <a href="/resume.pdf" className="btn btn-primary">
                  <Download size={20} />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
            <div className="about-image animate-on-scroll">
              <div className="about-image-container glass">
                <div className="about-image-inner"></div>
                <div className="image-overlay">
                  <div className="overlay-content">
                    <div className="overlay-icon">
                      <Layers size={24} />
                    </div>
                    <p>Passionate about creating amazing digital experiences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section liquid-bg">
        <div className="container">
          <div className="section-header">
            <div className="section-badge animate-on-scroll">
              <Zap size={16} />
              <span>Skills & Expertise</span>
            </div>
            <h2 className="animate-on-scroll" data-text="What I Do Best">What I Do Best</h2>
            <p className="animate-on-scroll">
              Technologies and tools I work with to bring ideas to life with stunning 3D experiences
            </p>
          </div>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={skill.name} className="skill-card animate-on-scroll glass" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="skill-card-content">
                  <div className="skill-header">
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                    <div className="skill-info">
                      <h3>{skill.name}</h3>
                      <p>{skill.description}</p>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-label">
                      <span>Proficiency</span>
                      <span>{skill.progress}%</span>
                    </div>
                    <div className="progress-track">
                      <div 
                        className="skill-progress-bar" 
                        style={{ width: `${skill.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="skill-card-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section liquid-bg">
        <div className="container">
          <div className="section-header">
            <div className="section-badge animate-on-scroll">
              <Layers size={16} />
              <span>Featured Work</span>
            </div>
            <h2 className="animate-on-scroll" data-text="Recent Projects">Recent Projects</h2>
            <p className="animate-on-scroll">
              A selection of my recent work that showcases my skills in 3D design and interactive development
            </p>
          </div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={project.title} className="project-card animate-on-scroll glass" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
                  <div className="project-overlay">
                    <div className="project-actions">
                      <a href={project.github} className="project-action">
                        <Github size={20} />
                      </a>
                      <a href={project.live} className="project-action">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <div className="project-badge">
                    <Layers size={16} />
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
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a href={project.live} className="project-link">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
                <div className="project-card-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact section liquid-bg">
        <div className="container">
          <div className="contact-content">
            <div className="section-badge animate-on-scroll">
              <Mail size={16} />
              <span>Get In Touch</span>
            </div>
            <h2 className="animate-on-scroll" data-text="Let&apos;s Work Together">Let&apos;s Work Together</h2>
            <p className="animate-on-scroll">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s create something amazing together with cutting-edge 3D technology.
            </p>
            
            <form className="contact-form animate-on-scroll">
              <div className="form-row">
                <div className="form-group">
                  <input type="text" className="form-input glass" placeholder="Your Name" required />
                  <div className="input-glow"></div>
                </div>
                <div className="form-group">
                  <input type="email" className="form-input glass" placeholder="Your Email" required />
                  <div className="input-glow"></div>
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-input glass" placeholder="Subject" required />
                <div className="input-glow"></div>
              </div>
              <div className="form-group">
                <textarea className="form-textarea glass" placeholder="Tell me about your project and how we can bring it to life with 3D magic..." required></textarea>
                <div className="input-glow"></div>
              </div>
              <button type="submit" className="btn btn-primary form-submit">
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer liquid-bg">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">Dheeraj</div>
              <p>Creating digital experiences that inspire and engage.</p>
            </div>
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
          </div>
          <div className="footer-bottom">
            <p>© 2025 Dheeraj. All rights reserved. Built with Next.js, 3D CSS transforms, and lots of ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
}