import * as React from 'react'
import type { HeadFC } from 'gatsby'
import Page from '../layouts/Page'

import Landing from '../components/Landing'

const IndexPage = (): React.FC => {
  return (
    <Page>
      <Landing />
    </Page>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
