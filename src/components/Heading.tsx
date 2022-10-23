import React, { PropsWithChildren } from 'react'
import { Hash } from 'react-feather'

interface HeadingProps extends PropsWithChildren {
  id: string
  aside?: React.ReactNode
}

const Heading = ({ children, id, aside }: HeadingProps): React.FC => (
  <h2 className=" flex justify-between align-baseline" id={id}>
    <a
      href={`#${id}`}
      className="group -ml-8 inline-block no-underline visited:text-primary hover:underline visited:dark:text-primary-dark"
    >
      <span className="instapaper_ignore not-sr-only inline-block w-8 opacity-0 group-hover:opacity-100">
        <Hash />
      </span>
      <span>{children}</span>
    </a>
    <aside className="flex flex-col justify-center align-baseline">
      {aside}
    </aside>
  </h2>
)

export default Heading
