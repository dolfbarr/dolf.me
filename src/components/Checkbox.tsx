import classNames from 'classnames'
import React, { PropsWithChildren, ReactElement } from 'react'

const Checkbox: React.FC<
  PropsWithChildren & React.HTMLAttributes<HTMLInputElement>
> = ({ children, className, ...props }): ReactElement => (
  <label
    className={classNames(
      'checkbox',
      props.disabled && 'disabled',
      classNames,
    )}>
    <input type="checkbox" {...props} />
    <span className="ml-2">{children}</span>
  </label>
)

export default Checkbox
