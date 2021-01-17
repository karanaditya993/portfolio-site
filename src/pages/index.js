import React from 'react'
import { AboutSection, BackToTop, HeroSection, WorkSection, ProjectsSection, Footer } from '../components'
import { Helmet } from 'react-helmet'
import GatsbyConfig from '../../gatsby-config'

export default () => (
  <>
    <Helmet>
      <title>{GatsbyConfig.siteMetadata.title}</title>
    </Helmet>
    <main>
      <div className="font-serif bg-primary-dark h-full">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ProjectsSection />
      </div>
      <BackToTop />
    </main>
    <Footer />
  </>
)
