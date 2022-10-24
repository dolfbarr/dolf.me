import React from 'react'
import { EDUCATION } from '../../content/data'
import Card from '../Card'
import Heading from '../Heading'
import Section from '../Section'

const Education = ({ children }): React.FC => (
  <Section>
    <Heading id="education">Education</Heading>
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Card
        title={EDUCATION.university}
        description={EDUCATION.description}
        startDate={EDUCATION.startDate}
        endDate={EDUCATION.endDate}
      />
    </ul>
  </Section>
)

export default Education
