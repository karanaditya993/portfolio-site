import React from 'react'
import { AboutSection, HeroSection, WorkSection, ProjectsSection, Footer } from '../components'

export default () => (
  <>
    <main>
      <div className="font-serif bg-primary-dark h-full">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ProjectsSection />
      </div>
    </main>
    <Footer />
  </>
)
