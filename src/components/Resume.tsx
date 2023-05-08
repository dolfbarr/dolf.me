import React, { PropsWithChildren, ReactElement } from 'react'
import Experience from './sections/Experience'
import Skills from './sections/Skills'

interface ResumeProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {
  showLinkToResume?: boolean
}

const Resume: React.FC<ResumeProps> = ({
  children,
  showLinkToResume,
}): ReactElement => (
  <>
    {children}
    <Experience showLinkToResume={showLinkToResume} />
    <Skills />
  </>
)

export default Resume
