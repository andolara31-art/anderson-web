import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Github, ArrowUpRight, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '63d09dec-85b0-4fcb-bf6f-480e8d6909d4',
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contacts = [
    {
      name: 'Email',
      value: 'anderson@nuvroenginer.site',
      href: 'mailto:anderson@nuvroenginer.site',
      icon: <Mail size={24} />
    },
    {
      name: 'WhatsApp',
      value: '+506 71757171',
      href: 'https://wa.me/50671757171',
      icon: <MessageSquare size={24} />
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
            <span className="text-[11px] uppercase tracking-[2px] font-bold mb-4 block" style={{ color: 'rgba(0, 212, 255, 0.35)' }}>
              próximo proyecto
            </span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
              ¿Tenés un proyecto <br />
              <span className="text-white/40">en mente?</span>
            </h2>
            <p className="text-xl text-white/50 font-light mb-12 max-w-md leading-relaxed">
              Hablemos. Estoy abierto a discutir nuevas ideas, colaboraciones o proyectos que requieran ejecución técnica y criterio de producto.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
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
                  className={`group glass-premium p-6 rounded-3xl hover:bg-white text-black transition-all duration-500 flex flex-col justify-between aspect-square ${
                    i === 0 ? 'sm:col-span-2 sm:aspect-auto sm:h-40' : ''
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
                    <p className="text-lg md:text-xl font-medium text-white group-hover:text-black transition-colors break-all">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-premium p-8 md:p-10 rounded-[40px]"
          >
            <h3 className="text-2xl font-bold mb-8">Enviame un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/40 transition-colors resize-none"
                  placeholder="Contame sobre tu proyecto..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full justify-center group disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 px-8 py-4 rounded-full font-medium text-black transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #ffffff, #e0e0e0)' }}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
              </button>
              
              {submitStatus === 'success' && (
                <p className="text-green-400 text-sm text-center mt-4">
                  ¡Mensaje enviado correctamente! Me pondré en contacto pronto.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm text-center mt-4">
                  Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
