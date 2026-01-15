
import Image from 'next/image'
import React from 'react'
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

const Skill = () => {
  return (
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
  )
}

export default Skill
