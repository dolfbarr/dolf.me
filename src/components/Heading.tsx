import React from 'react'

interface HeadingProps {
  id: string
}

const Heading = ({ children, id }: HeadingProps): React.FC => (
  <h2 className='text-5xl text-sky-600' id={id}>
    <a href={`#${id}`}>
      {children}
    </a>
  </h2>
)

export default Heading
