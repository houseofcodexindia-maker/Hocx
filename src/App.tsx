import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { VideoSection } from './components/VideoSection';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <VideoSection />
        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}