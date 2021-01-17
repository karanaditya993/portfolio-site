import React from 'react'

const DEFAULT_SVG = "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"

export interface IAboutCardProps {
  title?: string,
  description?: string,
  descriptionLink?: string,
  companyText?: string,
  SVGPath?: string,
}

export default ({
  title,
  description,
  descriptionLink,
  companyText,
  SVGPath,
} : IAboutCardProps) => (
  <div className="flex">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-light text-white">
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d={SVGPath || DEFAULT_SVG} clipRule="evenodd" />
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
