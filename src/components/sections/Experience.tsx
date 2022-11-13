import { Link } from 'gatsby'
import React, { ReactElement } from 'react'
import { AtSign, Cpu, Download } from 'react-feather'
import { CONTACTS, WORK } from '../../content/data'
import Card from '../Card'
import Heading from '../Heading'
import Iconed from '../Iconed'
import Section from '../Section'

const Experience: React.FC = (): ReactElement => {
  return (
    <Section>
      <Heading
        id="experience"
        aside={
          <Link
            to={CONTACTS.resume.url}
            target="_blank"
            title={CONTACTS.resume.title}
            rel="noreferrer noopener"
            className="hidden md:inline-block"
            data-goatcounter-click="resume-download"
            data-goatcounter-title={CONTACTS.resume.title}>
            <Download />
            <span className="sr-only">{CONTACTS.resume.title}</span>
          </Link>
        }>
        Work Experience · {WORK.totalYearsOfExperience}+ years
      </Heading>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {WORK.experience.map((workplace) => (
          <Card
            key={workplace.company + workplace.title}
            title={
              <>
                <span>{workplace.title}</span>
                <Iconed icon={<AtSign strokeWidth={3} />} size={18}>
                  <span className="sr-only"> at </span>
                  <span className="whitespace-nowrap">{workplace.company}</span>
                </Iconed>

                <span>{workplace?.contract ? ' · contract' : ''}</span>
              </>
            }
            startDate={workplace.startDate}
            endDate={workplace.endDate}
            description={workplace.description}>
            {workplace?.skills && workplace?.skills?.length > 0 && (
              <p className="pb-2 font-extralight italic leading-tight dark:text-gray-300">
                <span className="inline-flex items-baseline gap-1">
                  <Iconed icon={<Cpu className="rotate-12" />}>
                    <span className="sr-only">Tech: </span>
                  </Iconed>
                </span>{' '}
                {workplace?.skills?.join(', ')}
              </p>
            )}
          </Card>
        ))}
      </ul>
    </Section>
  )
}

export default Experience
