import classNames from 'classnames'
import React, { ReactElement } from 'react'
import { WORK } from '../../content/data'
import Heading from '../Heading'
import Section from '../Section'

const Skills: React.FC = (): ReactElement => {
  const allSkills = [
    ...new Set([
      ...WORK.experience
        .filter((workplace) => workplace.skills)
        .map((workplace) => workplace.skills)
        .flat(),
    ]),
  ]

  return (
    <Section>
      <Heading id="skills">Skills</Heading>
      <p className="flex flex-wrap justify-start gap-1 pb-2 font-extralight leading-tight dark:text-gray-300">
        {allSkills.map((skill, index) => (
          <span key={skill}>
            <span
              data-testid="skill"
              className={classNames('rounded-full py-0 pr-2')}>
              {skill}
            </span>
            {index !== allSkills.length - 1 && (
              <span className="inline-flex pr-1">·</span>
            )}
          </span>
        ))}
      </p>
    </Section>
  )
}

export default Skills
