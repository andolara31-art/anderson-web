import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function About() {
  const stats = [
    { value: '+10', label: 'Proyectos entregados' },
    { value: '3', label: 'Productos en producción' },
    { value: 'CR', label: 'Base de operaciones' },
    { value: '∞', label: 'Obsesión por el detalle' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Construyendo <br />
              <span className="text-white/40">herramientas.</span>
            </h2>
            <div className="w-20 h-1 bg-white mb-8" />
            
            <div className="space-y-6 text-lg text-white/50 leading-relaxed font-light">
              <p>
                Soy Anderson Agüero Lara, desarrollador web enfocado en la creación de productos digitales y experiencias interactivas.
              </p>
              <p>
                Mi enfoque no es solo escribir código, sino construir herramientas que resuelven problemas reales. Me especializo en transformar ideas complejas en interfaces limpias, rápidas y profesionales.
              </p>
              <p>
                Además de mi trabajo independiente, soy el fundador de Nuvro Engineer, donde lidero el desarrollo de soluciones digitales para negocios.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div 
                  className="rounded-2xl p-7 text-center flex flex-col justify-center items-center aspect-square"
                  style={{ 
                    background: 'rgba(255,255,255,0.03)', 
                    border: '1px solid rgba(255,255,255,0.06)' 
                  }}
                >
                  <span 
                    className="text-[36px] font-[800] tracking-[-1px] mb-2 leading-none"
                    style={{
                      background: 'linear-gradient(180deg, #ffffff, rgba(255,255,255,0.6))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[11px] text-[rgba(255,255,255,0.4)] tracking-[1px] uppercase font-medium">
                    {stat.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
