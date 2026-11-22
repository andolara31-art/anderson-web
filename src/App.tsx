import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import BuildLab from './components/BuildLab';
import Stack from './components/Stack';
import Certifications from './components/Certifications';
import NuvroBridge from './components/NuvroBridge';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main id="main-content" className="flex-1">
          <Hero />
          <About />
          <Projects />
          <BuildLab />
          <Stack />
          <Certifications />
          <NuvroBridge />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
