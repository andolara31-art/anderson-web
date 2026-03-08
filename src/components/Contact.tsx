import React from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Github, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const contacts = [
    {
      name: 'WhatsApp',
      value: '+506 71757171',
      href: 'https://wa.me/50671757171',
      icon: <MessageSquare size={24} />
    },
    {
      name: 'Email',
      value: 'anderson@nuvroenginer.site',
      href: 'mailto:anderson@nuvroenginer.site',
      icon: <Mail size={24} />
    },
    {
      name: 'GitHub',
      value: '@andersonaguero',
      href: 'https://github.com/andolara31-art',
      icon: <Github size={24} />
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
              Hablemos de tu <br />
              <span className="text-white/40">próximo proyecto.</span>
            </h2>
            <p className="text-xl text-white/60 font-light mb-12 max-w-md leading-relaxed">
              ¿Tienes una idea en mente? Estoy listo para ayudarte a llevarla al siguiente nivel con un diseño y desarrollo de clase mundial.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white/40">
                <span className="w-12 h-[1px] bg-white/20" />
                <span className="text-xs font-bold uppercase tracking-widest">Disponible ahora</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contacts.map((contact, i) => (
              <motion.a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group glass-premium p-8 rounded-3xl hover:bg-white text-black transition-all duration-500 flex flex-col justify-between aspect-square ${
                  i === 0 ? 'sm:col-span-2 sm:aspect-auto sm:h-48' : ''
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="text-white group-hover:text-black transition-colors">
                    {contact.icon}
                  </div>
                  <ArrowUpRight size={20} className="text-white/20 group-hover:text-black/40 transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-black/40 mb-1 transition-colors">
                    {contact.name}
                  </p>
                  <p className="text-xl md:text-2xl font-medium text-white group-hover:text-black transition-colors break-all">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
