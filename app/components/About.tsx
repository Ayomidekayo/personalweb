'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import { JSX } from 'react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function About(): JSX.Element {
  return (
    <motion.section      
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="relative bg-gradient-to-br from-slate-100 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950"
   id='about' >
      {/* Decorative blur */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 sm:py-28">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-16 text-slate-900 dark:text-white">
          About Me
        </h2>

        <div className="grid lg:grid-cols-[360px_1fr] gap-16 lg:gap-24 items-center">

          {/* IMAGE COLUMN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.04 }}
            className="relative mx-auto lg:mx-0 w-[260px] sm:w-[300px] lg:w-[320px] h-[380px] sm:h-[460px] lg:h-[520px]"
          >
            {/* Accent layer */}
            <div
              className="absolute inset-0 translate-x-4 translate-y-4 bg-indigo-500/10"
              style={{
                clipPath:
                  'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)',
              }}
            />

            {/* Main Image */}
            <div
              className="relative w-full h-full overflow-hidden shadow-2xl"
              style={{
                clipPath:
                  'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)',
              }}
            >
              <Image
                src="/assets/mary-side.png"
                alt="Ezike Chisom Mary"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* TEXT CONTENT */}
          <div className="max-w-xl">
            <span className="inline-block mb-6 px-4 py-1.5 text-sm rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
              Data Entry Specialist
            </span>

            <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-200">
              I am a dependable and detail-oriented professional who values
              accuracy, structure, and confidentiality. I specialize in
              structured data entry, record maintenance, and database cleanup
              using HubSpot CRM, Excel, and Google Sheets.
            </p>

            <p className="mt-8 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              With a background in Accountancy and hands-on office experience,
              I understand how clean, well-organized data supports efficient
              business operations. I work carefully, meet deadlines, and
              deliver results employers can trust.
            </p>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
