import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Construyendo el <br />
              <span className="text-white/40">futuro digital.</span>
            </h2>
            <div className="w-20 h-1 bg-white mb-8" />
            
            <div className="space-y-6 text-lg text-white/60 leading-relaxed font-light">
              <p>
                Soy Anderson Agüero Lara, un desarrollador de 21 años radicado en Costa Rica, enfocado en la creación de experiencias digitales de alto impacto.
              </p>
              <p>
                Mi enfoque no es solo escribir código, sino construir herramientas que resuelvan problemas reales. Me especializo en transformar ideas complejas en interfaces limpias, rápidas y profesionales.
              </p>
              <p>
                Desde landing pages optimizadas para conversión hasta MVPs escalables para startups, cada proyecto que emprendo lleva un sello de calidad premium y atención al detalle.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="glass-premium p-8 rounded-3xl aspect-square flex flex-col justify-center items-center text-center">
                <span className="text-4xl font-bold mb-2">21</span>
                <span className="text-xs uppercase tracking-widest text-white/40">Años de edad</span>
              </div>
              <div className="bg-white text-black p-8 rounded-3xl aspect-square flex flex-col justify-center items-center text-center">
                <span className="text-4xl font-bold mb-2">100%</span>
                <span className="text-xs uppercase tracking-widest opacity-60">Compromiso</span>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-graphite p-8 rounded-3xl aspect-square flex flex-col justify-center items-center text-center">
                <span className="text-4xl font-bold mb-2">CR</span>
                <span className="text-xs uppercase tracking-widest text-white/40">Ubicación</span>
              </div>
              <div className="glass-premium p-8 rounded-3xl aspect-square flex flex-col justify-center items-center text-center">
                <span className="text-4xl font-bold mb-2">+10</span>
                <span className="text-xs uppercase tracking-widest text-white/40">Proyectos</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
