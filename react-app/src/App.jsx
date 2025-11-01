import React from 'react'
import { useState, useEffect } from 'react'
import { GraduationCap, Github, ExternalLink, Briefcase, Image, MoveDiagonal } from 'lucide-react'
import Modal from './components/Modal'

export default function Portfolio() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedReview, setSelectedReview] = useState(null);

  
  useEffect(() => {
    const stars = document.querySelector('.stars')
    if (!stars) return

    const createStar = () => {
      const starEl = document.createElement('span')
      starEl.className = 'star'
      const minSize = 1
      const maxSize = 2
      const size = Math.random() * (maxSize - minSize) + minSize
      starEl.style.width = `${size}px`
      starEl.style.height = `${size}px`
      starEl.style.left = `${Math.random() * 100}%`
      starEl.style.top = `${Math.random() * 100}%`
      starEl.style.animationDelay = `${Math.random() * 10}s`
      stars.appendChild(starEl)
    }

    // generate stars (adjust count if needed)
    for (let i = 0; i <= 500; i++) createStar()

    // optional cleanup on unmount
    return () => { stars.innerHTML = '' }
  }, [])
 
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
      ],
      demos: [
        './src/assets/capychat-1.png',
        './src/assets/capychat-2.png',
        // Add your actual demo image paths here
      ],
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
      ],
      demos: [
        '/path/to/autobuilder-demo1.gif',
        '/path/to/autobuilder-demo2.png',
        // Add your actual demo image paths here
      ],
    }
  ]

  const reviews = [
    './src/assets/review-1.png',
    './src/assets/review-2.png',
    './src/assets/review-3.png',
    './src/assets/review-4.png',
  ]


  return (
    <>
       {/*<div className="stars" aria-hidden="true"></div>*/}
 
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
              excited to contribute to innovative projects. </p>
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
          {projects.map((project, index) => (
          <div 
            className={`card project-featured ${hoveredCard === `project${index}` ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCard(`project${index}`)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="project-overlay"></div>
            <div className="project-layout">
              {/* Text content portion */}
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
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="icon-button"
                    aria-label="View demos"
                  >
                    <Image className="icon-sm" /> {/* You'd import Image from lucide-react */}
                  </button>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-tags">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            {/*Thumbnail Portion*/}
            <div className="project-thumbnails">
              {project.demos.slice(0, 3).map((demo, demoIdx) => (
                <img
                key={demoIdx}
                src={demo}
                alt={`project-${index}-demo-${demoIdx + 1}`}
                className="project-thumbnail-img"
                onClick={() => {setSelectedProject(project);
                  setSelectedImageIndex(demoIdx)
                }}
              />
            ))}
              {project.demos.length > 3 && (
                <div
                className="project-thumbnail-more"
                onClick={() => {
                  setSelectedProject(project);
                  setSelectedImageIndex(3);
                }}
                >
                  +{project.demos.length -3} more
                </div>
              )}
            </div>
          </div>
          </div>
        ))}
            {/* Experience card content */}
            <div
            className={`card experience-card ${hoveredCard === 'experience' ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCard('experience')}
            onMouseLeave={() => setHoveredCard(null)}
            >
               <h3 className="text-2xl font-bold mb-2">Experience</h3>
                <h4 className="text-lg font-bold mb-4">Data Annotator/AI Trainer at DataAnnotation.tech (Jan 2024-Aug 2025)</h4>
                <ul className="experience-list text-white/80 text-sm">
                  <li>Created coding projects and challenges used to improve AI coding capabilities</li>
                  <li>Detected and corrected errors in AI produced code to improve accuracy and efficiency</li>
                  <li>Rated and reviewed coding submissions by peers to check if guidelines were followed</li>
                </ul>
                <h4 className="text-lg font-bold mb-4">Freelance Medical/General Transcriptionist (2016-2021)</h4>
                <ul className="experience-list text-white/80 text-sm">
                  <li>98% Client satisfaction rate with repeat clients and 4 and 5 star reviews (out of 5)</li>
                  <li>Top rated freelancer at Upwork for three consecutive years (top 10% of freelancers and agencies for consistent client satisfaction and strong reputations)</li>
                  <li>Worked with a wide range of clients, from medical professionals to legal firms, transcribing medical reports, focus group discussions and one on one interviews</li>
                </ul>
            </div>
          {/* Reviews Card */}                      
          <div
            className={`card reviews-card ${hoveredCard === 'reviews' ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCard('reviews')}
            onMouseLeave={() => setHoveredCard(null)}
            >
               <h3 className="text-2xl font-bold mb-2">ClientReviews</h3>
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
      {/* Modal overlay */}
      <Modal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
        demos={selectedProject?.demos || []}
      />
      </>
  )
}

