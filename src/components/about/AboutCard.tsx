import React from 'react'

export interface IAboutCardProps {
  title?: string,
  description?: string,
  descriptionLink?: string,
  companyText?: string,
}

export default ({ title, description, descriptionLink, companyText } : IAboutCardProps) => (
  <div className="flex">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-light text-white">
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      </div>
    </div>
    <div className="ml-4">
      <dt className="text-lg leading-6 font-medium text-secondary-normal">
        {title}
      </dt>
      <dd className="mt-2 text-base text-gray-300">
        {description}
        <a className="text-tertiary-normal" target="_blank" href={descriptionLink}> {companyText}</a>.
      </dd>
    </div>
  </div>
)
