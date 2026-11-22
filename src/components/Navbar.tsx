import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  const navLinks =
    lang === 'es'
      ? [
          { label: 'Inicio', href: '#home' },
          { label: 'Sobre mí', href: '#about' },
          { label: 'Proyectos', href: '#projects' },
          { label: 'Stack', href: '#stack' },
          { label: 'Certificaciones', href: '#certifications' },
          { label: 'Contacto', href: '#contact' },
        ]
      : [
          { label: 'Home', href: '#home' },
          { label: 'About', href: '#about' },
          { label: 'Projects', href: '#projects' },
          { label: 'Stack', href: '#stack' },
          { label: 'Certifications', href: '#certifications' },
          { label: 'Contact', href: '#contact' },
        ];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleAnchorClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith('#')) return;
    const targetId = href.slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;

    event.preventDefault();
    setMenuOpen(false);

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    window.history.replaceState(null, '', href);
    target.scrollIntoView({
      behavior: prefersReduced ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#121212] border-b-4 border-[#090B10] text-[#F7F7F4]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-[#FFC83D] focus:text-[#121212] focus:px-4 focus:py-2 focus:font-bold focus:border-2 focus:border-[#121212]"
      >
        {lang === 'es' ? 'Saltar al contenido' : 'Skip to content'}
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-[72px] flex items-center justify-between gap-4">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#home"
          onClick={(e) => handleAnchorClick(e, '#home')}
          className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 group"
          aria-label={
            lang === 'es'
              ? 'ANDERSON.AL, ir al inicio'
              : 'ANDERSON.AL, go to top'
          }
        >
          <span
            aria-hidden="true"
            className="grid grid-cols-2 gap-[2px] p-1 bg-[#1B202C] border-2 border-[#2046F0] group-hover:border-[#FFC83D] transition-colors"
          >
            <span className="w-2 h-2 bg-[#2046F0] group-hover:bg-[#FFC83D] transition-colors" />
            <span className="w-2 h-2 bg-[#FFC83D] group-hover:bg-[#5EDBB0] transition-colors" />
            <span className="w-2 h-2 bg-[#F7F7F4]" />
            <span className="w-2 h-2 bg-[#2046F0] transition-transform duration-300 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
          </span>
          <span className="font-mono text-base sm:text-lg font-bold tracking-tight text-[#F7F7F4] group-hover:text-[#FFC83D] transition-colors">
            ANDERSON
            <span className="text-[#2046F0] group-hover:text-[#F7F7F4]">.AL</span>
          </span>
        </a>

        {/* Zone 2: Clean single-line nav links */}
        <nav
          aria-label={
            lang === 'es' ? 'Navegación principal' : 'Primary navigation'
          }
          className="hidden lg:flex items-center gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="whitespace-nowrap shrink-0 text-sm font-medium text-[#D6D8DF] hover:text-[#FFC83D] transition-colors py-1 border-b-2 border-transparent hover:border-[#2046F0]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language Switcher ES/EN + Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <div
            role="group"
            aria-label={
              lang === 'es' ? 'Selector de idioma' : 'Language switcher'
            }
            className="inline-flex items-center border-2 border-white/20 bg-[#1B202C] p-0.5"
          >
            <span
              aria-hidden="true"
              className="hidden sm:inline-flex items-center px-1.5 text-[#9AA2B4]"
            >
              <Globe size={13} />
            </span>
            <button
              type="button"
              onClick={() => setLang('es')}
              aria-pressed={lang === 'es'}
              className={`px-2 py-1 min-h-[32px] font-mono text-xs font-bold transition-colors cursor-pointer ${
                lang === 'es'
                  ? 'bg-[#FFC83D] text-[#121212]'
                  : 'text-[#D6D8DF] hover:text-[#FFC83D]'
              }`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              className={`px-2 py-1 min-h-[32px] font-mono text-xs font-bold transition-colors cursor-pointer ${
                lang === 'en'
                  ? 'bg-[#FFC83D] text-[#121212]'
                  : 'text-[#D6D8DF] hover:text-[#FFC83D]'
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleAnchorClick(e, '#contact')}
            className="hidden sm:inline-flex brand-btn brand-btn-yellow !min-h-[40px] !py-1.5 !px-4 !text-sm"
          >
            {lang === 'es' ? 'Hablemos' : "Let's talk"}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={
              menuOpen
                ? lang === 'es'
                  ? 'Cerrar menú'
                  : 'Close menu'
                : lang === 'es'
                  ? 'Abrir menú'
                  : 'Open menu'
            }
            className="lg:hidden inline-flex items-center justify-center gap-2 min-h-[42px] min-w-[42px] px-3 bg-[#F7F7F4] text-[#121212] border-3 border-[#121212] shadow-[3px_3px_0_#FFC83D] text-sm font-bold cursor-pointer"
          >
            {menuOpen ? (
              <X size={19} aria-hidden="true" />
            ) : (
              <Menu size={19} aria-hidden="true" />
            )}
            <span className="text-xs sm:text-sm">
              {lang === 'es' ? 'Menú' : 'Menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#ECECE8] text-[#121212] border-t-4 border-[#121212] border-b-4 shadow-[0_12px_30px_rgba(0,0,0,0.45)]"
        >
          <nav
            aria-label={
              lang === 'es' ? 'Navegación móvil' : 'Mobile navigation'
            }
            className="max-w-7xl mx-auto px-4 py-4 flex flex-col divide-y divide-[#121212]/15"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="min-h-[46px] flex items-center justify-between py-2.5 text-base font-semibold text-[#121212] hover:text-[#2046F0]"
              >
                <span>{link.label}</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={(e) => handleAnchorClick(e, '#contact')}
                className="brand-btn brand-btn-yellow w-full"
              >
                {lang === 'es' ? 'Hablemos' : "Let's talk"}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
