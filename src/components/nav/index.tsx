import NavProvider, { NavConsumer } from '../providers/NavProvider'
import React from 'react'
import { Link } from 'react-scroll'

export interface IBaseProps {
  setMenuOpen: (boolean) => void,
}

export const Nav = ({ setMenuOpen } : IBaseProps) => (
  <NavProvider>
    <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
      <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div>
            <img className="h-8 w-auto" src="/images/KaranLogo.jpeg" alt="" />
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              className="bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              id="main-menu"
              aria-haspopup="true"
              onClick={() => { setMenuOpen(true) }}>
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
        <NavConsumer>
          {value => value.map(section =>
            !section.hidden && (
              section.external ?
              <a className="font-medium text-gray-500 hover:text-blue-400 cursor-pointer" key={section.id} href={section.linkTo} target="_blank">
                {`${section.name.charAt(0).toUpperCase()}${section.name.slice(1)}`}
              </a> :
              <Link key={section.id} to={section.name} smooth duration={1000}>
                <span className="font-medium text-gray-500 hover:text-blue-400 cursor-pointer">{
                  `${section.name.charAt(0).toUpperCase()}${section.name.slice(1)}`
                }</span>
              </Link>
            )
          )}
        </NavConsumer>
      </div>
    </nav>
  </NavProvider>
)


export const MobileMenu = ({ setMenuOpen } : IBaseProps) => (
  <NavProvider>
    <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div className="rounded-lg bg-primary-normal shadow-md bg-black ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div className="px-2 pt-4 flex items-center justify-between">
          <div>
            <img className="h-8 w-auto" src="/images/KaranLogo.jpeg" alt="" />
          </div>
          <div className="-mr-2">
            <button
              type="button"
              className="rounded-md p-2 inline-flex items-center justify-center text-primary-dark"
              onClick={() => { setMenuOpen(false) }}>
              <span className="sr-only">Close main menu</span>
              
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
          <div className="px-2 pt-2 pb-3 space-y-1" role="none">
            <NavConsumer>
              {value => value.map(section => !section.hidden && (
                section.external ?
                <a className="block px-3 py-2 rounded-md text-base font-medium text-secondary-normal hover:text-blue-400 hover:bg-gray-50 cursor-pointer" role="menuitem" key={section.id} href={section.linkTo} target="_blank">
                  {`${section.name.charAt(0).toUpperCase()}${section.name.slice(1)}`}
                </a> :
                <Link key={section.id} to={section.name} smooth duration={1000}>
                  <span className="block px-3 py-2 rounded-md text-base font-medium text-secondary-normal hover:text-blue-400 hover:bg-gray-50 cursor-pointer" role="menuitem">{
                    `${section.name.charAt(0).toUpperCase()}${section.name.slice(1)}`
                  }</span>
                </Link>))}
            </NavConsumer>
          </div>
        </div>
      </div>
    </div>
  </NavProvider>
)
