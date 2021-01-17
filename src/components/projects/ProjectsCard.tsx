import React from 'react'
import { FadeWrapper } from '../utils'

export interface IProjectsCardProps {
  coverImg?: string,
  description?: string,
  github?: string,
  link?: string,
  logo?: string,
  name?: string,
}

export const ProjectsCard = ({
  coverImg,
  description,
  github,
  link,
  logo,
  name,
} : IProjectsCardProps) => (
  <FadeWrapper shouldFade>
    <div className="flex justify-center align-center">
      <div className="card w-8 min-w-sm border border-gray-100 bg-purple-100 transition-shadow shadow-xl hover:shadow-xl min-w-max rounded-lg">
        <div className="w-full card__media"><img src={coverImg} className="h-40"/></div>
        <div className="card__media--aside "></div>
        <div className="flex items-center p-4">
          <div className="relative flex flex-col items-center w-full">
            <div
              className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-600 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
              <img className="h-24 md relative" src={logo} alt=""/>
              <div className="absolute"></div>
            </div>
            <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
              <span className="text-md whitespace-nowrap text-gray-800 font-semibold">{name}</span>
              <p className="text-sm text-gray-500">
                {description}
              </p>
              <div className="py-2 flex space-x-2">
                <a href={github}
                  className="flex justify-center max-h-max whitespace-nowrap focus:outline-none focus:ring focus:border-blue-300 rounded max-w-max text-gray-100 bg-blue-500 px-4 py-1 flex items-center hover:shadow-lg"
                  target="_blank"
                >
                  <span className="mr-2">
                    <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </span>CODE <span className="ml-2"></span>
                </a>
              </div>
              <div className="py-2 flex space-x-2">
                <a href={link}
                  className="flex justify-center max-h-max whitespace-nowrap focus:outline-none focus:ring focus:border-blue-300 rounded max-w-max text-gray-100 bg-secondary-normal px-4 py-1 flex items-center hover:shadow-lg"
                  target="_blank"
                >
                  <span className="mr-2">
                    <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>LINK <span className="ml-2"></span>
                </a>
              </div>
              {/* stats */}
              {/* <div
                className="py-4 flex justify-center items-center w-full divide-x divide-gray-400 divide-solid">
                <span className="text-center px-2"><span className="font-bold text-gray-700">56</span><span className="text-gray-600"> followers</span></span><span className="text-center px-2"><span className="font-bold text-gray-700">112</span><span className="text-gray-600"> following</span></span><span className="text-center px-2"><span className="font-bold text-gray-700">27</span><span className="text-gray-600"> repos</span></span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </FadeWrapper>
)
