import React from 'react'
import { Link } from 'react-scroll'

export const BackToTop = () => (
  <Link to="home" smooth duration={1000}>
    <div className="flex fixed cursor-pointer items-center justify-center h-12 w-12 rounded-md bg-primary-light text-white right-0 bottom-2 mr-2">
      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </div>
  </Link>
)
