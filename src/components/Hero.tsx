import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-premium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-white/80 uppercase tracking-widest">Disponible para proyectos</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 tracking-tighter">
            <span className="text-gradient">Anderson</span> <br />
            <span className="text-white/40">Agüero Lara</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/60 font-light mb-8 max-w-xl leading-relaxed">
            Diseño y desarrollo <span className="text-white">páginas web premium</span> y mini proyectos SaaS para negocios.
          </p>

          <p className="text-lg text-white/40 mb-10 max-w-lg leading-relaxed">
            Ayudo a negocios, marcas y proyectos a lanzar webs modernas, landing pages y mini apps funcionales con una imagen más clara, profesional y útil.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#projects" className="btn-primary w-full sm:w-auto justify-center group">
              Ver proyectos
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-secondary w-full sm:w-auto justify-center">
              Contacto
            </a>
          </div>
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
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute -bottom-6 -left-6 glass-premium px-6 py-4 rounded-2xl shadow-2xl z-20 border border-white/10"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-1">Estrategia & Diseño</p>
            <p className="text-sm font-medium text-white">Enfoque Editorial Premium</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
