import React from 'react'
import Section from '../Section'
import { LOCATION, PERSONAL_DATA, WORK } from '../../content/data'
import { AtSign, MapPin } from 'react-feather'

const Landing = (): React.FC => (
  <Section>
    <h1 className="pb-6">
      Hi! I’m{' '}
      <span className="whitespace-nowrap">{PERSONAL_DATA.fullName}</span> 👋
    </h1>
    <p className="hyphens pb-6 text-xl leading-9">
      a {PERSONAL_DATA.occupation} at{' '}
      <a
        href={WORK.link}
        title={WORK.name}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-baseline gap-1"
      >
        <AtSign size={14} /> {WORK.name}
      </a>{' '}
      with {WORK.totalYearsOfExperience}+&nbsp;years of experience based in{' '}
      <a
        href={LOCATION.link}
        title={LOCATION.title}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-baseline gap-1"
      >
        <MapPin size={14} /> {LOCATION.title}
      </a>
      . I&apos;m passionate about web and, especially, frontend development. I
      like to be on the edge of solving business problems & appeal for users and
      believe that soft skills and clean code matter.
    </p>
  </Section>
)

export default Landing
