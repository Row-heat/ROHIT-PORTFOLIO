import React, { useEffect } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate the logo
    tl.from('.preloader-logo', {
      opacity: 0,
      scale: 0.5,
      duration: 1,
      ease: 'power2.out'
    })
    // Animate progress bar
    .to('.progress-bar-fill', {
      width: '100%',
      duration: 2.5,
      ease: 'power2.out'
    }, '-=0.5')
    // Fade out preloader
    .to('.preloader', {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      delay: 0.5,
      onComplete: onComplete
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div className="preloader fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      {/* Logo */}
      <div className="preloader-logo text-6xl font-light text-white mb-8 tracking-wider">
        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          ROHIT
        </span>
      </div>
      
      {/* Progress bar */}
      <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
        <div className="progress-bar-fill h-full bg-gradient-to-r from-cyan-400 to-purple-400 w-0 rounded-full"></div>
      </div>
      
      {/* Loading text */}
      <div className="text-white/60 mt-4 text-sm tracking-widest">
        LOADING EXPERIENCE
      </div>
    </div>
  );
};

export default Preloader;