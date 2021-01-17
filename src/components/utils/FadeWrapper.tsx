import React from 'react'
import Fade from 'react-reveal/Fade'

export interface IFadeWrapperProps {
  shouldFade: boolean,
  delay?: number,
  children?:  React.ReactNode,
}

export const FadeWrapper = ({ shouldFade, children, delay, ...rest } : IFadeWrapperProps) => {
  return shouldFade ?
    <Fade left duration={1000} distance="30px" delay={delay || 500}  {...rest}>
      {children}
    </Fade> : <>{children}</>
}
