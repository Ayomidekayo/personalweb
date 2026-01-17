'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // ✅ Close mobile menu when scrolling
      if (open) {
        setOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [open]); // include `open` in dependency array

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled
          ? 'rgba(255, 255, 255, 0.75)'
          : 'rgba(255, 255, 255, 0)',
        boxShadow: scrolled
          ? '0 10px 30px rgba(0,0,0,0.06)'
          : '0 0 0 rgba(0,0,0,0)',
        backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link
          href="https://wa.me/2348153753579"
          className="text-lg font-semibold text-indigo-600"
        >
          Mary<span className="text-indigo-600">.</span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="relative hover:text-indigo-600 transition"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-indigo-600 transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition"
          >
            Hire Me
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-300 text-slate-700"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden bg-white/90 backdrop-blur-xl border-t border-slate-200"
        >
          <ul className="flex flex-col px-6 py-6 space-y-4 text-slate-700">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-base font-medium hover:text-indigo-600 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <a
              href="#contact"
              className="mt-4 inline-flex justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700 transition"
            >
              Hire Me
            </a>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
