import React from 'react'
import classNames from 'classnames'

interface IconedProps extends React.PropsWithChildren {
  size?: number
  icon: React.ReactNode
}

const Iconed = ({
  children,
  className,
  icon,
  size = 12,
}: IconedProps): React.FC => (
  <span className={classNames('inline-flex items-baseline gap-1', className)}>
    {React.cloneElement(icon, { size })}
    {children}
  </span>
)

export default Iconed
