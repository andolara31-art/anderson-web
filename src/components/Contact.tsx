import React, { useState } from 'react';
import {
  ArrowUpRight,
  Building2,
  Github,
  Mail,
  MessageSquare,
  Send,
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import BatmanPeek from './BatmanPeek';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(
    'idle',
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '63d09dec-85b0-4fcb-bf6f-480e8d6909d4',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const channels = [
    {
      label: 'Correo profesional',
      value: 'anderson@nuvroenginer.site',
      href: 'mailto:anderson@nuvroenginer.site',
      icon: <Mail size={20} aria-hidden="true" />,
      tone: '#FFC83D',
    },
    {
      label: 'GitHub',
      value: 'github.com/andolara31-art',
      href: 'https://github.com/andolara31-art',
      icon: <Github size={20} aria-hidden="true" />,
      tone: '#5EDBB0',
    },
    {
      label: 'WhatsApp directo',
      value: '+506 7175 7171',
      href: 'https://wa.me/50671757171',
      icon: <MessageSquare size={20} aria-hidden="true" />,
      tone: '#2046F0',
    },
    {
      label: 'Empresa fundada',
      value: 'NUVRO ENGINEER',
      href: 'https://www.nuvroenginer.site',
      icon: <Building2 size={20} aria-hidden="true" />,
      tone: '#FF5A4E',
    },
  ];

  return (
    <section
      id="contact"
      className="bg-paper-grain py-20 md:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Channels */}
          <div className="lg:col-span-6 min-w-0">
            <ScrollReveal>
              <p className="nuvro-kicker text-[#2046F0] mb-4">Contacto</p>
              <h2 className="font-display-nuvro text-[clamp(2.8rem,6vw,5rem)] text-[#121212] mb-5">
                ¿CONSTRUIMOS ALGO{' '}
                <span className="text-[#2046F0]">INTERESANTE?</span>
              </h2>
              <p className="text-base sm:text-lg text-[#2C2C28] leading-relaxed max-w-lg mb-8">
                Si tenés una idea, un proyecto o una oportunidad de
                colaboración, conversemos.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {channels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      channel.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="comic-panel-light p-5 flex flex-col justify-between gap-4 group"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="w-10 h-10 border-2 border-[#121212] flex items-center justify-center"
                        style={{
                          backgroundColor: channel.tone,
                          color: channel.tone === '#2046F0' ? '#FFFFFF' : '#121212',
                        }}
                      >
                        {channel.icon}
                      </span>
                      <ArrowUpRight
                        size={18}
                        className="text-[#4A4A46] group-hover:text-[#2046F0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#4A4A46] mb-1">
                        {channel.label}
                      </div>
                      <div className="font-bold text-sm sm:text-base text-[#121212] break-all">
                        {channel.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Working Web3Forms Form */}
          <div className="lg:col-span-6 min-w-0">
            <ScrollReveal delay={0.1}>
              <div className="relative comic-panel-light bg-[#FFFFFF] p-6 sm:p-8">
                <BatmanPeek
                  edge="top-right"
                  tone="dark"
                  lines={['Directo a Anderson', 'WhatsApp o correo']}
                  delay={0.15}
                />
                <div className="flex items-center justify-between gap-4 pb-4 mb-6 border-b-3 border-[#121212]">
                  <h3 className="font-display-nuvro text-3xl text-[#121212]">
                    Enviame un mensaje
                  </h3>
                  <span className="font-mono text-xs font-bold text-[#2046F0]">
                    Respuesta directa
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs font-bold uppercase tracking-wider text-[#121212] mb-2"
                    >
                      Nombre
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full min-h-[46px] px-4 py-2.5 bg-[#F7F7F4] text-[#121212] border-3 border-[#121212] placeholder-[#4A4A46]/60 focus:bg-[#FFFFFF]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs font-bold uppercase tracking-wider text-[#121212] mb-2"
                    >
                      Correo electrónico
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@correo.com"
                      className="w-full min-h-[46px] px-4 py-2.5 bg-[#F7F7F4] text-[#121212] border-3 border-[#121212] placeholder-[#4A4A46]/60 focus:bg-[#FFFFFF]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block font-mono text-xs font-bold uppercase tracking-wider text-[#121212] mb-2"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Contame sobre tu proyecto, rol o idea..."
                      className="w-full px-4 py-3 bg-[#F7F7F4] text-[#121212] border-3 border-[#121212] placeholder-[#4A4A46]/60 focus:bg-[#FFFFFF] resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="brand-btn brand-btn-yellow w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Enviando mensaje...' : 'Enviar mensaje'}
                    {!isSubmitting && <Send size={17} aria-hidden="true" />}
                  </button>

                  {submitStatus === 'success' && (
                    <p
                      role="status"
                      className="p-3 bg-[#5EDBB0] text-[#121212] border-2 border-[#121212] font-mono text-xs font-bold text-center"
                    >
                      Mensaje enviado correctamente. Te responderé pronto.
                    </p>
                  )}

                  {submitStatus === 'error' && (
                    <p
                      role="status"
                      className="p-3 bg-[#FF5A4E] text-[#121212] border-2 border-[#121212] font-mono text-xs font-bold text-center"
                    >
                      No se pudo enviar el formulario. Podés escribirme directo
                      por WhatsApp o correo.
                    </p>
                  )}
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
