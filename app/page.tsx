'use client';

import React, { JSX, useState } from 'react';
import ContactForm from './components/Contact';
import About from './components/About';
import WorkGallery from './components/WorkGallery';
import Footer from './components/Footer';
import ExperienceAndSkills from './components/ExperienceAndSkills';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export default function Page(): JSX.Element {
  const [showTop, setShowTop] = useState(false);
  const [showDown, setShowDown] = useState(true);
  const [hideFloating, setHideFloating] = useState(false);

  return (
    <main className="bg-slate-50 text-slate-800 overflow-x-hidden">
      <Navbar />
      <Header />
      <About />
      <ExperienceAndSkills />
      <WorkGallery />

      <section className="bg-slate-100 dark:bg-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-10">Contact Me</h2>
          <ContactForm />
        </div>
      </section>

      {/* Scroll Down */}
      {showDown && !hideFloating && (
        <button
          onClick={() =>
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="fixed top-[85vh] left-1/2 -translate-x-1/2 z-40
                     w-10 h-10 rounded-full bg-white/70 dark:bg-black/60
                     text-gray-900 dark:text-white backdrop-blur-md
                     flex items-center justify-center shadow-md
                     animate-bounce hover:scale-110 transition"
          aria-label="Scroll down"
        >
          <FiArrowDown />
        </button>
      )}

      {/* Back to Top */}
      {showTop && !hideFloating && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 z-40
                     w-12 h-12 rounded-full bg-black/80 dark:bg-white/80
                     text-white dark:text-black backdrop-blur-md
                     flex items-center justify-center shadow-lg
                     hover:scale-110 transition-all"
          aria-label="Back to top"
        >
          <FiArrowUp />
        </button>
      )}

      {/* WhatsApp */}
      <a
        href="https://wa.me/2348153753579"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white
                   px-4 py-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        Chat on WhatsApp
      </a>

      <Footer />
    </main>
  );
}
