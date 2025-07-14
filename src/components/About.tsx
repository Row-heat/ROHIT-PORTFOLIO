import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Target, Rocket, Star, Code2, Palette } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const skills = [
    { name: 'HTML5', icon: '🌐', level: 95, color: 'from-orange-400 to-red-400' },
    { name: 'CSS3', icon: '🎨', level: 90, color: 'from-blue-400 to-cyan-400' },
    { name: 'JavaScript', icon: '⚡', level: 85, color: 'from-yellow-400 to-orange-400' },
    { name: 'React', icon: '⚛️', level: 80, color: 'from-cyan-400 to-blue-400' },
    { name: 'Node.js', icon: '🚀', level: 75, color: 'from-green-500 to-teal-500' },
    { name: 'GSAP', icon: '🎭', level: 70, color: 'from-green-400 to-emerald-400' }
  ];

  const highlights = [
    { icon: Brain, title: 'Problem Solver', desc: 'Love tackling complex challenges' },
    { icon: Target, title: 'Detail Oriented', desc: 'Pixel-perfect implementations' },
    { icon: Rocket, title: 'Fast Learner', desc: 'Always exploring new technologies' },
    { icon: Star, title: 'Quality Focused', desc: 'Clean, maintainable code' }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Enhanced section animation
    gsap.fromTo(section,
      { opacity: 0, filter: 'blur(20px)' },
      {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1.5,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
        }
      }
    );

    // Image animation with rotation
    gsap.fromTo(imageRef.current,
      { x: -150, opacity: 0, rotation: -10 },
      {
        x: 0,
        opacity: 1,
        rotation: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
        }
      }
    );

    // Content animation with stagger
    gsap.fromTo(contentRef.current?.children || [],
      { x: 150, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        }
      }
    );

    // Skills animation with bounce
    gsap.fromTo('.skill-item',
      { scale: 0, opacity: 0, rotation: 180 },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 80%',
        }
      }
    );

    // Highlights animation
    gsap.fromTo('.highlight-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.highlights-grid',
          start: 'top 80%',
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 bg-gradient-to-br from-slate-950/95 via-purple-950/30 to-slate-950/95 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, #06b6d4 1px, transparent 1px),
            linear-gradient(-45deg, #8b5cf6 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, #ec4899 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px, 80px 80px, 40px 40px',
          animation: 'pattern-float 15s ease-in-out infinite'
        }} />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <Code2 className="absolute top-20 left-10 w-8 h-8 text-cyan-400/30 animate-pulse" />
        <Palette className="absolute top-40 right-20 w-6 h-6 text-purple-400/30 animate-bounce" />
        <Star className="absolute bottom-32 left-20 w-5 h-5 text-pink-400/30 animate-spin" style={{ animationDuration: '8s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 relative">
            About{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-lg">
              Me
            </span>
            {/* Decorative underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full" />
          </h2>
        </div>

        {/* Main Content Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Profile Image */}
          <div ref={imageRef} className="flex justify-center lg:justify-start">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Multiple layered frames */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/40 to-purple-400/40 rounded-3xl p-1 backdrop-blur-sm animate-pulse">
                <div className="absolute inset-2 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-3xl animate-pulse" style={{ animationDelay: '1s' }}>
                  <div className="w-full h-full bg-slate-900/90 backdrop-blur-sm rounded-3xl p-8 border border-white/20 relative overflow-hidden">
                    {/* Inner glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl" />
                    <img
                      src="/images/profile.png"
                      alt="Rohit Profile"
                      className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700 relative z-10"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-8 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl pointer-events-none" />
                  </div>
                </div>
              </div>
              
              {/* Enhanced floating accent elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse flex items-center justify-center" style={{ animationDelay: '1s' }}>
                <Palette className="w-5 h-5 text-white" />
              </div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-ping" />
            </div>
          </div>

          {/* Content beside the image */}
          <div ref={contentRef} className="space-y-6">
            <div className="space-y-6 text-lg text-white/85 leading-relaxed">
              <p className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <span className="text-cyan-400 font-semibold">Passionate web developer</span> with expertise in modern JavaScript frameworks and a keen eye for creating engaging user experiences.
              </p>
              
              <p className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                Specialized in <span className="text-purple-400 font-semibold">React</span>, <span className="text-cyan-400 font-semibold">Node.js</span>, and <span className="text-pink-400 font-semibold">modern CSS</span> to build scalable applications.
              </p>
              
              <p className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                Focused on delivering <span className="text-green-400 font-semibold">clean code</span> and <span className="text-yellow-400 font-semibold">exceptional user interfaces</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="highlights-grid grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div
                key={highlight.title}
                className="highlight-card group relative p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={24} className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{highlight.title}</h4>
                    <p className="text-white/60 text-sm">{highlight.desc}</p>
                  </div>
                </div>
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>

        {/* Enhanced Skills Grid */}
        <div className="skills-grid grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-item group relative p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-110"
            >
              <div className="text-center">
                <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div className="text-sm text-white/90 font-bold mb-4">
                  {skill.name}
                </div>
                {/* Enhanced skill level bar */}
                <div className="w-full bg-white/10 rounded-full h-2 mb-2 overflow-hidden">
                  <div 
                    className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 relative overflow-hidden`}
                    style={{ width: `${skill.level}%` }}
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shine" />
                  </div>
                </div>
                <div className="text-xs text-cyan-400 font-semibold">{skill.level}%</div>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;