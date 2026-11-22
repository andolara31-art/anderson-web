import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import PixelCrew from './PixelCrew';

const NAV_LINKS = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Certificaciones', href: '#certifications' },
  { label: 'Contacto', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#121212] border-b-4 border-[#090B10] text-[#F7F7F4]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-[#FFC83D] focus:text-[#121212] focus:px-4 focus:py-2 focus:font-bold focus:border-2 focus:border-[#121212]"
      >
        Saltar al contenido
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-[72px] flex items-center justify-between gap-6">
        {/* Zone 1: Brand wordmark + subtle animated pixel mark */}
        <a
          href="#home"
          className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 group"
          aria-label="ANDERSON.AL, ir al inicio"
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
            ANDERSON<span className="text-[#2046F0] group-hover:text-[#F7F7F4]">.AL</span>
          </span>
        </a>

        {/* Zone 2: Clean single-line nav links */}
        <nav
          aria-label="Navegación principal"
          className="hidden lg:flex items-center gap-6"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 text-sm font-medium text-[#D6D8DF] hover:text-[#FFC83D] transition-colors py-1 border-b-2 border-transparent hover:border-[#2046F0]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex brand-btn brand-btn-yellow !min-h-[40px] !py-1.5 !px-4 !text-sm"
          >
            Hablemos
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="lg:hidden inline-flex items-center justify-center gap-2 min-h-[44px] min-w-[44px] px-3.5 bg-[#F7F7F4] text-[#121212] border-3 border-[#121212] shadow-[4px_4px_0_#FFC83D] text-sm font-bold cursor-pointer"
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            <span className="text-xs sm:text-sm">Menú</span>
          </button>
        </div>
      </div>

      {/* PixelCrew peeking from header edge on both mobile and desktop when menu closed */}
      {!menuOpen && <PixelCrew />}

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#ECECE8] text-[#121212] border-t-4 border-[#121212] border-b-4 shadow-[0_12px_30px_rgba(0,0,0,0.45)]"
        >
          <nav
            aria-label="Navegación móvil"
            className="max-w-7xl mx-auto px-4 py-4 flex flex-col divide-y divide-[#121212]/15"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="min-h-[46px] flex items-center justify-between py-2.5 text-base font-semibold text-[#121212] hover:text-[#2046F0]"
              >
                <span>{link.label}</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="brand-btn brand-btn-yellow w-full"
              >
                Hablemos
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
