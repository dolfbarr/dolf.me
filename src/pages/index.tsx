import React, { ReactElement } from 'react'
import type { HeadFC } from 'gatsby'
import Page from '../layouts/Page'

import Landing from '../components/sections/Landing'
import Experience from '../components/sections/Experience'
import Education from '../components/sections/Education'
import Skills from '../components/sections/Skills'
import { SEO } from '../components/SEO'

const IndexPage: React.FC = (): ReactElement => {
  return (
    <Page>
      <Landing />
      <Experience />
      <Education />
      <Skills />
    </Page>
  )
}

export default IndexPage

export const Head: HeadFC = (): ReactElement => (
  <SEO>
    {typeof window !== 'undefined' && (
      <>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
          integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
          crossOrigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"
          integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg="
          crossOrigin=""></script>
      </>
    )}
  </SEO>
)
