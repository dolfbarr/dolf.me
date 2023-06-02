import React, { PropsWithChildren, ReactElement } from 'react'
import { WORK } from '../../content/data'
import Heading from '../Heading'
import Section from '../Section'
import SkillsList from '../SkillsList'
import { injectIntl, IntlShape } from 'gatsby-plugin-intl'
import { t } from '../../utils/translate'

export interface SkillsProps extends PropsWithChildren {
  intl: IntlShape
}

const Skills: React.FC<SkillsProps> = ({ intl }): ReactElement => {
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
      <Heading id="skills">{t(intl, 'skills.heading', 'Skills')}</Heading>
      <SkillsList skills={allSkills} />
    </Section>
  )
}

export default injectIntl(Skills)
