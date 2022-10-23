import React from 'react'
import Section from '../Section'
import { LOCATION, PERSONAL_DATA, WORK } from '../../content/data'
import { MapPin } from 'react-feather'

const Landing = (): React.FC => (
  <Section>
    <h1 className="pb-6 text-primary">Hi! I’m {PERSONAL_DATA.fullName} 👋</h1>
    <p className="text-xl leading-9">
      a {PERSONAL_DATA.occupation} @{' '}
      <a
        href={WORK.link}
        title={WORK.name}
        target="_blank"
        rel="noopener noreferrer"
      >
        {WORK.name}
      </a>{' '}
      with {WORK.totalYearsOfExperience}+&nbsp;years of experience based in{' '}
      <a
        href={LOCATION.link}
        title={LOCATION.title}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-baseline gap-1"
      >
        <MapPin size={16} /> {LOCATION.title}
      </a>
      .
    </p>
    <p className="pb-6 text-xl leading-9">
      I&apos;m passionate about web and, especially, frontend development. I
      like to be on the edge of solving business problems & appeal for users and
      believe that soft skills and clean code matter.
    </p>
  </Section>
)

export default Landing
