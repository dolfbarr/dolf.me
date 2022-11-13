import React, { PropsWithChildren } from 'react'
import Section from '../Section'
import {
  CONTACTS,
  LOCATION,
  PERSONAL_DATA,
  SOCIALS,
  WORK,
} from '../../content/data'
import { AtSign, Clock, MapPin } from 'react-feather'
import Iconed from '../Iconed'
import Heading from '../Heading'
import { Link } from 'gatsby'

const Landing = (): React.FC => (
  <Section className="group/section relative">
    <span className="align-center inline-flex flex-wrap">
      <Heading
        headingTag={({
          children,
          ...props
        }: PropsWithChildren<HTMLDivElement>) => <h1 {...props}>{children}</h1>}
        className="group/heading"
        id="greeting"
        iconSize={32}
        aside={
          <div className="absolute right-0 top-5 flex justify-between gap-4 align-baseline">
            <Link
              href={CONTACTS.telegram.url}
              target="_blank"
              title={CONTACTS.telegram.title + ': ' + SOCIALS.telegram}
              rel="noreferrer noopener"
              className="hidden md:inline-block"
              data-goatcounter-click="telegram-top"
              data-goatcounter-title={CONTACTS.telegram.title}>
              {CONTACTS.telegram.icon}
              <span className="sr-only">
                {CONTACTS.telegram.title}: {SOCIALS.telegram}
              </span>
            </Link>
            <Link
              href={`mailto:${CONTACTS.email.url}`}
              target="_blank"
              title={CONTACTS.email.title + ': ' + SOCIALS.email}
              rel="noreferrer noopener"
              className="hidden md:inline-block"
              data-goatcounter-click="email-top"
              data-goatcounter-title={CONTACTS.email.title}>
              {CONTACTS.email.icon}
              <span className="sr-only">
                {CONTACTS.email.title}: {SOCIALS.email}
              </span>
            </Link>
          </div>
        }>
        Hi! <br className="sm:hidden" />
        I’m {PERSONAL_DATA.fullName}{' '}
      </Heading>
      <span className="ml-4 hidden text-6xl group-hover/section:animate-bounce sm:inline-flex md:items-baseline">
        👋
      </span>
    </span>
    <p className="hyphens text-xl leading-loose">
      a <em>{PERSONAL_DATA.occupation}</em> at{' '}
      <Link
        href={WORK.link}
        title={WORK.name}
        target="_blank"
        rel="noopener noreferrer">
        <Iconed icon={<AtSign />} size={14}>
          {WORK.name}
        </Iconed>
      </Link>{' '}
      with {WORK.totalYearsOfExperience}+&nbsp;years of experience based in{' '}
      <Link
        href={LOCATION.link}
        title={LOCATION.flag + ' ' + LOCATION.title}
        target="_blank"
        rel="noopener noreferrer"
        className="group/location">
        <Iconed icon={<MapPin />} size={14} className="relative inline-flex">
          <span className="inline-flex tracking-[.008em] opacity-100 transition-opacity group-hover/location:hidden">
            {LOCATION.title}
          </span>
          <span className="hidden group-hover/location:inline-flex">
            {LOCATION.original}
          </span>
        </Iconed>
      </Link>
      {'; '}
      <Iconed
        icon={<Clock strokeWidth={3} />}
        size={14}
        className=" font-mono text-lg text-gray-500 dark:text-gray-400">
        <span>
          {new Date().toLocaleTimeString(undefined, {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: LOCATION.timeZone,
          })}
        </span>
      </Iconed>
      {'. '}
      <span>
        I&apos;m <em>passionate about web</em> and, especially, frontend
        development. I like to be on the edge of{' '}
        <em>solving business problems</em> & appeal for users and believe that{' '}
        <em>soft skills</em> and <em>clean code</em> matter.
      </span>
    </p>
    <p className="flex flex-wrap justify-center gap-2 pt-8 text-center text-xl leading-loose">
      {PERSONAL_DATA.tagLines.map((tag, index) => (
        <>
          <span className="inline-flex">{tag}</span>
          {index !== PERSONAL_DATA.tagLines.length - 1 && (
            <span className="inline-flex">·</span>
          )}
        </>
      ))}
    </p>
  </Section>
)

export default Landing
