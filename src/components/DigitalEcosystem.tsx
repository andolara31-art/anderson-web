import React from 'react';
import { motion } from 'motion/react';
import { Bot, Sparkles, Gamepad2, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function DigitalEcosystem() {
  return (
    <section id="ecosystem" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Automatización <span className="text-white/40">&amp; Creatividad Digital</span>
          </motion.h2>
          <p className="text-white/40 max-w-2xl text-lg">
            Soluciones avanzadas para optimizar tu operación y elevar el impacto visual de tu marca.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Automatización para Negocios */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 glass-premium p-8 md:p-12 rounded-[40px] flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
                <Bot size={14} className="text-white/60" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Eficiencia Operativa</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight">Sistemas de Automatización</h3>
              <p className="text-white/50 mb-8 leading-relaxed">
                Implemento flujos de trabajo inteligentes que transforman la manera en que tu negocio interactúa con sus clientes y gestiona sus procesos internos.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Captura estratégica y calificación de prospectos',
                  'Flujos de contacto y seguimiento automatizado',
                  'Integración de formularios con CRM y bases de datos',
                  'Optimización de procesos de atención al cliente'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                    <CheckCircle2 size={16} className="text-white/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-64 aspect-square glass-premium rounded-3xl overflow-hidden relative group">
              <img 
                src="https://picsum.photos/seed/business-automation/600/600" 
                alt="Automatización para negocios" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <Bot size={32} className="text-white" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Creatividad Publicitaria con IA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 glass-premium p-8 md:p-10 rounded-[40px] flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
                <Sparkles size={14} className="text-white/60" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Impacto Visual</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Creatividad Publicitaria</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                Producción de piezas visuales promocionales y contenido de marca de alta gama, potenciado por herramientas de IA para campañas publicitarias y redes sociales.
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group">
              <img 
                src="https://picsum.photos/seed/ai-advertising/600/400" 
                alt="Creatividad publicitaria con IA" 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>

          {/* Proyecto Experimental */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-12 glass-premium p-8 md:p-12 rounded-[40px] flex flex-col md:flex-row items-center gap-12"
          >
            <div className="w-full md:w-1/3 aspect-video md:aspect-square glass-premium rounded-3xl overflow-hidden relative group">
              <img 
                src="https://picsum.photos/seed/interactive-demo/800/800" 
                alt="Proyecto experimental interactivo" 
                className="w-full h-full object-cover grayscale opacity-20 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Gamepad2 size={48} className="text-white/20 group-hover:text-white/60 transition-colors duration-500" />
              </div>
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
                <Gamepad2 size={14} className="text-white/60" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Laboratorio Técnico</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight">Proyectos Experimentales</h3>
              <p className="text-white/50 mb-8 leading-relaxed max-w-xl">
                Demos interactivas y exploraciones creativas que demuestran mi capacidad para desarrollar experiencias web dinámicas y lúdicas más allá de lo convencional.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-white/70 transition-colors">
                Explorar demo interactiva
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
