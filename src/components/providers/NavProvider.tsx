import React, { createContext, useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import { sections, ISectionData } from '../../utils'

export interface INavData {
  id: string,
  name: ISectionData['name'],
  linkTo: ISectionData['section'],
}

const navData : INavData[] = [{
    id: nanoid(),
    name: sections.about.name,
    linkTo: sections.about.section,
  },
  {
    id: nanoid(),
    name: sections.work.name,
    linkTo: sections.work.section,
  },
  {
    id: nanoid(),
    name: sections.projects.name,
    linkTo: sections.projects.section,
  },
  {
    id: nanoid(),
    name: sections.resume.name,
    linkTo: sections.resume.section
  }
]

export const NavContext = createContext([])

export const NavConsumer = NavContext.Consumer

export default ({ children }) => {
  const [nav, setNavData] = useState([]);
  
  useEffect(() => {
    setNavData([ ...navData ]);
  }, []);

  return (
    <NavContext.Provider
      value={[...nav]}
    >
      {children}
    </NavContext.Provider>
  )
}
