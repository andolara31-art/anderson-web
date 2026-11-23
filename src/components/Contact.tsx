import React, { useState } from 'react';
import {
  ArrowUpRight,
  Building2,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Send,
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import { PROFILE_LINKS } from '../data/profile';

export default function Contact() {
  const { lang } = useLanguage();
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
      label: lang === 'es' ? 'Correo profesional' : 'Professional Email',
      value: PROFILE_LINKS.email,
      href: `mailto:${PROFILE_LINKS.email}`,
      icon: <Mail size={20} aria-hidden="true" />,
      tone: '#FFC83D',
    },
    {
      label: 'LinkedIn',
      value:
        lang === 'es'
          ? 'Perfil profesional · Anderson Agüero Lara'
          : 'Professional Profile · Anderson Agüero Lara',
      href: PROFILE_LINKS.linkedin,
      icon: <Linkedin size={20} aria-hidden="true" />,
      tone: '#2046F0',
    },
    {
      label: 'GitHub',
      value: 'github.com/andolara31-art',
      href: PROFILE_LINKS.github,
      icon: <Github size={20} aria-hidden="true" />,
      tone: '#5EDBB0',
    },
    {
      label: lang === 'es' ? 'WhatsApp directo' : 'Direct WhatsApp',
      value: PROFILE_LINKS.whatsappDisplay,
      href: PROFILE_LINKS.whatsapp,
      icon: <MessageSquare size={20} aria-hidden="true" />,
      tone: '#FF5A4E',
    },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-paper-grain py-20 md:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Channels */}
          <div className="lg:col-span-6 min-w-0">
            <ScrollReveal>
              <p className="nuvro-kicker text-[var(--card-accent-text)] mb-4">
                {lang === 'es' ? 'Contacto' : 'Contact'}
              </p>
              <h2 className="font-display-nuvro text-[clamp(2.8rem,6vw,5rem)] text-[var(--paper-text)] mb-5">
                {lang === 'es' ? (
                  <>
                    ¿CONSTRUIMOS ALGO{' '}
                    <span className="text-[#2046F0]">INTERESANTE?</span>
                  </>
                ) : (
                  <>
                    LET&apos;S BUILD SOMETHING{' '}
                    <span className="text-[#2046F0]">IMPACTFUL.</span>
                  </>
                )}
              </h2>
              <p className="text-base sm:text-lg text-[var(--paper-soft)] leading-relaxed max-w-lg mb-8">
                {lang === 'es'
                  ? 'Disponible para trabajo remoto full-stack / frontend y proyectos técnicos con clientes. Conversemos por el canal que prefirás.'
                  : 'Available for remote full-stack / frontend roles and technical client engagements. Reach out via your preferred channel.'}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {channels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={
                      channel.href.startsWith('mailto:')
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    className="comic-panel-light p-5 flex flex-col justify-between gap-4 group"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="w-10 h-10 border-2 border-[var(--card-border)] flex items-center justify-center"
                        style={{
                          backgroundColor: channel.tone,
                          color:
                            channel.tone === '#2046F0' ? '#FFFFFF' : '#121212',
                        }}
                      >
                        {channel.icon}
                      </span>
                      <ArrowUpRight
                        size={18}
                        className="text-[var(--paper-muted)] group-hover:text-[var(--card-accent-text)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--paper-muted)] mb-1">
                        {channel.label}
                      </div>
                      <div className="font-bold text-sm sm:text-base text-[var(--paper-text)] break-words">
                        {channel.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-4">
                <a
                  href={PROFILE_LINKS.nuvroSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[var(--paper-text)] hover:text-[var(--card-accent-text)] transition-colors"
                >
                  <Building2 size={15} aria-hidden="true" />
                  <span>
                    {lang === 'es'
                      ? 'Estudio fundado: NUVRO ENGINEER (nuvroenginer.site)'
                      : 'Founded Studio: NUVRO ENGINEER (nuvroenginer.site)'}
                  </span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Working Web3Forms Form */}
          <div className="lg:col-span-6 min-w-0">
            <ScrollReveal delay={0.1}>
              <div className="comic-panel-light p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4 pb-4 mb-6 border-b-3 border-[var(--card-border)]">
                  <h3 className="font-display-nuvro text-3xl text-[var(--paper-text)]">
                    {lang === 'es' ? 'Enviame un mensaje' : 'Send a message'}
                  </h3>
                  <span className="font-mono text-xs font-bold text-[var(--card-accent-text)]">
                    {lang === 'es' ? 'Respuesta directa' : 'Direct reply'}
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs font-bold uppercase tracking-wider text-[var(--paper-text)] mb-2"
                    >
                      {lang === 'es' ? 'Nombre' : 'Name'}
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={lang === 'es' ? 'Tu nombre' : 'Your name'}
                      className="w-full min-h-[46px] px-4 py-2.5 bg-[var(--card-surface)] text-[var(--paper-text)] border-3 border-[var(--card-border)] placeholder-[var(--paper-muted)]/60 focus:bg-[var(--card-bg)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs font-bold uppercase tracking-wider text-[var(--paper-text)] mb-2"
                    >
                      {lang === 'es' ? 'Correo electrónico' : 'Email address'}
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={
                        lang === 'es' ? 'tu@correo.com' : 'you@company.com'
                      }
                      className="w-full min-h-[46px] px-4 py-2.5 bg-[var(--card-surface)] text-[var(--paper-text)] border-3 border-[var(--card-border)] placeholder-[var(--paper-muted)]/60 focus:bg-[var(--card-bg)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block font-mono text-xs font-bold uppercase tracking-wider text-[var(--paper-text)] mb-2"
                    >
                      {lang === 'es' ? 'Mensaje' : 'Message'}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={
                        lang === 'es'
                          ? 'Contame sobre tu equipo, rol remoto o proyecto...'
                          : 'Tell me about your team, remote role, or technical project...'
                      }
                      className="w-full px-4 py-3 bg-[var(--card-surface)] text-[var(--paper-text)] border-3 border-[var(--card-border)] placeholder-[var(--paper-muted)]/60 focus:bg-[var(--card-bg)] resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="brand-btn brand-btn-yellow w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting
                      ? lang === 'es'
                        ? 'Enviando mensaje...'
                        : 'Sending message...'
                      : lang === 'es'
                        ? 'Enviar mensaje'
                        : 'Send message'}
                    {!isSubmitting && <Send size={17} aria-hidden="true" />}
                  </button>

                  {submitStatus === 'success' && (
                    <p
                      role="status"
                      className="p-3 bg-[#5EDBB0] text-[#121212] border-2 border-[#121212] font-mono text-xs font-bold text-center"
                    >
                      {lang === 'es'
                        ? 'Mensaje enviado correctamente. Te responderé pronto.'
                        : 'Message sent successfully. I will reply shortly.'}
                    </p>
                  )}

                  {submitStatus === 'error' && (
                    <p
                      role="status"
                      className="p-3 bg-[#FF5A4E] text-[#121212] border-2 border-[#121212] font-mono text-xs font-bold text-center"
                    >
                      {lang === 'es'
                        ? 'No se pudo enviar el formulario. Podés escribirme directo por WhatsApp o correo.'
                        : 'Could not submit the form. Feel free to reach out via email or LinkedIn.'}
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
