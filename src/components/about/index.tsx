import React from 'react'
import { FadeWrapper } from '../utils'
import AboutCard from './AboutCard'

export const AboutSection = () => (
  <section id="about">
    <div className="py-12 bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeWrapper shouldFade>
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              About Me
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            I am a Software Engineer based in New York City 🗽 <br/>
            I enjoy being immersed in situations that pull me out of my comfort zone, and operate best at
            the junction of technical and personal.
            </p>
          </div>
        </FadeWrapper>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <FadeWrapper shouldFade delay={500}>
              <AboutCard
                title="Developer"
                description="I have half a decade of professional industry experience building software, the majority of
                which has been with a frontend focus. I am currently a Software Engineer at"
                descriptionLink="https://teachable.com"
                companyText="Teachable"
              />
            </FadeWrapper>

            <FadeWrapper shouldFade delay={1000}>
              <AboutCard
                title="Engineer"
                description="I hold a Bachelor of Science degree from the"
                descriptionLink=""
                companyText="University of Wisconsin - Madison's College of Engineering"
              />
            </FadeWrapper>

            <FadeWrapper shouldFade delay={1250}>
              <AboutCard
                title="Instructor"
                description="At night, I help lead and mentor students enrolled in the University Program of"
                descriptionLink="https://www.fullstackacademy.com/"
                companyText="Fullstack Academy"
              />
            </FadeWrapper>
          </dl>
        </div>
      </div>
    </div>
  </section>
)
