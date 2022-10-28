import React from 'react'
import Section from '../Section'
import { LOCATION, PERSONAL_DATA, WORK } from '../../content/data'
import { AtSign, MapPin } from 'react-feather'
import Iconed from '../Iconed'

const Landing = (): React.FC => (
  <Section className="group/section">
    <h1 className="pb-6">
      Hi! I’m{' '}
      <span className="whitespace-nowrap">{PERSONAL_DATA.fullName}</span>{' '}
      <span className="inline-flex group-hover/section:animate-bounce">👋</span>
    </h1>
    <p className="hyphens pb-6 text-xl leading-loose">
      a <em>{PERSONAL_DATA.occupation}</em> at{' '}
      <a
        href={WORK.link}
        title={WORK.name}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Iconed icon={<AtSign />} size={14}>
          {WORK.name}
        </Iconed>
      </a>{' '}
      with {WORK.totalYearsOfExperience}+&nbsp;years of experience based in{' '}
      <a
        href={LOCATION.link}
        title={LOCATION.flag + ' ' + LOCATION.title}
        target="_blank"
        rel="noopener noreferrer"
        className="group/location relative inline-flex w-44"
      >
        <Iconed icon={<MapPin />} size={14}>
          <span className="absolute left-5 inline-flex self-center opacity-100 transition-opacity group-hover/location:opacity-0">
            {LOCATION.title}.
          </span>
          <span className="absolute left-5 self-center opacity-0 transition-opacity group-hover/location:opacity-100">
            {LOCATION.original}.
          </span>
        </Iconed>
      </a>{' '}
      I&apos;m <em>passionate about web</em> and, especially, frontend
      development. I like to be on the edge of{' '}
      <em>solving business problems</em> & appeal for users and believe that{' '}
      <em>soft skills</em> and <em>clean code</em> matter.
    </p>
  </Section>
)

export default Landing
