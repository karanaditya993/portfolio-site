import { FadeWrapper, SectionHeader } from '../utils'
import { Experience } from './Experience'
import React from 'react'

export const WorkSection = () => (
  <section id="work">
    <div className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          headlineTitle="Work Experience"
        />
        <div className="lg:grid">
          <FadeWrapper shouldFade delay={500}>
            <Experience
                position="Software Engineer II"
                company="Teachable"
                location="New York, NY"
                timeline="September 2020 - Present"
                description="Currently a part of the Internal Tools team at Teachable, helping ensure our teams are as productive as possible."
              />
          </FadeWrapper>
          <FadeWrapper shouldFade delay={500}>
            <Experience
                position="Web Development Instructor"
                company="Fullstack Academy"
                location="Remote"
                timeline="December 2020 - Present"
                description="Part-time Instructor at Fullstack Academy's University Program. Teaching a cohort of 30+ students full-stack Javascript."
              />
          </FadeWrapper>
          <FadeWrapper shouldFade delay={1000}>
            <Experience
              position="Software Engineer"
              company="Intent"
              location="New York, NY"
              timeline="June 2018 - September 2020"
              description="Built advertising placements served to millions of users worldwide on online
              travel agencies like Expedia, Priceline and Orbitz."
            />
          </FadeWrapper>
          <FadeWrapper shouldFade delay={1250}>
            <Experience
              position="Frontend Engineer"
              company="Terminus Software"
              location="San Francisco, CA"
              timeline="May 2016 - June 2018"
              description="Built full fledged analytics products used by B2B marketers at Fortune 500 companies across the globe. Part of
              a small engineering team at an early-stage startup."
            />
          </FadeWrapper>
        </div>
      </div>
    </div>
  </section>
)
