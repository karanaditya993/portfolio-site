import React from 'react'
import { AboutSection, BackToTop, HeroSection, WorkSection, NotWorkSection, Footer } from '../components'
import { Helmet } from 'react-helmet'
import GatsbyConfig from '../../gatsby-config'

export default () => (
  <>
    <Helmet>
      <link rel="icon" href="/images/KaranLogo.jpeg" />
      <title>{GatsbyConfig.siteMetadata.title}</title>
    </Helmet>
    <main>
      <div className="font-serif bg-primary-dark h-full">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <NotWorkSection />
      </div>
      <BackToTop />
    </main>
    <Footer />
  </>
)
