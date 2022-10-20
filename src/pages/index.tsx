import * as React from 'react'
import type { HeadFC } from 'gatsby'
import Page from '../layouts/Page'

import Landing from '../components/sections/Landing'
import Experience from '../components/sections/Experience'
import Education from '../components/sections/Education'
import Skills from '../components/sections/Skills'
import Contact from '../components/sections/Contact'

const IndexPage = (): React.FC => {
  return (
    <Page>
      <Landing />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </Page>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
