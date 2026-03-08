import React from 'react';
import { motion } from 'motion/react';
import { Layout, Globe, Zap, Rocket } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Landing Pages',
      description: 'Páginas de aterrizaje diseñadas para convertir visitantes en clientes. Enfoque en velocidad, SEO y diseño premium.',
      icon: <Layout size={32} />,
      color: 'from-white/10 to-white/5'
    },
    {
      title: 'Webs para Negocios',
      description: 'Presencia digital profesional para empresas que buscan destacar. Estructuras claras y navegación intuitiva.',
      icon: <Globe size={32} />,
      color: 'from-white/10 to-white/5'
    },
    {
      title: 'Mini SaaS / MVPs',
      description: 'Desarrollo de productos mínimos viables funcionales para validar ideas de negocio rápidamente en el mercado.',
      icon: <Zap size={32} />,
      color: 'from-white/10 to-white/5'
    },
    {
      title: 'Deploy & Publicación',
      description: 'Configuración de dominios, hosting y despliegue continuo para que tu proyecto esté siempre online y seguro.',
      icon: <Rocket size={32} />,
      color: 'from-white/10 to-white/5'
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Servicios <span className="text-white/40">Freelance</span>
          </motion.h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            Soluciones digitales a medida con un enfoque en la calidad visual y la funcionalidad técnica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass-premium p-8 rounded-3xl hover:bg-white/10 transition-all duration-500"
            >
              <div className="mb-6 text-white group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
