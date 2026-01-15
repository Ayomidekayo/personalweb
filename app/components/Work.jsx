import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-ovo">Selected Projects</h2>

      <p className="text-center max-w-2xl text-gray-400 mx-auto mt-5 mb-12 font-ovo">
        A curated selection of projects showcasing my skills in full-stack web development.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {workData.map((project, index) => (
<div
  key={index}
  className="rounded-xl overflow-hidden group
             bg-white dark:bg-neutral-900
             border border-gray-200 dark:border-neutral-800
             shadow-md
             transition-all duration-500 ease-out
             hover:-translate-y-2 hover:shadow-xl
             dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
>

  {/* Image wrapper */}
  <div className="relative w-full h-56 
                  bg-gray-100 dark:bg-neutral-800
                  flex items-center justify-center">
    <Image
      src={project.bgImage}
      alt={project.title}
      fill
      priority
      className="object-contain
                 group-hover:scale-105
                 transition-transform duration-500"
    />
  </div>

  {/* Content */}
  <div className="p-5">
    <h3 className="text-lg font-semibold
                   text-gray-900 dark:text-gray-100">
      {project.title}
    </h3>

    <p className="text-sm mt-1
                  text-gray-600 dark:text-gray-400">
      {project.description}
    </p>

    {/* Tech stack */}
    <div className="flex flex-wrap gap-2 mt-3">
      {project.stack.map((tech, i) => (
        <span
          key={i}
          className="text-xs px-2 py-1 rounded-full
                     bg-gray-200 text-gray-700
                     dark:bg-neutral-700 dark:text-gray-200"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* Actions */}
    <div className="flex gap-3 mt-4">
      <Link
        href={project.liveLink}
        target="_blank"
        className="px-4 py-2 rounded-full text-sm font-medium
                   bg-lime-400 text-black
                   hover:bg-lime-300 transition"
      >
        Live
      </Link>

      <Link
        href={project.githubLink}
        target="_blank"
        className="px-4 py-2 rounded-full text-sm
                   border border-gray-300 text-gray-800
                   hover:bg-black hover:text-white
                   dark:border-neutral-600 dark:text-gray-200
                   dark:hover:bg-white dark:hover:text-black
                   transition"
      >
        Code
      </Link>
    </div>
  </div>
</div>


        ))}
      </div>
    </div>
  )
}

export default Work
