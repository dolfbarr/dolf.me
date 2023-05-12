import classNames from 'classnames'
import React, { PropsWithChildren, ReactElement, ReactNode } from 'react'

interface SkillsListProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {
  skills: Array<string | undefined>
  prepend?: ReactNode
  append?: ReactNode
}

const SkillsList: React.FC<SkillsListProps> = ({
  className,
  skills,
  prepend,
  append,
  ...props
}): ReactElement => {
  return (
    <p
      className={classNames(
        'flex flex-wrap justify-start gap-1 pb-2 font-extralight leading-tight dark:text-gray-300',
        className,
      )}>
      {prepend}
      {skills.map((skill, index) => (
        <span
          data-testid="skill"
          key={skill}
          className={classNames('rounded-full py-0')}>
          {skill}
          {index !== skills.length - 1 && (
            <span className="inline-flex pl-1">·</span>
          )}
        </span>
      ))}
      {append}
    </p>
  )
}
export default SkillsList
