import React from 'react'
import { WORK } from '../../content/data'
import Heading from '../Heading'
import Section from '../Section'

const Experience = ({ children }): React.FC => (
  <Section>
    <Heading id="experience">Work Experience ⸱ {WORK.totalYearsOfExperience}+ years</Heading>
  </Section>
)

export default Experience
