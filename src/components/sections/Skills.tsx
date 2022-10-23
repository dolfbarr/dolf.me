import React from 'react'
import { WORK } from '../../content/data'
import Heading from '../Heading'
import Section from '../Section'

const Skills = ({ children }): React.FC => {
  const allSkills = [
    ...new Set([
      ...WORK.experience
        .filter((workplace) => workplace.skills)
        .map((workplace) => workplace.skills)
        .flat(),
    ]),
  ]

  console.log(allSkills)

  return (
    <Section>
      <Heading id="skills">Skills</Heading>
      <p className="flex flex-wrap justify-start gap-2 dark:text-gray-300">
        {allSkills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-solid border-gray-400 py-0 px-2 font-extralight dark:border-gray-500"
          >
            {skill}
          </span>
        ))}
      </p>
    </Section>
  )
}

export default Skills
