import React from 'react'
import { WORK } from '../../content/data'
import Card from '../Card'
import Heading from '../Heading'
import Section from '../Section'

const Experience = ({ children }): React.FC => (
  <Section>
    <Heading id="experience">
      Work Experience ⸱ {WORK.totalYearsOfExperience}+ years
    </Heading>
    <ul className="grid grid-cols-2 gap-4">
      {WORK.experience.map((workplace) => (
        <Card
          key={workplace.company + workplace.title}
          title={workplace.title}
          startDate={workplace.startDate}
          endDate={workplace.endDate}
          description={workplace.description}
        />
      ))}
    </ul>
  </Section>
)

export default Experience
