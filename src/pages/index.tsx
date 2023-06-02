import React, { ReactElement } from 'react'
import Page from '../layouts/Page'

import Landing from '../components/sections/Landing'
import Resume from '../components/Resume'
import SEO from '../components/SEO'
import { injectIntl, IntlShape } from 'gatsby-plugin-intl'

const IndexPage: React.FC = ({ intl }: { intl: IntlShape }): ReactElement => {
  return (
    <Page>
      <SEO lang={intl.locale}>
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
      <Landing />
      <Resume showLinkToResume />
    </Page>
  )
}

export default injectIntl(IndexPage)
