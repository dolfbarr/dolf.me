import React, { ReactElement, PropsWithChildren } from 'react'
import classNames from 'classnames'

interface IconedProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {
  size?: number
  icon: ReactElement
}

const Iconed: React.FC<IconedProps> = ({
  children,
  className,
  icon,
  size = 13,
}): ReactElement => (
  <span className={classNames('inline-flex items-baseline gap-1', className)}>
    {React.cloneElement(icon, { size })}
    {children}
  </span>
)

export default Iconed
