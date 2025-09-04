import { FadeWrapper, SectionHeader } from '../utils'
import { Experience } from './Experience'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export const NotWorkSection = () => (
    <StaticQuery
      query={graphql`
      query NotWorkQuery {
        allYaml {
          edges {
            node {
              notWork {
                headlineTitle
                experience {
                    position
                    company
                    description 
                    delay
                    id
                }
              }
            }
          }
        }
      }`}
      render={data => {
        const { headlineTitle, experience } = data.allYaml.edges[0].node.work
        return (
          <section id="work">
            <div className="bg-primary-dark text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                  headlineTitle={headlineTitle}
                />
                <div className="lg:grid">
                  {experience.map(({
                    position,
                    company,
                    description,
                    delay,
                    id,
                  }) => (
                    <FadeWrapper key={id} shouldFade delay={delay}>
                      <Experience
                          position={position}
                          company={company}
                          location={""}
                          timeline={""}
                          description={description}
                        />
                    </FadeWrapper>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )
      }}
    />
  )