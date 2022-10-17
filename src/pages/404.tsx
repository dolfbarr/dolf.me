import * as React from "react"
import { HeadFC } from "gatsby"

const NotFoundPage = () => {
  return (
    <main>
      404
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
