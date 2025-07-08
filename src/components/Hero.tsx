import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    // Animate title with blur effect
    tl.fromTo(titleRef.current,
      { 
        opacity: 0, 
        y: 50, 
        filter: 'blur(10px)' 
      },
      { 
        opacity: 1, 
        y: 0, 
        filter: 'blur(0px)', 
        duration: 1.2, 
        ease: 'power2.out' 
      }
    )
    // Animate subtitle
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.6'
    )
    // Animate CTA button
    .fromTo(ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
      '-=0.4'
    );


    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* HD Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Galaxy Background"
          className="w-full h-full object-cover"
        />
        {/* Animated overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/70 to-slate-900/85" />
        
        {/* Additional dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="glow-orb absolute rounded-full blur-xl opacity-30"
              style={{
                left: `${20 + i * 12}%`,
                top: `${30 + (i % 3) * 25}%`,
                width: `${60 + Math.random() * 40}px`,
                height: `${60 + Math.random() * 40}px`,
                background: i % 2 === 0 
                  ? 'radial-gradient(circle, rgba(6, 182, 212, 0.6) 0%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%)',
                animationDelay: `${i * 0.7}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight leading-none"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            ROHIT
          </span>
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl text-white/80">
            Web Developer
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting immersive digital experiences with cutting-edge technologies.
          Specializing in React, GSAP animations, and modern web development.
        </p>
        
        <button 
          ref={ctaRef}
          className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-medium tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
        >
          <span className="relative z-10 flex items-center gap-2">
            Hire Me
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-10" />
    </section>
  );
};

export default Hero;