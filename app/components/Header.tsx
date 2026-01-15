"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

/* -------------------------------------------------------------------------- */
/*                                Animations                                  */
/* -------------------------------------------------------------------------- */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const hoverScale: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                                   Header                                   */
/* -------------------------------------------------------------------------- */

export default function Header() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative overflow-hidden
                 bg-gradient-to-br from-slate-100 via-indigo-50/60 to-white
                 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950"
    >
      <div className="mx-auto max-w-6xl px-6 py-32">
        <div className="grid gap-14 md:grid-cols-2 items-center">

          {/* ------------------------------------------------------------------ */}
          {/*                             Text Content                           */}
          {/* ------------------------------------------------------------------ */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
              Ezike Chisom Mary
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300">
              Data Entry Specialist · HubSpot CRM · Excel & Google Sheets
            </p>

            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
              Agbara, Ogun State, Nigeria
            </p>

            {/* CTA Buttons */}
            <div className="pt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/2348153753579"
                className="inline-flex items-center justify-center
                           rounded-xl bg-indigo-600 px-8 py-4
                           text-white font-medium shadow-md
                           hover:bg-indigo-700 transition
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Hire Me
              </a>

              <a
                href="/assets/Ezike-Chisom-Mary-CV.pdf"
                download
                className="inline-flex items-center justify-center
                           rounded-xl border border-slate-300 dark:border-slate-600
                           px-8 py-4 text-slate-700 dark:text-slate-300 font-medium
                           hover:bg-slate-100 dark:hover:bg-slate-800 transition
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* ------------------------------------------------------------------ */}
          {/*                              Profile Image                         */}
          {/* ------------------------------------------------------------------ */}
          <motion.div
            initial="rest"
            animate="rest"
            whileHover="hover"
            className="flex justify-center md:justify-end"
          >
            <motion.div
              variants={hoverScale}
              className="relative h-56 w-56 sm:h-64 sm:w-64
                         overflow-hidden rounded-full
                         border-4 border-indigo-200 dark:border-indigo-500
                         shadow-2xl"
            >
              <Image
                src="/assets/mary-potrrait.jpg"
                alt="Ezike Chisom Mary"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/*                          Decorative Background                          */}
      {/* ---------------------------------------------------------------------- */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl dark:bg-indigo-600/20" />
      <div className="pointer-events-none absolute -top-28 -right-28 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-600/20" />
    </motion.section>
  );
}
