import React, { PropsWithChildren, ReactElement } from 'react'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Skills from './sections/Skills'

const Resume: React.FC<
  PropsWithChildren & React.HTMLAttributes<HTMLDivElement>
> = ({ children }): ReactElement => (
  <>
    {children}
    <Experience />
    <Education />
    <Skills />
  </>
)

export default Resume
