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
      className="group inline-flex no-underline visited:text-primary hover:underline visited:dark:text-primary-dark md:-ml-8"
    >
      <span className="instapaper_ignore not-sr-only  hidden w-8 flex-col items-center justify-center opacity-0 group-hover:opacity-100 md:inline-flex">
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
