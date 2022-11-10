import { Link } from 'gatsby'
import React, { PropsWithChildren } from 'react'
import { Hash } from 'react-feather'

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
    <HeadingTag
      className="flex justify-between align-baseline"
      id={id}
      data-testid={id}>
      <Link
        href={`#${id}`}
        data-goatcounter-click={id + '-event'}
        className="group inline-flex no-underline visited:text-primary hover:underline visited:dark:text-primary-dark md:-ml-8">
        <span className="instapaper_ignore not-sr-only hidden  flex-col items-center justify-center opacity-0 group-hover:opacity-100 md:inline-flex md:w-8">
          <Hash strokeWidth={3} size={iconSize} />
        </span>
        <span>{children}</span>
      </Link>
      <aside className="flex flex-col justify-center align-baseline">
        {aside}
      </aside>
    </HeadingTag>
  )
}

export default Heading
