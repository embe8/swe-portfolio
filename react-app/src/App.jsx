import React from 'react'
import { useState } from 'react'
import { GraduationCap, Github, ExternalLink, Briefcase } from 'lucide-react'

export default function Portfolio() {
  const [hoveredCard, setHoveredCard] = useState(null);
 
  const projects = [
    {
      title: 'CapyChat Real Time Chat Application',
      description: 'A real-time chat application built with React, Node.js, and Firebase',
      tech: ['React', 'Node.js', 'Firebase'],
      gradient: 'bg-gradient-to-r from-cyan-500 to-blue-500',
      links: [
        {
          label: 'Github',
          url: 'https://github.com/yourusername/capychat',
          icon: <Github className="icon" />
        },
        {
          label: 'Live Demo',
          url: 'https://capychat.com',
          icon: <ExternalLink className="icon" />
        }
      ]
    },
    {
      title: 'AutoBuilder Car Configuration Application',
      description: 'A car configuration application where users can select the model, trims, and features of an automobile',
      tech: ['React', 'Node.js', 'Supabase'],
      gradient: 'bg-gradient-to-r from-purple-500 to-pink-500',
      links: [
        {
          label: 'Github',
          url: 'https://github.com/yourusername/autobuilder',
          icon: <Github className="icon" />
        },
        {
          label: 'Live Demo',
          url: 'https://autobuilder.com',
          icon: <ExternalLink className="icon" />
        }
      ]
    }
  ]


  return (
    <div className="portfolio-container">
      <div className="portfolio-wrapper">
        <div className="bento-grid">
          <div className={`card hero-card ${hoveredCard === 'hero' ? 'hovered' : ''}`}
          onMouseEnter={() => setHoveredCard('hero')}
          onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Title hero card content */}
            <div className="card-overlay"></div>
            <div className="card-content">
              <div className="card-avatar"></div>
              <h1 className="hero-title">Erika Ebon</h1>
              <h2 className="hero-title">Full-Stack Developer</h2>
              <p className="hero-description">Entry-level developer passionate about building intuitive web applications. 
              Experienced in React, Python, and modern web technologies. Always learning and 
              excited to contribute to innovative projects.</p>
            </div>
            </div>
              {/* Education Card */}
          <div 
            className={`card experience-card ${hoveredCard === 'education' ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCard('education')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <GraduationCap className="w-8 h-8 text-cyan-400 mb-3" />
            <h3 className="text-lg font-bold mb-3">Education</h3>
            <div className="flex flex-wrap gap-2">
                  <h4>California State University, Long Beach</h4>
                  <p>Bachelors of Science in Computer Science, 2021-2024</p>
                  <h4>Mt. San Jacinto College, Menifee, CA</h4>
                  <p>Associate of Science in Computer Science, 2017-2021</p>
            </div>
          </div>
          {/* Projects Card */}
                    {/* Featured Project */}
                    <div 
            className={`card project-featured ${hoveredCard === 'project1' ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCard('project1')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="project-overlay"></div>
            <div className="project-content">
              <div className="project-header">
                <div className={`project-icon ${projects[0].gradient}`}>
                  <Briefcase className="icon" />
                </div>
                <div className="project-links">
                  <button className="icon-button">
                    <Github className="icon-sm" />
                  </button>
                  <button className="icon-button">
                    <ExternalLink className="icon-sm" />
                  </button>
                </div>
              </div>
              <h3 className="project-title">{projects[0].title}</h3>
              <p className="project-description">{projects[0].description}</p>
              <div className="tech-tags">
                {projects[0].tech.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>

            {/* Experience card content */}
            <div
            className={`card experience-card ${hoveredCard === 'experience' ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCard('experience')}
            onMouseLeave={() => setHoveredCard(null)}
            >
               <h3 className="text-2xl font-bold mb-2">Experience</h3>
                <h4 className="text-lg font-bold mb-4">Data Annotator/AI Trainer at DataAnnotation.tech</h4>
                <ul className="experience-list text-white/80 text-sm">
                  <li>Created coding projects and challenges used to improve AI coding capabilities</li>
                  <li>Detected and corrected errors in AI produced code to improve accuracy and efficiency</li>
                  <li>Collaborated with the AI team to improve the accuracy of the AI's code generation</li>
                </ul>
            </div>
            {/* Contact card content */}
            <div
              className={`card contact-card ${hoveredCard === 'contact' ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard('contact')}
              onMouseLeave={() => setHoveredCard(null)}
              >
              <h3 className="text-2xl font-bold mb-2">Contact</h3>
              <p className="text-white/80 text-sm mb-4">Email: erikaebon@gmail.com</p>
            </div>
            {/* Status Card */}
           {/* Status Card */}
          <div 
            className={`card status-card ${hoveredCard === 'status' ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCard('status')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="status-indicator"></div>
            <div className="status-content">
              <p className="status-title">Available for opportunities</p>
              <p className="status-subtitle">Open to entry-level Python & React positions</p>
            </div>
          </div>
          </div>
        </div>
      </div>
  )
}

