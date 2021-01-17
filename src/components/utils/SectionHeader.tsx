import React from 'react'
import { FadeWrapper } from './FadeWrapper'

export interface ISectionHeaderProps {
  headlineTitle?: string,
  headlineText?: string,
}

export const SectionHeader = ({
  headlineTitle,
  headlineText,
}: ISectionHeaderProps) => (
  <FadeWrapper shouldFade>
    <div className="lg:text-center mb-10">
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
        {headlineTitle}
      </p>
      <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
      {headlineText}
      </p>
    </div>
  </FadeWrapper>
)
