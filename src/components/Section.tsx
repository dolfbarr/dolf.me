import classNames from 'classnames'
import React, { PropsWithChildren, ReactElement } from 'react'

const Section: React.FC<
  PropsWithChildren & React.HTMLAttributes<HTMLDivElement>
> = ({ children, className, ...props }): ReactElement => (
  <section className={classNames('pb-8', className)} {...props}>
    {children}
  </section>
)

export default Section
