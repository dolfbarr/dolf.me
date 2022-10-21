import React from 'react'
import { EDUCATION } from '../../content/data'
import Card from '../Card'
import Heading from '../Heading'
import Section from '../Section'

const Education = ({ children }): React.FC => (
  <Section>
    <Heading id="education">Education</Heading>
    <Card
      title={EDUCATION.university}
      description={EDUCATION.description}
      startDate={EDUCATION.startDate}
      endDate={EDUCATION.endDate}
    />
  </Section>
)

export default Education
