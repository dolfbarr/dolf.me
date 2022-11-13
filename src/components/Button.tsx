import classNames from 'classnames'
import React, { PropsWithChildren, ReactElement } from 'react'

const Button: React.FC<
  PropsWithChildren & React.HTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }): ReactElement => (
  <button
    className={classNames(
      'rounded border border-primary bg-transparent px-2 text-primary transition-colors hover:border-transparent hover:bg-primary hover:text-white active:brightness-90 dark:border-primary-dark dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:hover:text-white',
      className,
    )}
    {...props}>
    {children}
  </button>
)

export default Button