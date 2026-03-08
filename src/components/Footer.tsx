import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm font-bold tracking-tighter">
          ANDERSON<span className="text-white/50">.AL</span>
        </div>
        
        <div className="text-white/40 text-xs font-medium uppercase tracking-widest">
          &copy; {currentYear} Anderson Agüero Lara. Todos los derechos reservados.
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com/andolara31-art" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">GitHub</a>
          <a href="https://wa.me/50671757171" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
