import React, { ReactElement } from 'react'
import { HeadFC } from 'gatsby'
import Page from '../layouts/Page'

import Landing from '../components/sections/Landing'
import Resume from '../components/Resume'
import { SEO } from '../components/SEO'
const IndexPage: React.FC = (): ReactElement => {
  return (
    <Page>
      <Landing />
      <Resume />
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
          crossOrigin="true"
        />
        <script
          src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"
          integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg="
          crossOrigin="true"></script>
      </>
    )}
  </SEO>
)
