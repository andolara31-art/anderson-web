import React, { Suspense, lazy, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const BuildLab = lazy(() => import('./components/BuildLab'));
const Stack = lazy(() => import('./components/Stack'));
const Certifications = lazy(() => import('./components/Certifications'));
const NuvroBridge = lazy(() => import('./components/NuvroBridge'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function SectionPlaceholder({
  id,
  surfaceClass,
  minHeightClass = 'min-h-[360px]',
}: {
  id: string;
  surfaceClass: string;
  minHeightClass?: string;
}) {
  return (
    <section
      id={id}
      aria-hidden="true"
      className={`scroll-mt-20 ${surfaceClass} ${minHeightClass}`}
    />
  );
}

export default function App() {
  useEffect(() => {
    const preloadSections = () => {
      void import('./components/About');
      void import('./components/Projects');
      void import('./components/BuildLab');
      void import('./components/Stack');
      void import('./components/Certifications');
      void import('./components/NuvroBridge');
      void import('./components/Contact');
      void import('./components/Footer');
    };

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(preloadSections, {
        timeout: 1500,
      });
      return () => window.cancelIdleCallback(idleId);
    }

    const timerId = globalThis.setTimeout(preloadSections, 350);
    return () => globalThis.clearTimeout(timerId);
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col">
          {/* Critical Above-the-Fold Shell */}
          <Navbar />
          <main id="main-content" className="flex-1">
            <Hero />

            {/* Code-split Below-the-Fold Sections with Anchor-Preserving Fallbacks */}
            <Suspense
              fallback={
                <SectionPlaceholder id="about" surfaceClass="bg-paper-grain" />
              }
            >
              <About />
            </Suspense>

            <Suspense
              fallback={
                <SectionPlaceholder
                  id="projects"
                  surfaceClass="bg-paper-torn"
                  minHeightClass="min-h-[520px]"
                />
              }
            >
              <Projects />
            </Suspense>

            <Suspense
              fallback={
                <SectionPlaceholder
                  id="build-lab"
                  surfaceClass="bg-lab-canvas"
                  minHeightClass="min-h-[440px]"
                />
              }
            >
              <BuildLab />
            </Suspense>

            <Suspense
              fallback={
                <SectionPlaceholder id="stack" surfaceClass="bg-paper-grain" />
              }
            >
              <Stack />
            </Suspense>

            <Suspense
              fallback={
                <SectionPlaceholder
                  id="certifications"
                  surfaceClass="bg-paper-torn"
                />
              }
            >
              <Certifications />
            </Suspense>

            <Suspense
              fallback={
                <SectionPlaceholder
                  id="nuvro"
                  surfaceClass="bg-[var(--bridge-bg)]"
                />
              }
            >
              <NuvroBridge />
            </Suspense>

            <Suspense
              fallback={
                <SectionPlaceholder id="contact" surfaceClass="bg-paper-grain" />
              }
            >
              <Contact />
            </Suspense>
          </main>

          <Suspense
            fallback={<div className="h-24 bg-[var(--footer-bg)]" />}
          >
            <Footer />
          </Suspense>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
