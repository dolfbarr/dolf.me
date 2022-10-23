import React from 'react'
import { Cpu, Download } from 'react-feather'
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
          >
            <Download />
          </a>
        }
      >
        Work Experience ⸱ {WORK.totalYearsOfExperience}+ years
      </Heading>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {WORK.experience.map((workplace) => (
          <Card
            key={workplace.company + workplace.title}
            title={
              <>
                <span>{workplace.title} @ </span>
                <span className="whitespace-nowrap">{workplace.company}</span>
                <span>{workplace.contract ? ' ⸱ contract' : ''}</span>
              </>
            }
            startDate={workplace.startDate}
            endDate={workplace.endDate}
            description={workplace.description}
          >
            {workplace.skills?.length > 0 && (
              <div className="font-extralight italic">
                <span className="inline-flex items-baseline gap-1">
                  <Cpu size="12" /> Tech:
                </span>{' '}
                {workplace.skills?.join(', ')}
              </div>
            )}
          </Card>
        ))}
      </ul>
    </Section>
  )
}

export default Experience
