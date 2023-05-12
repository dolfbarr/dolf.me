import React, { ReactElement } from 'react'
import { AtSign, Cpu, Download } from 'react-feather'
import { CONTACTS, WORK } from '../../content/data'
import Card from '../Card'
import Heading from '../Heading'
import Iconed from '../Iconed'
import Section from '../Section'
import SkillsList from '../SkillsList'

const Experience: React.FC = (): ReactElement => {
  const IconedCompanyName = ({
    companyName,
  }: {
    companyName: string
  }): ReactElement => (
    <Iconed icon={<AtSign strokeWidth={3} />} size={16}>
      <span className="sr-only"> at </span>
      <span className="whitespace-nowrap">{companyName}</span>
    </Iconed>
  )

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
            data-goatcounter-click="resume-download"
            data-goatcounter-title={CONTACTS.resume.title}>
            <Download />
            <span className="sr-only">{CONTACTS.resume.title}</span>
          </a>
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
                {workplace?.url ? (
                  <a
                    className="whitespace-nowrap"
                    href={workplace.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    data-goatcounter-click={`workplace - ${workplace.company}`}
                    data-goatcounter-title={workplace.company}
                    title={workplace.company}>
                    <IconedCompanyName companyName={workplace.company} />
                  </a>
                ) : (
                  <IconedCompanyName companyName={workplace.company} />
                )}

                <span>{workplace?.contract ? ' · contract' : ''}</span>
              </>
            }
            startDate={workplace.startDate}
            endDate={workplace.endDate}
            description={workplace.description}>
            {workplace?.skills && workplace?.skills?.length > 0 && (
              <SkillsList
                prepend={
                  <>
                    <Iconed
                      icon={<Cpu className="rotate-12" />}
                      className="self-center">
                      <span className="sr-only">Tech: </span>
                    </Iconed>
                  </>
                }
                skills={workplace.skills}
                className="leading-none"
              />
            )}
          </Card>
        ))}
      </ul>
    </Section>
  )
}

export default Experience
