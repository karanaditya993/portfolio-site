import React from 'react'

export interface IBaseProps {
  setMenuOpen: (boolean) => void,
}

export const Nav = ({ setMenuOpen } : IBaseProps) => (
  <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
      <div className="flex items-center justify-between w-full md:w-auto">
        {/* Insert Karan Logo Here */}
        <div>
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-white.svg" alt="" />
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
      <a href="#" className="font-medium text-gray-500 hover:text-blue-400">About</a>

      <a href="#" className="font-medium text-gray-500 hover:text-blue-400">Work</a>

      <a href="#" className="font-medium text-gray-500 hover:text-blue-400">Projects</a>

      <a href="#" className="font-medium text-gray-500 hover:text-blue-400">Resume</a>
    </div>
  </nav>
)

export const MobileMenu = ({ setMenuOpen } : IBaseProps) => (
  <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    <div className="rounded-lg bg-primary-normal shadow-md bg-black ring-1 ring-black ring-opacity-5 overflow-hidden">
      <div className="px-2 pt-4 flex items-center justify-between">
        <div>
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-white.svg" alt="" />
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
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-secondary-normal hover:text-blue-400 hover:bg-gray-50" role="menuitem">About</a>

          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-secondary-normal hover:text-blue-400 hover:bg-gray-50" role="menuitem">Work</a>
          
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-secondary-normal hover:text-blue-400 hover:bg-gray-50" role="menuitem">Projects</a>

          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-secondary-normal hover:text-blue-400 hover:bg-gray-50" role="menuitem">Resume</a>
        </div>
      </div>
    </div>
  </div>
)
