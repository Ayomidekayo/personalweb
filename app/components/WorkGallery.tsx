'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { JSX } from 'react';

interface WorkItem {
  src: string;
  title: string;
  description: string;
}

const works: WorkItem[] = [
  {
    src: '/assets/dataone.png',
    title: 'CRM Data Entry',
    description: 'Accurate customer data entry and reporting using HubSpot CRM.',
  },
  {
    src: '/assets/datafour.png',
    title: 'Spreadsheet Data Cleaning',
    description: 'Cleaning, organizing, and deduplicating large Excel datasets.',
  },
  {
    src: '/assets/datatwo.png',
    title: 'Shipment & Export Records',
    description: 'Maintaining structured shipment and logistics data.',
  },
  {
    src: '/assets/datathree.png',
    title: 'Document Organization',
    description: 'Organizing and digitizing office and trade documents.',
  },
  {
    src: '/assets/datafive.png',
    title: 'Online Research & Reporting',
    description: 'Web research and structured data compilation.',
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function WorkGallery(): JSX.Element {
  return (
    <section className="relative bg-gradient-to-br from-slate-100 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 overflow-hidden">

      {/* Soft decorative accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-300/20 dark:bg-blue-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-28">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white text-center mb-16">
          Selected Work
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {works.map((work, index) => (
            <motion.article
              key={index}
              variants={card}
              whileHover={{ y: -6 }}
              className="group relative bg-white/80 dark:bg-slate-800/70
                         backdrop-blur-xl border border-slate-200/60
                         dark:border-white/10 rounded-2xl
                         overflow-hidden transition shadow-sm hover:shadow-lg"
            >
              {/* Accent bar */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition" />

              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={work.src}
                  alt={work.title}
                  fill
                  className="object-cover scale-105
                             group-hover:scale-110
                             transition-transform duration-700"
                />

                {/* Soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* Content */}
              <div className="relative p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {work.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {work.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
