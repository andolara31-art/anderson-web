import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROFILE_LINKS } from '../data/profile';

export default function Footer() {
  const { lang } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121212] text-[#F7F7F4] border-t-4 border-[#090B10] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-base font-bold tracking-tight">
            ANDERSON<span className="text-[#2046F0]">.AL</span>
          </span>
          <span aria-hidden="true" className="text-white/25">
            ·
          </span>
          <span className="text-xs text-[#AEB5C4]">Costa Rica (UTC-6)</span>
        </div>

        <p className="text-xs text-[#AEB5C4] text-center">
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
            className="text-[#FFC83D] hover:text-[#FFFFFF] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PROFILE_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D6D8DF] hover:text-[#FFC83D] transition-colors"
          >
            GitHub
          </a>
          <a
            href={PROFILE_LINKS.nuvroSite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D6D8DF] hover:text-[#FFC83D] transition-colors"
          >
            NUVRO ENGINEER
          </a>
          <a
            href={PROFILE_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D6D8DF] hover:text-[#FFC83D] transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
