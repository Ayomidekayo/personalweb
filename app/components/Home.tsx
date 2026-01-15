'use client';

import Image from 'next/image';
import React, { JSX } from 'react';
import ContactForm from './Contact';

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

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

const experience: Experience[] = [
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

export default function Page(): JSX.Element {
  return (
    <main className="bg-slate-50 text-slate-800">

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          
          {/* TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Ezike Chisom Mary
            </h1>
            <p className="mt-4 text-lg text-blue-100">
              Data Entry Specialist · HubSpot CRM · Excel & Google Sheets
            </p>
            <p className="mt-2 text-sm text-blue-200">
              Agbara, Ogun State, Nigeria
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/profile.jpg"
                alt="Ezike Chisom Mary"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-6">About Me</h2>
        <div className="bg-white rounded-2xl shadow-md p-8 leading-relaxed">
          <p>
            I am a dependable and detail-oriented Data Entry Specialist who
            prioritizes accuracy, organization, and confidentiality. I specialize
            in data entry, record maintenance, and database cleanup using HubSpot
            CRM, Excel, and Google Sheets.
          </p>
          <p className="mt-4">
            With a background in Accountancy and real-world office experience,
            I understand how clean, structured data supports effective business
            operations. I deliver results employers can trust.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-semibold mb-10">Core Skills</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold mb-10">Professional Experience</h2>
        <div className="space-y-8">
          {experience.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 border-l-4 border-blue-600"
            >
              <h3 className="text-xl font-bold">{item.role}</h3>
              <p className="text-sm text-slate-500 mt-1">
                {item.company} · {item.duration}
              </p>
              <p className="mt-4">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

   <section className="bg-slate-100 dark:bg-slate-800 py-20">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-2xl font-semibold mb-10">Contact Me</h2>
    <ContactForm />
  </div>
</section>
      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 text-center py-6 text-sm">
        © {new Date().getFullYear()} Ezike Chisom Mary · All Rights Reserved
      </footer>

    </main>
  );
}
