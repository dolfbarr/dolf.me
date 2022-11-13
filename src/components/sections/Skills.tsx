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
      <p className="flex flex-wrap justify-start gap-2 dark:text-gray-300">
        {allSkills.map((skill) => (
          <span
            key={skill}
            data-testid="skill"
            className="rounded-md border border-solid border-gray-400 py-0 px-2 font-extralight dark:border-gray-500">
            {skill}
          </span>
        ))}
      </p>
    </Section>
  )
}

export default Skills
