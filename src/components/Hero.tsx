import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Download, Sparkles, Code, Zap, Star, Cpu, Palette } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    
    // Enhanced title animation with morphing effect
    tl.fromTo(titleRef.current,
      { 
        opacity: 0, 
        y: 100, 
        filter: 'blur(30px)',
        scale: 0.7,
        rotationX: 45
      },
      { 
        opacity: 1, 
        y: 0, 
        filter: 'blur(0px)', 
        scale: 1,
        rotationX: 0,
        duration: 2, 
        ease: 'power4.out' 
      }
    )
    // Subtitle with wave effect
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 60, filter: 'blur(15px)', skewY: 5 },
      { opacity: 1, y: 0, filter: 'blur(0px)', skewY: 0, duration: 1.5, ease: 'power3.out' },
      '-=1.2'
    )
    // Buttons with magnetic effect
    .fromTo(buttonsRef.current?.children || [],
      { opacity: 0, scale: 0.3, y: 50, rotation: 180 },
      { opacity: 1, scale: 1, y: 0, rotation: 0, duration: 1.2, ease: 'elastic.out(1, 0.8)', stagger: 0.2 },
      '-=0.8'
    )
    // Floating elements with orbital motion
    .fromTo('.floating-element',
      { opacity: 0, scale: 0, rotation: 0 },
      { opacity: 1, scale: 1, rotation: 360, duration: 2, stagger: 0.15, ease: 'back.out(1.7)' },
      '-=1.5'
    );

    // Continuous orbital animation for floating elements
    gsap.to('.floating-element', {
      rotation: '+=360',
      duration: 20,
      ease: 'none',
      repeat: -1,
      stagger: 2
    });

    // Floating animation
    gsap.to('.floating-element', {
      y: '-=30',
      duration: 4,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    });

    return () => {
      tl.kill();
    };
  }, []);

  const handleDownloadCV = () => {
    // Open Google Drive link in new tab for CV download
    window.open('https://drive.google.com/file/d/1M16c_cDBeSiNImFumlZ1xfXtqCcqRlFI/view?usp=sharing', '_blank');
  };

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Multi-Layer Background */}
      <div className="absolute inset-0 z-0 bg-slate-950">
        {/* Primary cosmic gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-950" />
        
        {/* Animated mesh overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 animate-pulse" />
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
            `,
            animation: 'cosmic-drift 25s ease-in-out infinite'
          }} />
        </div>
        
        {/* Dynamic grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px),
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 100px 100px, 50px 50px, 50px 50px',
            animation: 'grid-flow 30s linear infinite'
          }} />
        </div>
        
        {/* Floating cosmic elements */}
        <div ref={particlesRef} className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="floating-element absolute"
              style={{
                left: `${5 + i * 3.8}%`,
                top: `${10 + (i % 7) * 12}%`,
                animationDelay: `${i * 0.4}s`,
              }}
            >
              {i % 5 === 0 && (
                <div className="relative">
                  <div className="w-12 h-12 border-2 border-cyan-400/40 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-400/10 backdrop-blur-sm animate-pulse">
                    <Code className="w-6 h-6 text-cyan-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl animate-ping" />
                </div>
              )}
              {i % 5 === 1 && (
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-lg rotate-45 backdrop-blur-sm border border-purple-400/40">
                    <Palette className="w-5 h-5 text-purple-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45" />
                  </div>
                </div>
              )}
              {i % 5 === 2 && (
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-400/40 to-cyan-400/40 rounded-full border border-indigo-400/50">
                    <Star className="w-4 h-4 text-indigo-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="absolute inset-0 bg-indigo-400/30 rounded-full blur-lg animate-pulse" />
                </div>
              )}
              {i % 5 === 3 && (
                <div className="w-6 h-6 border border-emerald-400/50 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 transform rotate-12 backdrop-blur-sm">
                  <Cpu className="w-3 h-3 text-emerald-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              )}
              {i % 5 === 4 && (
                <div className="w-4 h-4 bg-gradient-to-r from-pink-400/40 to-rose-400/40 rounded-full animate-pulse border border-pink-400/60" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content with Enhanced Styling */}
      <div className="relative z-20 text-center px-6 max-w-7xl mx-auto">
        {/* Decorative header elements */}
        <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 flex gap-8">
          <div className="w-16 h-16 border-2 border-cyan-400/30 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-400/10 backdrop-blur-sm flex items-center justify-center animate-spin" style={{ animationDuration: '20s' }}>
            <Sparkles className="w-8 h-8 text-cyan-400" />
          </div>
          <div className="w-12 h-12 border border-purple-400/40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 transform rotate-45 backdrop-blur-sm animate-bounce" />
        </div>
        
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-8 tracking-tight leading-none relative"
        >
          <span className="inline-block relative">
            <span className="relative z-10">
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient-x font-extrabold drop-shadow-lg">
                  ROHIT
                </span>
                {/* Enhanced glowing effects */}
                <div className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 rounded-full opacity-70 blur-sm animate-pulse" />
                <div className="absolute -bottom-6 left-2 right-2 h-1 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full opacity-50 blur-md" />
              </span>
            </span>
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 to-orange-500/15 rounded-3xl blur-3xl -z-10" />
          </span>
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white relative flex items-center justify-center gap-4 mt-4">
            <div className="relative">
              <Code className="w-8 h-8 md:w-12 md:h-12 text-purple-400 animate-pulse" />
              <div className="absolute inset-0 bg-purple-400/30 rounded-full blur-lg animate-ping" />
            </div>
            <span className="text-white font-semibold drop-shadow-lg">
              Full Stack Developer
            </span>
            <div className="relative">
              <Zap className="w-8 h-8 md:w-12 md:h-12 text-orange-400 animate-bounce" />
              <div className="absolute inset-0 bg-orange-400/30 rounded-full blur-lg animate-pulse" />
            </div>
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl lg:text-2xl text-white/80 mb-12 max-w-5xl mx-auto leading-relaxed font-medium relative"
        >
          <span className="relative z-10 bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent">
            Crafting digital experiences with passion and precision. Specializing in modern web technologies 
            and bringing creative visions to life through clean, interactive code that tells a story.
          </span>
          {/* Enhanced background effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-orange-500/5 rounded-2xl blur-2xl" />
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-orange-500/10 rounded-3xl blur-3xl opacity-50" />
        </p>
        
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#contact"
            className="group relative px-12 py-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl text-white font-bold tracking-wide overflow-hidden transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/40 min-w-[200px] border-2 border-white/20"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <div className="relative">
                <Sparkles size={24} className="group-hover:rotate-180 transition-transform duration-700" />
                <div className="absolute inset-0 bg-white/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              Hire Me
              <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform duration-500" />
            </span>
            {/* Enhanced animated backgrounds */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/50 to-purple-500/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700" />
          </a>
          
          <button 
            onClick={handleDownloadCV}
            className="group relative px-12 py-6 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-2xl text-white font-bold tracking-wide overflow-hidden transition-all duration-700 hover:scale-110 hover:bg-white/20 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-purple-500/30 min-w-[200px]"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <div className="relative">
                <Download size={24} className="group-hover:translate-y-2 transition-transform duration-500" />
                <div className="absolute inset-0 bg-green-400/40 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              Download CV
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse relative">
                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping" />
              </div>
            </span>
            {/* Enhanced hover effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
          </button>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm bg-white/5 animate-bounce">
              <div className="w-2 h-4 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2 animate-pulse" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/20 to-purple-400/20 rounded-full blur-lg animate-pulse" />
          </div>
        </div>
      </div>

      {/* Enhanced bottom gradient with cosmic effect */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
    </section>
  );
};

export default Hero;