import React from 'react'
import Fade from 'react-reveal/Fade'

export interface IFadeWrapperProps {
  shouldFade: boolean,
  children?:  React.ReactNode,
}

export const FadeWrapper = ({ shouldFade, children } : IFadeWrapperProps) => {
  return shouldFade ?
    <Fade left duration={1000} delay={500} distance="30px">
      {children}
    </Fade> : <>{children}</>
}
