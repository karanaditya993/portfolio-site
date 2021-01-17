import { SectionHeader } from '../utils'
import React from 'react'
import { FadeWrapper } from '../utils'
import AboutCard from './AboutCard'

import { StaticQuery, graphql } from 'gatsby'

export const AboutSection = () => (
  <StaticQuery
    query={graphql`
      query AboutQuery {
        allYaml {
          edges {
            node {
              about {
                sectionId,
                headlineText,
                headlineTitle,
                cards {
                  companyText
                  description
                  descriptionLink
                  id,
                  title
                  SVGPath
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { sectionId, headlineText, headlineTitle, cards } = data.allYaml.edges[0].node.about
      return (
        <section id={sectionId}>
          <div className="pt-12 mb-10 bg-primary-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader
                headlineTitle={headlineTitle}
                headlineText={headlineText}
              />

              <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  {cards.map(({
                    companyText,
                    delay,
                    description,
                    descriptionLink,
                    id,
                    SVGPath,
                    title,
                  }) => (
                    <FadeWrapper key={id} shouldFade delay={delay}>
                      <AboutCard
                        companyText={companyText}
                        description={description}
                        descriptionLink={descriptionLink}
                        title={title}
                        SVGPath={SVGPath}
                      />
                    </FadeWrapper>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>
      )
    }}
  />
)
