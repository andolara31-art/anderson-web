import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Stack from './components/Stack';
import NuvroBridge from './components/NuvroBridge';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import FilmGrain from './components/FilmGrain';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-white selection:text-black">
      <FilmGrain />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Stack />
        <NuvroBridge />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
