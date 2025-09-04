import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import { FadeWrapper, SectionHeader } from '../utils'

export const NotWorkSection = () => (
    <StaticQuery
      query={graphql`
      query NotWorkQuery {
        allYaml {
          edges {
            node {
              notWork {
                headlineTitle
                description
                delay
              }
            }
          }
        }
      }`}
      render={data => {
        const { headlineTitle, description, delay } = data.allYaml.edges[0].node.work
        return (
          <section id="not-work">
            <div className="bg-primary-dark text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                  headlineTitle={headlineTitle}
                />
                <div className="lg:grid">
                  <FadeWrapper shouldFade delay={delay}>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      {description}
                    </div>
                  </FadeWrapper>
                </div>
              </div>
            </div>
          </section>
        )
      }}
    />
  )