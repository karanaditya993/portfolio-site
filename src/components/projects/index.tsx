import React from 'react'
import { SectionHeader } from '../utils'
import { ProjectsCard } from './ProjectsCard'

import { StaticQuery, graphql } from 'gatsby'

export const ProjectsSection = () => (
  <StaticQuery
    query={graphql`
      query ProjectsQuery {
        allYaml {
          edges {
            node {
              projects {
                cards {
                  coverImg
                  description
                  github
                  id
                  link
                  logo
                  name
                }
                headlineTitle
                sectionId
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { sectionId, headlineTitle, cards } = data.allYaml.edges[0].node.projects
      return (
        <section id={sectionId}>
          <div className="pb-12 bg-primary-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader
                headlineTitle={headlineTitle}
              />
              {cards.map(({id, ...rest}) => (
                <ProjectsCard key={id} {...rest}/>
              ))}
            </div>
          </div>
      </section>
      )
    }}
  />
)
