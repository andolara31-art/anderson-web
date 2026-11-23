import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROFILE_LINKS } from '../data/profile';

export default function Footer() {
  const { lang } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--footer-text)] border-t-4 border-[var(--footer-border)] py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-base font-bold tracking-tight">
            ANDERSON<span className="text-[#2046F0]">.AL</span>
          </span>
          <span aria-hidden="true" className="text-[var(--footer-muted)]">
            ·
          </span>
          <span className="text-xs text-[var(--footer-muted)]">
            Costa Rica (UTC-6)
          </span>
        </div>

        <p className="text-xs text-[var(--footer-muted)] text-center">
          &copy; {currentYear} Anderson Agüero Lara ·{' '}
          {lang === 'es'
            ? 'The Engineer Behind NUVRO'
            : 'Full-Stack Software Developer'}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-mono font-bold uppercase tracking-wider">
          <a
            href={PROFILE_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--footer-accent)] hover:text-[#2046F0] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PROFILE_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--footer-link)] hover:text-[var(--footer-accent)] transition-colors"
          >
            GitHub
          </a>
          <a
            href={PROFILE_LINKS.nuvroSite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--footer-link)] hover:text-[var(--footer-accent)] transition-colors"
          >
            NUVRO ENGINEER
          </a>
          <a
            href={PROFILE_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--footer-link)] hover:text-[var(--footer-accent)] transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
