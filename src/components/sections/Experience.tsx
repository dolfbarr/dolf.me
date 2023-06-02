import { Link } from 'gatsby'
import { IntlShape, injectIntl } from 'gatsby-plugin-intl'
import React, { ReactElement } from 'react'
import { AtSign, Cpu, Download, ExternalLink } from 'react-feather'
import { CONTACTS, WORK } from '../../content/data'
import { t } from '../../utils/translate'
import Card from '../Card'
import Heading from '../Heading'
import Iconed from '../Iconed'
import Section from '../Section'
import SkillsList from '../SkillsList'

interface ExperienceProps {
  showLinkToResume?: boolean
  intl: IntlShape
}

const Experience: React.FC<ExperienceProps> = ({
  showLinkToResume,
  intl,
}): ReactElement => {
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

  const resumeTitle = t(intl, 'contacts.resume.title')

  return (
    <Section>
      <Heading
        id="experience"
        aside={
          <div className="flex gap-1">
            {showLinkToResume && (
              <Link to="/resume" title={t(intl, 'experience.link')}>
                <span className="sr-only">{resumeTitle}</span>
                <ExternalLink />
              </Link>
            )}
            <a
              href={CONTACTS.resume.url}
              target="_blank"
              title={resumeTitle}
              rel="noreferrer noopener"
              className="hidden md:inline-block"
              data-goatcounter-click="resume-download"
              data-goatcounter-title={CONTACTS.resume.title}>
              <Download />
              <span className="sr-only">{resumeTitle}</span>
            </a>
          </div>
        }>
        {t(intl, 'experience.heading')} · {WORK.totalYearsOfExperience}+{' '}
        {t(intl, 'experience.years')}{' '}
      </Heading>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {WORK.experience.map((workplace, index) => (
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

                <span>
                  {workplace?.contract
                    ? ` · ${t(intl, 'experience.contract')}`
                    : ''}
                </span>
              </>
            }
            startDate={t(intl, `work.${index}.startDate`, workplace.startDate)}
            present={t(intl, 'experience.present', 'Present')}
            endDate={t(intl, `work.${index}.endDate`, workplace.endDate)}
            description={t(
              intl,
              `work.${index}.description`,
              workplace.description,
            )}>
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

export default injectIntl(Experience)
