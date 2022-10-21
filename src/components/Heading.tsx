import React from 'react'

interface HeadingProps {
  id: string
}

const Heading = ({ children, id }: HeadingProps): React.FC => (
  <h2 className="group pb-4 text-5xl text-primary" id={id}>
    <a href={`#${id}`} className="-ml-8 no-underline group-hover:underline">
      <span className="inline-block w-8 opacity-0 group-hover:opacity-100">
        #
      </span>
      <span>{children}</span>
    </a>
  </h2>
)

export default Heading
