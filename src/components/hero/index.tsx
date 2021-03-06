import React, { useState } from 'react'
import { Slanted } from '../styled'
import { MobileMenu, Nav } from '../nav'
import { FadeWrapper } from '../utils'

import { graphql, StaticQuery } from 'gatsby'

export const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (<StaticQuery 
    query={graphql`
    query HeroQuery {
      allYaml {
        edges {
          node {
            home {
              sectionId,
              name,
              subText,
              text,
            }
          }
        }
      }
    }`}
    render={(data) => {
      const { sectionId, name, subText, text } = data.allYaml.edges[0].node.home[0]
      return (
        <section id={sectionId}>
          <div className="relative overflow-hidden divide-y divide-yellow-500">
            <Slanted>
              <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                  <svg className="hidden lg:block absolute right-0 inset-y-0 h-screen w-48 text-black transform translate-x-1/3" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <polygon points="50,0 100,0 50,100 0,100" />
                  </svg>
                  <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                    <Nav setMenuOpen={setMenuOpen} />
                  </div>
    
                  {menuOpen && (
                    <MobileMenu setMenuOpen={setMenuOpen} />
                  )}
    
                  <FadeWrapper shouldFade={!menuOpen}>
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-60 lg:mt-64 lg:px-8 xl:mt-64">
                      <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                          <span className="block xl:inline text-white">{text}</span>
                          <span className="block text-secondary-normal xl:inline"> {name}</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                          {subText}
                        </p>
                      </div>
                    </main>
                  </FadeWrapper>
                </div>  
              </div>
              <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden md:block bg-hero-img bg-cover bg-top"></div>
            </Slanted>
          </div>
        </section>
      )
    }}
  />)
}
