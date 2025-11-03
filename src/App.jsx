import React from 'react'
import { useState, useEffect } from 'react'
import { GraduationCap, Github, AppWindow, ExternalLink, Code2, Briefcase, Mail, Image, ChevronLeft, ChevronRight, Linkedin, Server } from 'lucide-react'
import Modal from './components/Modal'

// Import images for projects
import loginPage from './assets/login_page.png'
import registerPage from './assets/register_page.png'
import chatsComponent from './assets/chats_component.png'
import loggingIn from './assets/logging_in.gif'
import sendingMessage from './assets/sending_message.gif'
import sendingImage from './assets/sending_image.gif'
import chromeX22blpchgW from './assets/chrome_X22blpchgW.gif'
import chromeQuooudKfXY from './assets/chrome_QuooudKfXY.gif'
import home1 from './assets/home-1.png'
import chromeUgSu4h9hFT from './assets/chrome_ugSu4h9hFT.png'
import modelList from './assets/model_list.png'

// Import review images
import review1 from './assets/review-1.png'
import review2 from './assets/review-2.png'
import review3 from './assets/review-3.png'
import review4 from './assets/review-4.png'
import review5 from './assets/review-5.png'

export default function Portfolio() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedReview, setSelectedReview] = useState(null);
  const [selectedReviewIndex, setSelectedReviewIndex] = useState(null);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [currentProjectDemoIndex, setCurrentProjectDemoIndex] = useState({});


  
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

    for (let i = 0; i <= 500; i++) createStar()

    return () => { stars.innerHTML = '' }
  }, [])
 
  const projects = [
    {
      title: 'CapyChat Real Time Chat Application',
      description: 'A modern, real-time messaging platform enabling instant communication with image sharing, user authentication, and live message synchronization. Features include secure login/registration, persistent chat history, and seamless multi-device support for a smooth user experience.',
      tech: ['React', 'Node.js', 'Firebase'],
      gradient: 'bg-gradient-to-r from-cyan-500 to-blue-500',
      links: [
        {
          label: 'Github',
          url: 'https://github.com/embe8/react-chatApp',
          icon: <Github className="icon" />
        },
        {
          label: 'Deployed Application',
          url: 'https://react-chat-app-4bf9-git-main-embes-projects.vercel.app/?_vercel_share=HkQhyhawIVyhoJbIXwpU5lkNSqJANX3F',
          icon: <ExternalLink className="icon" />
        }
      ],
      demos: [
        loginPage,
        registerPage,
        chatsComponent,
        loggingIn,
        sendingMessage,
        sendingImage,
      ],
    },
    {
      title: 'AutoBuilder Car Configuration Application',
      description: 'An interactive automotive customization platform that allows users to build and configure their ideal vehicle. Users can browse models, customize trims and features, view real-time pricing updates, and save their configurations with persistent data storage for an enhanced car-buying experience.',
      tech: ['React', 'Node.js', 'Supabase'],
      gradient: 'bg-gradient-to-r from-purple-500 to-pink-500',
      links: [
        {
          label: 'Github',
          url: 'https://github.com/embe8/car-builder-app',
          icon: <Github className="icon" />
        },
        {
          label: 'Deployed Application',
          url: 'https://car-builder-app-v2-git-main-embes-projects.vercel.app/?_vercel_share=IjBl0M8nt3vO4nGqhgfvl2WYJXuWBDKG',
          icon: <ExternalLink className="icon" />
        }
      ],
      demos: [
        chromeX22blpchgW,
        chromeQuooudKfXY,
        home1,
        chromeUgSu4h9hFT,
        modelList
      ],
    }
  ]

  const reviews = [
    review1,
    review3,
    review4,
    review5,
    review2,
  ]

  const skills = [
    {"name": "React", "icon": ""},
    {"name": "Python", "icon": ""},
    {"name": "JavaScript", "icon": ""},
    {"name": "HTML", "icon": ""},
    {"name": "CSS", "icon": ""},
    {"name": "PostgreSQL", "icon": ""},
    {"name": "Supabase", "icon": ""},
    {"name": "Git", "icon": ""},
    {"name": "Vite", "icon": ""},
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
              <div className="card-avatar">👨‍💻</div>
              <h1 className="hero-title">Erika Ebon</h1>
              <h2 className="hero-title">Software Developer</h2>
              <p className="hero-description">Entry-level developer passionate about building intuitive web applications. 
              Experienced in React, Python, and modern web technologies. Always learning and 
              excited to contribute to innovative projects. </p>
            </div>
            </div>
            {/* Skills Card */}
            <div 
            className={`card skills-card ${hoveredCard === 'skills1' ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCard('skills1')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="skills-section">
              <Code2 className="card-icon cyan" />
              <h3 className="card-title">Frontend</h3>
              <div className="tech-tags">
                {skills.slice(0, 5).map((skill) => (
                  <span key={skill.name} className="skill-badge">
                    {skill.icon} {skill.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="skills-section">
              <Server className="card-icon cyan" />
              <h3 className="card-title">Backend</h3>
              <div className="tech-tags">
                {skills.slice(5).map((skill) => (
                  <span key={skill.name} className="skill-badge">
                    {skill.icon} {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
              {/* Education Card */}
            <div 
              className={`card education-card ${hoveredCard === 'education' ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard('education')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="education-section">
                <GraduationCap className="card-icon orange" />
                <h4 className="card-title">California State University, Long Beach</h4>
                <div className="education-content">
                  <p className="education-degree">Bachelors of Science in Computer Science</p>
                  <p className="education-years">2021-2024</p>
                </div>
              </div>
              <div className="education-section">
                <GraduationCap className="card-icon orange" />
                <h4 className="card-title">Mt. San Jacinto College, Menifee</h4>
                <div className="education-content">
                  <p className="education-degree">Associate of Science in Computer Science</p>
                  <p className="education-years">2017-2021</p>
                </div>
              </div>
            </div>
          {/* Projects Card */}
          {projects.map((project, index) => (
          <div 
            key={index}
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
                  <AppWindow className=" card-icon purple" />
                  <h3 className="card-title">Project</h3>
                </div>
                <h3 className="project-title"></h3>         
                <div className="project-links">
                  <button className="icon-button" 
                    onClick={() => window.open(project.links[0].url, '_blank')}
                    >
                    <Github className="icon-sm" />
                  </button>
                  <button className="icon-button">
                    <ExternalLink className="icon-sm" 
                    onClick={() => window.open(project.links[1].url, '_blank')}
                    />
                  </button>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="icon-button"
                    aria-label="View demos"
                  >
                    <Image className="icon-sm" /> 
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
            {/*Thumbnail Portion - Carousel */}
            <div className="project-demo-carousel">
              <button
                className="project-carousel-btn project-carousel-btn-prev"
                onClick={() => {
                  const totalSlides = Math.ceil(project.demos.length / 3);
                  const currentSlide = currentProjectDemoIndex[index] || 0;
                  const newSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
                  setCurrentProjectDemoIndex({ ...currentProjectDemoIndex, [index]: newSlide });
                }}
                aria-label="Previous slide"
              >
                <ChevronLeft className="project-carousel-icon" />
              </button>
              
              <div className="project-demo-slide-container">
                <div 
                  className="project-demo-slides"
                  style={{ transform: `translateX(-${(currentProjectDemoIndex[index] || 0) * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(project.demos.length / 3) }).map((_, slideIdx) => (
                    <div key={slideIdx} className="project-demo-slide">
                      {project.demos.slice(slideIdx * 3, slideIdx * 3 + 3).map((demo, demoIdx) => {
                        const actualIdx = slideIdx * 3 + demoIdx;
                        return (
                          <div key={actualIdx} className="project-demo-item">
                            <img
                              src={demo}
                              alt={`project-${index}-demo-${actualIdx + 1}`}
                              className="project-thumbnail-img"
                              onClick={() => {
                                setSelectedProject(project);
                                setSelectedImageIndex(actualIdx);
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="project-carousel-btn project-carousel-btn-next"
                onClick={() => {
                  const totalSlides = Math.ceil(project.demos.length / 3);
                  const currentSlide = currentProjectDemoIndex[index] || 0;
                  const newSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
                  setCurrentProjectDemoIndex({ ...currentProjectDemoIndex, [index]: newSlide });
                }}
                aria-label="Next slide"
              >
                <ChevronRight className="project-carousel-icon" />
              </button>

              {Math.ceil(project.demos.length / 3) > 1 && (
                <div className="project-carousel-dots">
                  {Array.from({ length: Math.ceil(project.demos.length / 3) }).map((_, slideIdx) => (
                    <button
                      key={slideIdx}
                      className={`project-carousel-dot ${(currentProjectDemoIndex[index] || 0) === slideIdx ? 'active' : ''}`}
                      onClick={() => setCurrentProjectDemoIndex({ ...currentProjectDemoIndex, [index]: slideIdx })}
                      aria-label={`Go to slide ${slideIdx + 1}`}
                    />
                  ))}
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
              <div className="project-icon">
              <Briefcase className="card-icon pink" />
                <h3 className="card-title">Experience</h3>
              </div>
              <div className="experience-content">
                <div className="experience-item">
                  <h4 className="experience-role">Data Annotator/AI Trainer</h4>
                  <p className="experience-company">DataAnnotation.tech</p>
                  <p className="experience-date">Jan 2024 - Aug 2025</p>
                  <ul className="experience-list">
                    <li>Created coding projects and challenges to improve AI coding capabilities</li>
                    <li>Debugged and optimized AI-generated code for accuracy and efficiency</li>
                    <li>Evaluated peer submissions for guideline compliance and technical clarity</li>
                  </ul>
                </div>
                <div className="experience-item">
                  <h4 className="experience-role">Freelance Medical/General Transcriptionist</h4>
                  <p className="experience-company">Self-Employed</p>
                  <p className="experience-date">2016 - 2021</p>
                  <ul className="experience-list">
                    <li>Delivered accurate, time-sensitive transcripts for medical and general clients</li>
                    <li>Maintained a 98% client satisfaction rate; Top-Rated Freelancer (Top 10%)</li>
                  </ul>
                </div>
              </div>
            </div>
          {/* Reviews Card */}                      
          <div
            className={`card reviews-card ${hoveredCard === 'reviews' ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCard('reviews')}
            onMouseLeave={() => setHoveredCard(null)}
            >
               <h3 className="text-2xl font-bold mb-4" style={{ marginBottom: '1rem' }}>Upwork Client Reviews</h3>
               <div className="reviews-carousel">
                 <button
                   className="carousel-btn carousel-btn-prev"
                   onClick={() => {
                     const totalSlides = Math.ceil(reviews.length / 3);
                     setCurrentReviewIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
                   }}
                   aria-label="Previous slide"
                 >
                   <ChevronLeft className="carousel-icon" />
                 </button>
                 
                 <div className="review-slide-container">
                   <div 
                     className="review-slides"
                     style={{ transform: `translateX(-${currentReviewIndex * 100}%)` }}
                   >
                     {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, slideIdx) => (
                       <div key={slideIdx} className="review-slide">
                         {reviews.slice(slideIdx * 3, slideIdx * 3 + 3).map((review, reviewIdx) => {
                           const actualIdx = slideIdx * 3 + reviewIdx;
                           return (
                             <div key={actualIdx} className="review-item">
                               <img
                                 src={review}
                                 alt={`review-${actualIdx + 1}`}
                                 className="review-thumbnail-img"
                                 onClick={() => {
                                   setSelectedReview(review);
                                   setSelectedReviewIndex(actualIdx);
                                 }}
                               />
                             </div>
                           );
                         })}
                       </div>
                     ))}
                   </div>
                 </div>

                 <button
                   className="carousel-btn carousel-btn-next"
                   onClick={() => {
                     const totalSlides = Math.ceil(reviews.length / 3);
                     setCurrentReviewIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
                   }}
                   aria-label="Next slide"
                 >
                   <ChevronRight className="carousel-icon" />
                 </button>

                 <div className="carousel-dots">
                   {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, slideIdx) => (
                     <button
                       key={slideIdx}
                       className={`carousel-dot ${currentReviewIndex === slideIdx ? 'active' : ''}`}
                       onClick={() => setCurrentReviewIndex(slideIdx)}
                       aria-label={`Go to slide ${slideIdx + 1}`}
                     />
                   ))}
                 </div>
               </div>
            </div>
            {/* Contact card content */}
            <div
              className={`card contact-card ${hoveredCard === 'contact' ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard('contact')}
              onMouseLeave={() => setHoveredCard(null)}
              >
              <div className="project-icon">
                <Mail className="icon" />
              <h2 className="text-2xl font-bold mb-2">Let's Connect</h2>
              </div>
              <p className="contact-description">Open to opportunities and collaborations</p>
              <div className="contact-buttons">
                <button className="contact-btn"                   
                onClick={() => window.open('https://github.com/embe8', '_blank')}
                >
                  <Github className="icon-xs" /> Github
                </button>
                <button className="contact-btn"                   
                onClick={() => window.open('https://www.linkedin.com/in/eebon/', '_blank')}
                >
                  <Linkedin className="icon-xs" /> LinkedIn
                </button>
                <button className="contact-btn"                   
                onClick={() => window.open('mailto:eebon@icloud.com', '_blank')}
                >
                  <Mail className="icon-xs" /> Email
                </button>
              </div>
            </div>
            {/* Status Card */}
          <div 
            className={`card status-card ${hoveredCard === 'status' ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCard('status')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="status-indicator"></div>
            <div className="status-content">
              <p className="status-title">Available for hybrid, remote or on-site opportunities</p>
              <p className="status-subtitle">Open to entry-level software developer positions</p>
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

