'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  return (
    <section id="contact" className="relative bg-linear-to-br from-slate-100 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 overflow-hidden">
      {/* Decorative accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-300/20 dark:bg-blue-600/20 rounded-full blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="relative max-w-6xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-20 items-center"
      >
        {/* LEFT — IMAGE / VISUAL */}
        <motion.div variants={fadeUp} className="relative mx-auto lg:mx-0">
          <div className="relative w-[280px] sm:w-[320px] h-[380px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/mary-side.png"
              alt="Contact Ezike Chisom Mary"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="mt-6 text-center lg:text-left text-slate-600 dark:text-slate-400 max-w-sm">
            Let’s work together. I respond promptly and handle all data with
            accuracy and confidentiality.
          </p>
        </motion.div>

        {/* RIGHT — CONTACT FORM */}
        <motion.div
          variants={fadeUp}
          className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-10 sm:p-12 shadow-lg"
        >
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-6">
            Get in Touch
          </h2>

          <p className="text-slate-600 dark:text-slate-300 mb-10">
            Have a project, task, or role in mind? Send a message and I’ll get
            back to you shortly.
          </p>

          <form
            className="space-y-6"
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);
              setError('');
              setSuccess('');

              const form = e.currentTarget;
              const formData = new FormData(form);

              const data = {
                name: formData.get('name') as string,
                email: formData.get('email') as string,
                message: formData.get('message') as string,
              };

              try {
                const res = await fetch('/api/contact', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data),
                });

                if (!res.ok) throw new Error('Failed');

                setSuccess('Message sent successfully!');
                form.reset();
              } catch {
                setError('Something went wrong. Please try again.');
              } finally {
                setLoading(false);
              }
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full px-5 py-4 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              disabled={loading}
              className="w-full px-6 py-4 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {success && <p className="text-green-600 mt-4">{success}</p>}
            {error && <p className="text-red-600 mt-4">{error}</p>}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
