import classNames from 'classnames'
import React, { PropsWithChildren, ReactElement } from 'react'

const Checkbox: React.FC<
  PropsWithChildren & React.InputHTMLAttributes<HTMLInputElement>
> = ({ children, className, disabled, ...props }): ReactElement => (
  <label className={classNames('checkbox', disabled && 'disabled', className)}>
    <input type="checkbox" {...props} />
    <span className="ml-2">{children}</span>
  </label>
)

export default Checkbox
