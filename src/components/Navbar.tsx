import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Globe, Menu, Moon, Sun, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const { theme, setTheme, toggleTheme } = useTheme();

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
    <header className="sticky top-0 z-50 bg-[var(--nav-bg)] border-b-4 border-[var(--nav-border)] text-[var(--nav-text)] transition-colors duration-200">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-[#FFC83D] focus:text-[#121212] focus:px-4 focus:py-2 focus:font-bold focus:border-2 focus:border-[#121212]"
      >
        {lang === 'es' ? 'Saltar al contenido' : 'Skip to content'}
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-[72px] flex items-center justify-between gap-3">
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
            className="grid grid-cols-2 gap-[2px] p-1 bg-[var(--nav-pill-bg)] border-2 border-[#2046F0] group-hover:border-[#FFC83D] transition-colors"
          >
            <span className="w-2 h-2 bg-[#2046F0] group-hover:bg-[#FFC83D] transition-colors" />
            <span className="w-2 h-2 bg-[#FFC83D] group-hover:bg-[#5EDBB0] transition-colors" />
            <span className="w-2 h-2 bg-[var(--nav-text)]" />
            <span className="w-2 h-2 bg-[#2046F0] transition-transform duration-300 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
          </span>
          <span className="font-mono text-base sm:text-lg font-bold tracking-tight text-[var(--nav-text)] group-hover:text-[var(--footer-accent)] transition-colors">
            ANDERSON
            <span className="text-[#2046F0]">.AL</span>
          </span>
        </a>

        {/* Zone 2: Clean single-line nav links */}
        <nav
          aria-label={
            lang === 'es' ? 'Navegación principal' : 'Primary navigation'
          }
          className="hidden lg:flex items-center gap-5 xl:gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="whitespace-nowrap shrink-0 text-sm font-medium text-[var(--nav-link)] hover:text-[var(--footer-accent)] transition-colors py-1 border-b-2 border-transparent hover:border-[#2046F0]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Theme Switcher + Language Switcher ES/EN + Primary Action + Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Desktop / Tablet Segmented Theme Switcher */}
          <div
            role="group"
            aria-label={
              lang === 'es' ? 'Selector de tema visual' : 'Visual theme switcher'
            }
            className="hidden sm:inline-flex items-center border-2 border-[var(--nav-pill-border)] bg-[var(--nav-pill-bg)] p-0.5"
          >
            <button
              type="button"
              onClick={() => setTheme('ink-blue')}
              aria-pressed={theme === 'ink-blue'}
              title={
                lang === 'es'
                  ? 'Tema oscuro Ink / Blue'
                  : 'Ink / Blue dark theme'
              }
              className={`inline-flex items-center gap-1 px-2 py-1 min-h-[32px] font-mono text-[11px] font-bold transition-colors cursor-pointer whitespace-nowrap ${
                theme === 'ink-blue'
                  ? 'bg-[#2046F0] text-[#FFFFFF]'
                  : 'text-[var(--nav-link)] hover:text-[var(--footer-accent)]'
              }`}
            >
              <Moon size={12} aria-hidden="true" />
              <span>Ink/Blue</span>
            </button>
            <button
              type="button"
              onClick={() => setTheme('clean-paper')}
              aria-pressed={theme === 'clean-paper'}
              title={
                lang === 'es'
                  ? 'Tema claro Clean Paper'
                  : 'Clean Paper light theme'
              }
              className={`inline-flex items-center gap-1 px-2 py-1 min-h-[32px] font-mono text-[11px] font-bold transition-colors cursor-pointer whitespace-nowrap ${
                theme === 'clean-paper'
                  ? 'bg-[#FFC83D] text-[#121212]'
                  : 'text-[var(--nav-link)] hover:text-[var(--footer-accent)]'
              }`}
            >
              <Sun size={12} aria-hidden="true" />
              <span>Paper</span>
            </button>
          </div>

          {/* Compact Mobile Quick Theme Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === 'ink-blue'
                ? lang === 'es'
                  ? 'Cambiar a tema claro Clean Paper'
                  : 'Switch to Clean Paper light theme'
                : lang === 'es'
                  ? 'Cambiar a tema oscuro Ink / Blue'
                  : 'Switch to Ink / Blue dark theme'
            }
            aria-pressed={theme === 'clean-paper'}
            className="sm:hidden inline-flex items-center justify-center min-h-[38px] min-w-[38px] border-2 border-[var(--nav-pill-border)] bg-[var(--nav-pill-bg)] text-[var(--nav-text)] hover:border-[#2046F0] transition-colors cursor-pointer"
          >
            {theme === 'ink-blue' ? (
              <Sun size={16} aria-hidden="true" className="text-[#FFC83D]" />
            ) : (
              <Moon size={16} aria-hidden="true" className="text-[#2046F0]" />
            )}
          </button>

          {/* Language Switcher ES / EN */}
          <div
            role="group"
            aria-label={
              lang === 'es' ? 'Selector de idioma' : 'Language switcher'
            }
            className="inline-flex items-center border-2 border-[var(--nav-pill-border)] bg-[var(--nav-pill-bg)] p-0.5"
          >
            <span
              aria-hidden="true"
              className="hidden md:inline-flex items-center px-1.5 text-[var(--footer-muted)]"
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
                  : 'text-[var(--nav-link)] hover:text-[var(--footer-accent)]'
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
                  : 'text-[var(--nav-link)] hover:text-[var(--footer-accent)]'
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleAnchorClick(e, '#contact')}
            className="hidden sm:inline-flex brand-btn brand-btn-yellow !min-h-[40px] !py-1.5 !px-3.5 !text-sm"
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
            className="lg:hidden inline-flex items-center justify-center gap-2 min-h-[40px] min-w-[40px] px-3 bg-[var(--card-surface)] text-[var(--paper-text)] border-3 border-[var(--card-border)] shadow-[3px_3px_0_#FFC83D] text-sm font-bold cursor-pointer"
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
          className="lg:hidden bg-[var(--nav-drawer-bg)] text-[var(--nav-drawer-text)] border-t-4 border-[var(--card-border)] border-b-4 shadow-[0_12px_30px_rgba(0,0,0,0.28)]"
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
                className="min-h-[46px] flex items-center justify-between py-2.5 text-base font-semibold text-[var(--nav-drawer-text)] hover:text-[#2046F0]"
              >
                <span>{link.label}</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            ))}

            {/* Theme Selector inside Mobile Drawer */}
            <div className="py-3 flex items-center justify-between gap-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--paper-muted)]">
                {lang === 'es' ? 'Tema visual' : 'Theme'}
              </span>
              <div className="inline-flex border-2 border-[#121212] bg-[#FFFFFF] p-0.5">
                <button
                  type="button"
                  onClick={() => setTheme('ink-blue')}
                  aria-pressed={theme === 'ink-blue'}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 font-mono text-xs font-bold cursor-pointer ${
                    theme === 'ink-blue'
                      ? 'bg-[#121212] text-[#FFC83D]'
                      : 'text-[#121212]'
                  }`}
                >
                  <Moon size={13} aria-hidden="true" />
                  Ink / Blue
                </button>
                <button
                  type="button"
                  onClick={() => setTheme('clean-paper')}
                  aria-pressed={theme === 'clean-paper'}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 font-mono text-xs font-bold cursor-pointer ${
                    theme === 'clean-paper'
                      ? 'bg-[#FFC83D] text-[#121212]'
                      : 'text-[#121212]'
                  }`}
                >
                  <Sun size={13} aria-hidden="true" />
                  Clean Paper
                </button>
              </div>
            </div>

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
