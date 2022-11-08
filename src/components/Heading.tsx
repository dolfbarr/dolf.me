import React, { PropsWithChildren } from 'react'
import { Hash } from 'react-feather'
import classNames from 'classnames'

interface HeadingProps extends PropsWithChildren {
  id: string
  aside?: React.ReactNode
  headingTag?: React.ReactNode
  iconSize?: number
  iconSpace?: string
}

const Heading = ({
  children,
  id,
  aside,
  headingTag,
  iconSize = 24,
}: HeadingProps): React.FC => {
  const HeadingTag =
    headingTag ??
    (({ children, ...props }: PropsWithChildren<HTMLDivElement>) => (
      <h2 {...props}>{children}</h2>
    ))

  return (
    <HeadingTag className="flex justify-between align-baseline" id={id}>
      <a
        href={`#${id}`}
        className="group -ml-8 inline-flex no-underline visited:text-primary hover:underline visited:dark:text-primary-dark"
      >
        <span className="instapaper_ignore not-sr-only hidden  w-8 flex-col items-center justify-center opacity-0 group-hover:opacity-100 md:inline-flex">
          <Hash strokeWidth={3} size={iconSize} />
        </span>
        <span>{children}</span>
      </a>
      <aside className="flex flex-col justify-center align-baseline">
        {aside}
      </aside>
    </HeadingTag>
  )
}

export default Heading
