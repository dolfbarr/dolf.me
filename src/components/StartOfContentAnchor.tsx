import classNames from 'classnames'
import React, { PropsWithChildren, ReactElement } from 'react'

const StartOfContentAnchor: React.FC<
  PropsWithChildren & React.HTMLAttributes<HTMLDivElement>
> = ({ children, className }): ReactElement => (
  <div
    id="start-of-content"
    className={classNames(
      'absolute m-0 inline-block h-[1px] w-[1px] overflow-hidden border-0 p-0 focus:h-auto focus:w-auto',
      className,
    )}>
    {children}
  </div>
)

export default StartOfContentAnchor
