import React from 'react'

interface HeadingProps {
  id: string
}

const Heading = ({ children, id }: HeadingProps): React.FC => (
  <h2 className="group text-5xl text-sky-600" id={id}>
    <a href={`#${id}`} className="-ml-8 hover:underline">
      <span className="inline-block w-8 opacity-0 transition-opacity group-hover:opacity-100">
        #
      </span>
      <span>{children}</span>
    </a>
  </h2>
)

export default Heading
