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
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 
             flex items-center gap-2
             bg-green-500 text-white 
             rounded-full shadow-lg 
             transition hover:scale-105
             px-4 py-2 sm:px-5 sm:py-3"
>
  {/* WhatsApp Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5 sm:w-6 sm:h-6"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12c0 2.12.62 4.09 1.69 5.75L2 22l4.39-1.62A9.93 9.93 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.86 0-3.59-.57-5.04-1.55l-.36-.23-2.6.96.93-2.54-.24-.39A7.94 7.94 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.46-5.54c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.38.1-.5.1-.1.24-.26.36-.38.12-.12.16-.2.24-.34.08-.14.04-.26-.02-.38-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42h-.46c-.16 0-.38.06-.58.28-.2.22-.76.74-.76 1.8s.78 2.08.9 2.22c.12.14 1.54 2.34 3.74 3.28.52.22.92.34 1.24.44.52.16.98.14 1.34.08.42-.06 1.3-.52 1.48-1.02.18-.5.18-.92.12-1.02-.06-.1-.22-.16-.46-.28z"/>
  </svg>
  <span className="text-sm sm:text-base font-medium">Chat on WhatsApp</span>
</a>


      <Footer />
    </main>
  );
}
