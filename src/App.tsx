import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import DigitalEcosystem from './components/DigitalEcosystem';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <DigitalEcosystem />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
