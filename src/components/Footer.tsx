import React from 'react';

export default function Footer() {
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
          <span className="text-xs text-[#AEB5C4]">
            Costa Rica
          </span>
        </div>

        <p className="text-xs text-[#AEB5C4] text-center">
          &copy; {currentYear} Anderson Agüero Lara · The Engineer Behind NUVRO
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-mono font-bold uppercase tracking-wider">
          <a
            href="https://www.nuvroenginer.site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFC83D] hover:text-[#FFFFFF] transition-colors"
          >
            NUVRO ENGINEER
          </a>
          <a
            href="https://github.com/andolara31-art"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D6D8DF] hover:text-[#FFC83D] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://wa.me/50671757171"
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
