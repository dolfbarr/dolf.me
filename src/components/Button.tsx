import classNames from 'classnames'
import React, { PropsWithChildren, ReactElement } from 'react'

const Button: React.FC<
  PropsWithChildren & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }): ReactElement => (
  <button className={classNames('btn', className)} {...props}>
    {children}
  </button>
)

export default Button
