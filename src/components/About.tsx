import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'GSAP', icon: '🎭' },
    { name: 'Node.js', icon: '🚀' }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Section fade in
    gsap.fromTo(section,
      { opacity: 0, filter: 'blur(10px)' },
      {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
        }
      }
    );

    // Image animation
    gsap.fromTo(imageRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
        }
      }
    );

    // Content animation
    gsap.fromTo(contentRef.current?.children || [],
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        }
      }
    );

    // Skills animation
    gsap.fromTo('.skill-item',
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 80%',
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6 bg-slate-900/80">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Glowing frame */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full p-1 animate-pulse">
                <div className="w-full h-full bg-slate-900 rounded-full p-4">
                  <img
                    src="/images/profile.png"
                    alt="Rohit Profile"
                    className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Floating particles around image */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400/50 rounded-full"
                  style={{
                    left: `${50 + 40 * Math.cos((i * Math.PI) / 4)}%`,
                    top: `${50 + 40 * Math.sin((i * Math.PI) / 4)}%`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            
            <p className="text-lg text-white/80 leading-relaxed">
              I'm a passionate web developer with a keen eye for creating immersive digital experiences. 
              With expertise in modern web technologies and a love for animation, I bring ideas to life 
              through code.
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed">
              My journey in web development spans over 3 years, during which I've mastered the art of 
              combining functionality with stunning visual design. I specialize in React, GSAP animations, 
              and creating responsive, user-friendly interfaces.
            </p>

            {/* Skills Grid */}
            <div className="skills-grid grid grid-cols-3 gap-4 mt-8">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-item group relative p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <div className="text-sm text-white/80 font-medium">
                      {skill.name}
                    </div>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;