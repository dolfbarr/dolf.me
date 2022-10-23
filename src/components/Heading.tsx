import React from 'react'
import { Hash } from 'react-feather'

interface HeadingProps {
  id: string
}

const Heading = ({ children, id }: HeadingProps): React.FC => (
  <h2 className="group text-primary" id={id}>
    <a
      href={`#${id}`}
      className="-ml-8 no-underline visited:text-primary group-hover:underline"
    >
      <span className="instapaper_ignore not-sr-only inline-block w-8 opacity-0 group-hover:opacity-100">
        <Hash />
      </span>
      <span>{children}</span>
    </a>
  </h2>
)

export default Heading
