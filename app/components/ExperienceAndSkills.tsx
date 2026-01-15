'use client';

import { motion, type Variants } from 'framer-motion';

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
}

const experience: ExperienceItem[] = [
  {
    role: 'Data Entry Specialist',
    company: 'Only God Is Wise Nigeria Limited',
    duration: '2024 – Present',
    description:
      'Manage export and shipment records using structured spreadsheets. Ensure accuracy, organization, and reliable reporting.',
  },
  {
    role: 'Secretary (NYSC)',
    company: 'Only God Is Wise Nigeria Limited',
    duration: '2023',
    description:
      'Handled data entry, document organization, and record keeping to improve office workflow.',
  },
];

const skills = [
  'HubSpot CRM Management',
  'Excel & Google Sheets',
  'Accurate Data Entry',
  'Data Cleaning & Deduplication',
  'Web Research',
  'PDF & Handwritten Conversion',
  'Spreadsheet Organization',
  'Confidential Data Handling',
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ExperienceAndSkills() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      {/* Decorative glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-28">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid lg:grid-cols-2 gap-20"
        >
          {/* EXPERIENCE TIMELINE */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-12">
              Experience
            </h2>

            <div className="relative pl-6 space-y-12 border-l border-white/20">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <span className="absolute -left-[9px] top-2 w-4 h-4 bg-indigo-500 rounded-full ring-4 ring-indigo-500/20" />

                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                    <h3 className="text-xl font-semibold text-white">
                      {item.role}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      {item.company} · {item.duration}
                    </p>
                    <p className="mt-4 text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SKILLS GRID */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-12">
              Core Skills
            </h2>

            <motion.div
              variants={container}
              className="grid sm:grid-cols-2 gap-6"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-6 py-5 text-slate-200 hover:bg-white/10 transition"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
