import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const projectsRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'Mutual Fund App',
      description: 'Search from thousands of mutual funds using our integrated API and build your investment portfolio with real-time data and analytics.',
      image: '/images/projects/img1.jpeg',
      tech: ['React', 'Node.js', 'API Integration', 'Chart.js'],
      github: 'https://github.com/Row-heat/Rohit-fund-project',
      live: 'https://rohit-fund-project.vercel.app/'
    },
    {
      id: 2,
      title: 'Animated Website',
      description: 'A modern, interactive website featuring smooth animations, dynamic transitions, and engaging user interactions built with cutting-edge web technologies.',
      image: '/images/projects/img2.jpeg',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
      github: 'https://github.com/Row-heat/ANIMATED-WEBSITE',
      live: 'https://animatedwebsite-wheat.vercel.app'
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Section fade in
    gsap.fromTo(section,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        }
      }
    );

    // Projects animation
    gsap.fromTo('.project-card',
      { 
        opacity: 0, 
        y: 100,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 80%',
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 bg-slate-900/60 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Featured{' '}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
            Projects
          </span>
        </h2>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                
                {/* Hover overlay with links */}
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors text-white font-medium"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-colors text-white font-medium"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full border border-cyan-500/30 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 hover:border-white/30 transition-colors text-white text-sm font-medium"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-colors text-white text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;