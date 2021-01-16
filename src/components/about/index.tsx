import React from 'react'
import { sections } from '../../utils/index'
import { FadeWrapper } from '../utils'

export const About = () => (
  <section id={sections.about.section}>
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl w-full sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
            <FadeWrapper shouldFade>
              <div className="grid grid-cols-2">
                <div className="sm:text-center lg:text-left flex items-center">
                  <h1 className="text-4xl tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline text-white">📖 About Me</span>
                  </h1>
                </div>
                <div className="text-2xl text-gray-300 text-right">
                  I enjoy being immersed in situations that pull me out of my comfort zone, and operate best at
                  the junction of technical and personal. My ultimate goal is to help lead, manage and mentor a
                  team of engineers, whom I can learn from as much as I can teach. I am always looking to grow
                  technically, and being a part of an organization that puts the personal and professional growth
                  of its people at the forefront is key
                  <br/>
                  <br/>
                  I have close to 5 years of professional industry experience building software, the majority of
                  which has been with a frontend focus. I am currently a Software Engineer at
                  <a className="text-secondary-normal" target="_blank" href="https://teachable.com"> Teachable</a>.
                  At night, I help lead and mentor students enrolled in the University Program of
                  <a className="text-secondary-normal" target="_blank" href="https://www.fullstackacademy.com/"> Fullstack Academy</a>
                  <br/>
                  <br/>
                  I hold a Bachelor of Science degree from the <span className="text-secondary-normal">University of Wisconsin - Madison's College of
                  Engineering</span>
                </div>
              </div>
            </FadeWrapper>
          </main>
        </div>
      </div>
    </div>
  </section>
)
