import classNames from 'classnames'
import React from 'react'

const Section = ({ children, className }): React.FC => (
  <section className={classNames('pb-8', className)}>{children}</section>
)

export default Section
