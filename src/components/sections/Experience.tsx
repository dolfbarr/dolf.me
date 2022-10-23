import React from 'react'
import { AtSign, Cpu, Download } from 'react-feather'
import { CONTACTS, WORK } from '../../content/data'
import Card from '../Card'
import Heading from '../Heading'
import Section from '../Section'

const Experience = ({ children }): React.FC => {
  return (
    <Section>
      <Heading
        id="experience"
        aside={
          <a
            href={CONTACTS.resume.url}
            target="_blank"
            title={CONTACTS.resume.title}
            rel="noreferrer noopener"
            className="hidden md:inline-block"
          >
            <Download />
          </a>
        }
      >
        Work Experience ⸱ {WORK.totalYearsOfExperience}+ years
      </Heading>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {WORK.experience.map((workplace) => (
          <Card
            key={workplace.company + workplace.title}
            title={
              <>
                <span>{workplace.title}</span>
                <span className="inline-flex items-center gap-1">
                  <AtSign size={18} strokeWidth={3} />
                  <span className="sr-only"> at </span>
                  <span className="whitespace-nowrap">{workplace.company}</span>
                </span>

                <span>{workplace.contract ? ' ⸱ contract' : ''}</span>
              </>
            }
            startDate={workplace.startDate}
            endDate={workplace.endDate}
            description={workplace.description}
          >
            {workplace.skills?.length > 0 && (
              <p className="font-extralight italic leading-tight dark:text-gray-300">
                <span className="inline-flex items-baseline gap-1">
                  <span>
                    <Cpu size="12" />
                    <span className="sr-only">Tech: </span>
                  </span>
                </span>{' '}
                {workplace.skills?.join(', ')}
              </p>
            )}
          </Card>
        ))}
      </ul>
    </Section>
  )
}

export default Experience
