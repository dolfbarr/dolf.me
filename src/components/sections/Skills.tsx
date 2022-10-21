import React from 'react'
import { WORK } from '../../content/data'
import Heading from '../Heading'
import Section from '../Section'

const Skills = ({ children }): React.FC => {
  const allSkills = [
    ...new Set([
      ...WORK.experience.map((workplace) => workplace.skills).flat(),
    ]),
  ]

  return (
    <Section>
      <Heading id="skills">Skills</Heading>
      <p>
        {allSkills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </p>
    </Section>
  )
}

export default Skills
