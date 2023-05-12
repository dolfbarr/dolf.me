import React, { ReactElement } from 'react'
import { WORK } from '../../content/data'
import Heading from '../Heading'
import Section from '../Section'
import SkillsList from '../SkillsList'

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
      <SkillsList skills={allSkills} />
    </Section>
  )
}

export default Skills
