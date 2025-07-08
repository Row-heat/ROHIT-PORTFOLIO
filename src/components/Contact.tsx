import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Github, Linkedin, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Section animation
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

    // Form inputs animation
    gsap.fromTo('.form-input',
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
        }
      }
    );

    // Social icons animation
    gsap.fromTo('.social-icon',
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.social-icons',
          start: 'top 80%',
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Animate submit button
    gsap.to('.submit-btn', {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.out'
    });

    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-6 bg-slate-900/80">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-16">
          Get In{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="form-input">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              />
            </div>

            <div className="form-input">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              />
            </div>

            <div className="form-input">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                required
                className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="submit-btn group relative w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white font-medium tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Send Message
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light text-white mb-4">
                Let's Create Something Amazing Together
              </h3>
              <p className="text-white/70 leading-relaxed">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you have a project in mind or just want to chat about web development, 
                feel free to reach out!
              </p>
            </div>

            {/* Social Links */}
            <div className="social-icons flex gap-6">
              <a
                href="https://github.com/Row-heat/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon group p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
              >
                <Github size={24} className="text-white group-hover:text-cyan-400 transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/rohit-singh-83182331a"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon group p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} className="text-white group-hover:text-cyan-400 transition-colors" />
              </a>
              <a
                href="mailto:rohitsingh24685@gmail.com"
                className="social-icon group p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} className="text-white group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>

            {/* Floating particles */}
            <div className="relative">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;