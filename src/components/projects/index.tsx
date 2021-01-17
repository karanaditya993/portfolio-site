import React from 'react'
import { SectionHeader } from '../utils'
import { ProjectsCard } from './ProjectsCard'

export const ProjectsSection = () => (
  <section id="projects">
    <div className="pb-12 bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          headlineTitle="Projects"
        />
        <ProjectsCard />
      </div>
    </div>
</section>
)
