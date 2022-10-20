import * as React from 'react'
import type { HeadFC } from 'gatsby'

const IndexPage = (): React.FC => {
  return (
    <main>
      dolf.me
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
