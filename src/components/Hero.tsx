import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import ParticleField from './ParticleField';

const letterVariants = {
  hidden: { y: "120%", rotateX: -40, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    rotateX: 0,
    opacity: 1,
    transition: {
      delay: 0.35 + i * 0.04,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const AnimatedText = ({ text, delayOffset = 0, className = "", style = {} }: { text: string, delayOffset?: number, className?: string, style?: React.CSSProperties }) => {
  return (
    <span className={`inline-block ${className}`} style={{ perspective: '400px', ...style }}>
      {text.split('').map((char, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <motion.span
            custom={index + (delayOffset / 0.04)}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <ParticleField />
      
      {/* Gradient Overlay for Legibility */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 30% 50%, rgba(5,5,5,0.7) 0%, rgba(5,5,5,0.3) 50%, rgba(5,5,5,0.8) 100%)',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      {/* Background Gradients */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-20 items-center relative z-10" style={{ zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 mb-8"
            style={{
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '24px',
              background: 'rgba(255,255,255,0.03)'
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" style={{ animationDuration: '2s' }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]"></span>
            </span>
            <span className="text-[11px] font-semibold text-white/30 uppercase tracking-[2.5px]">Abierto a proyectos selectos</span>
          </motion.div>

          <h1 className="text-[clamp(52px,9vw,96px)] font-[800] leading-[1.1] mb-6 tracking-[-4px]" style={{ perspective: '400px' }}>
            <AnimatedText text="Anderson" className="text-white block" />
            <AnimatedText 
              text="Agüero Lara" 
              delayOffset={0.35} 
              className="block" 
              style={{
                background: 'linear-gradient(90deg, rgba(255,255,255,0.25), rgba(0,212,255,0.15))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            />
          </h1>

          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-[50px] h-[2px] mb-8 origin-left"
            style={{ background: 'linear-gradient(90deg, #00d4ff, transparent)' }}
          />

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/50 font-light mb-8 max-w-xl leading-relaxed"
          >
            Desarrollador web & <span className="text-white font-medium">constructor de productos digitales</span>.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="text-lg text-white/40 mb-10 max-w-lg leading-relaxed"
          >
            Construyo herramientas que resuelven problemas reales, con un enfoque técnico sólido y un diseño limpio.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a 
              href="#projects" 
              className="px-6 py-3 text-black font-medium rounded-full transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center group"
              style={{ background: 'linear-gradient(135deg, #ffffff, #e0e0e0)' }}
            >
              Ver proyectos
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-secondary w-full sm:w-auto justify-center">
              Contacto
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 shadow-2xl group">
            <img 
              src="https://fwjdikkenbolqnyadgyq.supabase.co/storage/v1/object/sign/ima/63ce2d3b-5e26-48ba-962e-d5c656921f0d.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTU1MzE4Ny1lNWQ2LTQyN2ItYjQzZi1kZjVlZWE4MzAwZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWEvNjNjZTJkM2ItNWUyNi00OGJhLTk2MmUtZDVjNjU2OTIxZjBkLmpwZWciLCJpYXQiOjE3NzI5ODAwNjMsImV4cCI6MTgwNDUxNjA2M30.GVD0QQyFFpkwYlykW5dst9mETkoufZfyPWA1QYhQMDs" 
              alt="Anderson Agüero Lara - Premium Web Developer" 
              className="w-full h-full object-cover grayscale brightness-110 contrast-125 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
              referrerPolicy="no-referrer"
            />
            {/* Subtle Editorial Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
          </div>
          
          {/* Decorative Minimal Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/[0.02] rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10"
      >
        <span className="text-[10px] tracking-[3px] text-white/20 uppercase font-medium">Scroll</span>
        <div className="w-[1px] h-[40px] bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
