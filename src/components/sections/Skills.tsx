import React, { ReactElement } from 'react'
import { WORK } from '../../content/data'
import Heading from '../Heading'
import Section from '../Section'
import SkillsList from '../SkillsList'
import { injectIntl } from 'gatsby-plugin-intl'

const Skills: React.FC = ({ intl }): ReactElement => {
  const allSkills = [
    ...new Set([
      ...WORK.experience
        .filter((workplace) => workplace.skills)
        .map((workplace) => workplace.skills)
        .flat(),
    ]),
  ]

  return (
    <Section data-testid="skills-section">
      <Heading id="skills">
        {intl.formatMessage({ id: 'skills.heading' })}
      </Heading>
      <SkillsList skills={allSkills} />
    </Section>
  )
}

export default injectIntl(Skills)
