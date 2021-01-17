import React, { createContext, useEffect, useState } from 'react'
import { sections } from '../../utils'

export const NavContext = createContext([])

export const NavConsumer = NavContext.Consumer

export default ({ children }) => {
  const [nav, setNavData] = useState([]);
  
  useEffect(() => {
    setNavData([ ...sections ]);
  }, []);

  return (
    <NavContext.Provider
      value={[...nav]}
    >
      {children}
    </NavContext.Provider>
  )
}
