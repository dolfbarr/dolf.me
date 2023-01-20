import React, { PropsWithChildren, ReactElement } from 'react'
import Experience from './sections/Experience'
import Skills from './sections/Skills'

const Resume: React.FC<
  PropsWithChildren & React.HTMLAttributes<HTMLDivElement>
> = ({ children }): ReactElement => (
  <>
    {children}
    <Experience />
    <Skills />
  </>
)

export default Resume
