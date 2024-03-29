import React, { PropsWithChildren, ReactElement, useState } from 'react'
import Section from '../Section'
import {
  CONTACTS,
  LOCATION,
  PERSONAL_DATA,
  SOCIALS,
  WORK,
} from '../../content/data'
import { AtSign, MapPin } from 'react-feather'
import Iconed from '../Iconed'
import Heading from '../Heading'
import Clock from '../Clock'
import Button from '../Button'
import classNames from 'classnames'
import Map from '../Map'
import StartOfContentAnchor from '../StartOfContentAnchor'
import { t } from '../../utils/translate'
import { IntlShape, injectIntl } from 'gatsby-plugin-intl'
import ReactHtmlParser from 'react-html-parser'

export const HeadingH1 = ({
  children,
  ...props
}: PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>): ReactElement => (
  <h1 {...props}>{children}</h1>
)

export interface LandingProps {
  intl: IntlShape
}

const Landing: React.FC<LandingProps> = ({ intl }): ReactElement => {
  const [isMapOpen, setIsMapOpen] = useState(false)

  return (
    <Section className="relative">
      <span className="align-center inline-flex flex-wrap">
        <StartOfContentAnchor />
        <Heading
          headingTag={HeadingH1}
          id="greeting"
          iconSize={32}
          aside={
            <div className="absolute right-0 top-5 flex justify-between gap-4 align-baseline">
              <a
                href={`mailto:${CONTACTS.email.url}`}
                target="_blank"
                title={
                  t(intl, 'contacts.email.title', CONTACTS.email.title) +
                  ': ' +
                  SOCIALS.email
                }
                rel="noreferrer noopener"
                className="hidden md:inline-block"
                data-goatcounter-click="email-top"
                data-goatcounter-title={CONTACTS.email.title}>
                {CONTACTS.email.icon}
              </a>
            </div>
          }>
          <span>{t(intl, 'landing.hello')}</span>
          <br className="sm:hidden" />
          <span> {t(intl, 'landing.i')} </span>
          {t(intl, 'personal.fullName', PERSONAL_DATA.fullName)}{' '}
        </Heading>
        <span className="duration-2000 ml-4 hidden origin-bottom-right text-6xl transition-all ease-in-out hover:animate-wave sm:inline-flex">
          👋
        </span>
      </span>
      <p className="hyphens  text-xl leading-loose">
        {intl.locale === 'en' && 'a '}
        <em>{PERSONAL_DATA.occupation}</em> {t(intl, 'landing.at', 'at')}{' '}
        <a
          href={WORK.experience[0].url}
          title={WORK.experience[0].company}
          target="_blank"
          rel="noopener noreferrer">
          <Iconed icon={<AtSign strokeWidth={3} />}>
            <span>{WORK.experience[0].company}</span>
          </Iconed>
        </a>{' '}
        &{' '}
        <a
          href={WORK.experience[1].url}
          title={WORK.experience[1].company}
          target="_blank"
          rel="noopener noreferrer">
          <Iconed icon={<AtSign strokeWidth={3} />}>
            <span>{WORK.experience[1].company}</span>
          </Iconed>
        </a>{' '}
        {t(intl, 'landing.with')} {WORK.totalYearsOfExperience}+&nbsp;
        {t(intl, 'landing.years')}
        {t(intl, 'landing.located')}{' '}
        <Button
          className="group/location text-base"
          title={LOCATION.flag + ' ' + LOCATION.title}
          onClick={() => setIsMapOpen(!isMapOpen)}>
          <Iconed icon={<MapPin />} className="relative inline-flex">
            <span className="inline-flex tracking-[.008em] opacity-100 transition-opacity group-hover/location:hidden">
              {t(intl, 'location.title', LOCATION.title)}
            </span>
            <span className="hidden group-hover/location:inline-flex">
              {LOCATION.original}
            </span>
          </Iconed>
        </Button>{' '}
        <Clock />
        {'. '}
        <span>{ReactHtmlParser(t(intl, 'landing.description'))}</span>
      </p>
      <div
        className={classNames(
          isMapOpen
            ? 'mt-8 mb-8 max-h-96 opacity-100 '
            : '-t-96 hidden max-h-0 opacity-0',
          'map-wrapper h-96 rounded-lg drop-shadow-lg transition-all duration-200 ease-in',
        )}>
        <Map className="h-96 rounded-lg" />
      </div>
      <p className="mt-6 flex flex-wrap justify-center gap-2 text-center text-xl leading-loose">
        {PERSONAL_DATA.tagLines.map((tagLine, index) => (
          <span
            key={tagLine + String(index)}
            className="flex flex-wrap justify-center gap-2">
            <span className="inline-flex" data-testid="tagLine">
              {t(intl, `tagLines.${index}`, tagLine)}
            </span>
            {index !== PERSONAL_DATA.tagLines.length - 1 && (
              <span className="inline-flex" data-testid="tagLine-separator">
                ·
              </span>
            )}
          </span>
        ))}
      </p>
    </Section>
  )
}

export default injectIntl(Landing)
