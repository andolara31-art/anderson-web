import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function NuvroBridge() {
  return (
    <section className="py-24 px-6 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            También lidero una <span className="text-white/40">firma digital.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 font-light mb-10 leading-relaxed max-w-2xl mx-auto">
            Nuvro Engineer es el espacio donde construyo soluciones tecnológicas complejas y escalables para negocios que buscan transformar su operación.
          </p>
          <a 
            href="https://nuvroenginer.site" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform group"
          >
            Conocer Nuvro Engineer
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
